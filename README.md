# Travel Assistant (旅游助手)

## 📁 目录结构 (Directory Structure)

- **`public/`**: 前端代码 (Frontend Code)
  - `index.html`: 主页
  - `detail.html`: 详情页
  - `data.js`: 旅游攻略数据
- **`server/`**: 后端服务 (Backend Server)
  - `server.py`: Python HTTP 服务器
  - `travel_db.json`: 评论/点赞数据库
- **`scripts/`**: 工具脚本 (Utility Scripts)
  - `crawler.py`: 数据爬虫
  - `populate_data.py`: 数据填充脚本
  - `populate_real_data.py`: 真实数据填充脚本
- **`docs/`**: 文档 (Documentation)
  - `CommonMistakes.md`: 常见错误与开发日志
  - `TravelAssistantPersona.md`: 角色设定
  - `severdeploy.md`: 部署指南

## 🚀 启动项目 (How to Run)

1. **启动服务器**:
   ```bash
   cd server
   python server.py
   ```
   服务器将在 `http://localhost:8080` 启动。

2. **访问应用**:
   打开浏览器访问 `http://localhost:8080/index.html` (注意: 服务器配置已更新以支持新目录结构)。

## 🛠️ 开发说明 (Development)

- 修改前端代码请编辑 `public/` 下的文件。
- 修改后端逻辑请编辑 `server/server.py`。
- 添加新数据可使用 `scripts/` 下的脚本。
