<template>
  <div>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :error.sync="error"
        error-text="请求失败，点击重新加载"
        :finished="finished"
        finished-text="没有更多数据了"
        :offset="1"
        @load="onLoad"
      >
        <div v-for="(item,index) in listData" :key="`item${index}`">
          <table-card
            ref='tableCard'
            :title="item.name"
            :desc="item.description"
            :start-time="item.startTime"
            :end-time="item.endTime"
            :status="item.status"
            :comp-type="item.compType"
            @click-thumb="onClickThumb"
            style="margin-top: 10px"></table-card>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
  import TableCard from "@/components/card/TableCard";
  import * as api from "@/api/api"

  export default {
    name: "ListCard",
    components: {TableCard},
    props: {
      listData: {
        type: Array,
        default: () => {
          return [];
        }
      },
      total: {
        type: Number,
        default: 0,
      },
      height: {
        type: Number,
        default: window.innerHeight - 220
      },
    },
    computed: {},
    data() {
      return {
        loading: false,
        finished: false,
        error: false,
        refreshing: false,
      }
    },
    methods: {
      onLoad() {
        console.log('change1111')
        this.$emit('load');
      },
      onClickThumb() {
        console.log(this.$refs.tableCard)
        // api.competition.detail({CompId: this.listData.CompId}).then(res => {
        //
        // })
      },
      onRefresh() {
        // 清空列表数据
        this.finished = false;
        this.$emit('refresh');
        // 重新加载数据
        // 将 loading 设置为 true，表示处于加载状态
        this.loading = true;
        this.onLoad();
      },
    },
    watch: {
      listData(value) {
        if (value.length >= this.total) {
          this.finished = true;
        }
        this.refreshing = false;
        this.loading = false;
      }
    }
  }
</script>

<style scoped>

</style>
