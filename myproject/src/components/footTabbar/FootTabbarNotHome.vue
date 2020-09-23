<template>
  <van-goods-action>
    <van-goods-action-icon
      icon="wap-home-o"
      to="/frontend/home"
      text="主页" />
    <van-goods-action-icon
      v-if="showContactTeacher"
      icon="chat-o"
      text="联系老师"
      @click="onContactTeacher" />
    <van-goods-action-icon
      v-if="showContactCaptain"
      icon="chat-o"
      text="联系队长"
      @click="onContactCaptain" />
    <van-goods-action-icon
      v-if="showMyComp"
      icon="gem-o"
      to="/frontend/competition"
      text="已参与竞赛" />
    <van-goods-action-button
      v-if="showMyTeam"
      type="danger"
      text="我的团队"
      @click="onClickButton"
    />
    <van-goods-action-button
      v-if="showJoinIn && !($route.query.passtatus==='已申请'||$route.query.passtatus==='已通过')"
      type="danger"
      text="申请加入"
      @click="clickJoinTeam"
    />
    <van-goods-action-button
      v-if="showJoinIn && ($route.query.passtatus==='已申请'||$route.query.passtatus==='已通过')"
      type="danger"
      :text="$route.query.passtatus==='已申请'?'取消申请':$route.query.passtatus==='已通过'?'退出团队':'申请加入'"
      @click="clickJoinTeam"
    />
    <van-goods-action-button
      v-if="showApproval"
      type="danger"
      text="审批申请者"
      @click="clickJoinTeam"
    />
    <template v-if="!isIllegal($route.query.compStateId)">
      <van-goods-action-button
        v-if="$route.query.compStateId === '1'|| $route.query.compStateId === '2'"
        type="danger"
        text="立即报名"
        :disabled="getValueSafelyOrDefault($route.query,'passtatus','') === '已申请'
        ||getValueSafelyOrDefault($route.query,'passtatus','') === '已通过'"
        @click="onClickButton"
      />
      <template v-if="$route.query.compStateId === '4'|| $route.query.compStateId === '5'">
        <van-goods-action-button
          type="danger"
          text="查看题目"
          :disabled="getValueSafelyOrDefault($route.query,'passtatus','') !== '已通过'"
          @click="onClickButton"
        />
      </template>
      <template v-if="$route.query.compStateId === '5'">
        <van-goods-action-button
          type="danger"
          text="查看成绩"
          :disabled="getValueSafelyOrDefault($route.query,'passtatus','') !== '已通过'"
          @click="onClickButton"
        />
      </template>
    </template>
  </van-goods-action>
</template>

<script>
  import baseMixin from "@/mixin/baseMixin";
  import {Toast} from "vant";

  export default {
    name: "FootTabbarNotHome",
    mixins: [baseMixin],
    props: {
      showApproval: {
        type: Boolean,
        default: false,
      },
      showContactCaptain: {
        type: Boolean,
        default: false,
      },
      showJoinIn: {
        type: Boolean,
        default: false,
      },
      showMyComp: {
        type: Boolean,
        default: false,
      },
      showContactTeacher: {
        type: Boolean,
        default: false,
      },
      showCompButton: {
        type: Boolean,
        default: false,
      },
      showMyTeam: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      onContactCaptain() {
        Toast.fail('非常抱歉,暂无队长联系方式');
      },
      onClickButton() {
        this.$router.push({
          path: '/frontend/team',
        })
      },
      onContactTeacher() {
        Toast.fail('非常抱歉,暂无老师联系方式');
      },
      clickJoinTeam() {
        Toast.fail('参加团队');
      },
    }
  }
</script>

<style lang="scss" scoped>
  .van-goods-action-icon {
    width: 70px;
  }
</style>
