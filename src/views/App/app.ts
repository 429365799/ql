import * as Vue from 'vue'
import { VueComponent } from 'vue-typescript'

@VueComponent({
    template: require('./app.html'),
    style: require('./app.scss')
})
export class App extends Vue {
}

console.log(App)
