import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/login'
import Register from '@/views/register/Register'
import Frame from '@/views/_base/Frame'
import Test from '@/views/test/Test'
import NotFound from '@/views/notFound/notFound'
import frontend from '@/router/frontend'
import { get } from '../api/axios'

Vue.use(Router)
// const originalPush = Router.prototype.push;
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/frontend/',
      name: 'Frame',
      component: Frame,
      children: [
        ...frontend
      ]
    },

    {
      name: 'BackendNotFound',
      path: '*',
      component: NotFound,
      meta: {title: '找不到页面'}
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (!to.meta.bypass) {
    return next()
  }

  try {
    const res = await get('/api/checkSession',{})
    if (res.ok) {
      return next()
    }
    return next({ name: 'Login', query: { next: to.fullPath } })
  } catch (err) {
    return next({ name: 'Login' })
  }
})
export default router
