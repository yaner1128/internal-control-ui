<template>
  <el-drawer
    v-model="systemDialog"
    title="内部控制管理规程"
    direction="rtl"
    size="80%"
  > 
    <div class="title">综合计划管理站内部控制管理规程监控</div>
    <el-row>
      <el-col :span="12">
        <div class="header_box">
          <div style="margin-right:10px;color:#787878;">监考状态图列：</div>
          <el-checkbox-group v-model="checkList" @change="handleChecked">
            <el-checkbox label="green">
              <div class="flex">
                <img src="@/assets/image/statusGreen.jpg" alt="" srcset="" class="imgColor">
                <div>已落实</div>
              </div>
            </el-checkbox>
            <el-checkbox label="yellow">
              <div class="flex">
                <img src="@/assets/image/statusYellow.jpg" alt="" srcset="" class="imgColor">
                <div>缺少制度内容</div>
              </div>
            </el-checkbox>
          </el-checkbox-group>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="header_box" style="justify-content: flex-end;">
          <div style="margin-right:10px;color:#787878;">落实内控执行情况：</div>
          <el-checkbox-group v-model="checkList1" @change="handleChecked1">
            <el-checkbox label="true">是</el-checkbox>
            <el-checkbox label="false">否</el-checkbox>
          </el-checkbox-group>
        </div>
      </el-col>
    </el-row>
    <vxe-table
      border
      show-overflow
      show-header-overflow
      ref="xTreeRef"
      :tree-config="{rowField: 'id', parentField: 'parentId'}"
      :data="tableData"
      height="750"
      :edit-config="{trigger: 'click', mode: 'row'}"
      @cell-dblclick="btnRow">
      <vxe-column type="seq" width="60" title="序号"></vxe-column>
      <vxe-column field="name" title="内部操作规程健全指引" tree-node width="300"></vxe-column>
      <vxe-column field="" title="标准规范要求" align="center"></vxe-column>
      <vxe-column title="适用" :edit-render="{}" show-overflow width="80" align="center">
        <template #default="{ row }">
          <vxe-checkbox v-model="row.check1" ></vxe-checkbox>
        </template>
        <template #edit="{ row }">
          <vxe-checkbox v-model="row.check1"></vxe-checkbox>
        </template>
      </vxe-column>
      <vxe-column field="" title="内部规程条目" width="150" align="center"></vxe-column>
      <vxe-column title="内控执行" :edit-render="{}" show-overflow width="120" align="center">
        <template #default="{ row }">
          <vxe-checkbox v-model="row.check2" ></vxe-checkbox>
        </template>
        <template #edit="{ row }">
          <vxe-checkbox v-model="row.check2"></vxe-checkbox>
        </template>
      </vxe-column>
      <vxe-column field="level" title="监测预警" width="80" align="center">
        <template #default="{ row }">
          <img src="@/assets/image/statusGreen.jpg" alt="" srcset="" v-if="row.level == 'green'">
          <img src="@/assets/image/statusYellow.jpg" alt="" srcset="" v-if="row.level == 'yellow'">
          <img src="@/assets/image/statusRed.jpg" alt="" srcset="" v-if="row.level == 'red'">
        </template>
      </vxe-column>
      <vxe-column field="negative" title="负面清单" width="150" align="center"></vxe-column>
      <vxe-column field="negative" title="相关附件" width="150" align="center"></vxe-column>
      <vxe-column title="" width="90">
        <template #default="{ row }">
          <el-button type="primary" v-if="row">附件</el-button>
        </template>
      </vxe-column>
    </vxe-table>
  </el-drawer>
</template>
  
<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from "vue";

export default defineComponent({
  name: 'system',
  components: {

  },
  setup() {
    const data = reactive({
      systemDialog:false,
      tableData: <any>[
        {id:"0",parentId: null ,name: "内控委", level:"green", negative: "", desc: "内控委负责出台财政局内部控制政策；审定重大风险和重要业务流程的管理制度及内部控制机制；部署内部控制重大事项和重要安排；指导和督促各股室落实内部控制主体责任、健全制度体系、完善管理措施等。", children: []},
        {id:"1",parentId: null ,name: "专项风险牵头单位", level:"green", negative: "", desc: "", children: [
          {id:"11",parentId: '1' ,name: "政策制定风险防控牵头单位", level:"red", negative: "职责人员未设置", desc: "政策制定风险防控牵头单位", children: []}
        ]}
      ],
      checkList: <any>['green','yellow',],
      checkList1: <any>[]
    })
    const open = () => {
      data.systemDialog = true
    }
    
    // 监考状态图列
    const handleChecked = (value: any) => {
      console.log(value)
    }

    // 内控执行情况
    const handleChecked1 = (value: any) => {
      console.log(value)
    }

    // 点击
    const systemFileVueRef = ref();
    const btnRow = ({ row }: any) => {
      console.log(row)
      row.children.length == 0 && systemFileVueRef.value.open(row);
    }

    return {
      ...toRefs(data),
      open,
      handleChecked,
      systemFileVueRef,
      btnRow,
      handleChecked1
    }
  },
})
</script>
  
<style lang="scss" scoped>
.title {
  font-size: 16px;
  font-weight: bold;
  border-bottom: 2px solid #2a70e5 !important;
  letter-spacing: 2px;
  width: auto;
  text-align: center;
  padding: 10px !important;
}

.drawer__footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
}

.header_box {
  display: flex;
  align-items: center;
  padding: 10px !important;
}

.imgColor {
  margin-right: 1px;
}

.flex {
  display: flex;
  align-items: center;
}
</style>
  