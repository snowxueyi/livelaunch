<template>
  <div class="flow-analysis mb23">
    <h1 class="flex">
      <div class="icon30 mr20"><img src="../assets/icon-portray.png" alt=""></div>
      <span class="color6f font14">用户画像</span>
    </h1>
    <div id="portray" class="echart"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts';
export default {
  name: 'flowAnalysis',
  data(){
    return{
      option : {
        legend: {
          top: 'bottom'
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
                itemStyle: {
                    borderRadius: 8
                },
                data: [
                    {value: 11, name: '男生'},
                    {value: 89, name: '女生'},
                ]
            }
        ]
      }
    }
  },
  mounted(){
    var chartDom = document.getElementById('portray');
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