<template>
  <div>
    <van-steps @click-step="clickStep" :active="active">
      <template v-for="item in steps">
        <van-step>{{ item.name }}</van-step>
      </template>
    </van-steps>
    <div v-if="!showStepDetail">
      <template v-for="(item,index) in steps">
        <van-panel
          v-show="active===index"
          :title="item.name"
          :desc="getValueSafelyOrDefault(item,'desc','')" />
      </template>
    </div>
    <van-steps v-if="showStepDetail" direction="vertical" :active="active">
      <template v-for="item in steps">
        <van-step>
          <h3>{{ item.desc }}</h3>
          <p>{{ item.time }}</p>
        </van-step>
      </template>
      >
    </van-steps>
  </div>
</template>

<script>
  import baseMixin from "@/mixin/baseMixin";

  export default {
    name: "workFlow",
    mixins: [baseMixin],
    props: {
      steps: {
        type: Array,
        default: () => ([]),
      },
      showStepDetail: {
        type: Boolean,
        default: false,
      }
    },
    data() {
      return {
        active: 0,
      };
    },
    methods: {
      clickStep(index) {
        if (!this.showStepDetail) {
          this.active = index;
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
</style>
