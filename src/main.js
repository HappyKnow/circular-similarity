import Vue from 'vue'
import App from './App.vue'
import CircularSimilarity from './lib'

Vue.config.productionTip = false

Vue.use(CircularSimilarity)

new Vue({
  render: h => h(App)
}).$mount('#app')
