<template>
  <div :style="{overflow: 'auto',height: height + 'px'}">
    <van-list
      v-model="loading"
      :error.sync="error"
      error-text="请求失败，点击重新加载"
      :finished="finished"
      finished-text="没有更多数据了"
      @load="onLoad"
    >
      <div v-for="(item,index) in listData" :key="`item${index}`">
        <table-card
          ref = 'tableCard'
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
    },
    computed:{
      height(){
        return window.innerHeight - 200
      },
    },
    data() {
      return {
        loading: false,
        finished: false,
        error: false,
      }
    },
    methods: {
      onLoad() {
        this.$emit('load')
        this.loading = false;
        if (this.listData.length >= this.total) {
          this.finished = true;
        }
      },
      onClickThumb() {
        console.log(this.$refs.tableCard)
        // api.competition.detail({CompId: this.listData.CompId}).then(res => {
        //
        // })
      },
    },
  }
</script>

<style scoped>

</style>
