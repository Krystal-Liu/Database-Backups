import login from './views/page/Login.vue'
import index from './views/page/Index.vue'
import manual from './views/page/Manual.vue'

import create from './views/page/create/create.vue'
import step1 from './views/page/create/step1.vue'
import step2 from './views/page/create/step2.vue'
import step3 from './views/page/create/step3.vue'
import step4 from './views/page/create/step4.vue'
import step5 from './views/page/create/step5.vue'
import step6 from './views/page/create/step6.vue'

export default[
  {
    path: '/',
    component: login,
    name: 'login'
  },
  {
    path: '/manual',
    component: manual,
    name: 'manual'
  },
  {
    path: '/index',
    component: index,
    name: 'index'
  },
  {
    path: '/index/create',
    component: create,
    name: 'create',
    children: [
      {
        path: '',
        component: step1,
        name: 'step1'
      },
      {
        path: 'step2',
        component: step2,
        name: 'step2'
      },
      {
        path: 'step3',
        component: step3,
        name: 'step3'
      },
      {
        path: 'step4',
        component: step4,
        name: 'step4'
      },
      {
        path: 'step5',
        component: step5,
        name: 'step5'
      },
      {
        path: 'step6',
        component: step6,
        name: 'step6'
      },
    ]
  }
]
