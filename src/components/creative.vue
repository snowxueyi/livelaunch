<template>
  <div class="creative">
    <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
      <el-tab-pane
        :key="item.name"
        v-for="(item) in editableTabs"
        :label="item.title"
        :name="item.name"
      >
      <div>
        <el-form :model="item.form">
          <el-form-item label="创意内容">
            <div class="flex align-center">
              <div class="mr50 justify-center">
                <div class="border-box mb15 color9b">
                  <p class="flex align-center justify-center wh115 lineh15">
                    <el-icon class="el-icon-upload"></el-icon><span>上传视频（必填）</span>
                  </p>
                  <el-button class="mb22 ml24" type="info" plain>素材库</el-button>
                </div>
                <p class="color9b lineh15" style="width:142px">宽高9:16,视频码率≥516kbps, 大小≤100M，分辨率≥720*1280，时长≥4s，时长≤300s</p>
              </div>
              <div>
                <div class="border-box mb15 color9b">
                  <p class="flex align-center justify-center wh115 lineh15">
                    <el-icon class="el-icon-upload"></el-icon>上传封面（必填）
                  </p>
                  <el-button class="mb22 ml5" type="info" plain @click="uploadVisible=true">生成/选择封面</el-button>
                </div>
                <p class="color9b lineh15" style="width:142px">建议最佳：宽高9:16,720*1280≤尺寸≤1440*2560，支持JPG、PNG等图片格式</p>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="创意标题">
            <el-input style="width:400px"></el-input>
          </el-form-item>
        </el-form>
      </div>
      </el-tab-pane>
    </el-tabs>
    <upload-cover :visible="uploadVisible" @hide="uploadVisible=false" />
  </div>
</template>

<script>
import UploadCover from '@/components/upload-cover.vue'

export default {
  name: 'new-ad-group',
  components: {
    UploadCover,
  },
  data(){
    return{
      editableTabsValue: '1',
      editableTabs: [{
        title: '创意1',
        name: '1',
        form:{}
      }, {
        title: '创意2',
        name: '2',
        form:{}
      }],
      tabIndex: 2,
      uploadVisible:false,
    }
  },
  methods: {
    handleTabsEdit(targetName, action) {
      if (action === 'add') {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: `创意${newTabName}`,
          name: newTabName,
          form:{}
        });
        this.editableTabsValue = newTabName;
      }
      if (action === 'remove') {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.creative{
  .wh115{
    height: 115px;
  }
  .border-box{
    width: 140px;
    background: #FFFFFF;
    border-radius: 4px;
    border: 1px solid #E7E7E7;
  }
  .lineh15{
    line-height: 15px;
  }
}
</style>
