# 启用 GitHub Pages - 详细步骤

## ⚠️ 重要：必须先手动启用 GitHub Pages

GitHub Actions 工作流报错 "Get Pages site failed" 是因为 GitHub Pages 尚未在仓库设置中启用。

## 解决步骤（按顺序执行）

### 步骤 1: 启用 GitHub Pages

1. **打开仓库设置**
   - 访问：https://github.com/hrterry/BioFlow-demo
   - 点击仓库顶部的 **Settings**（设置）标签

2. **找到 Pages 设置**
   - 在左侧菜单中，向下滚动找到 **Pages**（页面）
   - 点击进入 Pages 设置页面

3. **配置部署源**
   - 在 **Source**（源）部分，你会看到下拉菜单
   - **重要**：选择 **"GitHub Actions"** 作为部署源
   - 不要选择 "Deploy from a branch"

4. **保存设置**
   - 选择后，设置会自动保存
   - 页面会显示 "Your site is live at https://hrterry.github.io/BioFlow-demo/"

### 步骤 2: 检查 Actions 权限

1. **进入 Actions 设置**
   - 仍在 Settings 页面
   - 在左侧菜单中找到 **Actions** → **General**

2. **设置工作流权限**
   - 向下滚动到 **Workflow permissions**（工作流权限）部分
   - 选择：**"Read and write permissions"**（读写权限）
   - 勾选：**"Allow GitHub Actions to create and approve pull requests"**
   - 点击 **Save**（保存）

### 步骤 3: 重新运行工作流

启用 Pages 后，需要重新触发部署：

**方法 A: 手动触发（推荐）**
1. 在仓库中点击 **Actions** 标签
2. 在左侧选择 **"Deploy to GitHub Pages"** 工作流
3. 点击右侧的 **"Run workflow"** 按钮
4. 选择分支：`main`
5. 点击绿色的 **"Run workflow"** 按钮

**方法 B: 推送新提交**
```bash
# 创建一个空提交来触发工作流
git commit --allow-empty -m "触发 GitHub Pages 部署"
git push origin main
```

### 步骤 4: 验证部署

1. **查看 Actions 运行**
   - 在 **Actions** 标签页中，你会看到新的工作流运行
   - 等待所有步骤完成（通常需要 2-5 分钟）

2. **检查部署状态**
   - 如果成功，你会看到绿色的 ✓ 标记
   - 点击运行查看详细信息

3. **访问网站**
   - 部署成功后，访问：https://hrterry.github.io/BioFlow-demo/
   - 如果显示 404，等待几分钟让 DNS 更新

## 常见问题

### Q: 在 Settings → Pages 中看不到 "GitHub Actions" 选项？

**A:** 可能的原因：
- 仓库是私有的，需要升级到 GitHub Pro 或使用公开仓库
- 仓库名称包含特殊字符
- 需要刷新页面

### Q: 工作流仍然失败？

**A:** 检查以下几点：
1. 确认已选择 "GitHub Actions" 作为部署源
2. 确认 Actions 权限已设置为 "Read and write"
3. 查看 Actions 日志中的具体错误信息
4. 确保 `package-lock.json` 已提交到仓库

### Q: 页面显示 404？

**A:** 
1. 确认 base 路径正确（应该是 `/BioFlow-demo/`）
2. 等待 5-10 分钟让 GitHub 完成部署
3. 清除浏览器缓存后重试
4. 检查 GitHub Pages 设置中显示的 URL 是否正确

## 验证清单

完成以下所有步骤后，部署应该成功：

- [ ] 在 Settings → Pages 中选择了 "GitHub Actions" 作为源
- [ ] 在 Settings → Actions → General 中设置了 "Read and write permissions"
- [ ] `package-lock.json` 文件已提交到仓库
- [ ] `.github/workflows/deploy.yml` 文件已提交到仓库
- [ ] 重新运行了工作流或推送了新代码
- [ ] 工作流运行成功（所有步骤显示绿色 ✓）

## 需要帮助？

如果按照以上步骤操作后仍然遇到问题，请：
1. 截图 GitHub Pages 设置页面
2. 截图 Actions 工作流运行日志
3. 检查是否有任何错误信息

