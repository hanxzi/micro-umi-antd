const config: any = {
  antd: {},
  dva: {},
  routes: [
    {
      path: '/user',
      routes: [
        { path: 'login', component: '../pages/login' },
      ]
    },
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        { path: 'app-react', microApp: 'app-react' },
        { path: 'antd-pro', microApp: 'antd-pro' },
      ]
    }
  ],
  proxy: {
    "/api": {
      target: 'http://grading.staging.12301e.com',
      changeOrigin: true,
      pathRewrite: { "^": "" }
    }
  },
  qiankun: {
    master: {
      apps: [
        {
          name: 'app-react',
          entry: process.env.NODE_ENV === 'production' ? '/child/app-react/' : '//localhost:7003',
        },
        {
          name: 'antd-pro',
          entry: process.env.NODE_ENV === 'production' ? '/child/antd-pro/' : '//localhost:7002',
        },
      ],
    },
  },
}

export default config;
