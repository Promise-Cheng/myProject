import CompDetail from "@/views/frontend/competition/CompDetail";
import AllCompetition from "@/views/frontend/competition/AllCompetition";
import Competition from "@/views/frontend/competition/Competition";

export default [
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
]
