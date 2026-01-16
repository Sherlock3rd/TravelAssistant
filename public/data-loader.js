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
            window.filteredComments = commentsRes.comments || [];
        }

        return true;
        
    } catch (error) {
        console.error('Error loading data:', error);
        return false;
    }
}

async function addToInspiration(trendId) {
    const data = window.crawledData[trendId];
    if (!data) return;
    
    try {
        const response = await fetch(QUESTS_API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: trendId,
                ...data,
                source: 'xhs_hot'
            })
        });
        
        if (response.ok) {
            alert('已添加至灵感岛！(Added to Inspiration Island!)');
            // Close modal if open? We don't have access to closeModal here easily unless it's global.
            if (window.closeModal) window.closeModal();
            loadAllData(); // Refresh
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
            loadAllData(); // Refresh
        } else {
            alert('删除失败 (Failed to delete)');
        }
    } catch (error) {
        console.error('Error deleting:', error);
        alert('删除出错 (Error deleting)');
    }
}
