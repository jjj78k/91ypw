import Vue from 'vue'
import Router from 'vue-router'
import Buisner from '../components/Business/Buisner/buisner.vue'
import User from '../components/Center/user/user.vue'
import Search from '../components/Index/search/search.vue'
import OrderMine from '../components/Order/OrderList/orderMine.vue'
import Index from '../components/Index/index/index.vue'
import Center from '../components/Center/center/center.vue'
import Order from '../components/Order/order/order.vue'
import Login from '../components/login/login.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path:'/',component:Index},
    {path:'/buisner',component:Buisner},
    {path:'/order',component:Order},
    {path:'/center',component:Center},
    {path:'/login/',name:"login",component:Login},
  ]
})
