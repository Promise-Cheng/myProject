import MyTeam from "@/views/frontend/team/MyTeam";
import TeamDetail from "@/views/frontend/team/TeamDetail";

export default [
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
