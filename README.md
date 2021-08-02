# micro-umi-antd
基于@umijs/plugin-qiankun搭建的微前端项目，主应用使用的umi+dva搭建登录逻辑，子应用使用ant-design-pro和react create app 
# 父子应用通讯 配合 useModel 使用
1.主应用使用如果你用的 路由绑定式 消费微应用：
```
// src/app.ts
export function useQiankunStateForSlave() {
 
}
```
2.微应用中会自动生成一个全局 model，可以在任意组件中获取主应用透传的 props 的值。
```
import { useModel } from 'umi';
const masterProps = useModel('@@qiankunStateFromMaster');
```
