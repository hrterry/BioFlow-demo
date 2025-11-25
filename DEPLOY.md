# GitHub Pages 部署指南

## 步骤 1: 提交并推送代码

首先，将所有更改提交并推送到 GitHub：

```bash
# 添加所有文件
git add .

# 提交更改
git commit -m "重构项目：移除 AI Studio 依赖，配置 GitHub Pages 部署"

# 推送到 GitHub
git push origin main
```

## 步骤 2: 启用 GitHub Pages

1. 打开 GitHub 仓库：https://github.com/hrterry/BioFlow-demo
2. 点击 **Settings**（设置）
3. 在左侧菜单中找到 **Pages**（页面）
4. 在 **Source**（源）部分：
   - 选择 **GitHub Actions** 作为部署源
   - 如果看不到 GitHub Actions 选项，先完成步骤 3

## 步骤 3: 检查 GitHub Actions 权限

1. 在仓库的 **Settings** 中
2. 找到 **Actions** → **General**
3. 确保 **Workflow permissions** 设置为：
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**

## 步骤 4: 触发部署

有两种方式触发部署：

### 方式 A: 自动部署（推荐）
- 推送代码到 `main` 分支后，GitHub Actions 会自动运行并部署

### 方式 B: 手动触发
1. 在 GitHub 仓库中，点击 **Actions** 标签
2. 选择 **Deploy to GitHub Pages** 工作流
3. 点击 **Run workflow** 按钮
4. 选择分支（通常是 `main`）
5. 点击 **Run workflow**

## 步骤 5: 查看部署状态

1. 在 **Actions** 标签页中查看工作流运行状态
2. 等待构建和部署完成（通常需要 1-3 分钟）
3. 部署成功后，访问：`https://hrterry.github.io/BioFlow-demo/`

## 故障排除

### 如果部署失败：

1. **检查 Actions 日志**：
   - 在 Actions 标签页中点击失败的运行
   - 查看错误信息

2. **常见问题**：
   - **权限问题**：确保在 Settings → Actions → General 中启用了正确的权限
   - **构建错误**：检查 `package.json` 中的依赖是否正确
   - **路径问题**：确认仓库名称是 `BioFlow-demo`，如果不是，需要修改 `.github/workflows/deploy.yml` 中的 `VITE_BASE_PATH`

3. **手动检查构建**：
   ```bash
   npm install
   npm run build
   ```
   如果本地构建失败，需要先修复问题

### 如果页面显示 404：

1. 确认 base 路径正确：应该是 `/BioFlow-demo/`
2. 检查 GitHub Pages 设置中是否选择了正确的源
3. 等待几分钟让 DNS 更新

## 更新网站

每次推送代码到 `main` 分支时，网站会自动更新。你也可以在 Actions 中手动触发部署。

