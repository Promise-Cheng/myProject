import * as api from '@/api/api';
export default{
    getCompTypes(context){
      api.competition.getCompTypes(null).then(res => {
        context.commit('init', {key: 'compTypes', value: res.data.data});
      })
    }
}
