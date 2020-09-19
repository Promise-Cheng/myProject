<template>
  <div>
    <item-group :setting="setting">
      <template #title_right>
        <div>
          正在进行
        </div>
      </template>
      <template #default>
        <div v-for="(item,index) in list" :key="`item${index}`">
          <table-card style="margin-top: 10px" @click-thumb="clickThumb"></table-card>
        </div>
      </template>
    </item-group>
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
          <table-card style="margin-top: 10px" @click-thumb="clickThumb"></table-card>
        </div>
      </van-list>
    </div>
    <foot-tabbar :tabbar-list="tabbarList"></foot-tabbar>
  </div>
</template>

<script>
  import TableCard from "@/components/card/TableCard";
  import FootTabbar from "@/components/footTabbar/FootTabbar";
  import ItemGroup from "@/components/item-group/index";

  export default {
    name: "Test",
    components: {ItemGroup, TableCard, FootTabbar},
    data() {
      return {
        height: window.innerHeight - 200,
        error: false,
        loading: false,
        finished: false,
        list: [],
        setting: {
          title: '测试',
          icon: 'home-o',
          title_color: 'red',
          title_desc:'测试描述',
          style:{
            scrollWidth:'500px'
          }
        },
        total: 40,
        tabbarList: [
          {
            title: '主页',
            icon: 'home-o',
            path: '/home',
          },
          {
            title: '竞赛',
            icon: 'gem-o',
            path: '/competititon',
          },
          {
            title: '团队',
            icon: 'friends-o',
            path: '/team',
          },
          {
            title: '我的',
            icon: 'user-o',
            path: '/myself',
          },
        ]
      }
    },
    methods: {
      clickThumb() {
        console.log(11111)
      },
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
