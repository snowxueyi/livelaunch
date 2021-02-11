<template>
  <div class="live flex">
    <div class="left flex-7 mr20">
      <div class="top flex align-center flex-between">
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
    </div>
    <div class="right flex-2">
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
      <div class="person-statics mb23">
        <h1 class="flex">
          <div class="icon30 mr20"><img src="../assets/icon-statics.png" alt=""></div>
          <span class="color6f font14">数据统计</span>
        </h1>
        <div class="border-bottom">
          <h2 class="medium color2f font14 align-left">互动数据</h2>
          <el-row>
            <el-col :span="8">
              <div class="">
                <p class="title color48">关注数</p>
                <p class="data font18 bold">23,455</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="">
                <p class="title color48">评论数</p>
                <p class="data font18 bold">23,455</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="">
                <p class="title color48">分享数</p>
                <p class="data font18 bold">23,455</p>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="">
                <p class="title color48">关注数</p>
                <p class="data font18 bold">23,455</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="">
                <p class="title color48">评论数</p>
                <p class="data font18 bold">23,455</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="">
                <p class="title color48">分享数</p>
                <p class="data font18 bold">23,455</p>
              </div>
            </el-col>
          </el-row>
          <p class="mt35 align-left color48">超一分钟观看人员</p>
          <p class="colorc7 align-left">次日公布</p>
        </div>
        <div>
          <h2 class="medium color2f font14 align-left">交易数据</h2>
          <el-row>
            <el-col :span="8">
              <div class="">
                <p class="title color48">商品订单人数</p>
                <p class="data font18 bold">23,455</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="">
                <p class="title color48">商品下单数</p>
                <p class="data font18 bold">23,455</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="">
                <p class="title color48">商品下单数</p>
                <p class="data font18 bold">23,455</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="hot-city bg-write">
        <h1 class="flex">
          <div class="icon30 mr20"><img src="../assets/icon-city.png" alt=""></div>
          <span class="color6f font14">观看热门城市</span>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
}
.person-info{
  height: 144px;
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
.person-statics{
  padding: 19px 23px;
  background-color: #fff;
  box-shadow: 0px 0px 8px 0px rgba(190, 195, 213, 0.16);
  border-radius: 10px;
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
img{
  height: 100%;
  widows: 100%;
  display: block;
}
.blue{
  color: #354EFF;
}

</style>
