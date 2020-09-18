/**
 * api接口统一管理
 */
import {get, post} from './axios'

export const common = {
  login: (params) => post('/login', params),
  register: (params) => post("/register", params),
}
export const competition = {
  //修改
  edit: (params) => post('/teacher/manageComp/updateInfo', params),
  //新增
  save: (params) => post('/teacher/submit', params),
  //获取所有竞赛类型
  getCompTypes: (params) => get('/teacher/CompTypes', params),
  // 参数CompId
  detail: (params) => get('/Competitions/detail', params),
}

