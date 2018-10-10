import 'babel-polyfill'
import faskclick from 'fastclick'
import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/stylus/index.styl'
// Vue.config.productionTip = false
// 避免点击按钮出现300毫秒延迟
faskclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
