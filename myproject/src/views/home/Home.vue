<template>
  <div>
    <div class="Mine-categories-swipe">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="../../assets/images/acm.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/images/BPO.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/images/dzsj.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/images/immc.jpg" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div style="margin-top:10px;">
      <van-grid :border="true" :column-num="3" :gutter="10">
        <van-grid-item
          icon="friends-o"
          :text="'团队总数:' + getValueSafelyOrDefault(allNum,'teamNum',0)" />
        <van-grid-item
          icon="gem-o"
          :text="'竞赛总数:'+ getValueSafelyOrDefault(allNum,'compNum',0)" />
        <van-grid-item
          icon="user-o"
          :text="'使用人数:'+ getValueSafelyOrDefault(allNum,'userNum',0)" />
      </van-grid>
    </div>
    <div style="margin-top:10px;">
      <item-group :setting="workFlowSetting">
        <template #title_right>
          <div @click="moreWorkFlow">
            更多流程
          </div>
        </template>
        <template #default>
          <div v-if="steps.length!==0" style="width: 100%">
            <work-flow :steps="steps"></work-flow>
          </div>
          <div v-else class="nodata">暂无数据</div>
        </template>
      </item-group>
    </div>
    <div style="margin-top:10px;">
      <item-group :setting="latestSetting">
<!--        <template #title_right>-->
<!--          <div>-->
<!--            正在进行-->
<!--          </div>-->
<!--        </template>-->
        <template #default>
          <div v-if="latestList.length !== 0">
            <div v-for="(item,index) in latestList" :key="`item${index}`">
              <table-card style="margin-top: 10px" @click-thumb="clickThumb"></table-card>
            </div>
          </div>
          <div v-else class="nodata">暂无数据</div>
        </template>
      </item-group>
    </div>
    <div style="margin-top:10px;">
      <item-group :setting="teamSetting">
<!--        <template #title_right>-->
<!--          <div>-->
<!--            正在进行-->
<!--          </div>-->
<!--        </template>-->
        <template #default>
          <div v-if="list.length !== 0">
            <div v-for="(item,index) in list" :key="`item${index}`">
              <table-card style="margin-top: 10px" @click-thumb="clickThumb"></table-card>
            </div>
          </div>
          <div v-else class="nodata">暂无数据</div>
        </template>
      </item-group>
    </div>
    <!--    <list-card :list-data="listData" :height="height" :total="total" @load="Load" @refresh="Refresh"></list-card>-->
  </div>
</template>

<script>
  import FootTabbar from "@/components/footTabbar/FootTabbar";
  import ListCard from "@/components/card/ListCard";
  import baseMixin from "@/mixin/baseMixin";
  import ItemGroup from "@/components/item-group/index";
  import WorkFlow from "@/components/workFlow/workFlow";
  import {Toast} from 'vant'

  export default {
    name: "Home",
    mixins: [baseMixin],
    components: {WorkFlow, ItemGroup, ListCard, FootTabbar},
    data() {
      return {
        height: window.innerHeight - 150,
        total: 40,
        allNum: {},
        list: [],
        steps: [
          {
            name: '创建团队',
            desc: '这是一段描述信息这是一段描述信息这是一段描述信息这是一段描述信息这是一段描述信息',
          },
          {
            name: '报名竞赛',
            desc: '这是一段描述信息这是一段描述信息这是一段描述信息这是一段描述信息这是一段描述信息',
          },
          {
            name: '提交作品',
            desc: '这是一段描述信息这是一段描述信息这是一段描述信息这是一段描述信息这是一段描述信息',
          },
          {
            name: '查看成绩',
            desc: '这是一段描述信息这是一段描述信息这是一段描述信息这是一段描述信息这是一段描述信息',
          },
        ],
        workFlowSetting: {
          title: '竞赛流程',
          icon: 'home-o',
          title_color: 'black',
          title_desc: '学生参加竞赛流程',
          style: {
            scrollWidth: '100%;'
          }
        },
        latestSetting: {
          title: '近期竞赛',
          icon: 'gem-o',
          title_color: 'black',
          title_desc: '近期有变动的竞赛',
          style: {
            scrollWidth: '100%;'
          }
        },
        latestList: [],
        teamSetting: {
          title: '卓越团队',
          icon: 'friends-o',
          title_color: 'black',
          title_desc: '近期表现良好的团队',
          style: {
            scrollWidth: '100%;'
          }
        },
        defaultListData: [
          {
            name: '测试竞赛',
            description: '测试竞赛',
            startTime: '测试竞赛',
            endTime: '测试竞赛',
            status: '测试竞赛',
            compType: '测试竞赛',
          }, {
            name: '测试竞赛',
            description: '测试竞赛',
            startTime: '测试竞赛',
            endTime: '测试竞赛',
            status: '测试竞赛',
            compType: '测试竞赛',
          }, {
            name: '测试竞赛',
            description: '测试竞赛',
            startTime: '测试竞赛',
            endTime: '测试竞赛',
            status: '测试竞赛',
            compType: '测试竞赛',
          }, {
            name: '测试竞赛',
            description: '测试竞赛',
            startTime: '测试竞赛',
            endTime: '测试竞赛',
            status: '测试竞赛',
            compType: '测试竞赛',
          }, {
            name: '测试竞赛',
            description: '测试竞赛',
            startTime: '测试竞赛',
            endTime: '测试竞赛',
            status: '测试竞赛',
            compType: '测试竞赛',
          }, {
            name: '测试竞赛',
            description: '测试竞赛',
            startTime: '测试竞赛',
            endTime: '测试竞赛',
            status: '测试竞赛',
            compType: '测试竞赛',
          },],
        listData: [
          {
            name: '测试竞赛',
            description: '测试竞赛',
            startTime: '测试竞赛',
            endTime: '测试竞赛',
            status: '测试竞赛',
            compType: '测试竞赛',
          },
          {
            name: '测试竞赛',
            description: '测试竞赛',
            startTime: '测试竞赛',
            endTime: '测试竞赛',
            status: '测试竞赛',
            compType: '测试竞赛',
          },
          {
            name: '测试竞赛',
            description: '测试竞赛',
            startTime: '测试竞赛',
            endTime: '测试竞赛',
            status: '测试竞赛',
            compType: '测试竞赛',
          },
          {
            name: '测试竞赛',
            description: '测试竞赛',
            startTime: '测试竞赛',
            endTime: '测试竞赛',
            status: '测试竞赛',
            compType: '测试竞赛',
          },
          {
            name: '测试竞赛',
            description: '测试竞赛',
            startTime: '测试竞赛',
            endTime: '测试竞赛',
            status: '测试竞赛',
            compType: '测试竞赛',
          },
          {
            name: '测试竞赛',
            description: '测试竞赛',
            startTime: '测试竞赛',
            endTime: '测试竞赛',
            status: '测试竞赛',
            compType: '测试竞赛',
          },
          {
            name: '测试竞赛',
            description: '测试竞赛',
            startTime: '测试竞赛',
            endTime: '测试竞赛',
            status: '测试竞赛',
            compType: '测试竞赛',
          },
          {
            name: '测试竞赛',
            description: '测试竞赛',
            startTime: '测试竞赛',
            endTime: '测试竞赛',
            status: '测试竞赛',
            compType: '测试竞赛',
          },
        ],
      }
    },
    methods: {
      moreWorkFlow() {
        Toast.fail('该功能正在开发中。');
      },
      clickThumb() {

      },
      Load() {
        setTimeout(() => {
          this.listData = [...this.listData, ...this.defaultListData];
        }, 1000)
      },
      Refresh() {
        setTimeout(() => {
          this.listData = [...this.defaultListData];
        }, 1000)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .my-swipe .van-swipe-item {
    margin-bottom: 10px;
    color: #fff;
    font-size: 20px;
    width: 100%;
    height: 150px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .Mine-categories-swipe img{
    display: inline-block;
    width: 100%;
    height: 150px;
  }
  .nodata {
    color: $gray;
    font-size: $font-size-small;
    text-align: center;
    width: 100%;
  }
</style>
