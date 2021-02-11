<template>
  <div class="data-trend mb23">
    <h1 class="flex">
      <div class="icon30 mr20"><img src="../assets/icon-flow.png" alt=""></div>
      <span class="color6f font14">数据趋势</span>
    </h1>
    <div id="trend" class="echart"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts';
export default {
  name: 'flowAnalysis',
  data(){
    return{
        option:{
          tooltip: {
          trigger: 'axis'
        },
        legend: {
            data: ['观看数', '订单数', '评论数', '粉丝团数', '涨粉数']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['8:00', '8:15', '8:30', '8:45', '9:00', '9:15', '9:30']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '观看数',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '订单数',
                type: 'line',
                stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '评论数',
                type: 'line',
                stack: '总量',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '粉丝团数',
                type: 'line',
                stack: '总量',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '涨粉数',
                type: 'line',
                stack: '总量',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        }
      }
  },
  mounted(){
    var chartDom = document.getElementById('trend');
    var myChart = echarts.init(chartDom);
    this.option && myChart.setOption(this.option);
  }
}
</script>
<style lang="less" scoped>
.data-trend{
  padding: 19px 16px;
  background-color: #fff;
  box-shadow: 0px 0px 8px 0px rgba(190, 195, 213, 0.16);
  border-radius: 10px;
}
.echart{
  width: 900px;
  height: 378px;
}
</style>