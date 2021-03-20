<template>
  <div class="goods-analysis mb23">
    <h1 class="flex">
      <div class="icon30 mr20"><img src="../assets/icon-goods.png" alt=""></div>
      <span class="color6f font14">成交商品</span>
    </h1>
    <el-row>
      <el-col :span="4">
        <div class="">
          <div class="flex align-center mb15">
          </div>
          <div class="purple font18 bold align-left"></div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="">
          <div class="flex align-center mb15">
            <img class="icon20 mr2" src="../assets/icon-eye.png" alt="">
            <p class="title color6f font12">商品订单数</p>
          </div>
          <div class="purple font18 bold align-left">9.5W</div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="">
          <div class="flex align-center mb15">
            <img class="icon20 mr2" src="../assets/icon-time.png" alt="">
            <p class="title color6f font12">客单价（元）</p>
          </div>
          <div class="data font14 color6f align-left">7分45秒</div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="">
          <div class="flex align-center mb15">
            <img class="icon20 mr2" src="../assets/icon-person.png" alt="">
            <p class="title color6f font12">查看购物车数据</p>
          </div>
          <div class="data font14 color6f align-left">23,455</div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="">
          <div class="flex align-center mb15">
            <img class="icon20 mr2" src="../assets/icon-person.png" alt="">
            <p class="title color6f font12">商品点击数</p>
          </div>
          <div class="data font14 color6f align-left">23,455</div>
        </div>
      </el-col>
    </el-row>
    <el-table :data="data" style="width: 100%">
      <el-table-column
      header-align="center"
        label="商品">
        <template slot-scope="scope">
          <div class="flex">
            <el-image style="width: 100px; height: 100px" :src="scope.row.img"></el-image>
            <div class="ml20">
              <p>{{scope.row.title}}</p>
              <el-tag effect="plain">
                食品
              </el-tag>
              <font class="font18 bold color48">￥89.00</font>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="salseNum"
        label="销量"
        header-align="center"
        align="right"
        width="180">
      </el-table-column>
      <el-table-column
        prop="amount"
        label="成交金额(元)"
        header-align="center"
        align="right"
        width="180">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'flowAnalysis',
  data(){
    return{
        data:[
          {
            title:"硅胶热水袋注水学生便携式暖手袋套迷你小号可爱随身暖手宝暖水袋",
            img:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            salseNum:'89000',
            amount:'83867867'
          },{
            title:"硅胶热水袋注水学生便携式暖手袋套迷你小号可爱随身暖手宝暖水袋",
            img:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            salseNum:'89000',
            amount:'83867867'
          }
        ]
      }
  },
  mounted(){
  }
}
</script>
<style lang="less" scoped>
.goods-analysis{
  padding: 19px 16px;
  width: 935px;
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