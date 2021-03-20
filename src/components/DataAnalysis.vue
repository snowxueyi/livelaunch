<template>
  <div class="data-analysis mb23">
    <el-row>
      <el-col :span="8">
        <div class="">
          <div class="flex align-center mb15">
            <img class="icon20 mr2" src="../assets/icon-eye.png" alt="">
            <p class="title color48 font12">观看人数</p>
          </div>
          <div class="purple font28 bold align-left">9.5W</div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="">
          <div class="flex align-center mb15">
            <img class="icon20 mr2" src="../assets/icon-time.png" alt="">
            <p class="title color48 font12">人均停留时长</p>
          </div>
          <div class="data font20 align-left">7分45秒</div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="">
          <div class="flex align-center mb15">
            <img class="icon20 mr2" src="../assets/icon-person.png" alt="">
            <p class="title color48 font12">人气峰值</p>
          </div>
          <div class="data font20 align-left">23,455</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="less" scoped>
.data-analysis{
  padding: 19px 23px;
  width: 465px;
  background: #FFFFFF;
  box-shadow: 0px 0px 8px 0px rgba(190, 195, 213, 0.16);
  border-radius: 10px;
}
.icon20{
  width: 20px;
  height: 20px;
}
.purple{
  color: #A15DFF;
}
</style>