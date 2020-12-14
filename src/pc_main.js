import Vue from 'vue'
import App from './pc.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/display.css';

import element from 'element-ui';

Vue.use(element)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
