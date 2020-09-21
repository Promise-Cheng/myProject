<template>
  <div>
    <list-card :status="-1" api="list"></list-card>
    <van-goods-action>
      <van-goods-action-icon icon="wap-home-o" to="/frontend/home" text="主页" />
      <van-goods-action-icon icon="gem-o" to="/frontend/competition" text="已参与竞赛" />
    </van-goods-action>
  </div>
</template>

<script>
  import ListCard from "@/components/card/ListCard";
  export default {
    name: "AllCompetition",
    components: {ListCard}
  }
</script>

<style scoped>

</style>
