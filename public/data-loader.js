// public/data-loader.js

const API_BASE = '/api';
const PLANS_API = `${API_BASE}/plans`;
const QUESTS_API = `${API_BASE}/quests`;
const TRENDS_API = `${API_BASE}/trends`;
const COMMENTS_API = `${API_BASE}/comments`;

// Ensure globals exist
window.questData = window.questData || {};
window.inspirationData = window.inspirationData || {};
window.crawledData = window.crawledData || {};
window.categoryFillData = window.categoryFillData || {};
window.allComments = window.allComments || [];
window.filteredComments = window.filteredComments || [];

async function loadAllData() {
    try {
        console.log("Fetching data from new endpoints...");
        const [plansRes, questsRes, trendsRes, commentsRes] = await Promise.all([
            fetch(PLANS_API).then(r => r.json()).catch(e => { console.error("Plans API error", e); return null; }),
            fetch(QUESTS_API).then(r => r.json()).catch(e => { console.error("Quests API error", e); return null; }),
            fetch(TRENDS_API).then(r => r.json()).catch(e => { console.error("Trends API error", e); return null; }),
            fetch(COMMENTS_API).then(r => r.json()).catch(e => { console.error("Comments API error", e); return null; })
        ]);

        // Merge plans into questData (Immutable Detailed Guides)
        if (plansRes) {
            Object.assign(window.questData, plansRes);
        }

        // Inspiration Island Data (Mutable)
        // If questsRes is null, default to empty
        window.inspirationData = questsRes || {};
        
        // Merge inspirationData into questData so they are accessible via ID for modals etc.
        if (questsRes) {
             Object.assign(window.questData, questsRes);
        }

        // Trends Data (Xiaohongshu Hot)
        if (trendsRes) {
            window.crawledData = trendsRes.crawled_data || {};
            window.categoryFillData = trendsRes.category_fill || {};
        }
        
        // Comments
        if (commentsRes) {
            window.allComments = commentsRes.comments || [];
            window.filteredComments = [...window.allComments];
        }

        return true;
        
    } catch (error) {
        console.error('Error loading data:', error);
        return false;
    }
}

async function addToInspiration(trendId) {
    console.log(`addToInspiration called for ${trendId}`);
    const data = window.crawledData[trendId];
    if (!data) {
        console.error(`Data not found in window.crawledData for ${trendId}`);
        // Fallback: Check questData if it was a fallback item
        if (window.questData[trendId]) {
             console.log("Found in questData, adding as inspiration...");
             // logic to add from questData if needed, but usually we add from crawledData
             // If the user clicked "Hot", but it's actually a questData item (fallback), 
             // we should probably allow adding it too?
             // But 'source' is 'xhs_hot'. 
             // Let's use questData if crawledData is missing
             const qData = window.questData[trendId];
             try {
                const response = await fetch(QUESTS_API, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        id: trendId,
                        ...qData,
                        source: 'xhs_hot_fallback'
                    })
                });
                if (response.ok) {
                    alert('已添加至灵感岛！(Added to Inspiration Island!)');
                    if (window.closeModal) window.closeModal();
                    await loadAllData(); 
                    if (window.renderInspirationGrid) window.renderInspirationGrid();
                    if (window.switchTab) {
                        const btn = document.querySelector('button[onclick*="inspiration"]');
                        if (btn) window.switchTab('inspiration', btn);
                        const hub = document.querySelector('.hub-section');
                        if (hub) hub.scrollIntoView({ behavior: 'smooth' });
                    }
                } else {
                    alert('添加失败 (Failed to add)');
                }
             } catch(e) { console.error(e); alert('添加出错'); }
             return;
        }
        alert('Data not found for adding.');
        return;
    }
    
    try {
        const response = await fetch(QUESTS_API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: trendId,
                ...data,
                source: 'xhs_hot',
                // Preserve category info if available
                category: data.category || '',
                days: data.days || ''
            })
        });
        
        if (response.ok) {
            alert('已添加至灵感岛！(Added to Inspiration Island!)');
            // Close modal if open
            if (window.closeModal) window.closeModal();
            
            // Refresh Data
            await loadAllData(); 
            
            // Refresh UI if functions exist
            if (window.renderInspirationGrid) window.renderInspirationGrid();
            
            // No longer switch to inspiration tab, as it is hidden.
            // Maybe notify user where it went?
            // For now, just stay on current view or hot tab.
        } else {
            alert('添加失败 (Failed to add)');
        }
    } catch (error) {
        console.error('Error adding to inspiration:', error);
        alert('添加出错 (Error adding)');
    }
}

async function removeFromInspiration(questId) {
    if (!confirm('确定要从灵感岛删除吗？(Are you sure to delete?)')) return;
    
    try {
        const response = await fetch(`${QUESTS_API}?id=${questId}`, {
            method: 'DELETE'
        });
        
        if (response.ok) {
            alert('已删除 (Deleted)');
            if (window.closeModal) window.closeModal();
            
            await loadAllData(); // Refresh
            
            // Remove the specific card from DOM if visible
            const card = document.querySelector(`.card[data-id="${questId}"]`);
            if (card) {
                card.remove();
                // We should re-init pagination to fix layout
                if (window.initPagination) window.initPagination();
            }
            
        } else {
            alert('删除失败 (Failed to delete)');
        }
    } catch (error) {
        console.error('Error deleting:', error);
        alert('删除出错 (Error deleting)');
    }
}
