import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
import first from  '../components/first.vue'
import second from  '../components/second.vue'

Vue.use(VueRouter);

const router=new VueRouter({
   base:__dirname,
   mode:'history',
   routes:[
     {path:'/',component:home},
     {path:'/first',component:first},
     {path:'/second',component:second}
   ]
});

export default router;
