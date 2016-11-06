import { Action, ActionTree, ActionContext } from 'vuex'
import { getList } from './api'

// const api = require('./api.ts')

type Actx = ActionContext<any, any>

const wechatShareConfig: Action<any, any> = (injectee: Actx, payload: any) => {
    getList()
}

const actionTree: ActionTree<any, any> = {
    wechatShareConfig
}

export default actionTree
