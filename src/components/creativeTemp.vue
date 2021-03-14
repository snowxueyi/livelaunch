<template>
  <div class="new-ad-group">
    <el-dialog title='保存创意分类模版' width='600px' :visible.sync='visible' :close-on-click-modal='false' :before-close='handleClose'>
      <el-form :model="form" :rules="rules" ref="searchForm" label-position="left" label-width="110px" >
        <el-form-item label="模版名称" prop="accounts">
          <el-input style="width:340px" class="mr20" v-model="form.name" clearable size="mini" />
        </el-form-item>
        <el-form-item label="创意描述" prop="account">
          <el-input style="width:340px" type="textarea" class="mr20" v-model="form.name" clearable size="mini" />
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
  name: 'creative-temp',
  props: {
    /**
     * 展示dialog状态
     */
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data(){
    return{
      form:{},
      rules:[]
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
