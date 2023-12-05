import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AnimateCSS from 'animate.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// @ts-ignore
import 'bootstrap/dist/js/bootstrap.min.js';

import './service-worker'

Vue.config.productionTip = false

new Vue({
  router,
  AnimateCSS,
  render: h => h(App)
}).$mount('#app')
