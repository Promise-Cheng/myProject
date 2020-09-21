<template>
  <item-group v-bind="$attrs">
    <template #title_right>
      <div class="title_right ">
        {{ titleRight }}
        <van-icon name="arrow" />
      </div>
    </template>
    <template #default>
      <div v-for="(item,index) in showList" :key="`item${index}`" style="margin-left: 10px">
        <table-card
          :show-time="true"
          :is-pass="item.IsPass"
          :passtatus="item.Passtatus"
          :compStateID="item.compStateID"
          :title="item.name"
          :tag="item.status"
          :desc="item.description"
          :start-time="item.startTime"
          :end-time="item.endTime"
          :status="item.status"
          :comp-type="item.compType"
          style="margin-top: 10px"
          @click-thumb="clickThumb"></table-card>
      </div>
    </template>
  </item-group>
</template>

<script>
  import ItemGroup from "@/components/item-group/index";
  import TableCard from "@/components/card/TableCard";
  import baseMixin from "@/mixin/baseMixin";
  import moment from 'moment'

  export default {
    name: "HomeCompCard",
    components: {ItemGroup, TableCard},
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
    mounted() {
      this.showList = this.changeData(this.list);
    },
    methods: {
      changeData(data) {
        let midData = [];
        _.forEach(data, item => {
          midData.push({
            id: item.CompId,
            status: item.CompStateName,
            compType: item.CompTypeName,
            name: item.compName,
            compStateID: item.compStateID,
            description: this.getValueSafelyOrDefault(item,'compIntro',''),
            endTime: moment(this.getValueSafelyOrDefault(item,'obEndTime','')).format('YYYY-MM-DD HH:mm:ss'),
            startTime: moment(this.getValueSafelyOrDefault(item,'obStartTIme','')).format('YYYY-MM-DD HH:mm:ss'),
          })
        })
        return midData
      },
    },
  }
</script>

<style scoped>
  .title_right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
</style>
