<template>
  <el-drawer
    v-model="limitDialog"
    title="模块角色设定"
    direction="rtl"
    size="60%"
  >
    <div class="title">模块名称：</div>
    <div class="checkClass">
      <el-checkbox v-model="checkList.check1" label="浏览" size="large" @change="checkChange(checkList.check1,'check1')"/>
      <el-checkbox v-model="checkList.check2" label="选择" size="large" @change="checkChange(checkList.check2,'check2')"/>
      <el-checkbox v-model="checkList.check3" label="新增" size="large" @change="checkChange(checkList.check3,'check3')"/>
      <el-checkbox v-model="checkList.check4" label="编辑" size="large" @change="checkChange(checkList.check4,'check4')"/>
      <el-checkbox v-model="checkList.check5" label="删除" size="large" @change="checkChange(checkList.check5,'check5')"/>
      <el-checkbox v-model="checkList.check6" label="导入/出" size="large" @change="checkChange(checkList.check6,'check6')"/>
      <el-checkbox v-model="checkList.check7" label="配置" size="large" @change="checkChange(checkList.check7,'check7')"/>
      <el-checkbox v-model="checkList.check8" label="执行" size="large" @change="checkChange(checkList.check8,'check8')"/>
      <el-checkbox v-model="checkList.checkAll" label="全选" size="large" @change="checkChange(checkList.checkAll,'checkAll')"/>
    </div>
    <vxe-table
      border
      height="730"
      :column-config="{resizable: true}"
      :data="tableData"
      :edit-config="{trigger: 'click', mode: 'row'}"
      :checkbox-config="{highlight: true, range: true}">
      <vxe-column field="name"></vxe-column>
      <vxe-column title="浏览" :edit-render="{}" show-overflow>
        <template #default="{ row }">
          <vxe-checkbox v-model="row.check1" ></vxe-checkbox>
        </template>
        <template #edit="{ row }">
          <vxe-checkbox v-model="row.check1"></vxe-checkbox>
        </template>
      </vxe-column>
      <vxe-column title="选择" :edit-render="{}" show-overflow>
        <template #default="{ row }">
          <vxe-checkbox v-model="row.check2" ></vxe-checkbox>
        </template>
        <template #edit="{ row }">
          <vxe-checkbox v-model="row.check2"></vxe-checkbox>
        </template>
      </vxe-column>
      <vxe-column title="新增" :edit-render="{}" show-overflow>
        <template #default="{ row }">
          <vxe-checkbox v-model="row.check3" ></vxe-checkbox>
        </template>
        <template #edit="{ row }">
          <vxe-checkbox v-model="row.check3"></vxe-checkbox>
        </template>
      </vxe-column>
      <vxe-column title="编辑" :edit-render="{}" show-overflow>
        <template #default="{ row }">
          <vxe-checkbox v-model="row.check4" ></vxe-checkbox>
        </template>
        <template #edit="{ row }">
          <vxe-checkbox v-model="row.check4"></vxe-checkbox>
        </template>
      </vxe-column>
      <vxe-column title="删除" :edit-render="{}" show-overflow>
        <template #default="{ row }">
          <vxe-checkbox v-model="row.check5" ></vxe-checkbox>
        </template>
        <template #edit="{ row }">
          <vxe-checkbox v-model="row.check5"></vxe-checkbox>
        </template>
      </vxe-column>
      <vxe-column title="导入/出" :edit-render="{}" show-overflow>
        <template #default="{ row }">
          <vxe-checkbox v-model="row.check6" ></vxe-checkbox>
        </template>
        <template #edit="{ row }">
          <vxe-checkbox v-model="row.check6"></vxe-checkbox>
        </template>
      </vxe-column>
      <vxe-column title="配置" :edit-render="{}" show-overflow>
        <template #default="{ row }">
          <vxe-checkbox v-model="row.check7" ></vxe-checkbox>
        </template>
        <template #edit="{ row }">
          <vxe-checkbox v-model="row.check7"></vxe-checkbox>
        </template>
      </vxe-column>
      <vxe-column title="执行" :edit-render="{}" show-overflow>
        <template #default="{ row }">
          <vxe-checkbox v-model="row.check8" ></vxe-checkbox>
        </template>
        <template #edit="{ row }">
          <vxe-checkbox v-model="row.check8"></vxe-checkbox>
        </template>
      </vxe-column>
      <vxe-column title="全选" :edit-render="{}" show-overflow>
        <template #default="{ row }">
          <vxe-checkbox v-model="row.checkAll" ></vxe-checkbox>
        </template>
        <template #edit="{ row }">
          <vxe-checkbox v-model="row.checkAll"></vxe-checkbox>
        </template>
      </vxe-column>
    </vxe-table>
    <div class="drawer__footer">
      <el-button>Cancel</el-button>
      <el-button type="primary">Submit</el-button>
    </div>
  </el-drawer>
</template>
  
<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from "vue";

export default defineComponent({
  name: 'limitDrawer',
  components: {
    
  },
  setup() {
    const data = reactive({
      limitDialog:false,
      tableData:[
        {
          name:'全量资金用户',
          check1: true,
          check2: false,
          check3: true,
          check4: false,
          check5: true,
          check6: false,
          check7: true,
          check8: false,
          checkAll: false,
        },
        {
          name:'局领导',
          check1: true,
          check2: false,
          check3: true,
          check4: false,
          check5: true,
          check6: false,
          check7: false,
          check8: false,
          checkAll: false,
        }
      ],
      checkList: {
        check1: false,
        check2: false,
        check3: false,
        check4: false,
        check5: false,
        check6: false,
        check7: false,
        check8: false,
        checkAll: false,
      }
    })
    const open = () => {
      data.limitDialog = true
    }
    
    const checkChange = (val:any, title:any) => {
      console.log(val)
      console.log(title)
      if(title == 'checkAll') {
        data.checkList.check1 = val;
        data.checkList.check2 = val;
        data.checkList.check3 = val;
        data.checkList.check4 = val;
        data.checkList.check5 = val;
        data.checkList.check6 = val;
        data.checkList.check7 = val;
        data.checkList.check8 = val;
        data.tableData = data.tableData.map((item: any) => {
          item.check1 = val;
          item.check2 = val;
          item.check3 = val;
          item.check4 = val;
          item.check5 = val;
          item.check6 = val;
          item.check7 = val;
          item.check8 = val;
          item.checkAll = val;
          return item;
        })
      } else {
        data.tableData = data.tableData.map((item: any) => {
          item[title] = val
          return item;
        })
      }
    }

    return {
      ...toRefs(data),
      open,
      checkChange
    }
  },
})
</script>
  
<style lang="scss" scoped>
.title {
  font-size: 14px;
  margin-bottom: 20px;
  color: #72767b;
}

.drawer__footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
}

.checkClass {
  margin-left:  100px;
  margin-right: 35px;
  display: flex;
  justify-content: space-between;
}
</style>
  