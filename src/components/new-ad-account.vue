<template>
  <div class="new-ad-group">
    <el-dialog title='新增账号' width='600px' :visible.sync='visible' :close-on-click-modal='false' :before-close='handleClose'>
      <el-form :model="form" :rules="rules" ref="searchForm" label-position="left" label-width="110px" >
        <el-form-item label="广告账户" prop="accounts">
          <el-select v-model="form.accounts" multiple placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.advertiserId"
              :label="item.advertiserName"
              :value="item.advertiserId">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="账户备注" prop="account">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="负责人" prop="radio">
          <el-select v-model="form.accounts" multiple placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.advertiserId"
              :label="item.advertiserName"
              :value="item.advertiserId">
            </el-option>
          </el-select>
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
import { getAdList} from '@/api/newPlan'

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
      options:[]
    }
  },
  mounted(){
    this.getAdList()
  },
  methods: {
    async getAdList(){
      let res= await getAdList()
      this.options=res.data||[]
      console.log(res)
    },
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
