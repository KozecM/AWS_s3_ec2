import Vue from 'vue'
import App from './App.vue'
import router from "./routes";
import  "./firebase";
import bulma from './../node_modules/bulma/css/bulma.css'

require('dotenv').config()

Vue.config.productionTip = false

new Vue({
  bulma,
  router,
  render: h => h(App)
}).$mount("#app");
