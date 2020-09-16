<template>
  <div class="text-desc text-center bottom_positon">{{ footerTips }}</div>
</template>

<script>
  export default {
    name: 'login-footer',
    props: {
      footerTips: {
        type: String,
        default: '',
      }
    }
  };
</script>


<style scoped>
  .bottom_positon {
    position: absolute;
    bottom: 30px;
    width: 100%;
  }
</style>
