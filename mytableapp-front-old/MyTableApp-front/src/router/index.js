import Vue from 'vue'
import Router from 'vue-router'
// import Workerstable from '@/components/Workerstable.vue'
import Helloworld from '@/components/Helloworld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // path: '/',
      // name: 'Workerstable',
      // component: Workerstable
      path: '/',
      name: 'Helloworld',
      component: Helloworld
    }
  ]
})
