<template>
    <div>
      <list-team-card :show-search="true"></list-team-card>
    </div>
</template>

<script>
  import TableCard from "@/components/card/TableCard";
  import FootTabbar from "@/components/footTabbar/FootTabbar";
  import ItemGroup from "@/components/item-group/index";
  import TeamCard from "@/components/card/TeamCard";
  import ListTeamCard from "@/components/card/ListTeamCard";

  export default {
    name: "Test",
    components: {ListTeamCard, TeamCard, ItemGroup, TableCard, FootTabbar},
    data() {
      return {
        text: '测试',
        height: window.innerHeight - 200,
        error: false,
        loading: false,
        finished: false,
        list: [],
        setting: {
          title: '测试',
          icon: 'home-o',
          title_color: 'red',
          title_desc: '测试描述',
          style: {
            scrollWidth: '500px'
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

<style lang="scss" scoped>
  .main{
    background-color: $gray-shallow;
  }
</style>
