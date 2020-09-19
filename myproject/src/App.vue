<template>
  <div id="app" class="main">
    <router-view/>
  </div>
</template>

<script>
  export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
  .main{
    background-color: $gray-shallow-more;
  }
</style>
