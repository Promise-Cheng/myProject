<template>
  <div>
    <list-card :show-search="true" :status="-1" api="list"></list-card>
    <foot-tabbar-not-home
      :show-contact-teacher="true"
      :show-my-comp="true"
      :show-my-team="true"></foot-tabbar-not-home>
  </div>
</template>

<script>
  import ListCard from "@/components/card/ListCard";
  import FootTabbarNotHome from "@/components/footTabbar/FootTabbarNotHome";

  export default {
    name: "AllCompetition",
    components: {FootTabbarNotHome, ListCard},
    data(){
      return {
        value:'',
      }
    },
    methods: {
      onClickButton() {
        this.$router.push({
          path: '/frontend/team',
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
</style>
