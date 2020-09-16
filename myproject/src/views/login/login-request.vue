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
  // import {USER_LOGIN, USER_PROFILE} from '@/api/user';
  // import {setLocalStorage} from 'core/utils/local-storage';
  // import {emailReg, mobileReg} from '@/core/regexp';

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
        return !this.isNullOrEmptyStr(this.userName) || !this.isNullOrEmptyStr(this.userName)
      },
      async validate() {
        const result = await this.$validator.validate();
        if (!result) {
          const errMsg = this.errors.items[0].msg;
          Toast(errMsg);
          throw new Error(`表单验证: ${errMsg}`);
        }
      },

      async login() {
        const loginData = this.getLoginData();
        const {data} = await this.$reqGet(USER_LOGIN, loginData);
        setLocalStorage({
          Authorization: data.data.access_token
        });
      },

      async loginSubmit() {
        this.isLogining = true;
        if(!this.checkField()){
          Toast('用户名或密码不能为空');
          this.isLogining = false;
          return ;
        }
        api.apiAddress.login({userName:this.userName,password:this.password}).then((res)=>{
          this.isLogining = false;
        }).catch((err)=>{
          console.log(err)
          Toast(err);
          this.isLogining = false;
        })
      },

      async getUserProfile() {
        const {
          data: {data}
        } = await this.$reqGet(USER_PROFILE);

        setLocalStorage({
          avatar: data.avatar,
          user_id: data.user_id,
          background_image: data.background_image,
          nick_name: data.nick_name
        });

        this.routerRedirect();
      },

      routerRedirect() {
        const {query} = this.$route;
        this.$router.replace({
          name: query.redirect || 'home',
          query: query
        });
      },

      getLoginData() {
        const password = this.password;
        const account = this.getUserType(this.account);
        return {
          [account]: this.account,
          password
        };
      },

      getUserType(account) {
        const accountType = mobileReg.test(account)
          ? 'mobile'
          : emailReg.test(account)
            ? 'email'
            : 'username';
        return accountType;
      }
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
