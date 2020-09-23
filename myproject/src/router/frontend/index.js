import Home from "@/views/home/Home";
import Competition from "./competition"
import Team from "./team"
import Myself from "./myself"

export default [
  {
    path: 'home',
    name: 'Home',
    component: Home,
    meta: {title: '竞赛管理系统'}
  },
  ...Competition,
  ...Team,
  ...Myself,
]

