import * as Vue from 'vue'
import * as VueRouter from 'vue-router';

import { App } from './views/App/app'

Vue.use(VueRouter)

// router config
const routes: VueRouter.RouteConfig[] = [
    {
        path: '/',
        component: App
    }
]

const router = new VueRouter({
    routes
});

const app = new Vue({ router }).$mount('#app')
