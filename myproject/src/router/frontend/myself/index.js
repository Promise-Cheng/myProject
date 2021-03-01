import User from "@/views/frontend/user/User";

export default [
  {
    path: 'myself',
    name: 'User',
    component: User,
    meta: {title: '我的相关信息', bypass: true}
  },
]
