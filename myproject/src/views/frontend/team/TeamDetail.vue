<template>
  <div style="margin-top: 10px;">
    <div style="margin-bottom: 10px;">
      <div class="detail_title">
        团队信息
      </div>
      <van-field
        v-model="formData.teamName"
        readonly
        label="团队名称" />
      <van-field
        v-model="formData.teamIntro"
        readonly
        label="团队介绍" />
    </div>
    <div v-if="$route.query.passtatus==='已通过'">
      <div class="detail_title">
        队员信息
      </div>
      <van-cell>
        <template #title>
          <div style="display: flex;justify-content: space-between;">
            <div class="short_table_item">姓名</div>
            <div class="long_table_item">班级</div>
            <div class="long_table_item">学号</div>
            <div class="long_table_item">电话</div>
          </div>
        </template>
      </van-cell>
      <template v-for="(item,index) in list">
        <van-cell
          :key="`captain${index}`">
          <template #title>
            <div style="display: flex;justify-content: space-between;">
              <div class="short_table_item">{{ item.stuName }}</div>
              <div class="long_table_item">{{ item.class }}</div>
              <div class="long_table_item">{{ item.stuNum }}</div>
              <div class="long_table_item">{{ item.phoneNum }}</div>
            </div>
          </template>
        </van-cell>
      </template>
    </div>
    <foot-tabbar-not-home
      show-contact-captain
      :show-approval="isCaptain"
      :show-join-in="!isCaptain"></foot-tabbar-not-home>
  </div>
</template>

<script>
  import FootTabbarNotHome from "@/components/footTabbar/FootTabbarNotHome";
  import * as api from '@/api/api'

  export default {
    name: "TeamDetail",
    components: {FootTabbarNotHome},
    data() {
      return {
        formData: {},
        list: [{}],
      }
    },
    computed:{
      isCaptain(){
        return this.$route.query.teamPosition==='队长';
      },
    },
    mounted() {
      this.getList()
    },
    methods: {
      getList() {
        api.team.detail({teamId: this.$route.query.id}).then(res => {
          this.list = _.cloneDeep(res.members);
          this.formData = _.cloneDeep(res.teamInfo)
        })
      },
    },

  }
</script>

<style lang="scss" scoped>
  .detail_title {
    color: $gray-deep;
    margin-right: 10px;
    margin-bottom: 10px;
    font-size: $font-size-big;
  }
  .long_table_item{
    width: 100px;
    text-align: center;
  }
  .short_table_item{
    width: 50px;
    text-align: center;
  }
</style>
