import Vue from 'vue'
import VueResource from 'vue-resource'
import cfg from './config.json'

Vue.use(VueResource)
Vue.http.options = {
    root: cfg.CtxPath
}

// 以下为API列表，每一个API都必须注册到这里
// 获取列表
export const getList = Vue.resource('someAPI{/id}')
