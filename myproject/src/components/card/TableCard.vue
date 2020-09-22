<template>
  <div>
    <van-card
      :desc="'描述：'+desc"
      :title="'名称：'+title"
      :thumb="thumb"
      @click="onClickThumb()"
    >
      <template #tag>
        <van-tag mark :type="tagType">{{ status }}</van-tag>
      </template>
      <template #tags>
        <div style="display: flex; justify-content:flex-start;width: 120px">
          <van-tag plain style="margin-right: 10px;" type="warning">{{ compType }}</van-tag>
          <van-tag
            plain
            :type="tagsType"
            v-if="!showTime && !!passtatus">
            {{ passtatus }}
          </van-tag>
        </div>
        <div v-if="showTime" style="margin-top: 10px;">
          <div>开始时间:</div>
          <div>{{ startTime }}</div>
          <div>结束时间:</div>
          <div>{{ endTime }}</div>
        </div>
      </template>
      <!--      <template #footer>-->
      <!--        <van-button size="mini">按钮</van-button>-->
      <!--        <van-button size="mini">按钮</van-button>-->
      <!--      </template>-->
    </van-card>
  </div>
</template>

<script>
  export default {
    name: "TableCard",
    props: {
      id: {
        type: Number,
        default: '',
      },
      showTime: {      //竞赛名称
        type: Boolean,
        default: false,
      },
      IsPass: {      //竞赛名称
        type: Number,
        default: 1,
      },
      passtatus: {      //竞赛名称
        type: String,
        default: '',
      },
      title: {      //竞赛名称
        type: String,
        default: '',
      },
      tag: {
        type: String,
        default: '',
      },
      desc: {
        type: String,
        default: '',
      },
      thumb: {
        type: String,
        default: 'https://img.yzcdn.cn/vant/ipad.jpeg',
      },
      status: {
        type: String,
        default: '0',
      },
      compType: {
        type: String,
        default: '',
      },
      startTime: {
        type: String,
        default: '',
      },
      endTime: {
        type: String,
        default: '',
      },
      compStateID: {
        type: Number,
        default: 1,
      }
    },
    computed: {
      tagType() {
        switch (this.compStateID) {
          case 1:
          case 2:
            return 'primary';
          case 3:
            return 'success'
          case 4:
          case 5:
            return 'danger'
          default:
            return 'primary';
        }
      },
      tagsType() {
        switch (this.passtatus) {
          case '已拒绝':
            return 'danger';
          case '已通过':
            return 'success'
          default:
            return 'primary';
        }
      },
      statusName() {
        switch (this.status) {
          case '0':
          case '1':
            return '报名中';
          case '2':
            return '进行中';
          case '3':
          case '4':
            return '已结束';
          default:
            return '竞赛状态';
        }
      },
    },
    methods: {
      onClickThumb() {
        this.$emit('click-thumb');
        this.$router.push({
          path: 'comp-detail',
          query: {
            id: this.id,
            compStateId: this.compStateID,
            passtatus: this.passtatus,
          }
        })
      },
    }
  }
</script>

<style scoped>

</style>
