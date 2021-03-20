<template>
<div class="person-info mb23">
  <div class="person-info-top flex align-center flex-between border-bottom">
    <div class="flex align-center">
      <div class="avatr mr20"></div>
      <div>
        <p class="font16 black medium">惊抖云数据</p>
        <p class="font12 color48">1.9亿粉丝</p>
      </div>
    </div>
    <div class="code">
      <img src="" alt="">
    </div>
  </div>
  <div class="person-info-bottom">
    累计直播<span class="blue bold">&nbsp;3,455&nbsp;</span>小时<span class="blue bold">&nbsp;54&nbsp;</span>分
  </div>
</div>
</template>
<style lang="less" scoped>
.person-info{
  height: 165px;
  padding: 20px 43px 24px 43px;
  background: #FFFFFF;
  box-shadow: 0px 0px 8px 0px rgba(190, 195, 213, 0.16);
  border-radius: 10px;
  .person-info-bottom{
    text-align: left;
    margin-top:20px;
  }
  .person-info-top{
    padding-bottom: 20px;
  }
}
.blue{
  color: #354EFF;
}
.avatr{
  width: 74px;
  height: 74px;
  border-radius: 50%;
  border:1px solid #eee
}
.code{
  width: 65px;
  height: 65px;
  border: 1px solid #eee;
}
</style>