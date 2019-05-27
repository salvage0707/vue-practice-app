import KbnBoardView from '@/components/templates/KbnBoardView.vue'
import KbnLoginView from '@/components/templates/KbnLoginView.vue'
import KbnTaskDetailView from '@/components/templates/KbnTaskDetailView.vue'

export default [
  {
    path: '/',
    component: KbnBoardView,
    meta: { requiresAuth: true }
  }, {
    path: '/login',
    component: KbnLoginView
  }, {
    path: '/tasks/:id',
    component: KbnTaskDetailView,
    meta: { requiresAuth: true }
  }, {
    path: '*',
    redirect: '/'
  }
]
