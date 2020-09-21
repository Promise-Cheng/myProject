<template>
  <div>
    <Header
      :title="title"
      :left-text="isNotHome?'返回':''"
      :leftArrow="getValueSafelyOrDefault(this,'isNotHome',false)"></Header>
    <Main></Main>
    <FootTabbar
      v-if="!isNotHome"
      :tabbar-list="tabbarList"></FootTabbar>
  </div>
</template>

<script>
  import Header from '@/components/header/publicHeader'
  import FootTabbar from "@/components/footTabbar/FootTabbar";
  import baseMixin from "@/mixin/baseMixin";
  import Main from "@/views/_base/Main";

  export default {
    name: "Frame",
    mixins: [baseMixin],
    components: {Main, FootTabbar, Header},
    data() {
      return {
        tabbarList: [
          {
            title: '主页',
            icon: 'home-o',
            path: '/frontend/home',
          },
          {
            title: '竞赛',
            icon: 'gem-o',
            path: '/frontend/competition',
          },
          {
            title: '团队',
            icon: 'friends-o',
            path: '/frontend/team',
          },
          {
            title: '我的',
            icon: 'user-o',
            path: '/frontend/myself',
          },
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
  .main {
    background-color: $gray-shallow-more;
  }
</style>
