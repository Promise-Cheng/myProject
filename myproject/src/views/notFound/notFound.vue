<template>
  <div class="background">
    <Header title="敬请期待"></Header>
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
      }
    },
    mounted() {
      let TimeOut = setInterval(() => {
        if (this.second !== 0) {
          this.$set(this, 'second', this.second - 1);
        } else {
          clearInterval(TimeOut);
          this.$router.replace('/')
        }
      }, 1000)
    }
  }
</script>

<style lang="scss" scoped>
  .background {
    background-color: #fff;
  }
</style>
