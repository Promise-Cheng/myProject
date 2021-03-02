<template>
  <div class="rank">
    <div class="rank-header">
      <div class="rank-header-left">
        <div class="rank-header-left-icon"></div>
        <div class="rank-header-left-name"></div>
        <div class="rank-header-left-score"></div>
      </div>
      <div class="divider-vertical__normal"></div>
      <div class="rank-header-right">
        排名：{{ data.rank }}
      </div>
    </div>
    <div class="rank-main">
      <div class="rank-main-table">
        <div class="rank-main-table-head">
          <van-row>
            <van-col span="8">span: 8</van-col>
            <van-col span="8">span: 8</van-col>
            <van-col span="8">span: 8</van-col>
          </van-row>
        </div>
        <div class="rank-main-table-body"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowRank",
  data(){
    return {
      data: {
        rank: 1,
        allData: []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.rank {
  height: 100%;
  &-header {
    margin: 8px 0;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background: #ffffff;
  }
}
</style>
