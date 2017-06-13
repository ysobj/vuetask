import Vue from 'vue'
import Router from 'vue-router'
import Tasxs from '@/components/Tasxs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tasxs',
      component: Tasxs
    }
  ]
})
