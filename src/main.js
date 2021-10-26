import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

console.log(process.env.VUE_APP_NAME)
console.log(process.env.VUE_APP_USER)
console.log(process.env.VUE_APP_MY_NAME)

new Vue({
  render: h => h(App),
}).$mount('#app')
