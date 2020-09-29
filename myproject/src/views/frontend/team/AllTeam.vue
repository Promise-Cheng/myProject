<template>
  <div>
    <list-team-card :show-search="true" api="list"></list-team-card>
    <foot-tabbar-not-home
      :show-my-team-icon="true"
      :show-create-team="true"></foot-tabbar-not-home>
  </div>
</template>

<script>
  import FootTabbarNotHome from "@/components/footTabbar/FootTabbarNotHome";
  import ListTeamCard from "@/components/card/ListTeamCard";

  export default {
    name: "AllTeam",
    components: {ListTeamCard, FootTabbarNotHome}
  }
</script>

<style scoped>

</style>
