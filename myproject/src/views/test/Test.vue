<template>
  <div>
    <van-card
      desc="描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息"
      title="竞赛名称"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    >
      <template #tags>
        <van-tag plain type="primary">竞赛状态</van-tag>
        <van-tag plain type="success">进行中</van-tag>
        <van-tag plain type="danger">已结束</van-tag>
        <van-tag plain type="warning">竞赛类型</van-tag>
        <div style="margin-top: 10px;display: flex; justify-content:space-between">
          <div>开始时间:2020-09-01</div>
          <div>结束时间:2020-09-01</div>
        </div>
      </template>
      <template #footer>
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </template>
    </van-card>
    <div :style="{overflow: 'auto',height: height + 'px'}">
      <van-list
        v-model="loading"
        :error.sync="error"
        error-text="请求失败，点击重新加载"
        :finished="finished"
        :finished-text="'没有更多数据了'"
        @load="onLoad"
      >
        <div v-for="(item,index) in list" :key="`item${index}`">
          <table-card style="margin-top: 10px"></table-card>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
  import TableCard from "@/components/card/TableCard";

  export default {
    name: "Test",
    components: {TableCard},
    data() {
      return {
        height: window.innerHeight - 200,
        error: false,
        loading: false,
        finished: false,
        list: [],
        total: 40,
      }
    },
    methods: {
      onLoad() {
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + 1);
          }
          this.loading = false;
          if (this.list.length >= this.total) {
            this.finished = true;
          }
        }, 1000);
      },
    },
  }
</script>

<style scoped>

</style>
