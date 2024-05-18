import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Products from '../views/Products'
import EditarProduct from '../components/Product/EditarProduct'
import NewProduct from '../components/Product/NewProduct'
///////////////////////////////////////////////////////////////////////////
import Categories from '../views/Categories'
import EditarCategorie from '../components/Categories/EditarCategorie'
import NewCategorie from '../components/Categories/NewCategorie'
////////////////////////////////////////////////////////////////////////////
import Paymode from '../views/Paymode'
 import EditarPaymode from '../components/Paymode/EditarPaymode'
import NewPaymode from '../components/Paymode/NewPaymode'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/editar-product/:id',
    name: 'EditarProduct',
    component: EditarProduct
  },
  {
    path: '/add-product/',
    name: 'NewProduct',
    component: NewProduct
  },
////////////////////////////////////////////////////////////////////////
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
   {
     path: '/editar-categorie/:id',
     name: 'EditarCategorie',
     component: EditarCategorie
   },
  {
     path: '/add-categories/',
     name: 'NewCategorie',
     component: NewCategorie
  },
  /////////////////////////////////////////////////////////////////////
  {
    path: '/paymodes',
    name: 'Paymode',
    component: Paymode
  },
   {
     path: '/editar-paymode/:id',
     name: 'EditarPaymode',
     component: EditarPaymode
   },
  {
     path: '/add-paymode/',
     name: 'NewPaymode',
     component: NewPaymode
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router