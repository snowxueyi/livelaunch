<template>
  <div class="live flex">
    <div class="left flex-7 mr20">
      <div class="top flex align-center flex-between mb23">
          <div class="play-tips">
            <div class="flex align-center">
              <div class="img100 mr15"><img src="../assets/play-icon.png" alt=""></div>
              <span class="font24">直播中</span>
              <div class="date-flow">
                <p><span class="mr50">17:22开播</span> <span>下播</span></p>
                <p>本场+8000粉丝</p>
              </div>
            </div>
          </div>
          <div class="play-statistics flex">
            <div class="mr20 submit-money">
              <p>提交金额</p>
              <p class="yuan">
                <img src="../assets/yuan-icon.png" alt="">
              </p>
            </div>
            <div class="money">
              99,485,982.09
            </div>
          </div>
      </div>
      <div class="flex space-between">
        <div class="mr20">
          <flow-anlasis />
          <data-analysis />
          <portray />
        </div>
        <div>
          <data-trend />
          <goods-analysis />
        </div>
      </div>
    </div>
    <div class="right flex-2">
      <person-info></person-info>
      <person-statics />
      <hot-city />
    </div>
  </div>
</template>

<script>
import PersonStatics from '@/components/PersonStatics.vue'
import HotCity from '@/components/HotCity.vue'
import PersonInfo from '@/components/PersonInfo.vue'
import FlowAnlasis from '@/components/FlowAnlasis.vue'
import DataAnalysis from '@/components/DataAnalysis.vue'
import portray from '@/components/portray.vue'
import dataTrend from '@/components/dataTrend.vue'
import GoodsAnalysis from '@/components/GoodsAnalysis.vue'
export default {
  name: 'HelloWorld',
  components: {
    PersonStatics,
    HotCity,
    PersonInfo,
    FlowAnlasis,
    DataAnalysis,
    portray,
    dataTrend,
    GoodsAnalysis
  },
  data(){
    return{

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.live{
  width: 1920px;
  font-size: 14px;
  background: #F5F6FA;
  .top{
    height: 188px;
    background-image: url('../assets/bg-top.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 0 50px;
  }
  .flex-7{
    flex:7;
    -webkit-flex:7;
  }
  .flex-2{
    flex:2;
    -webkit-flex:2;
  }
  .play-statistics{
    color: #fff;
    .yuan{
      width: 33px;
      height: 33px;
      img{
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .money{
      font-size: 50px;
      font-weight: bold;
    }
    .submit-money{
      p{
        text-align: right;
      }
      margin-top: 10px;
    }
  }
  .play-tips{
    width: 472px;
    height: 96px;
    border-radius: 48px;
    background: rgba(0, 0, 0, 0.14);
    opacity: 0.85;
    color: #fff;
    padding:13px 14px
  }
  .img100{
    width: 70px;
    height: 70px;
    img{
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .date-flow{
    text-align: left;
    margin: 0 50px;
  }
  .space-between{
    justify-content: space-between;
  }
}
</style>
