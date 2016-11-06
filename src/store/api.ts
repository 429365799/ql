import axios from 'axios'

const cfg = require('./config.json')

const http = axios.create({
    baseURL: cfg.CtxPath
})

// 以下为API列表，每一个API都必须注册到这里
// 获取列表
export const getList = () => {
    http.get('topiclist')
}
