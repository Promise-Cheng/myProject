<template>
  <div>
    <van-card
      :desc="desc"
      :title="title"
      :thumb="thumb"
      @click-thumb="onClickThumb()"
    >
      <template #tag>
        <van-tag mark :type="tagType">{{ status }}</van-tag>
      </template>
      <template #tags>
        <van-tag plain type="warning">{{ compType }}</van-tag>
        <van-tag plain :type="tagsType">{{ Passtatus }}</van-tag>
        <div style="margin-top: 10px;display: flex; justify-content:space-between">
          <div>开始时间:{{ startTime }}</div>
          <div>结束时间:{{ endTime }}</div>
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
      IsPass: {      //竞赛名称
        type: Number,
        default: 1,
      },
      Passtatus: {      //竞赛名称
        type: String,
        default: '报名中',
      },
      title: {      //竞赛名称
        type: String,
        default: '竞赛名称',
      },
      tag: {
        type: String,
        default: '',
      },
      desc: {
        type: String,
        default: '描述信息',
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
        default: '竞赛类型',
      },
      startTime: {
        type: String,
        default: 'startTime',
      },
      endTime: {
        type: String,
        default: 'endTime',
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
        switch (this.Passtatus) {
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
      },
    }
  }
</script>

<style scoped>

</style>
