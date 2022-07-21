import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/element.css'
import store from './store/index'
import locale from 'element-ui/lib/locale/lang/en'
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts
import $ from 'jquery'


Vue.config.productionTip = false
Vue.use(ElementUI,{ locale });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
