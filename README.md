# BioFlow: Biologically Valid Generative Flow

<div align="center">

**Biologically Valid Generative Flow for Histology-Conditioned Spatial Transcriptomics Prediction**

CVPR 2026 Submission #11008

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

## 项目简介

BioFlow 是一个用于组织学条件空间转录组学预测的生物有效生成流模型。该项目解决了现有生成模型（如扩散模型和流匹配模型）的一个关键生物学失败模式：**无约束的生成过程经常产生负基因表达值**，这在生物学上是不可能的，并降低了下游实用性。

## 主要特性

- ✅ **生物有效性保证**：确保生成过程中始终产生非负基因表达值
- ✅ **性能提升**：平均 PCC 提升超过 25%
- ✅ **高效计算**：比 STFlow 快 4× 到 100×，比 STEM 快 10,000× 以上
- ✅ **交互式可视化**：支持多样本和多标记基因的可视化比较

## 技术栈

- **React 19** - UI 框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **Tailwind CSS** - 样式框架
- **Recharts** - 数据可视化

## 快速开始

### 前置要求

- Node.js 18+ 
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

应用将在 `http://localhost:3000` 启动

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist` 目录

### 预览生产构建

```bash
npm run preview
```

## 项目结构

```
BioFlow-demo/
├── components/          # React 组件
│   ├── Abstract.tsx     # 摘要部分
│   ├── Hero.tsx         # 首页横幅
│   ├── Methodology.tsx  # 方法论说明
│   ├── NavBar.tsx       # 导航栏
│   ├── ResultsCharts.tsx # 结果图表
│   └── VisualizationComparisons.tsx # 可视化比较
├── public/              # 静态资源
│   └── demo/            # 演示图片
├── App.tsx              # 主应用组件
├── constants.ts         # 配置常量
├── index.tsx            # 入口文件
├── types.ts             # TypeScript 类型定义
└── vite.config.ts       # Vite 配置
```

## GitHub Pages 部署

### 方法一：使用 GitHub Actions（推荐）

1. 创建 `.github/workflows/deploy.yml` 文件（已包含在项目中）

2. 推送代码到 GitHub，GitHub Actions 会自动构建并部署

### 方法二：手动部署

1. 构建项目：
   ```bash
   npm run build
   ```

2. 如果仓库名称不是 `BioFlow-demo`，需要修改 `vite.config.ts` 中的 `base` 配置，或设置环境变量：
   ```bash
   VITE_BASE_PATH=/your-repo-name/ npm run build
   ```

3. 将 `dist` 目录的内容推送到 `gh-pages` 分支，或在 GitHub 仓库设置中启用 GitHub Pages，选择 `dist` 目录

### 自定义域名部署

如果使用自定义域名，将 `vite.config.ts` 中的 `base` 设置为 `'/'`，或设置环境变量：
```bash
VITE_BASE_PATH=/ npm run build
```

## 许可证

MIT License

## 引用

如果您使用了本项目，请引用：

```bibtex
@inproceedings{anonymous2026bioflow,
  title={BioFlow: Biologically Valid Generative Flow for Histology-Conditioned Spatial Transcriptomics Prediction},
  author={Anonymous},
  booktitle={CVPR},
  year={2026}
}
```
