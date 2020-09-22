<template>
  <item-group v-bind="$attrs">
    <template #title_right>
      <div class="title_right " @click="goToAllComp">
        {{ titleRight }}
        <van-icon name="arrow" />
      </div>
    </template>
    <template #default>
      <div v-for="(item,index) in showList" :key="`item${index}`" style="margin-left: 10px;margin-bottom: 10px">
        <team-card
          :id="item.id"
          :title="item.name"
          :desc="item.description"
          :captain-name="item.captainName"
          :captain-num="item.captainNum"
          :passtatus="item.Passtatus"
          style="margin-top: 10px;width: 280px"
          @click-thumb="clickThumb"></team-card>
      </div>
    </template>
  </item-group>
</template>

<script>
  import ItemGroup from "@/components/item-group/index";
  import TableCard from "@/components/card/TableCard";
  import baseMixin from "@/mixin/baseMixin";
  import moment from 'moment'
  import TeamCard from "@/components/card/TeamCard";

  export default {
    name: "HomeTeamCard",
    components: {TeamCard, ItemGroup, TableCard},
    mixins: [baseMixin],
    props: {
      titleRight: {
        type: String,
        default: '',
      },
      list: {
        type: Array,
        default: ([]),
      },
      clickThumb: {
        type: Function,
        default: () => {

        }
      }
    },
    data() {
      return {
        showList: []
      }
    },
    methods: {
      goToAllComp(){
        this.$router.push({
          path:'/frontend/all-comp',
        })
      },
      changeData(data) {
        let midData = [];
        _.forEach(data, item => {
          midData.push({
            id: item.teamId,
            name: item.teamName,
            description:item.teamIntro,
            captainName: item.stuName,
            captainNum: item.stuNum,
            Passtatus: item.Passtatus,
          })
        })
        return midData
      },
    },
    watch: {
      list(value) {
        this.showList = this.changeData(value);
      }
    }
  }
</script>

<style scoped>
  .title_right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
</style>
