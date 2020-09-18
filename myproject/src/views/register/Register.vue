<template>
  <div>
    <Header right-text="" @click-left="onClickLeft"></Header>
    <field-group class="register_submit">
      <field
        v-model="fieldData.userName"
        icon="lock"
        placeholder="请输入用户名"
        right-icon="clear"
        name="user"
        @right-click="clearText('userName')" />
      <field
        v-model="fieldData.password"
        icon="lock"
        placeholder="请输入密码"
        :type="visiblePass ? 'text' : 'password'"
        :right-icon="visiblePass ? 'eye-o' : 'closed-eye'"
        name="password"
        @right-click="visiblePass = !visiblePass" />
      <field
        v-model="fieldData.repeatPassword"
        icon="lock"
        placeholder="请再次确认密码"
        :type="visiblePass1 ? 'text' : 'password'"
        :right-icon="visiblePass1 ? 'eye-o' : 'closed-eye'"
        name="password"
        @right-click="visiblePass1 = !visiblePass1" />

      <div class="register_submit_btn">
        <van-button type="danger" size="large" @click="registerSubmit">确定</van-button>
      </div>
    </field-group>
  </div>
</template>

<script>
  import BaseFrom from '@/components/BaseForm'

  export default {
    name: "Register",
    extends: BaseFrom,
    data() {
      return {
        fieldData:{
          userName: '',
          password: '',
          repeatPassword: '',
        },
        visiblePass: false,
        visiblePass1: false,
      }
    },
    methods: {
      onClickLeft() {
        this.$router.back(-1);
      },
      registerSubmit() {

      },
      clearText(key) {
        this.$set(this.fieldData,key,'')
      },
    }
  }
</script>

<style lang="scss" scoped>
  .register_submit {
    padding-top: 40px;
    background-color: #fff;
  }
</style>
