import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/login'
import Register from '@/views/register/Register'
import Frame from "@/views/_base/Frame";
import Test from '@/views/test/Test'
import NotFound from '@/views/notFound/notFound'
import frontend from '@/router/frontend';

Vue.use(Router)
// const originalPush = Router.prototype.push;
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

const router =new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
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
      children:[
        ...frontend,
      ]
    },

    {
      name: 'BackendNotFound',
      path: '*',
      component: NotFound,
      meta: {title: '找不到页面'}
    },
  ]
})

router.beforeEach((to, from, next) => {
  const role = sessionStorage.getItem('ms_username');
  if(!role && to.path !== '/login' && to.path !== '/login_tea' && to.path!=='/register'  && to.path!=='/register_tea' ){
    let index = to.path.lastIndexOf('teacher')
    if(index === -1)
      next('/login');
    else{
      next('/login_tea');
    }
  }else{
    next();
  }
})

export default router;
