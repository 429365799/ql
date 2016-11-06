import * as Vue from 'vue'
import * as Vuex from 'vuex'

const actions = require('./actions.ts').default
const getters = require('./getters.ts').default
const modules = require('./modules/topics.ts').default

Vue.use(Vuex)

const store = new Vuex.Store({
    actions,
    getters,
    modules,

    state: {
        count: 0
    }
})

export default store
