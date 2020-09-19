<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: "Main",
    data(){
      return {
        isRouterAlive: true,
        keepAliveList: [],
      }
    },
  }
</script>

<style scoped>

</style>
