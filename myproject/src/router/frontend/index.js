import Home from "@/views/home/Home";
import Competition from "@/views/frontend/competition/Competition";
import CompDetail from "@/views/frontend/competition/CompDetail";
import AllCompetition from "@/views/frontend/competition/AllCompetition";
import MyTeam from "@/views/frontend/team/MyTeam";
import TeamDetail from "@/views/frontend/team/TeamDetail";

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
  {
    path: 'comp-detail',
    name: 'CompDetail',
    component: CompDetail,
    meta: {
      title: '竞赛详情',
      isNotHome: true,
    }
  },
  {
    path: 'all-comp',
    name: 'AllCompetition',
    component: AllCompetition,
    meta: {
      title: '所有竞赛',
      isNotHome: true,
    }
  },
  {
    path: 'team',
    name: 'MyTeam',
    component: MyTeam,
    meta: {
      title: '我的团队',
    }
  },
  {
    path: 'team-detail',
    name: 'TeamDetail',
    component: TeamDetail,
    meta: {
      title: '团队详情',
      isNotHome: true,
    }
  },
]

