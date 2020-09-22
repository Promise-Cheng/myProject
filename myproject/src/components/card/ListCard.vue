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
          <table-card
            ref='tableCard'
            :id="item.id"
            :show-time="false"
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
            @click-thumb="onClickThumb"
            style="margin-top: 10px"></table-card>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
  import TableCard from "@/components/card/TableCard";
  import * as api from "@/api/api"

  export default {
    name: "ListCard",
    components: {TableCard},
    props: {
      // listData: {
      //   type: Array,
      //   default: () => {
      //     return [];
      //   }
      // },
      // total: {
      //   type: Number,
      //   default: 0,
      // },
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
        default: 'listByStatus',
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
        api.competition.findCompByName({content: this.params.keywords}).then((res) => {
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
            id: item.CompId,
            status: item.CompStateName,
            compType: item.TypeName,
            name: item.compName,
            compStateID: item.compStateID,
            Passtatus: item.Passtatus,
            IsPass: item.IsPass
          })
        })
        return midData
      },
      getList(params) {
        setTimeout(() => {
          api.competition[this.api]({status: this.status, ...params}).then((res) => {
            if (this.refreshing) {
              this.listData = this.changeData(res.data);
            } else
              this.listData = [...this.listData, ...this.changeData(res.data)];
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
