<template>
  <el-drawer
    v-model="systemDialog"
    title="内控制度体系"
    direction="rtl"
    size="60%"
  > 
    <div class="title">财政局内控制度体系总体监控</div>
    <div class="header_box">
      <div style="margin-right:10px;color:#787878;">监考状态图列：</div>
      <el-checkbox-group v-model="checkList" @change="handleChecked">
        <el-checkbox label="green">
          <div class="flex">
            <img src="@/assets/image/statusGreen.jpg" alt="" srcset="" class="imgColor">
            <div>制度符合要求</div>
          </div>
        </el-checkbox>
        <el-checkbox label="yellow">
          <div class="flex">
            <img src="@/assets/image/statusYellow.jpg" alt="" srcset="" class="imgColor">
            <div>制度覆盖贯穿不足</div>
          </div>
        </el-checkbox>
        <el-checkbox label="red">
          <div class="flex">
            <img src="@/assets/image/statusRed.jpg" alt="" srcset="" class="imgColor">
            <div>制度缺失</div>
          </div>
        </el-checkbox>
      </el-checkbox-group>
    </div>
    <vxe-table
      border
      show-overflow
      show-header-overflow
      ref="xTreeRef"
      :tree-config="{rowField: 'id', parentField: 'parentId'}"
      :data="tableData"
      height="700"
      @cell-dblclick="btnRow">
      <vxe-column field="name" title="财政内控制度体系标准指引" tree-node></vxe-column>
      <vxe-column field="level" title="监测预警" width="80" align="center">
        <template #default="{ row }">
          <img src="@/assets/image/statusGreen.jpg" alt="" srcset="" v-if="row.level == 'green'">
          <img src="@/assets/image/statusYellow.jpg" alt="" srcset="" v-if="row.level == 'yellow'">
          <img src="@/assets/image/statusRed.jpg" alt="" srcset="" v-if="row.level == 'red'">
        </template>
      </vxe-column>
      <vxe-column field="negative" title="负面清单" width="150" align="center"></vxe-column>
      <vxe-column title="" width="120">
        <template #default="{ row }">
          <el-button type="primary" @click="btnSystemRule(row)">标准规程</el-button>
        </template>
      </vxe-column>
    </vxe-table>
    <div class="drawer__footer">
      <el-button>Cancel</el-button>
      <el-button type="primary">Submit</el-button>
    </div>
    <!-- 组件 -->
    <systemFileVue ref="systemFileVueRef"></systemFileVue>
    <!-- 标准规程组件 -->
    <systemRule ref="systemRuleRef"></systemRule>
  </el-drawer>
</template>
  
<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from "vue";
import systemFileVue from "./systemFile.vue";
import systemRule from "./systemRule.vue";

export default defineComponent({
  name: 'system',
  components: {
    systemFileVue,
    systemRule
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
      checkList: <any>['green','yellow','red']
    })
    const open = () => {
      data.systemDialog = true
    }
    
    const handleChecked = (value: any) => {
      console.log(value)
    }

    // 点击row
    const systemFileVueRef = ref();
    const btnRow = ({ row }: any) => {
      console.log(row)
      row.children.length == 0 && systemFileVueRef.value.open(row);
    }

    // 点击标准规程
    const systemRuleRef = ref();
    const btnSystemRule = (row:any) => {
      systemRuleRef.value.open()
    }

    return {
      ...toRefs(data),
      open,
      handleChecked,
      systemFileVueRef,
      btnRow,
      systemRuleRef,
      btnSystemRule
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
  