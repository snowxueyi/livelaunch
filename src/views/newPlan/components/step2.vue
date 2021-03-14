<template>
  <div class="step2">
    <div class="launchTarget bg-write mb22 pt24 pl43 pb38">
      <h1 class="step2-title">投放目标</h1>
      <el-form :model="targetForm" label-position="left" label-width="100px" >
        <el-form-item label="投放目标" prop="account">
          <el-radio-group v-model="targetForm.radio">
            <el-radio-button label="1">转化量</el-radio-button>
            <el-radio-button label="2">展示量</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="投放内容" prop="radio">
          <el-radio-group v-model="targetForm.radio">
            <el-radio-button label="1">抖音主页</el-radio-button>
            <el-radio-button label="2">落地页</el-radio-button>
            <el-radio-button label="3">直播间</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="转化目标" prop="accounts">
          <el-select v-model="targetForm.accounts" multiple placeholder="请选择">
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
    <div class="userOrient bg-write mb22 pt24 pl43 pb38">
      <h2 class="step2-title">用户定向</h2>
      <el-form :model="userForm" label-position="left" label-width="150px" >
        <el-form-item label="复制已有定向" prop="account">
          <el-switch v-model="userForm.delivery"></el-switch>
        </el-form-item>
        <el-form-item prop="accounts">
          <div slot="label" class="flex align-center">
            <img class="mr2" style="width:17px;height:17px;" src="@/assets/icon-question.png" alt="">
            <span>地域</span>
          </div>
          <el-radio-group v-model="userForm.district">
            <el-radio-button label="NONE">不限</el-radio-button>
            <el-radio-button label="CITY">按省市</el-radio-button>
            <el-radio-button label="COUNTY">按区县</el-radio-button>
            <el-radio-button label="BUSINESS_DISTRICT">按商圈</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item prop="radio">
          <div slot="label" class="flex align-center">
            <img class="mr2" style="width:17px;height:17px;" src="@/assets/icon-question.png" alt="">
            <span>性别</span>
          </div>
          <el-radio-group v-model="userForm.gender">
            <el-radio-button label="NONE">不限</el-radio-button>
            <el-radio-button label="GENDER_MALE">男</el-radio-button>
            <el-radio-button label="GENDER_FEMALE">女</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item prop="radio">
          <div slot="label" class="flex align-center">
            <img class="mr2" style="width:17px;height:17px;" src="@/assets/icon-question.png" alt="">
            <span>年龄</span>
          </div>
          <el-radio-group v-model="userForm.age">
            <el-radio-button label="1">不限</el-radio-button>
            <el-radio-button label="AGE_BETWEEN_18_23">18-23</el-radio-button>
            <el-radio-button label="AGE_BETWEEN_24_30">23-30</el-radio-button>
            <el-radio-button label="AGE_BETWEEN_31_40">31-40</el-radio-button>
            <el-radio-button label="AGE_BETWEEN_41_49">41-49</el-radio-button>
            <el-radio-button label="AGE_ABOVE_50">50岁以上</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item prop="radio">
          <div slot="label" class="flex align-center">
            <img class="mr2" style="width:17px;height:17px;" src="@/assets/icon-question.png" alt="">
            <span>自定义人群</span>
          </div>
          <el-radio-group v-model="userForm.interest_action_mode">
            <el-radio-button label="UNLIMITED">不限</el-radio-button>
            <el-radio-button label="CUSTOM">自定义人群</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item prop="radio">
          <div slot="label" class="flex align-center">
            <img class="mr2" style="width:17px;height:17px;" src="@/assets/icon-question.png" alt="">
            <span>行为兴趣</span>
          </div>
          <el-radio-group v-model="userForm.interest_action_mode">
            <el-radio-button label="UNLIMITED">不限</el-radio-button>
            <el-radio-button label="CUSTOM">系统推荐</el-radio-button>
            <el-radio-button label="RECOMMEND3">自定义</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item prop="radio">
          <div slot="label" class="flex align-center">
            <img class="mr2" style="width:17px;height:17px;" src="@/assets/icon-question.png" alt="">
            <span>抖音达人</span>
          </div>
          <el-radio-group v-model="userForm.radio">
            <el-radio-button label="1">不限</el-radio-button>
            <el-radio-button label="2">自定义</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item prop="radio">
          <div slot="label" class="flex align-center">
            <img class="mr2" style="width:17px;height:17px;" src="@/assets/icon-question.png" alt="">
            <span>过滤高活跃用户</span>
          </div>
          <el-radio-group v-model="userForm.radio">
            <el-radio-button label="1">不过滤</el-radio-button>
            <el-radio-button label="2">过滤</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="过滤自己粉丝" prop="radio">
          <el-radio-group v-model="userForm.radio">
            <el-radio-button label="1">不过滤</el-radio-button>
            <el-radio-button label="2">过滤</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="过滤高关注用户" prop="radio">
          <el-radio-group v-model="userForm.radio">
            <el-radio-button label="1">不过滤</el-radio-button>
            <el-radio-button label="2">>1000</el-radio-button>
            <el-radio-button label="3">>500</el-radio-button>
            <el-radio-button label="4">>200</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="平台" prop="radio">
          <el-radio-group v-model="userForm.platform">
            <el-radio-button label="1">不限</el-radio-button>
            <el-radio-button label="IOS">ios</el-radio-button>
            <el-radio-button label="ANDROID">Android</el-radio-button>
            <el-radio-button label="PC">PC</el-radio-button>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>
    <div class="budget bg-write pt24 pl43 pb38">
      <h1 class="step2-title">预算与价</h1>
      <el-form :model="budgetForm" label-position="left" label-width="150px" >
        <el-form-item label="投放内容" prop="account">
          <el-radio-group v-model="budgetForm.smart_bid_type">
            <el-radio-button label="SMART_BID_CUSTOM">常规投放</el-radio-button>
            <el-radio-button label="SMART_BID_CONSERVATIVE">放量投放</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item prop="radio">
          <div slot="label" class="flex align-center">
            <el-popover
              placement="top-start"
              trigger="hover"
              content="不同选项代表不同的成本考量和投放速度策略">
              <img slot="reference" class="mr2" style="width:17px;height:17px;" src="@/assets/icon-question.png" alt="">
            </el-popover>
            <span>竞价策略</span>
          </div>
          <el-radio-group v-model="budgetForm.flow_control_mode">
            <el-radio-button label="FLOW_CONTROL_MODE_FAST">优先跑量</el-radio-button>
            <el-radio-button label="FLOW_CONTROL_MODE_BALANCE">均衡投放</el-radio-button>
            <el-radio-button label="FLOW_CONTROL_MODE_SMOOTH">控制成本上限</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="预算" prop="accounts">
          <el-select style="width:100px;" v-model="budgetForm.accounts" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-input style="width:200px;"></el-input>元
        </el-form-item>
        <el-form-item label="竞价策略" prop="schedule_type">
          <el-radio-group v-model="budgetForm.schedule_type">
            <el-radio-button label="SCHEDULE_FROM_NOW">从今天长期投放</el-radio-button>
            <el-radio-button label="SCHEDULE_START_END">设置开始和结束日期</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="投放时段" prop="schedule_time">
          <el-radio-group v-model="budgetForm.schedule_time">
            <el-radio-button label="1">不限</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="付费方式" prop="pricing">
          <el-radio-group v-model="budgetForm.pricing">
            <el-radio-button label="OCPM">按展示付费（oCPM）</el-radio-button>
            <span class="dark-tips">计划首次投放及其之后三个自然日内将获得超成本赔付保障，您可放心新建计划并投放，详见 oCPM赔付规则</span>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="目标转化出价" prop="cpa_bid">
          <el-input style="width:300px;" placeholder="输入金额不少于0.1元，不超过10000元" v-model="budgetForm.cpa_bid"></el-input>元
        </el-form-item>
        <el-form-item label="意见起量" prop="radio">
          <el-radio-group v-model="budgetForm.radio">
            <el-radio-button label="1">一键启量</el-radio-button>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>
    <div class="bttomBtn flex justify-center mt35">
      <el-button @click="handleReset">重置</el-button>
      <el-button type="primary" @click="toNext(0)">上一步</el-button>
      <el-button type="primary" @click="toNext(2)">下一步</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'step2',
  data(){
    return{
      targetForm:{},
      userForm:{},
      budgetForm:{},
      options:[],
      form2:{}
    }
  },
  methods:{
    handleAddAccount(){
      this.addVisible=true;
    },
    toNext(val){
      const form2=Object.assign({},this.targetForm,this.userForm,this.budgetForm)
      this.$store.commit('setForm',form2)
      this.form2=form2;
      this.$emit('switchTab',val)
    },
    handleReset(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.step2{
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
