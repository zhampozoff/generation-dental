// import
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '~/pages/index'
import {routes} from '~/static/routes/routes'


Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

const app = new Vue({
  router,
  render: function(createElement){
    return createElement(App)
  }
}).$mount('#app')
