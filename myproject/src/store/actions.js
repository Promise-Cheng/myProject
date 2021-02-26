import * as api from '@/api/api'

export default {
  getCompTypes (context) {
    api.competition.getCompTypes(null).then(res => {
      context.commit('init', {key: 'compTypes', value: res.data.data})
    })
  },
  getUserInfo (context, data) {
    context.commit('init', {key: 'user', value: data})
  },
  clearSystems (context) {
    context.commit('init', {key: 'user', value: null})
    context.commit('init', {key: 'isLoaded', value: false})
  }
}
