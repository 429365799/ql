import { ComponentOptions } from 'vue'
import { mapState } from 'vuex'
import {
    WECHAT_SHARE_CONFIG
} from 'constant'

import './app.scss'

const state = Object.assign({}, mapState(["count"]), {})

const App: ComponentOptions<any> = {
    template: require('./app.html'),

    computed: state,

    created() {
        console.log(this.$store.state.count);
        this.$store.dispatch(WECHAT_SHARE_CONFIG)
    },


}

export default App
