import Vue from 'vue'
import App from './components/App'
import VueResource from 'vue-resource'
console.log(App);
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

