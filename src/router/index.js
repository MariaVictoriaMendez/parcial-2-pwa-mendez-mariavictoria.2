import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import FormularioView from '../views/FormularioView.vue'
import ListaView from '../views/ListaView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login' 
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/formulario',
    name: 'formulario',
    component: FormularioView
  },
  {
    path: '/lista',
    name: 'lista',
    component: ListaView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  }
]

const router = new VueRouter({
  routes
})

export default router
