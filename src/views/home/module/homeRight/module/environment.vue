<template>
  <el-drawer
    v-model="environmentDialog"
    title="内控基础环境"
    direction="rtl"
    size="75%"
  > 
    <div class="title">财政局内控基础环境总体监控</div>
    <!--  -->
    <el-row>
      <el-col :span="16">
        <div class="header_box">
          <div style="margin-right:10px;color:#787878;">监考状态图列：</div>
          <el-checkbox-group v-model="checkList" @change="handleChecked">
            <el-checkbox label="green">
              <div class="flex">
                <img src="@/assets/image/statusGreen.jpg" alt="" srcset="" class="imgColor">
                <div>符合要求</div>
              </div>
            </el-checkbox>
            <el-checkbox label="yellow">
              <div class="flex">
                <img src="@/assets/image/statusYellow.jpg" alt="" srcset="" class="imgColor">
                <div>岗位设置不完整</div>
              </div>
            </el-checkbox>
            <el-checkbox label="red">
              <div class="flex">
                <img src="@/assets/image/statusRed.jpg" alt="" srcset="" class="imgColor">
                <div>基础环境未设置</div>
              </div>
            </el-checkbox>
          </el-checkbox-group>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="header_box" style="justify-content: flex-end;">
          <el-button>负面清单</el-button>
          <el-button type="primary" @click="btnTask">发起内控任务</el-button>
        </div>
      </el-col>
    </el-row>
    <!--  -->
    <el-descriptions
      title=""
      direction="vertical"
      :column="2"
      size="large"
      border
    >
      <!-- 警告预警 -->
      <el-descriptions-item label="警告预警" align="center" label-class-name="cellLabel" class-name="cellContent">
        <el-scrollbar height="680px">
          <el-tree
            :data="treeData"
            :props="defaultProps"
            @node-click="handleNodeClick"
          >
            <template #default="{ data, node }">
              <span style="padding-right: 5px;font-size: 18px;display: flex;align-items: center;">
                <img src="@/assets/image/statusGreen.jpg" class="imgColor" v-if="data.nodeType == 'green'">
                <img src="@/assets/image/statusYellow.jpg" class="imgColor" v-if="data.nodeType == 'yellow'">
              </span>
              <span>{{ node.label }}</span>
            </template>
          </el-tree>
        </el-scrollbar>
      </el-descriptions-item>
      <!-- 内控基础环境建立健全 -->
      <el-descriptions-item label="内控基础环境建立健全" align="center">
        <div class="content">
          <div style="text-align: left;">科室：{{ name }}</div>
          <!-- 上面 -->
          <div class="flex">
            <!-- 不相容岗位 -->
            <titleBox title="不相容岗位" class="titleBox">
              <el-table
                stripe
                border 
                :data="tableData"
                style="width: 100%"
                height="280"
              >
                <el-table-column prop="date" label="岗位(人员)" align="center"/>
                <el-table-column prop="name" label="岗位(人员)" align="center"/>
              </el-table>
            </titleBox>
            <!-- 授权管理  -->
            <titleBox title="授权管理" class="titleBox">
              <el-table
                stripe
                border 
                :data="tableData"
                style="width: 100%"
                height="280"
              >
                <el-table-column prop="date" label="业务事项" align="center"/>
                <el-table-column prop="name" label="岗位" width="120" align="center"/>
                <el-table-column prop="name" label="授权" width="120" align="center"/>
              </el-table>
            </titleBox>
          </div>
          <!-- 下面 -->
          <div class="flex">
            <!-- 归口管理 -->
            <titleBox title="归口管理" class="titleBox">
              <el-table
                stripe
                border 
                :data="tableData"
                style="width: 100%"
                height="280"
              >
                <el-table-column prop="date" label="归口业务" align="center"/>
                <el-table-column prop="name" label="归口规则" align="center"/>
              </el-table>
            </titleBox>
            <!-- 关键岗位  -->
            <titleBox title="关键岗位" class="titleBox">
              <el-table
                stripe
                border 
                :data="tableData"
                style="width: 100%"
                height="280"
              >
                <el-table-column prop="date" label="关键岗位" align="center"/>
                <el-table-column prop="name" label="A角色" align="center"/>
                <el-table-column prop="name" label="B角色" align="center"/>
              </el-table>
            </titleBox>
          </div>
        </div>
      </el-descriptions-item>
    </el-descriptions>
    <!-- 组件 -->
    <environmentTaskVue ref="environmentTaskRef"></environmentTaskVue>
  </el-drawer>
</template>
  
<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from "vue";
import titleBox from "@/component/titleBox.vue";
import environmentTaskVue from "./environmentTask.vue";

export default defineComponent({
  name: 'environment',
  components: {
    titleBox,
    environmentTaskVue
  },
  setup() {
    const data = reactive({
      defaultProps: {
        children: 'children',
        label: 'name',
      },
      environmentDialog:false,
      checkList: <any>['green','yellow','red'],
      treeData: [
        { name: '行政政法股', nodeType: 'green' },
        { name: '教科文股', nodeType: 'green' },
        { name: '社会保障股', nodeType: 'green' },
        { name: '社会保障股', nodeType: 'green' },
        { name: '经济建设股', nodeType: 'green' },
        { name: '企业外经股', nodeType: 'green' },
        { name: '财政事务中心', nodeType: 'yellow' },
        { name: '金融与债务股', nodeType: 'green' },
        { name: '国库股', nodeType: 'green' },
        { name: '预算股（绩效评价股）', nodeType: 'green' },
        { name: '国库集中支付核算中心', nodeType: 'yellow' },
        { name: '办公室', nodeType: 'green' },
      ],
      name: "行政政法股",
      tableData: <any>[]
    })
    const open = () => {
      data.environmentDialog = true
    }
    
    // 上方选择框点击
    const handleChecked = (value: any) => {
      console.log(value)
    }

    // 树型组件点击事件
    const handleNodeClick = (row: any) => {
      console.log(row);
      data.name = row.name;
    }
    
    // 发起内控任务
    const environmentTaskRef = ref();
    const btnTask = () => {
      environmentTaskRef.value.open();
    }

    return {
      ...toRefs(data),
      open,
      handleChecked,
      handleNodeClick,
      btnTask,
      environmentTaskRef
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
  width: 100%;
  justify-content: space-between;
}

/deep/ .cellLabel {
  width: 250px !important;
}

/deep/ .cellContent {
  height: 700px;
}

.content {
  height: 680px;
  width: 100%;
}

.titleBox {
  width: 49%;
  margin: 10px 0;
}
</style>
  