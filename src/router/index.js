import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import User from '@/components/User'
import Detail from '@/components/Detail'
import Connexion from '@/components/Connexion'
import Inscription from '@/components/Inscription'
import InscriptionFoodtruck from '@/components/InscriptionFoodtruck'
import ForgotPass from '@/components/ForgotPass'
import FoodtruckList from '@/components/FoodtruckList'
import FoodtruckDetails from '@/components/FoodtruckDetails'
import FoodtruckAddMenu from '@/components/FoodTruckAddMenu'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Connexion',
      component: Connexion
    },
    {
      path: '/inscription',
      name: 'Inscription',
      component: Inscription
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/requeteFoodtruck',
      name: 'InscriptionFoodtruck',
      component: InscriptionFoodtruck
    },
    {
      path: '/forgotPassword',
      name: 'ForgotPass',
      component: ForgotPass
    },
    {
      path: '/foodtruckList',
      name: 'FoodtruckList',
      component: FoodtruckList
    },
    {
      path: '/foodtruckDetails/:id',
      name: 'FoodtruckDetails',
      component: FoodtruckDetails
    },
    {
      path: '/foodtruckAddMenu',
      name: 'FoodtruckAddMenu',
      component: FoodtruckAddMenu
    }
  ]
})
