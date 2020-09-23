<template>
  <div>
    <md-field-group>
      <md-field
        v-model="userName"
        icon="manager-o"
        placeholder="请输入用户名"
        right-icon="clear"
        name="user"
        @right-click="clearText"
      />
      <md-field
        v-model="password"
        icon="lock"
        placeholder="请输入密码"
        :type="visiblePass ? 'text' : 'password'"
        :right-icon="visiblePass ? 'eye-o' : 'closed-eye'"
        name="password"
        @right-click="visiblePass = !visiblePass"
      />
      <!--      <div class="clearfix">-->
      <!--        <div class="float-r">-->
      <!--          <router-link to="/login/forget">忘记密码</router-link>-->
      <!--        </div>-->
      <!--      </div>-->
      <van-button
        size="large"
        type="danger"
        :loading="isLogining"
        @click="loginSubmit"
      >登录
      </van-button>
    </md-field-group>
    <div class="register clearfix">
      <div class="float-l connect">
        <span @click="showKefu = true">联系管理员</span>
      </div>
      <div class="float-r">
        <router-link to="/register">注册新用户</router-link>
      </div>
    </div>
    <van-popup v-model="showKefu">
      <md-kefu mobile="" />
    </van-popup>
  </div>
</template>

<script>
  import field from '@/components/field/';
  import fieldGroup from '@/components/field-group/';
  import md_kefu from '@/components/md-kefu/';
  import BaseMixin from '@/mixin/baseMixin'
  import * as api from '@/api/api'
  import {Popup, Toast} from 'vant';

  export default {
    name: 'login-request',
    mixins: [BaseMixin],
    components: {
      [field.name]: field,
      [fieldGroup.name]: fieldGroup,
      [Popup.name]: Popup,
      [md_kefu.name]: md_kefu,
    },
    data() {
      return {
        userName: '',
        password: '',
        visiblePass: false,
        showKefu: false,
        isLogining: false,
      };
    },

    methods: {
      clearText() {
        this.userName = '';
      },
      checkField() {
        return !this.isNullOrEmptyStr(this.userName) || !this.isNullOrEmptyStr(this.password)
      },

      loginSubmit() {
        this.isLogining = true;
        if (!this.checkField()) {
          Toast('用户名或密码不能为空');
          this.isLogining = false;
          return;
        }
        api.common.login({stuNum: this.userName, password: this.password}).then((res) => {
          if (res.result === 'success') {
            this.isLogining = false;
            sessionStorage.setItem('ms_username', this.userName);
            sessionStorage.setItem('ms_password', this.password);
            this.$store.dispatch('getUserInfo');
            Toast.success('登录成功');
            this.$router.push('/frontend/home');
          } else {
            this.isLogining = false;
            Toast.fail('用户名或密码错误');
          }
        }).catch((err) => {
          Toast.fail(err);
          this.isLogining = false;
        })
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/mixin';

  .register {
    padding-top: 40px;
    color: $font-color-gray;

    a {
      color: $font-color-gray;
    }

    > div {
      width: 50%;
      box-sizing: border-box;
      padding: 0 20px;
    }

    .connect {
      @include one-border(right);
      text-align: right;
    }
  }
</style>
