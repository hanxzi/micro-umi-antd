import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  publicPath: process.env.NODE_ENV === 'production' ? '/child/react-app/' : '/',
  outputPath: './dist/react-app',
  fastRefresh: {},
  qiankun: {
    slave: {},
  },
});
