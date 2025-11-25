# 修复部署错误

## 问题
GitHub Actions 报错：找不到依赖锁定文件（package-lock.json）

## 解决方案

### 步骤 1: 提交 package-lock.json 文件

在终端中运行以下命令：

```bash
# 添加 package-lock.json
git add package-lock.json

# 提交更改
git commit -m "添加 package-lock.json 文件以修复 GitHub Actions 构建"

# 推送到 GitHub
git push origin main
```

### 步骤 2: 重新触发部署

推送代码后，GitHub Actions 会自动运行。你也可以手动触发：

1. 在 GitHub 仓库中，点击 **Actions** 标签
2. 选择 **Deploy to GitHub Pages** 工作流
3. 点击 **Run workflow** → **Run workflow**

## 已修复的内容

✅ 已更新 `.github/workflows/deploy.yml`，现在即使没有 package-lock.json 也能工作（但建议提交它以确保依赖版本一致）

✅ `package-lock.json` 文件已生成，只需要提交即可

## 验证

部署成功后，访问：https://hrterry.github.io/BioFlow-demo/

