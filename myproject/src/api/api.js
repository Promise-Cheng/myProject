/**
 * api接口统一管理
 */
import { get, post } from './axios'

export const apiAddress = {
  login:(params) => get('api/v1/users/my_address/address_edit_before', params)
}
