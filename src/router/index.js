import { createRouter, createWebHistory } from 'vue-router'
import Food from '../views/Food.vue'
import Cart from '../views/Cart.vue'

const routes = [
  { path: '/', redirect: '/food'},
  { path: '/food', name: 'Food', component: Food},
  { 
    path: '/cart', 
    name: 'Cart', 
    component: Cart
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
