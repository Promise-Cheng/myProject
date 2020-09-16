// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { Icon, Cell, CellGroup, Button, Toast,NavBar} from "vant";
import 'vant/lib/index.css'

Vue.use(Icon)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Toast)
Vue.use(Button)
Vue.use(NavBar)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
