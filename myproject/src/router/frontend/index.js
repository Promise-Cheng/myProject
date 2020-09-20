import Home from "@/views/home/Home";
import Competition from "@/views/frontend/competition/Competition";
export default [
  {
    path: 'home',
    name: 'Home',
    component: Home,
    meta: {title: '竞赛管理系统'}
  },
  {
    path: 'competition',
    name: 'Competition',
    component: Competition,
    meta: {title: '我的竞赛'}
  },
]

