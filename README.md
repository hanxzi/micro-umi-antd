# micro-umi-antd
基于@umijs/plugin-qiankun搭建的微前端项目，主应用基座使用的umi+dva，子应用使用ant-design-pro和react create app。实现登录获取用户信息，主应用更新全局State,子应用获取State
## Getting Started

Install dependencies,

```bash
$ npm install
```

Start the dev server,

```bash
$ npm run start
```

### 父子应用通讯 配合 useModel 使用
1.主应用使用如果你用的 路由绑定式 消费微应用：
```
// src/app.ts
export function useQiankunStateForSlave() {
   const [globalState, setQiankunGlobalState] = useState({});
}
```
2.微应用中会自动生成一个全局 model，可以在任意组件中获取主应用透传的 props 的值。
```
import { useModel } from 'umi';
const masterProps = useModel('@@qiankunStateFromMaster');
```
3.主应用判断是否登录存储用户信息：
```
// umi-main/src/layout.ts
const { globalState, setQiankunGlobalState } = useModel('@@qiankunStateForSlave');
useEffect(() => {
    if (currentUser && currentUser.phone) {
        setQiankunGlobalState({ "slogan": JSON.stringify(currentUser) })
    }
}, [currentUser]);
```
