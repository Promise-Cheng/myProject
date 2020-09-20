<template>
  <div>
    <div>
      共{{ list.length }}条数据
    </div>
    <list-card :list-data="list" :height="height" :total="total" @load="Load" @refresh="Refresh"></list-card>
  </div>
</template>

<script>
  import TableCard from "@/components/card/TableCard";
  import * as api from "@/api/api"
  import ListCard from "@/components/card/ListCard";

  export default {
    name: "Competition",
    components: {ListCard, TableCard},
    data() {
      return {
        list: [],
        height: window.innerHeight - 100,
        total: 0,
        params: {
          page: 1,
          size: 5,
        },
        count: 2,
      }
    },
    methods: {
      Load() {
        setTimeout(() => {
          if (this.list.length !== 0 && this.params.page !== 1)
            this.getList(this.params)
        }, 1000)
      },
      Refresh() {
        setTimeout(() => {
          this.list = [];
          this.params = {
            size: 5,
            page: 1,
          }
        }, 1000)
      },
      changeData(data) {
        let midData = [];
        _.forEach(data, item => {
          midData.push({
            id: item.CompId,
            status: item.CompStateName,
            compType: item.CompTypeName,
            name: item.compName,
          })
        })
        return midData
      },
      getList(params) {
        api.competition.listByStatus({status: 0, ...params}).then((res) => {
          this.list = [...this.list, ...this.changeData(res.data)];
          this.total = res.Sum;
          this.params.page++;
        })
      },
    },

    mounted() {
      this.getList(this.params);
    }
  }
</script>

<style scoped>

</style>
