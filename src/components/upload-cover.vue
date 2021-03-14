<template>
  <div class="new-ad-group">
    <el-dialog title='更换封面' width='600px' :visible.sync='visible' :close-on-click-modal='false' :before-close='handleClose'>
      <el-tabs v-model="activeName">
        <el-tab-pane label="本地上传" name="1"></el-tab-pane>
        <el-tab-pane label="推荐封面" name="2"></el-tab-pane>
      </el-tabs>
      <div v-if="activeName==1">
        <el-upload
          ref="upload"
          name="file"
          :data="uploadData"
          drag
          action="//ad.oceanengine.com/open_api/2/file/image/ad/"
          :on-success="handleImport"
          :on-error="handleImportError"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">建议最佳：宽高9:16,720*1280≤尺寸≤1440*2560，支持JPG、PNG等图片格式</div>
        </el-upload>
      </div>
      <span slot="footer">
        <el-button @click="handleClose" size="mini">取 消</el-button>
        <el-button type="primary" @click="handleSave" size="mini">确 定</el-button>
      </span>
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
      default: false,
    },
  },
  data(){
    return{
      activeName:1,
      uploadData: {
        advertiser_id: '',
      },
    }
  },
  methods: {
    handleImport(res) {
      this.$refs.upload.clearFiles()
      if (res.code == 0) {
        console.log(res)
      } else {
        this.$message({
          type: 'error',
          message: res.message ? res.message : '上传图片出错!',
        })
      }
    },
    handleImportError(err) {
      this.$message({ type: 'error', message: err.message })
      this.$refs.upload.clearFiles()
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
