<template>
  <div class="new-ad-group">
    <el-dialog title='新增广告组' width='600px' :visible.sync='visible' :close-on-click-modal='false' :before-close='handleClose'>
      <el-form :model="form" :rules="rules" ref="searchForm" label-position="left" label-width="110px" >
        <el-form-item label="广告账户" prop="accounts">
          <el-select v-model="form.accounts" multiple placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="推广目的" prop="account">
          <el-radio-group v-model="form.radio">
            <el-radio-button label="1">抖音号推广</el-radio-button>
            <el-radio-button label="2">商品推广（鲁班）</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="广告预算" prop="radio">
          <el-radio-group v-model="form.radio">
            <el-radio-button label="1">不限</el-radio-button>
            <el-radio-button label="2">日预算</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="日预算" prop="account">
          <el-input class="mr20" v-model="form.account" clearable size="mini" />元
        </el-form-item>
        <el-form-item label="广告组名称" prop="account">
          <el-input class="mr20" v-model="form.name" clearable size="mini" />
        </el-form-item>
        <el-form-item label="广告组状态" prop="account">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item>
          <el-button @click="handleClose" size="mini">取 消</el-button>
          <el-button type="primary" @click="handleSave" size="mini">确 定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'new-ad-group',
  props: {
    /**
     * 展示dialog状态
     */
    visible: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data(){
    return{
      active:0,
      form:{},
      options:[
        {value:'1',label:'上海格芒商贸有限责任公司01 (1670822163582984)'},
        {value:'2',label:'上海格芒商贸有限责任公司01 (1670822163582984)'}
      ],
      rules: {
        accounts: [
          { required: true, message: '请选择广告账户', trigger: 'blur' },
          { required: true, message: '请选择广告账户', trigger: 'change' },
        ],
        radio: [
          { required: true, message: '请选择广告预算', trigger: 'blur' },
          { required: true, message: '请选择广告预算', trigger: 'change' },
        ],
        account: [
          { required: true, message: '请输入日预算', trigger: 'blur' },
          { required: true, message: '请输入日预算', trigger: 'change' },
        ],
      },
    }
  },
  methods: {
    handleClose() {
      this.$emit('hide')
    },
    handleSave() {
      this.$emit('save')
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
