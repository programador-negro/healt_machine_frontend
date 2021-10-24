import { createRouter, createWebHashHistory } from 'vue-router'
// import index from '../components/index.vue'


import citas from '../components/pages/citas/citasMain.vue'
import medicamentos from '../components/pages/medicamentos/medicamentosMain.vue'
import reclamos from '../components/pages/reclamos/reclamosMain.vue'
import administracionKioscoView from '../components/pages/administracionKiosco/administracionKiosco.vue'

const routes = [
  {
    path: '/',
    // name: 'Index',
    component: () => import('../components/login.vue'),
    
  },
  {
    path: '/index',
    // name: 'Index',
    component: () => import('../layout/layout.vue'),
    children: [
      { path: '', name: 'inicio', component: () => import('../components/index.vue') }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/citas',
    name: 'citas',
    component: citas,
    children: [
      // { path: '/', name: 'inicio', component: () => import('../components/pages/autorizaciones/') },
      // { path: '/', name: 'inicio', component: () => import('../components/index.vue') }
    ]
  },
  {
    path: '/medicamentos',
    name: 'medicamentos',
    component: medicamentos
  },
  {
    path: '/reclamos',
    name: 'reclamos',
    component: reclamos
  },
  {
    path: '/administracion',
    name: 'administracion',
    component: administracionKioscoView
  }
]

const router = createRouter({
  history: createWebHashHistory('configure-admin'),
  routes:routes,
  linkActiveClass: 'active'
})

export default router
