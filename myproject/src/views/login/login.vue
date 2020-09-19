<template>
  <div class="login" :style="{height:height}">
    <login-header :title="sysParams.name" />
    <login-request />
    <login-footer :footer-tips="'Copyright@2020 浙江理工大学Team ALL rights reserved'" />
  </div>
</template>

<script>
  import loginHeader from './login-header';
  import loginRequest from './login-request';
  import loginFooter from './login-footer';
  import baseMixin from "@/mixin/baseMixin";

  export default {
    name: 'login',
    mixins: [baseMixin],
    components: {loginHeader, loginRequest, loginFooter},
    data() {
      return {
        height: window.innerHeight + 'px',
      }
    }
  };
</script>


<style lang="scss" scoped>
</style>
