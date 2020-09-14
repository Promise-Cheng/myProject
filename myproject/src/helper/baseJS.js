import _ from 'lodash'

export function isIllegal(param) {
  return _.isUndefined(param) || _.isNull(param);
}

export function isEmptyStr(param) {
  if (!_.isString(param)) return;
  return _.eq(_.trim(param), '')
}

export function isNullOrEmptyStr(params) {
  return this.isIllegal(params) || this.isEmptyStr(params)
}
