<template>
  <div class="plan">
    <div class="progress flex mb22">
      <div @click="toTab(0)" :class="`step step-1 flex flex1 align-center justify-center ${active==0?'active':''}`"><div class="circle mr15">1</div>投放目标</div>
      <div @click="toTab(1)" :class="`step step-2 flex flex1 mll20 align-center justify-center ${active==1?'active':''}`"><div class="circle mr15">2</div>定向人群和出价</div>
      <div @click="toTab(2)" :class="`step step-3 flex flex1 mll20 align-center justify-center ${active==2?'active':''}`"><div class="circle mr15">3</div>素材</div>
      <div @click="toTab(3)" :class="`step step-4 flex flex1 mll20 align-center justify-center ${active==3?'active':''}`"><div class="circle mr15">4</div>开始投放</div>
    </div>
    <step1 v-if="active==0" @switchTab="toTab"/>
    <step2 ref="form2" v-if="active==1" @switchTab="toTab" />
    <step3 v-if="active==2" @switchTab="toTab" />
  </div>
</template>

<script>
import Step1 from '@/views/newPlan/components/step1.vue'
import Step2 from '@/views/newPlan/components/step2.vue'
import Step3 from '@/views/newPlan/components/step3.vue'

export default {
  name: 'plan',
  components: {
    Step1,
    Step2,
    Step3
  },
  data(){
    return{
      active:0,
    }
  },
  watch:{
    active(){
    },
  },
  methods:{
    handleAddAccount(){

    },
    toTab(index){
      this.active=index;
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
    background: url('~@/assets/step-unactive.png');
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
    background: url('~@/assets/step-active.png');
    background-repeat: no-repeat;
    background-size: 100%;
    .circle{
      color: #3985EF;
      background-color: #fff;
    }
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
