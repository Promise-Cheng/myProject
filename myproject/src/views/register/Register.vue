<template>
  <div>
    <Header right-text="" @click-left="onClickLeft"></Header>
    <field-group class="register_submit">
      <field
        v-model="fieldData.stuNum"
        icon="manager-o"
        placeholder="请输入学号"
        type="digit"
        right-icon="clear"
        @right-click="clearText('stuNum')" />
      <field
        v-model="fieldData.password"
        icon="lock"
        placeholder="请输入密码"
        :type="visiblePass ? 'text' : 'password'"
        :right-icon="visiblePass ? 'eye-o' : 'closed-eye'"
        @right-click="visiblePass = !visiblePass" />
      <field
        v-model="fieldData.repeatPassword"
        icon="lock"
        placeholder="请再次确认密码"
        :type="visiblePass1 ? 'text' : 'password'"
        :right-icon="visiblePass1 ? 'eye-o' : 'closed-eye'"
        @right-click="visiblePass1 = !visiblePass1" />
      <div class="password-error" v-show="!isSamePassword">两次密码输入不相同！</div>
      <field
        v-model="fieldData.stuName"
        icon="smile-o"
        placeholder="请输入姓名"
        right-icon="clear"
        @right-click="clearText('stuName')" />
      <field
        v-model="fieldData.class_"
        icon="friends-o"
        placeholder="请输入班级"
        right-icon="clear"
        @right-click="clearText('class_')" />
      <field
        v-model="fieldData.QQ"
        icon="comment-o"
        type="digit"
        placeholder="请输入QQ"
        right-icon="clear"
        @right-click="clearText('QQ')" />
      <field
        v-model="fieldData.email"
        icon="envelop-o"
        placeholder="请输入邮箱"
        right-icon="clear"
        @right-click="clearText('email')" />
      <field
        v-model="fieldData.phoneNum"
        icon="phone-o"
        type="tel"
        placeholder="请输入手机号"
        right-icon="clear"
        @right-click="clearText('phoneNum')" />
      <div class="register_submit_btn">
        <van-button
          type="danger"
          size="large"
          :loading="isLogining"
          @click="registerSubmit">
          确定
        </van-button>
      </div>
    </field-group>
  </div>
</template>

<script>
  import BaseFrom from '@/components/BaseForm'
  import * as api from '@/api/api'
  import {Toast} from 'vant';

  export default {
    name: "Register",
    extends: BaseFrom,
    components: {Toast},
    data() {
      return {
        fieldData: {
          stuNum: '',
          password: '',
          repeatPassword: '',
          stuName: '',
          class_: '',
          QQ: '',
          email: '',
          phoneNum: '',
        },
        checkData:{
          stuNum: '用户名',
          password: '密码',
          repeatPassword: '',
          stuName: '姓名',
          class_: '班级',
          QQ: 'QQ',
          email: '邮箱',
          phoneNum: '电话',
        },
        isLogining: false,
        visiblePass: false,
        visiblePass1: false,
      }
    },
    computed:{
      isSamePassword(){
        return this.fieldData.password === this.fieldData.repeatPassword;
      }
    },
    methods: {
      onClickLeft() {
        this.$router.back(-1);
      },
      registerSubmit() {
        this.isLogining = true;
        if(!this.isSamePassword){
          Toast.fail('请输入相同的密码！')
        }
        this.checkField(this.fieldData,this.checkData)
        api.common.register(this.fieldData).then(res => {
          let data = _.cloneDeep(res.data.result);
          switch (data) {
            case 'success': Toast.success('注册成功'); this.$router.push('/login'); break;
            case 'exist': Toast.fail('该账户已存在'); break;
          }
          this.isLogining = false;
        }) .catch((err) => {
          this.isLogining = false;
          Toast.fail('网络错误');
        });
      },
      clearText(key) {
        this.$set(this.fieldData, key, '')
      },
    }
  }
</script>

<style lang="scss" scoped>
  .register_submit {
    padding-top: 40px;
    background-color: #fff;
  }
  .password-error{
    font-size: 10px;
    text-align: center;
    color: red;
  }
</style>
