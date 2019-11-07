// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './http'
import global from '@/utils/global'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import eacher from 'echarts';


Vue.prototype.$echarts = eacher

Document.prototype.hkm = {};
import store from './store'
Vue.use(ElementUI)  // 引入Element
Vue.use(api)  // 引入API模块

Vue.prototype.global = global // 挂载全局配置模块
// 再原型上来一个对象

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
