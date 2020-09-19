// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import lodash from 'lodash'
import store from './store'

import {List, Tag, Icon, Cell, CellGroup, Button, Toast, NavBar, Card,Tabbar, TabbarItem} from "vant";
import 'vant/lib/index.css'

Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(List)
Vue.use(Tag)
Vue.use(Card)
Vue.use(Icon)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Toast)
Vue.use(Button)
Vue.use(NavBar)
Vue.use(lodash)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  store,
})
