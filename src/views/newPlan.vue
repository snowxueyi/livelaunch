<template>
  <div class="plan">
    <div class="progress flex mb22">
      <div :class="`step step-1 flex flex1 align-center justify-center ${active==0?'active':''}`"><div class="circle mr15">1</div>投放目标</div>
      <div :class="`step step-2 flex flex1 mll20 align-center justify-center ${active==1?'active':''}`"><div class="circle mr15">2</div>定向人群和出价</div>
      <div :class="`step step-3 flex flex1 mll20 align-center justify-center ${active==2?'active':''}`"><div class="circle mr15">3</div>素材</div>
      <div :class="`step step-4 flex flex1 mll20 align-center justify-center ${active==3?'active':''}`"><div class="circle mr15x">4</div>开始投放</div>
    </div>
    <div class="step1 bg-write">
      <el-form :model="form1" ref="searchForm" label-position="left" label-width="90px" :inline="true">
        <el-form-item label="投放账号" prop="account">
          <el-input class="mr20" v-model="form1.account" clearable size="mini" /><el-button size="small" type="primary" plain icon="el-icon-plus" @click="handleAddAccount">新增账号</el-button>
        </el-form-item>
        <el-row>
          <el-form-item label="投放目标" prop="aim">
            <div class="flex align-center justify-center">
              <div :class="`flex align-center justify-center target-type mr20 ${targetType==0?'border-active':''}`" @click="targetType=0">
                <span>商品推广</span>
                <img
                  style="width: 49px; height: 49px"
                  src="../assets/goods-extension.png" />
              </div>
              <div :class="`flex align-center justify-center target-type mr20 ${targetType==1?'border-active':''}`" @click="targetType=1">
                <span>抖音号推广</span>
                  <img
                  style="width: 49px; height: 49px"
                  src="../assets/tiktock.png" />
              </div>
            </div>
          </el-form-item>
        </el-row>
      </el-form>
      <el-table
        ref="grid"
        :data="list.data"
        v-loading="list.loading"
        stripe 
        :border="false"
        size="small"
      >
        <el-table-column
          type="index"
          label="序号"
          width="50"
          header-align="center"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="skuCode"
          label="广告账户"
          width="300"
          show-overflow-tooltip
          header-align="center"
          align="center"
        >
          <template slot-scope="scope">
            <p>{{scope.row.title}}</p>
            <p class="font12 color9b">1670822163582984</p>
          </template>
        </el-table-column>
        <el-table-column
          prop="skuName"
          label="广告组"
          show-overflow-tooltip
          header-align="center"
          align="center"
        >
        <template slot-scope="scope">
            <p>{{scope.row.title}}</p>
            <p class="font12 color9b">1670822163582984</p>
          </template></el-table-column>
        <el-table-column
          prop="spec"
          label="推广商品"
          show-overflow-tooltip
          header-align="center"
          align="center"
        >
        <template slot-scope="scope">
          <p>{{scope.row.title}}</p>
          <p class="font12 color9b">1670822163582984</p>
        </template>
        </el-table-column>
        <el-table-column label="操作" width="100" header-align="center" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="small"
              plain
              @click="handleDelete(scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'plan',
  components: {

  },
  data(){
    return{
      active:0,
      form1:{},
      targetType:0,
      list:{
        data:[{title:''}],
        loading:false
      }
    }
  },
  methods:{
    handleAddAccount(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.plan{
  font-size: 14px;
  width: 100%;
  padding: 20px;
  .step{
    font-size: 16px;
    color: #9B9B9B;
    width: 287px;
    height: 58px;
    background: url('../assets/step-unactive.png');
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .circle{
    border-radius: 50%;
    width: 27px;
    height: 27px;
    line-height: 27px;
    text-align: center;
    background: #F3F3F3;
    color: #C7C7C7;
  }
  .active{
    color: #fff;
    font-weight: 500;
    background: url('../assets/step-active.png');
    background-repeat: no-repeat;
    background-size: 100%;
    .circle{
      color: #3985EF;
      background-color: #fff;
    }
  }
  /deep/ .el-input{
    width: auto;
  }
  .step1{
    padding: 30px 48px;
  }
  .target-type{
    height: 50px;
    padding-left: 15px;
    border-radius: 4px;
    border: 1px solid #E7E7E7;
    cursor: pointer;
  }
  .border-active{
    border: 2px solid #3985EF;
  }
  .step-1{
    z-index: 4;
    margin-right: -20px;
  }
  .step-2{
    z-index: 3;
    margin-right: -20px;
  }
  .step-3{
    z-index: 2;
    margin-right: -20px;
  }
  .step-4{
    z-index: 1;
    margin-right: -20px;
  }
}
.mll20{
  margin-left: 0;
}
</style>
