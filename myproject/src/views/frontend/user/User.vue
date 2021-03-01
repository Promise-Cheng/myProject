<template>
  <div>
    <div class="store_header">
      <div class="store_avatar">
        <img src="../../../assets/images/avatar_default.png" alt="头像" width="55" height="55">
      </div>
      <div class="store_name">
        <div class="user_name">
          <div class="content" style="margin-right: 20px">姓名：{{ user.stuName }}</div>
        </div>
        <div class="user_info">
          <div class="content" style="margin-right: 20px">学号：{{ user.stuNum }}</div>
        </div>
      </div>
    </div>
    <van-cell class="margin-top-8" title="班级：" :value="user.class" />
    <van-cell title="联系电话：" :value="user.phoneNum" />
    <div class="margin-top-8">
      <van-button size="large" class="tabbar-user__quit" @click="quit">退出当前账户</van-button>
    </div>
  </div>
</template>

<script>
import baseMixin from "@/mixin/baseMixin";

export default {
  name: "User",
  mixins: [baseMixin],
  data() {
    return {
      userName: '测试',
    }
  },
  methods: {
    quit() {
      this.$router.push('/login')
    },
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.store_header {
  display: flex;
  justify-content: flex-start;
  text-align: left;
  padding: 30px 30px;
  background-color: #fff;

  .store_avatar img {
    border-radius: 50%;
  }

  .store_name {
    width: 100%;
    padding-top: 5px;
    margin-left: 20px;
  }
}

.user_name {
  display: flex;
  justify-content: flex-start;
  font-size: $font-size-big;
}

.user_info {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  color: $gray-deep;
  font-size: $font-size-small;
}

.short_content {
  width: 80px;
}

.content {
  width: 70%;
}

.long-content {
  width: 150px;

}

.tabbar-user {
  > div {
    margin-bottom: 10px;
  }

  &__quit {
    border: 0;
    border-radius: 0;
  }
}
</style>
