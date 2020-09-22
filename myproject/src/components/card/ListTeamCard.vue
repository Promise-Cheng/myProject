<template>
  <div>
    <van-search
      v-if="showSearch"
      v-model="params.keywords"
      show-action
      placeholder="请输入搜索关键词"
      @cancel="onCancel">
      <template #action>
        <div @click="onSearch" style="width: 50px; text-align: center">搜索</div>
      </template>
    </van-search>
    <van-pull-refresh v-if="showRefresh" v-model="refreshing" @refresh="onRefresh"
                      :style="{overflow: 'auto',height: (height-(showSearch?60:0))+'px'}">
      <van-list
        v-model="loading"
        :error.sync="error"
        error-text="请求失败，点击重新加载"
        :finished="finished"
        finished-text="没有更多数据了"
        :immediate-check="false"
        :offset="0"
        @load="onLoad"
      >
        <div class="totalNum">
          共{{ total }}条数据
        </div>
        <div v-for="(item,index) in listData" :key="`item${index}`">
          <team-card
            :id="item.id"
            :title="item.name"
            :desc="item.description"
            :captain-name="item.captainName"
            :captain-num="item.captainNum"
            :passtatus="item.Passtatus"
            :teamPosition="item.teamPosition"
            style="margin-top: 10px"
          >
          </team-card>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
  import * as api from "@/api/api"
  import TeamCard from "@/components/card/TeamCard";
  import baseMixin from "@/mixin/baseMixin";

  export default {
    name: "ListTeamCard",
    mixins: [baseMixin],
    components: {TeamCard},
    props: {
      showSearch: {
        type: Boolean,
        default: false,
      },
      showRefresh: {
        type: Boolean,
        default: true,
      },
      api: {
        type: String,
        default: 'list',
      },
      status: {
        type: Number,
        default: 0,
      },
      height: {
        type: Number,
        default: window.innerHeight - 100
      },
    },
    computed: {},
    data() {
      return {
        loading: false,
        finished: false,
        error: false,
        refreshing: false,
        listData: [],
        params: {
          page: 1,
          size: 10,
          keywords: '',
        },
        total: 0,
      }
    },
    mounted() {
      this.onLoad(this.params)
    },
    methods: {
      onSearch() {
        api.team.findTeamByName({content: this.params.keywords}).then((res) => {
          this.listData = this.changeData(res.data);
          this.total = res.data.length;
          if (this.listData.length >= this.total) {
            this.finished = true;
          }
        })
      },
      onCancel() {

      },
      onLoad() {
        this.getList(this.params)
      },
      onClickThumb() {
        // console.log(this.$refs.tableCard)
        // api.competition.detail({CompId: this.listData.CompId}).then(res => {
        //
        // })
      },
      onRefresh() {
        // 清空列表数据
        this.params.keywords = '';
        this.finished = false;
        this.params.page = 1;
        // 重新加载数据
        // 将 loading 设置为 true，表示处于加载状态
        // this.loading = true;
        this.onLoad();
      },
      /**
       * 数据解析为显示数据
       * @param data
       * @returns {[]}
       */
      changeData(data) {
        let midData = [];
        _.forEach(data, item => {
          midData.push({
            id: item.teamId,
            name: item.teamName,
            description: item.teamIntro,
            captainName: item.stuName,
            captainNum: item.stuNum,
            Passtatus: item.Passtatus,
            teamPosition: item.Role,
          })
        })
        return midData
      },
      getList(params) {
        setTimeout(() => {
          api.team[this.api]({...params}).then((res) => {
            if (this.refreshing) {
              this.listData = this.changeData(res.data);
            } else
              this.listData = [...this.listData, ...this.changeData(res.data)];
            if (this.isIllegal(res.Sum)) {
              this.total = this.listData.length;
            } else
              this.total = res.Sum;
            this.params.page++;
            if (this.listData.length >= this.total) {
              this.finished = true;
            }
            this.loading = false;
            this.refreshing = false;
          })
        }, 1000)
      },
    },
    watch: {
      // listData(value) {
      //
      // }
    }
  }
</script>

<style lang="scss" scoped>
  .totalNum {
    color: $font-color-gray;
    font-size: $font-size-normal;
  }
</style>
