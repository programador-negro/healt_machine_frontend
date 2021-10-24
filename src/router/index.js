import { createRouter, createWebHashHistory } from 'vue-router'
// import index from '../components/index.vue'

import autorizacionesView from '../components/pages/autorizaciones/autorizaciones.vue'
import medicamentosView from '../components/pages/Medicamentos/medicamentos.vue'

import redAtencionView from '../components/pages/redAtencion/redAtencion.vue'
import citasMedicasView from '../components/pages/citasMedicas/citasMedicas.vue'
import planPremiumView from '../components/pages/planPremium/planPremium.vue'
import laboratoriosView from '../components/pages/laboratorios/laboratorios.vue'
import imagenesDiagnosticasView from '../components/pages/imagenesDiagnosticas/imagenesDiagnosticas.vue'
import certificadosView from '../components/pages/certificados/certificados.vue'
import canalesDeServiciosView from '../components/pages/canalesDeServicio/canalesDeServicio.vue'
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
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/autorizaciones',
    name: 'autorizaciones',
    component: autorizacionesView,
    children: [
      // { path: '/', name: 'inicio', component: () => import('../components/pages/autorizaciones/') },
      // { path: '/', name: 'inicio', component: () => import('../components/index.vue') }
    ]
  },
  {
    path: '/medicamentos',
    name: 'Autorizaciones',
    component: medicamentosView
  },
  {
    path: '/redAtencion',
    name: 'redAtencion',
    component: redAtencionView
  },
  {
    path: '/citasMedicas',
    name: 'citasMedicas',
    component: citasMedicasView
  },
  {
    path: '/planPremium',
    name: 'planPremium',
    component: planPremiumView
  },
  {
    path: '/laboratorios',
    name: 'laboratorios',
    component: laboratoriosView
  },
  {
    path: '/imagenesDiagnosticas',
    name: 'imagenesDiagnosticas',
    component: imagenesDiagnosticasView
  },
  {
    path: '/certificados',
    name: 'cartificados',
    component: certificadosView
  },
  {
    path: '/canalesDeServicios',
    name: 'canalesDeServicios',
    component: canalesDeServiciosView
  },
  {
    path: '/administracionKiosco',
    name: 'administracionKiosco',
    component: administracionKioscoView
  }
]

const router = createRouter({
  history: createWebHashHistory('configure-admin'),
  routes:routes,
  linkActiveClass: 'active'
})

export default router
