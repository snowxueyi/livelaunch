<template>
  <div class="step1 bg-write">
      <el-form :model="form1" ref="searchForm" label-position="left" label-width="90px" :inline="true">
        <el-form-item label="投放账号" prop="account">
          <el-select class="mr20" multiple v-model="form1.advertiser">
            <el-option
              v-for="item in adList"
              :key="item.advertiserId"
              :label="item.advertiserName"
              :value="item"></el-option>
          </el-select>
          <el-button size="small" type="primary" plain icon="el-icon-plus" @click="handleAddAccount">新增账号</el-button>
        </el-form-item>
        <el-row>
          <el-form-item label="投放目标" prop="aim">
            <div class="flex align-center justify-center">
              <div :class="`flex align-center justify-center target-type mr20 ${targetType==0?'border-active':''}`" @click="targetType=0">
                <span>商品推广</span>
                <img
                  style="width: 49px; height: 49px"
                  src="@/assets/goods-extension.png" />
              </div>
              <div :class="`flex align-center justify-center target-type mr20 ${targetType==1?'border-active':''}`" @click="targetType=1">
                <span>抖音号推广</span>
                  <img
                  style="width: 49px; height: 49px"
                  src="@/assets/tiktock.png" />
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
        v-if="targetType===0"
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
            <p>{{scope.row.advertiserName}}</p>
            <p class="font12 color9b">{{scope.row.advertiserId}}</p>
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
            <el-select v-model="scope.row.advisidId">
              <el-option
                v-for="item in adGrouopList"
                :key="item.value"
                :label="item.label"
                :value="item.value"></el-option>
            </el-select>
          </template></el-table-column>
        <el-table-column
          prop="goods"
          label="推广商品"
          show-overflow-tooltip
          header-align="center"
          align="center"
        >
        <template slot-scope="scope">
          <el-select class="goodsSelect" v-model="scope.row.currentGoods" placeholder="请选择">
            <el-option
              v-for="item in scope.row.goods"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              <div class="flex align-center">
                <img
                  style="width: 47px; height: 47px"
                  src="@/assets/goods-extension.png" />
                  <p class="color6f font400">优仅ALL JOINT家用水果小型便携式随果小型便携式随</p>
              </div>
            </el-option>
          </el-select>
        </template>
        </el-table-column>
        <el-table-column label="操作" width="100" header-align="center" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="small"
              plain
              @click="handleDelete(scope.row,scope.$index)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-table
        ref="grid"
        :data="list.data"
        v-loading="list.loading"
        stripe 
        :border="false"
        size="small"
        v-else
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
            <p>{{scope.row.advertiserName}}</p>
            <p class="font12 color9b">{{scope.row.advertiserId}}</p>
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
            <el-select v-model="scope.row.advisidId">
              <el-option
                v-for="item in adGrouopList"
                :key="item.value"
                :label="item.label"
                :value="item.value"></el-option>
            </el-select>
          </template></el-table-column>
        <el-table-column
          prop="spec"
          label="推广抖音号"
          show-overflow-tooltip
          header-align="center"
          align="center"
        >
        <template slot-scope="scope">
          <el-select class="goodsSelect" v-model="scope.row.currentGoods" placeholder="请选择">
            <el-option
              v-for="item in iesACount"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              <div class="flex align-center">
                <img
                  style="width: 42px; height: 42px;border-radius:50%;"
                  class="mr12"
                  src="@/assets/goods-extension.png" />
                  <div>
                    <p class="hight20 lineh30 color6f font400 mb3">钟凯文</p>
                    <p class="hight20 lineh30 color9b font400">ID：23349345345</p>
                  </div>
              </div>
            </el-option>
          </el-select>
        </template>
        </el-table-column>
        <el-table-column label="操作" width="100" header-align="center" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="small"
              plain
              @click="handleDelete(scope.row,scope.$index)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <new-ad-group :visible="addVisible" @hide="addVisible=false" />
      <new-ad-account :visible="accountVisible" @hide="accountVisible=false" />
      <div class="bttomBtn flex justify-center mt35">
        <el-button @click="handleReset">重置</el-button>
        <el-button type="primary" @click="toNext">下一步</el-button>
      </div>
    </div>
</template>

<script>
import NewAdGroup from '@/components/new-ad-group.vue'
import NewAdAccount from '@/components/new-ad-account.vue'
import { getAdGrouopList,getAdList,getAdvertiserGoods,getIesAccount} from '@/api/newPlan'

export default {
  name: 'step1',
  components: {
    NewAdGroup,
    NewAdAccount
  },
  data(){
    return{
      form1:{},
      targetType:0,
      list:{
        data:[{title:'',goods:[{},{}]}],
        loading:false
      },
      addVisible:false,
      adGrouopList:[],
      adList:[],
      goods:[],
      accountVisible:false
    }
  },
  mounted(){
    this.getAdGrouopList()
    this.getAdList()
  },
  watch:{
    'form1.advertiser'(val){
      if(val){
        this.list.data=val;
        const advertiserIds = val.map((item)=>{item.advertiserId}).join(',')
        this.getAdvertiserGoods(advertiserIds)
        this.getIesAccount(advertiserIds)
      }
    }
  },
  methods:{
    async getAdGrouopList(){
      let res= await getAdGrouopList()
      console.log(res)
    },
    async getAdList(){
      let res= await getAdList()
      this.adList=res.data||[]
      console.log(res)
    },
    handleDelete(row,index){
      this.list.data.splice(index,1)
    },
    handleAddAccount(){
      this.accountVisible=true;
    },
    async getAdvertiserGoods(val){
      const res=await getAdvertiserGoods({advertiser_id:val})
      this.goods = res.data||[]
    },
    async getIesAccount(val){
      const res=await getIesAccount({advertiser_id:val})
      this.iesACount = res.data||[]
    },
    toNext(){
      this.$emit('switchTab',1)
    },
    handleReset(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.step1{
  padding: 30px 48px;
  /deep/ .el-input{
    width: auto;
  }
  .target-type{
    height: 53px;
    padding-left: 15px;
    border-radius: 4px;
    border: 1px solid #E7E7E7;
    cursor: pointer;
  }
  .border-active{
    border: 2px solid #3985EF;
  }
}
.el-select-dropdown__item{
    height: auto!important;
    margin: 3px 0;
    padding-top: 2px;
    padding-bottom: 2px;
  }
</style>
