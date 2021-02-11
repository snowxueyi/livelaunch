<template>
  <div class="flow-analysis mb23">
    <h1 class="flex">
      <div class="icon30 mr20"><img src="../assets/icon-flow.png" alt=""></div>
      <span class="color6f font14">直播流量分析</span>
    </h1>
    <div id="flow" class="echart"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts';
export default {
  name: 'flowAnalysis',
  data(){
    return{
      option : {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '40',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: 1048, name: '自然量'},
                    {value: 735, name: '品牌广告'},
                    {value: 580, name: '竞价广告'},
                    {value: 484, name: 'Dou+'}
                ]
            }
        ]
      }
    }
  },
  mounted(){
    var chartDom = document.getElementById('flow');
    var myChart = echarts.init(chartDom);
    this.option && myChart.setOption(this.option);
  }
}
</script>
<style lang="less" scoped>
.flow-analysis{
  padding: 19px 23px;
  background-color: #fff;
  box-shadow: 0px 0px 8px 0px rgba(190, 195, 213, 0.16);
  border-radius: 10px;
}
.echart{
  width: 420px;
  height: 315px;
}
</style>