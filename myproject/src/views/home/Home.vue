<template>
  <div>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
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
            :text="'竞赛总数:'+ getValueSafelyOrDefault(allNum,'CompNum',0)" />
          <van-grid-item
            icon="user-o"
            :text="'使用人数:'+ getValueSafelyOrDefault(allNum,'personNum',0)" />
        </van-grid>
      </div>
      <div style="margin-top:10px;">
        <item-group :setting="workFlowSetting">
          <template #title_right>
            <div @click="moreWorkFlow" class="title_right">
              更多流程
              <van-icon name="arrow" />
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
        <home-comp-card :list="this.latestList" :setting="latestSetting" title-right="更多竞赛"></home-comp-card>
      </div>
      <div style="margin-top:10px;margin-bottom: 10px">
        <item-group :setting="teamSetting">
          <template #title_right>
            <div class="title_right">
              <div>更多团队</div>
              <van-icon name="arrow" />
            </div>
          </template>
          <template #default>
            <template v-if="list.length !== 0">
              <div v-for="(item,index) in list" :key="`item${index}`">
                <table-card style="margin-left: 10px;margin-bottom: 10px;" @click-thumb="clickThumb"></table-card>
              </div>
            </template>
            <div v-else class="nodata">暂无数据</div>
          </template>
        </item-group>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
  import FootTabbar from "@/components/footTabbar/FootTabbar";
  import TableCard from "@/components/card/TableCard";
  import baseMixin from "@/mixin/baseMixin";
  import ItemGroup from "@/components/item-group/index";
  import WorkFlow from "@/components/workFlow/workFlow";
  import * as api from "@/api/api"
  import {Toast} from 'vant'
  import HomeCompCard from "@/components/card/HomeCompCard";

  export default {
    name: "Home",
    mixins: [baseMixin],
    components: {HomeCompCard, WorkFlow, ItemGroup, TableCard, FootTabbar},
    data() {
      return {
        refreshing:'',
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
            scrollWidth: '500px'
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
      }
    },
    mounted() {
      this.getList()
      this.getLatestComp()
    },
    methods: {
      onRefresh() {
        // 清空列表数据
        setTimeout(()=>{
          this.refreshing = false;
        },1000)
        this.getList()
        this.getLatestComp()
      },
      moreWorkFlow() {
        Toast.fail('该功能正在开发中。');
      },
      clickThumb() {

      },
      getList() {
        api.common.getHomeData(null).then((res) => {
          this.allNum = _.cloneDeep(res.data);
        });
      },
      getLatestComp() {
        api.competition.latest({status: -1, size: 4}).then((res) => {
          this.latestList = _.cloneDeep(res.data)
        }).catch((err) => {
          console.log(err)
        })
      },
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

  .Mine-categories-swipe img {
    display: inline-block;
    width: 100%;
    height: 150px;
  }

  .title_right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .nodata {
    color: $gray;
    font-size: $font-size-small;
    text-align: center;
    width: 100%;
  }
</style>
