<template>
  <div class="login" :style="{height:height}">
    <login-header />
    <login-request />
    <login-footer />
  </div>
</template>

<script>
  import * as api from '@/api/api'
  import LoginHeader from "@/views/login/login-header";
  import LoginRequest from "@/views/login/login-request";
  import LoginFooter from "@/views/login/login-footer";

  export default {
    name: 'HelloWorld',
    components: {LoginHeader, LoginRequest, LoginFooter},
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        height: window.innerHeight + 'px',
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
