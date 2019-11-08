// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Tabbar,
  TabbarItem,
  NavBar,
  Icon,
  Search,
  Tab,
  Tabs,
  Lazyload,
  Cell,
  CellGroup
} from 'vant'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper /* { default global options } */)

import './css/base.css'
Vue.config.productionTip = false

Vue.use(Cell)
  .use(CellGroup)
  .use(Tabbar)
  .use(TabbarItem)
  .use(NavBar)
  .use(Icon)
  .use(Search)
  .use(Tab)
  .use(Tabs)
  .use(Lazyload)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
