import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/home'
import Main from '@/page/Main'
import user from '@/page/user'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/Main' },
    {
      path: '/Main',
      // name: "Main",
      component: Main,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: '/user',
          name: 'User',
          component: user
        }
      ]
    }
  ]
})
