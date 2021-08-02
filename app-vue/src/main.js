import './public-path';
import { createApp } from 'vue'
import App from './App.vue'
import routes from './router';
import store from './store';
import globalRegister from './store/global-register'
import { createRouter, createWebHistory } from 'vue-router';

let instance = null;
let router = null;
let history = null;

function render(props = {}) {
    const { container } = props;
    history = createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/child/app-vue' : '/');
    router = createRouter({
        history,
        routes,
    });

    instance = createApp(App);
    instance.use(router);
    instance.mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
    globalRegister(store)
    const userInfo = { name: '我是独立运行时名字叫张三' } // 假设登录后取到的用户信息
    store.commit('global/setGlobalState', { user: userInfo })
    render();
}

export async function bootstrap() {
    console.log('%c ', 'color: green;', 'vue3.0 app bootstraped');
}

// function storeTest(props) {
//     props.onGlobalStateChange &&
//         props.onGlobalStateChange(
//             (value, prev) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
//             true,
//         );
//     props.setGlobalState &&
//         props.setGlobalState({
//             ignore: props.name,
//             user: {
//                 name: props.name,
//             },
//         });
// }

export async function mount(props) {
    console.log('[vue] props from main framework', props)
    globalRegister(store, props)
    render(props)

    // storeTest(props);
    // console.log('[vue] props from main framework', props);
    // render(props);
    // instance.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange;
    // instance.config.globalProperties.$setGlobalState = props.setGlobalState;
}

export async function unmount() {
    instance.unmount();
    instance._container.innerHTML = '';
    instance = null;
    router = null;
    history.destroy();
}