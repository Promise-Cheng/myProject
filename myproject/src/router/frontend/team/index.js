import MyTeam from "@/views/frontend/team/MyTeam";
import TeamDetail from "@/views/frontend/team/TeamDetail";
import AllTeam from "@/views/frontend/team/AllTeam";
import ChooseTeam from "@/views/frontend/team/ChooseTeam";

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
  {
    path: 'all-team',
    name: 'AllTeam',
    component: AllTeam,
    meta: {
      title: '团队详情',
      isNotHome: true,
    }
  },
  {
    path: 'choose-team',
    name: 'ChooseTeam',
    component: ChooseTeam,
    meta: {
      title: '选择团队报名竞赛',
      isNotHome: true,
    }
  },
]
