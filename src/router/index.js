import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Hello from '@/components/Overview'
import Result from '@/components/Result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/overview',
      name: 'Overview',
      component: Hello
    }, {
      path: '/result',
      name: 'Result',
      component: Result
    }
  ]
})
