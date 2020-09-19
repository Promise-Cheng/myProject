<template>
  <van-tabbar v-model="active" route>
    <template v-for="item in tabbarList">
      <van-tabbar-item
        :icon="item.icon"
        :to="item.path"
        v-if="getValueSafelyOrDefault(item,'type','')=== 'customize'"
        :badge="getValueSafelyOrDefault(item,'badge','')">
        <span>{{ item.title }}</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item
        :icon="item.icon"
        :to="item.path"
        v-else>
        {{ item.title }}
      </van-tabbar-item>
    </template>
  </van-tabbar>
</template>

<script>
  import baseMixin from "@/mixin/baseMixin";

  export default {
    name: "FootTabbar",
    mixins: [baseMixin],
    props: {
      tabbarList: {
        type: Array,
        default: () => {
          return [];
        }
      }
    },
    data() {
      return {
        active: 0,
        icon: {
          active: 'https://img.yzcdn.cn/vant/user-active.png',
          inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
        },
      };
    },
  }
</script>

<style scoped>

</style>
