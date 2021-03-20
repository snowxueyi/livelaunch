<template>
  <div class="person-statics mb23">
        <h1 class="flex">
          <div class="icon30 mr20"><img src="../assets/icon-statics.png" alt=""></div>
          <span class="color6f font14">数据统计</span>
        </h1>
        <div class="border-bottom">
          <h2 class="medium color2f font14 align-left mb10">互动数据</h2>
          <el-row>
            <el-col :span="8">
              <div class="mb10">
                <p class="title color48">关注数</p>
                <p class="data font18 bold">23,455</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="mb10">
                <p class="title color48">评论数</p>
                <p class="data font18 bold">23,455</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="mb10">
                <p class="title color48">分享数</p>
                <p class="data font18 bold">23,455</p>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="mb10">
                <p class="title color48">关注数</p>
                <p class="data font18 bold">23,455</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="mb10">
                <p class="title color48">评论数</p>
                <p class="data font18 bold">23,455</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="mb10">
                <p class="title color48">分享数</p>
                <p class="data font18 bold">23,455</p>
              </div>
            </el-col>
          </el-row>
          <p class="mt35 align-left color48 mb10">超一分钟观看人员</p>
          <p class="colorc7 align-left">次日公布</p>
        </div>
        <div>
          <h2 class="medium color2f font14 align-left mt10 mb10">交易数据</h2>
          <el-row>
            <el-col :span="8">
              <div class="mb10">
                <p class="title color48">商品订单人数</p>
                <p class="data font18 bold">23,455</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="mb10">
                <p class="title color48">商品下单数</p>
                <p class="data font18 bold">23,455</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="mb10">
                <p class="title color48">商品下单数</p>
                <p class="data font18 bold">23,455</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
</template>
<style lang="less" scoped>
.person-statics{
  padding: 19px 23px;
  background-color: #fff;
  box-shadow: 0px 0px 8px 0px rgba(190, 195, 213, 0.16);
  border-radius: 10px;
  .border-bottom{
    padding: 10px 0;
  }
  .mb10{
    margin-bottom: 10px;
  }
  .mt10{
    margin-top: 10px;
  }
}
</style>