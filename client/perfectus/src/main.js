import Vue from 'vue'
import App from './homePage.vue'

Vue.config.productionTip = true

new Vue({
  render: h => h(App),
}).$mount('#app')
