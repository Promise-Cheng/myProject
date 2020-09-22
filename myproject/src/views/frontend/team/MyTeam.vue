<template>
  <list-team-card :api="'getMyTeam'"></list-team-card>
</template>

<script>
  import ListTeamCard from "@/components/card/ListTeamCard";

  export default {
    name: "MyTeam",
    components: {ListTeamCard}
  }
</script>

<style scoped>

</style>
