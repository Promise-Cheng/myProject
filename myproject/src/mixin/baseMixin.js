import _ from 'lodash'
export default {
  methods:{
    isIllegal(param) {
      return _.isUndefined(param) || _.isNull(param);
    },
    isEmptyStr(param) {
      if (!_.isString(param)) return;
      return _.eq(_.trim(param), '')
    },
    isNullOrEmptyStr(params) {
      return this.isIllegal(params) || this.isEmptyStr(params)
    },
  },
}
