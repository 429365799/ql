import * as Vue from 'vue'
import * as VueRouter from 'vue-router';

import store from './store/index.ts'

import App from './views/App'

Vue.use(VueRouter)

// router config
const routes: VueRouter.RouteConfig[] = [
    {
        path: '/',
        component: App
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
});

const app = new Vue({
    router,
    store,
    template: `
        <router-view class="view"></router-view>
    `
}).$mount('#app')


