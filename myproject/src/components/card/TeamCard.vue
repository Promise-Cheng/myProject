<template>
  <div>
    <van-card
      :desc="!!desc?('介绍：'+desc):''"
      :title="'名称：'+title"
      @click="onClickThumb()"
    >
      <template #thumb>
        <div>
          <img style="width: 90px;height: 90px" src="../../assets/images/team.jpg" alt="加载失败" />
        </div>
      </template>
      <template #tags>
        <div style="display: flex; justify-content:flex-start;width: 120px">
          <van-tag
            plain
            :type="tagsType"
            v-if="!!passtatus">
            {{ passtatus }}
          </van-tag>
        </div>
        <div v-if="!!teamPosition">队内职务:{{ teamPosition }}</div>
        <div style="display: flex; justify-content:space-between;flex-wrap:wrap;margin-top: 20px">
          <div v-if="!!captainName">队长名称:{{ captainName }}</div>
          <div v-if="!!captainNum">队长学号:{{ captainNum }}</div>
        </div>
      </template>
    </van-card>
  </div>
</template>

<script>
  export default {
    name: "TeamCard",
    props: {
      id: {
        type: Number,
        default: -1,
      },
      showPosition: {
        type: Boolean,
        default: false,
      },
      teamPosition: {
        type: String,
        default: '',
      },
      captainName: {
        type: String,
        default: '',
      },
      captainNum: {
        type: String,
        default: '',
      },
      passtatus: {
        type: String,
        default: '',
      },
      title: {
        type: String,
        default: '',
      },
      desc: {
        type: String,
        default: '',
      },
      thumb: {
        type: String,
        default: '../../assets/images/team.jpg',
      },
    },
    computed: {
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
    },
    methods: {
      onClickThumb() {
        this.$emit('click-thumb');
        this.$router.push({
          path: 'team-detail',
          query: {
            id: this.id,
            passtatus: this.passtatus,
            teamPosition:this.teamPosition
          }
        })
      },
    }
  }
</script>

<style scoped>

</style>
