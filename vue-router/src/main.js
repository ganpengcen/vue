// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import foot from './components/foot/foot.vue'
import about from './components/about/about.vue'

let app = Vue.extend(App);

Vue.config.productionTip = false;
Vue.use(VueRouter);
var routes=[
  {path:'/',redirect:'foot'},
  {path:'/about',component:about},
  {path:'/foot',component:foot}
]
let router = new VueRouter({
  linkActiveClass:'active',
  routes
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
