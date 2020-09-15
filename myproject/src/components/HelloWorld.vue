<template>
  <div class="login">
    <login-header></login-header>
  </div>
</template>

<script>
  import * as api from '@/api/api'
  import LoginHeader from "@/views/login/login-header";

  export default {
    name: 'HelloWorld',
    components: {LoginHeader},
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      getList() {
        api.apiAddress.getList({}).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err);
          console.log(1111111);
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .login {
    position: relative;
    background-color: #fff;
  }
</style>
