<template>
  <div>
    <van-card
      :desc="desc"
      :title="title"
      :thumb="thumb"
    >
      <template #tags>
        <van-tag plain :type="tagType">{{ statusName }}</van-tag>
        <van-tag plain type="warning">{{ compType }}</van-tag>
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
      title: {
        type: String,
        default: '竞赛名称',
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
    },
    computed: {
      tagType() {
        switch (this.status) {
          case '0':
          case '1':
            return 'primary';
          case '2':
            return 'success'
          case '3':
          case '4':
            return 'danger'
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
      }
    }
  }
</script>

<style scoped>

</style>
