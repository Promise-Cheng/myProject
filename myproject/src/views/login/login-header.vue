<template>
  <div>
    <van-nav-bar
      :title="systemName"
    />
    <div class="store_header">
      <div class="store_avatar">
        <img src="../../assets/images/avatar_default.png" alt="头像" width="55" height="55">
      </div>
          <div class="store_name">{{ userName }}</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'login-header',
    props:{
      systemName:{
        type:String,
        default:'我的系统'
      },
      userName:{
        type:String,
        default:''
      },
    },
  };
</script>

<style lang="scss" scoped>
  .store_header {
    margin-top: 30px;
    text-align: center;
    padding: 30px 0;

    .store_avatar img {
      border-radius: 50%;
    }

    .store_name {
      padding-top: 5px;
      font-size: 16px;
    }
  }
  /deep/ .van-ellipsis {
    color: #ffffff;
    text-align: center;
  }
  /deep/ .van-nav-bar {
    background-color: $red;
    text-align: center;
  }
</style>
