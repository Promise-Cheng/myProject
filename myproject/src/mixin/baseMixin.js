import _ from 'lodash';
import {Toast} from "vant";

export default {
  methods: {
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
    checkField(data, checkData) {
      let keyArr = Object.keys(checkData);
      for (let key in keyArr) {
        if (this.isNullOrEmptyStr(data[key])) {
          Toast.fail(`${checkData[key]}不能为空！`);
          return false;
        }
      }
      return true;
    },
  },
}
