import _ from 'lodash';
import {Toast} from "vant";

export default {

  computed:{
    sysParams() {
      return this.$store.state.systems;
    },
    title() {
      return this.$route.meta.title;
    },
    isNotHome() {
      return this.$route.meta.isNotHome;
    },

  },
  methods: {
    // 从value中取值，如果value非法，则返回默认值
    valueOrDefault(value, defaultValue) {
      if (this.isIllegal(value)) {
        return defaultValue
      } else {
        // 如果是空字符串或者只有空格的字符串，则返回默认值
        if (_.isString(value)) {
          if (_.eq(_.trim(value), '')) {
            return defaultValue
          }
        }
        return value
      }
    },
    getValueSafely(source, path) {
      return _.at(source, [path])[0]
    },
    // 安全取值，如果没取到，就返回默认值
    getValueSafelyOrDefault(source, path, defaultValue) {
      return this.valueOrDefault(this.getValueSafely(source, path), defaultValue)
    },
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
