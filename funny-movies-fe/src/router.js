import Vue from 'vue'
import Router from 'vue-router'
import UserRegister from '@/components/UserRegister'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/users/register', component: UserRegister }
  ]
})