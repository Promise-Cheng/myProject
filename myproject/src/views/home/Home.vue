<template>
  <!--  <foot-tabbar :tabbar-list="tabbarList"></foot-tabbar>-->
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
    <list-card :list-data="listData" :total="10"></list-card>
  </div>
</template>

<script>
  import FootTabbar from "@/components/footTabbar/FootTabbar";
  import ListCard from "@/components/card/ListCard";

  export default {
    name: "Home",
    components: {ListCard, FootTabbar},
    data() {
      return {
        height: window.innerHeight - 200,
        error: false,
        loading: false,
        finished: false,
        list: [],
        total: 40,
        listData: [
          {
            name: '测试竞赛',
            description: '测试竞赛',
            startTime: '测试竞赛',
            endTime: '测试竞赛',
            status: '测试竞赛',
            compType: '测试竞赛',
          }
        ],
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
  }
</script>

<style scoped>

</style>
