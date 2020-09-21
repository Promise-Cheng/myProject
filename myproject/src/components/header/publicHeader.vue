<template>
  <div>
    <van-nav-bar
      :title="title"
      :left-text="leftText"
      :right-text="rightText"
      :left-arrow="leftArrow"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right v-if="rightIcon!==''">
        <van-icon :name="rightIcon" size="18" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
  export default {
    name: "publicHeader",
    props: {
      title: {
        type: String,
        default: "新用户注册",
      },
      leftText: {
        type: String,
        default: "返回",
      },
      rightText: {
        type: String,
        default: "",
      },
      leftArrow: {
        type: Boolean,
        default: true,
      },
      rightIcon: {
        type: String,
        default: '',
      }
    },
    data() {
      return {}
    },
    methods: {
      onClickLeft() {
        this.$emit('click-left')
        if(this.leftArrow){
          this.$router.back(-1);
        }
      },
      onClickRight() {
        this.$emit('click-right')
      },
    }
  }
</script>

<style lang="scss" scoped>
  /deep/ .van-ellipsis {
    color: #ffffff;
    text-align: center;
  }

  /deep/ .van-nav-bar {
    background-color: $red;
    text-align: center;
  }

  /deep/ .van-nav-bar__text {
    color: #ffffff;
    text-align: center;
  }

  /deep/ .van-icon {
    color: #ffffff;
    text-align: center;
  }
</style>
