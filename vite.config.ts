import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages 部署时，如果仓库名称是 BioFlow-demo，base 应该是 '/BioFlow-demo/'
// 如果部署到根路径（自定义域名），base 应该是 '/'
// 可以通过环境变量 VITE_BASE_PATH 来覆盖
export default defineConfig(({ mode }) => {
  const base = process.env.VITE_BASE_PATH || (mode === 'production' ? '/BioFlow-demo/' : '/');
  
  return {
    base,
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
  };
});
