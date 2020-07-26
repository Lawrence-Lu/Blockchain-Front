// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import ElementUI from 'element-ui'
import  'element-ui/lib/theme-chalk/index.css'
import axios from "axios"

Vue.use(ElementUI)

//    "eslint": "^6.7.2",
//    "eslint-plugin-vue": "^6.2.2",
Vue.prototype.$axios = axios;
axios.defaults.baseURL='api'
axios.defaults.timeout =  50000;


Vue.use(ViewUI, {
  transfer: true,
  size: 'large',
  capture: false,
  select: {
    arrow: 'md-arrow-dropdown',
    arrowSize: 30
  }
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
