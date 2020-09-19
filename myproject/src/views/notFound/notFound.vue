<template>
  <div class="background">
    <Header title="敬请期待" @click-left="clickLeft"></Header>
    <div style="margin-top: 100px;text-align: center;">功能开发中,{{ second }}秒后自动返回主页</div>
  </div>
</template>

<script>
  import BaseForm from "@/components/BaseForm";

  export default {
    name: "notFound",
    extends: BaseForm,
    data() {
      return {
        second: 3,
        timeOut: null,
      }
    },
    mounted() {
      this.timeOut = setInterval(() => {
        if (this.second !== 0) {
          this.$set(this, 'second', this.second - 1);
        } else {
          clearInterval(this.timeOut);
          this.$router.back(-1);
        }
      }, 1000)
    },
    methods:{
      clickLeft(){
        clearInterval(this.timeOut);
      },
    },
    beforeDestroy() {
      clearInterval(this.timeOut);
    },
  }
</script>

<style lang="scss" scoped>
  .background {
    background-color: #fff;
  }
</style>
