/**
 * api接口统一管理
 */
import {get, post} from './axios'

export const common = {
  login: (params) => post('/login', params),
  loginOut: () => post('/logout', {}),
  register: (params) => post('/register', params),
  getUserInfo: () => get('/getUserInfo', {}),
  getHomeData: (params) => get('/home', params)
}
export const competition = {
  listByStatus: (params) => get('/Competitions/show', params),
  getMyComp: (params) => get('/users/myComp', params),
  // 修改
  edit: (params) => post('/teacher/manageComp/updateInfo', params),
  // 新增
  save: (params) => post('/teacher/submit', params),
  applyComp: (params) => post('users/myteams/applyToComp', params),
  // 获取所有竞赛类型
  getCompTypes: (params) => get('/teacher/CompTypes', params),
  // 参数CompId
  detail: (params) => get('/Competitions/detail', params),
  list: (params) => get('/Competitions/show', params),
  latest: (params) => get('/Competitions/latest', params),
  findCompByName: (params) => get('/Competitions/Search', params)

}
export const team = {
  list: (params) => get('/teams/show', params),
  getMyTeam: (params) => get('/users/manage', params),
  findTeamByName: (params) => get('/teams/Search', params),
  detail: (params) => get('/users/manage/detail', params),
  myTeams: (params) => get('/users/myteams', params)
}
