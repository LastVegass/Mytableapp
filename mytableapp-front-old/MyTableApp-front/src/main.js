// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import './main.css'
import {securedAxiosInstance, plainAxiosInstance} from './backend/axios'
// import postcss from './postcss  '

Vue.config.productionTip = false

Vue.use(VueAxios, {
  secured: securedAxiosInstance,
  plain: plainAxiosInstance
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  plainAxiosInstance,
  securedAxiosInstance,
  // components: { App },
  // template: '<App/>'
  render: h => h(App)
})
