<template>
  <div class="step3">
    <div class="launchTarget bg-write mb22 pt24 pl43 pb38">
      <h1 class="step2-title">投放位置</h1>
      <el-form label-position="left" label-width="100px" >
        <el-form-item label="广告位置" >
          <span>抖音</span>
        </el-form-item>
      </el-form>
    </div>
    <div class="userOrient bg-write mb22 pt24 pl43 pb38">
      <h2 class="step2-title">投放位置</h2>
      <el-form :model="userForm" label-position="left" label-width="150px" >
        <el-form-item label="模版选择" prop="account">
          <el-select style="width:300px;" v-model="userForm.accounts" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="创意方式" prop="accounts">
          <el-radio-group v-model="userForm.radio">
            <el-radio-button label="1">程序化创意</el-radio-button>
            <el-radio-button label="2">自定义创意</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="素材添加方式" prop="radio">
          <el-radio-group v-model="userForm.radio">
            <el-radio-button label="1">自定义上传</el-radio-button>
            <el-radio-button label="2">选择程序化设计包</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item prop="radio" label="创意内容">
          <p>已选广告位：抖音</p>
          <p>图片创意个数：12 视频创意个数：12</p>
          <div class="flex">
            <div class="mr50">
              <el-popover
                placement="bottom"
                width="1000"
                trigger="click">
                <creative />
                <el-button slot="reference">
                  <div class="flex align-center justify-center">
                    <img class="mr20" style="width:25px;height:40px;" src="@/assets/mobile-col.png" alt="">
                    <span>竖拍视频</span>
                  </div>
                </el-button>
              </el-popover>
            </div>
            <div>
              <el-popover
                placement="bottom"
                width="1000"
                trigger="click">
                <creative />
                <el-button slot="reference" style="height:64px">
                  <div class="flex align-center justify-center">
                    <img class="mr20" style="width:48px;height:25px;" src="@/assets/mobile-row.png" alt="">
                    <span>横排视频</span>
                  </div>
                </el-button>
              </el-popover>
            </div>
          </div>
        </el-form-item>
        <el-form-item prop="radio" label="来源">
          <el-input style="width:300px;" placeholder="请输入来源，2-10个字"></el-input>
        </el-form-item>
        <el-form-item prop="radio" label="品牌主页">
          <el-radio-group v-model="userForm.radio">
            <el-radio-button label="1">开启抖音主页</el-radio-button>
            <el-radio-button label="2">不开启</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item prop="radio" label="创意展现">
          <el-radio-group v-model="userForm.radio">
            <el-radio-button label="1">优选模式</el-radio-button>
            <el-radio-button label="2">轮播模式</el-radio-button>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>
    <div class="budget bg-write pt24 pl43 pb38">
      <div class="flex flex-between">
        <h1 class="step2-title">创意分类</h1>
        <el-button size="small" @click="saveTemplate">保存创意模版</el-button>
      </div>
      <el-form :model="budgetForm" label-position="left" label-width="150px" >
        <el-form-item label="模版选择" prop="account">
          <el-select style="width:300px;" v-model="userForm.accounts" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="radio" label="创意展现">
          <el-select style="width:300px;" v-model="userForm.accounts" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="创意标签" prop="accounts">
          <el-select
            v-model="budgetForm.value"
            multiple
            filterable
            allow-create
            default-first-option
            style="width:300px;"
            placeholder="最多20个标签，每个不超过10个字">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="bttomBtn flex justify-center mt35">
      <el-button @click="handleReset">取消</el-button>
      <el-button type="primary" @click="toNext(3)">生成计划并投</el-button>
    </div>
    <creative-temp :visible="addVisible" @hide="addVisible=false" />
  </div>
</template>

<script>
import Creative from '@/components/creative.vue'
import CreativeTemp from '@/components/creativeTemp.vue'

export default {
  name: 'step2',
  data(){
    return{
      targetForm:{},
      userForm:{},
      budgetForm:{},
      options:[],
      addVisible:false
    }
  },
  components: {
    Creative,
    CreativeTemp
  },
  methods:{
    handleAddAccount(){
      this.addVisible=true;
    },
    toNext(val){
      this.$emit('switchTab',val)
    },
    handleReset(){

    },
    saveTemplate(){
      this.addVisible=true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.step3{
  // padding: 30px 48px;
  /deep/ .el-input{
    width: auto;
  }
  .step2-title{
    font-size: 20px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #000000;
    margin-bottom: 36px;
  }
}
</style>
