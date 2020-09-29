<template>
  <div>
    <list-team-card :api="'myTeams'" :show-button="true"></list-team-card>
  </div>
</template>

<script>
import ListTeamCard from "@/components/card/ListTeamCard";
export default {
name: "ChooseTeam",
  components: {ListTeamCard}
}
</script>

<style scoped>

</style>
