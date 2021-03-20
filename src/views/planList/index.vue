
<template>
  <div class="plan-list">
    <div class="query-container">
      <el-form :model="form" ref="form" label-width="100px" inline>
        <el-row>
          <el-form-item label="搜索计划名" prop="plan_name">
          <el-input
            v-model="form.plan_name"
            placeholder="请输入"
            clearable
            size="small"
            class="form-item-width"
          ></el-input>
        </el-form-item>
        <el-form-item label="投放状态" prop="status">
          <el-select
            v-model="form.status"
            placeholder="请输入"
            clearable
            filterable
            collapse-tags
            size="small"
            class="form-item-width"
          >
            <el-option
              v-for="(item, index) in statesArr"
              :key="index"
              :value="item.value"
              :label="item.name"
            ></el-option>
          </el-select>
        </el-form-item>
        </el-row>
        <el-form-item label='创建时间' prop='estimateTime'>
          <div class="flex mt8">
            <div :class="`daytype mr20 ${dayType=='1'&&'active'}`" @click="dayType='1'">今天</div>
            <div :class="`daytype mr20 ${dayType=='3'&&'active'}`" @click="dayType='3'">近三天</div>
            <div :class="`daytype mr20 ${dayType=='7'&&'active'}`" @click="dayType='7'">近七天</div>
            <div :class="`daytype mr20 ${dayType=='30'&&'active'}`" @click="dayType='30'">近30天</div>
          </div>
        </el-form-item>
        <el-form-item>
          <el-date-picker
          v-model="form.estimateTime"
          type="datetime"
          size='small'
          style='width: 200px'
          placeholder="开始时间"
          value-format='timestamp'>
          </el-date-picker>至
          <el-date-picker
          v-model="form.estimateTime"
          type="datetime"
          size='small'
          style='width: 200px'
          placeholder="结束时间"
          value-format='timestamp'>
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" @click="handleSearch">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button size="small" @click="resetQuery">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-row>
      <div>
        <div>
          <el-button
            size="small"
            type="primary"
            @click="handleAdd"
          >新增推广计划</el-button>
        </div>
      </div>
    </el-row>
    <div class="grid-container">
      <el-table
        ref="grid"
        :data="list.data"
        v-loading="list.loading"
        v-fitheight
        border
        size="small"
      >
        <el-table-column type="index" label="序号" width="55" header-align="center" align="center"></el-table-column>
        <el-table-column
          prop="name"
          label="计划名称"
          show-overflow-tooltip
          header-align="center"
          align="center"
          size="mini"
        ></el-table-column>
        <el-table-column
          type="prop"
          prop="advertiser_id"
          label="广告账户"
          width="80"
          show-overflow-tooltip
          header-align="center"
          align="center"
          size="mini"
        ></el-table-column>
        <el-table-column
          type="prop"
          prop="campaign_id"
          label="广告组"
          width="200"
          show-overflow-tooltip
          header-align="center"
          align="center"
          size="mini"
        ></el-table-column>
        <el-table-column
          type="prop"
          prop="ad_id"
          label="广告计划"
          width="150"
          show-overflow-tooltip
          header-align="center"
          align="center"
          size="mini"
        ></el-table-column>
        <el-table-column
          type="prop"
          prop="advanced_creative_type"
          label="创意"
          width="150"
          show-overflow-tooltip
          header-align="center"
          align="center"
          size="mini"
        ></el-table-column>
        <el-table-column
          type="prop"
          prop="ad_create_time"
          label="创建时间"
          width="180"
          show-overflow-tooltip
          header-align="center"
          align="center"
          size="mini"
        ></el-table-column>
        <el-table-column
          type="prop"
          prop="budget_amount"
          label="操作人"
          width="120"
          show-overflow-tooltip
          header-align="center"
          align="center"
          size="mini"
        ></el-table-column>
        <el-table-column
          type="prop"
          prop="used_amount"
          label="消耗"
          width="120"
          show-overflow-tooltip
          header-align="center"
          align="center"
          size="mini"
        >
          <template slot-scope="scope">
            <el-button
              type="text"
              size="mini"
            >{{scope.row.used_amount}}</el-button>
          </template>
        </el-table-column>
        <el-table-column
          type="prop"
          prop="lock_amount"
          label="转化数"
          width="120"
          show-overflow-tooltip
          header-align="center"
          align="center"
          size="mini"
        ></el-table-column>
        <el-table-column
          type="prop"
          prop="status"
          label="状态"
          width="120"
          show-overflow-tooltip
          header-align="center"
          align="center"
          size="mini"
        ></el-table-column>
        <el-table-column
          fixed="right"
          type="opp"
          prop
          label="操作"
          width="180"
          header-align="center"
          align="center"
          size="mini"
        >
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              @click="seeDetail(scope.row)"
            >详情</el-button>
            <el-button
              size="mini"
              type="text"
              @click="changeCopy(scope.row)"
            >复制</el-button>
            <el-button
              size="mini"
              type="text"
              @click="handleRetry(scope.row)"
            >重试</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-row>
      <el-pagination
        align="center"
        layout="total, prev, pager, next"
        @size-change="handleSizeChange"
        :total="list.total"
        :current-page.sync="list.curPage"
        @current-change="handleCurrentChange"
        :page-sizes="[20, 100, 500, 1000]"
        :page-size="list.pageSize"
      ></el-pagination>
    </el-row>
    <new-ad-account :visible="accountVisible" @hide="accountVisible=false" />
  </div>
</template>
<script>
import { getPlanList} from '@/api/newPlan'
import NewAdAccount from '@/components/new-ad-account.vue'
export default {
  name: 'planList',
  components: {
    NewAdAccount
  },
  data() {
    return {
      list: {
        loading: false,
        data: [
          {
            status:'创建中',
            name:"批量任务_1_23_1",
            ad_create_time:'2021-01-23 14:23:17',
            ad_modify_time:'2021-01-23 14:23:17',
            advertiser_id:'222',
            campaign_id:'3333',
            ad_id:'8888',
            advanced_creative_type:'3333'
          },
          {
            status:'创建中',
            name:"批量任务_1_23_1",
            ad_create_time:'2021-01-23 14:23:17',
            ad_modify_time:'2021-01-23 14:23:17',
            advertiser_id:'222',
            campaign_id:'3333',
            ad_id:'8888',
            advanced_creative_type:'3333'
          },
        ],
        curPage: 1,
        pageSize: 20,
        total: null,
      },
      statesArr:[
        {
          value:1,
          name:'全部'
        }
      ],
      form: {
        plan_name: '',
        status: '',
      },
      dayType:'1',
      accountVisible:false,
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {
      let parmes = Object.assign(
        {
          page: this.list.curPage,
          rows: this.list.pageSize,
        },
        this.form
      )
      let res = await getPlanList(parmes)
      if (res.code == 0) {
        this.list.data = res.data.rows || []
        this.list.total = res.data.records
      } else {
        this.$message({
          type: 'error',
          message: res.message,
        })
      }
    },
    //删除
    async handleRetry(row) {
      console.log(row)
      let confirmSub = false
      try {
        await this.$confirm(
          '确定重试吗？',
          '确认',
          {
            confirmButtonText: '继续',
            cancelButtonText: '取消',
            type: 'warning',
          }
        )
        confirmSub = true
      } catch (e) {
        confirmSub = false
      }
      if (!confirmSub) {
        return
      }
      // let res = await DeleteBudgetSummary({ id: row.id })
      // if (res.code == 0) {
      //   this.$message({
      //     type: 'success',
      //     message: res.message ? res.data : '成功',
      //   })
      //   this.getList()
      // } else {
      //   this.$message({
      //     type: 'error',
      //     message: res.message ? res.message : '操作出错！',
      //   })
      // }
    },
    changeCopy(){},
    handleAdd() {
      this.accountVisible=true;
    },
    seeDetail(row) {
      console.log(row)
    },
    handleSearch() {
      this.list.curPage = 1
      this.getList()
    },
    handleSizeChange(pagesize) {
      this.list.pageSize = pagesize
      this.getList()
    },
    handleCurrentChange(page) {
      this.list.curPage = page
      this.getList()
    },
    resetQuery() {
      this.$refs['form'].resetFields()
      this.form.page = 1
      this.getList()
    },
  },
}
</script>

<style lang="less" scoped>
.plan-list{
  background: #fff;
  padding: 0 20px;
  .mr20{
    margin-right: 20px;
  }
  .daytype{
      height: 24px;
      line-height: 24px;
      background-color: #fff;
      padding: 0 8px;
      border-radius: 5px;
      cursor: pointer;
    }
    .active{
      background-color: #409EFF;
      color: #fff;
    }
}
.query-container{
  padding-top: 20px;
}
.grid-container {
  margin-top: 20px;
}
.mt8{
  margin-top: 8px;
}
</style>
