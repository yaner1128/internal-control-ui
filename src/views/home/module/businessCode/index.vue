<template>
  <el-row class="businessCode">
    <el-col :span="9">
      <!-- 业务码 -->
      <div class="unitCode">
        <!-- 左侧码 -->
        <div class="code">
          <img src="@/assets/image/code.png" alt="">
        </div>
        <!-- 右侧信息 -->
        <div class="info">
          <!-- 单位信息 -->
          <ul class="unitInfo">
            <li class="item">
              <span class="label">管控活动：</span>
              <span>预算管理一体化</span>
            </li>
            <li class="item">
              <span class="label">主管处室：</span>
              <span>预算股(绩效评价股)</span>
            </li>
            <li class="item">
              <span class="label">类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</span>
              <span>业务内控码</span>
            </li>
            <li class="item">
              <span class="label">责任岗位：</span>
              <span>股长岗</span>
            </li>
            <li class="item">
              <span class="label">责任人员：</span>
              <span>张三</span>
            </li>
          </ul>
          <!-- 内控规则 -->
          <ul class="lightInfo">
            <li class="item">
              <div class="lamp"></div>
              <div>合规运行</div>
            </li>
            <li class="item">
              <div class="lamp"></div>
              <div>风险防范</div>
            </li>
            <li class="item">
              <div class="lamp"></div>
              <div>风险控制</div>
            </li>
            <li class="item">
              <div class="lamp"></div>
              <div>保障机制</div>
            </li>
          </ul>
        </div>
      </div>
    </el-col>
    <el-col :span="5" style="border-left: 1px solid #ccc; border-right: 1px solid #ccc;padding-right: 16px;">
      <!-- 股室树 -->
      <div class="tree">
        <el-scrollbar height="240px">
          <el-tree
            :data="treeData"
            :props="defaultProps"
            @node-click="handleNodeClick"
          >
            <template #default="{ data, node }">
              <span style="padding-right: 5px;font-size: 18px;display: flex;align-items: center;">
                <el-icon style="color: #E6A23C" v-if="data.nodeType == 'Org'"><FolderOpened /></el-icon>
                <el-icon style="color: #3D913D" v-if="data.nodeType == 'Post'"><Discount /></el-icon>
                <el-icon style="color: #409EFF" v-if="data.nodeType == 'User'"><User /></el-icon>
              </span>
              <span>{{ node.label }}</span>
            </template>
          </el-tree>
        </el-scrollbar>
      </div>
    </el-col>
    <el-col :span="10" style="padding-left: 10px;">
      <!-- 表格 -->
      <el-table class="table" :data="tableData" border height="240px"
        :header-cell-style="{ height: '36px', backgroundColor: '#f8f8f8' }">
        <el-table-column label="" width="50" align="center">
          <template #default="{ row }">
            <div style="display: flex;justify-content: center;">
              <div style="width: 16px; height: 16px;border-radius: 8px;" :class="row.type == 1 ? 'success' : row.type == 2 ? 'warning' : 'danger'"></div>
            </div>
          </template>
        </el-table-column>
        <el-table-column type="index" label="序号" width="60" align="center" />
        <el-table-column prop="depart" label="管控业务" align="center" />
        <el-table-column prop="remark" label="主管处室" align="center" />
      </el-table>
    </el-col>
  </el-row>  
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { FolderOpened, User, Discount } from "@element-plus/icons-vue";

export default defineComponent({
  name: "businessCode",
  components: {
    FolderOpened,
    User,
    Discount
  },
  setup() {
    const data = reactive({
      defaultProps: {
        children: 'children',
        label: 'name',
      },
      treeData: [
        { name: '行政政法股', nodeType: 'Org', children: [
          { name: '股长', nodeType: 'Post', children: [
            { name: '张光熊', nodeType: 'User' }
          ]},
          { name: '股员', nodeType: 'Post', children: [
            { name: '吴思', nodeType: 'User' },
            { name: '行政政法股股员', nodeType: 'User' }
          ]}
        ]},
        { name: '科教文股股', nodeType: 'Org', children: [
          { name: '股长', nodeType: 'Post', children: [
            { name: '张丽娜', nodeType: 'User' }
          ]},
          { name: '股员', nodeType: 'Post', children: [
            { name: '舒向东', nodeType: 'User' },
            { name: '卢芳', nodeType: 'User' }
          ]}
        ]},
        { name: '社会保障股', nodeType: 'Org', children: [
          { name: '股长', nodeType: 'Post', children: [
            { name: '张丽娜', nodeType: 'User' }
          ]},
          { name: '股员', nodeType: 'Post', children: [
            { name: '舒向东', nodeType: 'User' },
            { name: '卢芳', nodeType: 'User' }
          ]}
        ]},
        { name: '农业农村股', nodeType: 'Org', children: [
          { name: '股长', nodeType: 'Post', children: [
            { name: '唐瑞芳', nodeType: 'User' }
          ]},
          { name: '副股长', nodeType: 'Post', children: [
            { name: '姚斌元', nodeType: 'User' }
          ]},
          { name: '股员', nodeType: 'Post', children: [
            { name: '杨惠敏', nodeType: 'User' },
            { name: '黄静坤', nodeType: 'User' },
            { name: '黄俊杰', nodeType: 'User' },
            { name: '莫登彭', nodeType: 'User' }
          ]}
        ]}
      ],
      tableData: [
        { type: '1' },
        { type: '2' },
        { type: '2' },
        { type: '2' },
        { type: '3' }
      ]
    })
    // 树型组件点击事件
    const handleNodeClick = (row: any) => {
      console.log(row);
    }
    return {
      ...toRefs(data),
      handleNodeClick
    }
  },
})
</script>

<style lang="scss" scoped>
.businessCode{
  height: 240px;
  display: flex;
}

.unitCode{
  display: flex;
  flex-direction: wrap;
  flex-wrap: nowrap;
  width: 100%;
  height: 240px;
  font-size: 14px;
  .code{
    flex: 0 1 45%;
    // border: 1px solid #ccc;
    display: flex;
    align-items: center;
    img{
      width: 100%;
    }
  }
  .info{
    flex: 1;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .unitInfo{
    display: flex;
    flex-direction: column;
    .item{
      padding-bottom: 8px;
      display: flex;
    }
    .label{
      width: 70px;
      display: flex;
    }
  }
  .lightInfo{
    display: flex;
    flex-direction: column;
    .item{
      display: flex;
      align-items: center;
      font-size: 14px;
      padding-bottom: 5px;
      letter-spacing: 1px;
      .lamp{
        width: 12px;
        height: 12px;
        border-radius: 6px;
        background-color: red;
        margin-right: 8px;
      }
    }
  }
}

.tree{
  .treeItem{
    display: flex;
    align-items: center;
  }
}

.success{
  background-color: var(--success_color);
}
.warning{
  background-color: var(--warning_color);
}
.danger{
  background-color: var(--danger_color);
}
</style>
