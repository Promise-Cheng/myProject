<template>
	<div class="login" :style="{height:height}">
		<login-header />
		<login-request />
		<login-footer />
	</div>
</template>

<script>
import loginHeader from './login-header';
import loginRequest from './login-request';
import loginFooter from './login-footer';

export default {
  name:'login',
  components: {loginHeader, loginRequest, loginFooter},
  data(){
    return{
      height: window.innerHeight + 'px',
    }
  }
};
</script>


<style lang="scss" scoped>
.login {
  position: relative;
  background-color: #fff;
}
</style>
