<template>
  <div style="margin-top: 10px;">
    <van-field
      v-model="formData.compName"
      readonly
      label="竞赛名称" />
    <van-field
      v-model="formData.CompName"
      readonly
      label="竞赛类型" />
    <van-field
      v-model="formData.teacher"
      readonly
      label="指导老师" />
    <van-field
      v-model="formData.personNum"
      readonly
      label="人数限制" />
    <van-field
      v-model="formData.startTime"
      readonly
      label="开始时间" />
    <van-field
      v-model="formData.endTime"
      readonly
      label="结束时间" />
    <van-field
      v-model="formData.compIntro"
      readonly
      type="textarea"
      rows="4"
      autosize
      label="竞赛描述" />
    <van-goods-action>
      <van-goods-action-icon icon="wap-home-o" to="/frontend/home" text="主页" />
      <van-goods-action-icon icon="chat-o" text="联系老师" @click="onClickIcon" />
      <van-goods-action-icon icon="gem-o" to="/frontend/competition" text="已参与竞赛" />
      <van-goods-action-button
        type="danger"
        text="立即报名"
        :disabled="
        $route.query.compStateId !== '1'
        && $route.query.compStateId !== '2'
        || getValueSafelyOrDefault($route.query,'passtatus','') === '已申请'"
        @click="onClickButton"
      />
    </van-goods-action>
  </div>
</template>

<script>
  import * as api from "@/api/api"
  import baseMixin from "@/mixin/baseMixin";
  import {Toast} from "vant"

  export default {
    name: "CompDetail",
    mixins: [baseMixin],
    data() {
      return {
        text: '',
        formData: {
          CompName: '',
          compIntro: '',
          compName: '',
          startTime: '',
          endTime: '',
          teacher: '',
          personNum: '',
        },
      }
    },
    methods: {
      onClickMyComp() {
        Toast.fail('非常抱歉,暂无老师联系方式');
      },
      onClickIcon() {
        Toast.fail('非常抱歉,暂无老师联系方式');
      },
      onClickButton() {
        Toast('点击按钮');
      },
    },
    mounted() {
      this.id = this.getValueSafelyOrDefault(this.$route.query, 'id', null);
      api.competition.detail({CompId: this.id}).then(res => {
        this.formData = res.data
      })
    }
  }
</script>

<style lang="scss" scoped>
  .van-goods-action-icon {
    width: 70px;
  }
</style>
