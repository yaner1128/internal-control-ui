<template>
  <el-dialog
    :close-on-click-modal="false"
    :append-to-body="true"
    v-model="dialogFormVisible"
    :lock-scroll="true"
    width="800px"
    title="组织架构"
  >
    <el-form :model="form" label-width="120px">
      <!--  -->
      <div class="box">
        <el-form-item label="机构名称:">
          <el-input v-model="form.user" placeholder="Approved by" disabled/>
        </el-form-item>
        <el-form-item label="机构编码:">
          <el-input v-model="form.user" placeholder="Approved by" disabled/>
        </el-form-item>
      </div>
      <!--  -->
      <div class="box">
        <el-form-item label="机构类型:">
          <el-input v-model="form.user" placeholder="Approved by" disabled/>
        </el-form-item>
        <el-form-item label="上级机构:">
          <el-input v-model="form.user" placeholder="Approved by" disabled/>
        </el-form-item>
      </div>
      <!--  -->
      <div class="box" v-if="active == 3">
        <el-form-item label="内控委成员:">
          <el-input v-model="form.user" placeholder="Approved by" disabled/>
        </el-form-item>
        <el-form-item label="内控办成员:">
          <el-input v-model="form.user" placeholder="Approved by" disabled/>
        </el-form-item>
      </div>
      <!--  -->
      <el-form-item label="机构简介:">
        <el-input
          v-model="form.user"
          :rows="4"
          type="textarea"
          placeholder="Please input"
        />
      </el-form-item>
      <!--  -->
      <el-form-item label="机构职责:">
        <el-input
          v-model="form.user"
          :rows="4"
          type="textarea"
          placeholder="Please input"
        />
      </el-form-item>
      <!--  -->
      <el-form-item label="内控管理岗:" v-if="active == 2 || active == 3">
        <el-input v-model="form.user" placeholder="Approved by" show-word-limit/>
      </el-form-item>
      <!--  -->
      <el-form-item label="内控管理联络员:" v-if="active == 3">
        <el-input v-model="form.user" placeholder="Approved by" show-word-limit/>
      </el-form-item>
      <!--  -->
      <el-form-item label="人员名单:" v-if="active == 2">
        <el-input
          v-model="form.user"
          :rows="2"
          type="textarea"
          placeholder="Please input"
        />
      </el-form-item>
      <!--  -->
      <el-form-item label="科室/单位:" v-if="active == 2">
        <el-input
          v-model="form.user"
          :rows="2"
          type="textarea"
          placeholder="Please input"
        />
      </el-form-item>
       <!--  -->
       <div class="box" v-if="active == 1">
        <el-form-item label="主任:">
          <el-input v-model="form.user" placeholder="Approved by"/>
        </el-form-item>
        <el-form-item label="副主任:">
          <el-input v-model="form.user" placeholder="Approved by"/>
        </el-form-item>
      </div>
      <!--  -->
      <el-form-item label="委员:" v-if="active == 1">
        <el-input v-model="form.user" placeholder="Approved by" show-word-limit/>
      </el-form-item>
      <!--  -->
      <el-form-item label="备注:">
        <el-input
          v-model="form.user"
          :rows="4"
          type="textarea"
          placeholder="Please input"
        />
      </el-form-item>
    </el-form>
    <div class="drawer__footer">
      <el-button>管理所有</el-button>
      <el-button type="primary">保存</el-button>
    </div>
  </el-dialog>
</template>
  
<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from "vue";

export default defineComponent({
  name: 'architectureDetails',
  components: {
    
  },
  setup() {
    const data = reactive({
      dialogFormVisible:false,
      form: <any>{},
      active: 3
    })
    const open = () => {
      data.dialogFormVisible = true
    }
    
    return {
      ...toRefs(data),
      open,
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
  justify-content: center;
  margin-top: 30px;
}

/deep/ .el-input.is-disabled .el-input__wrapper {
  background-color: #fff !important;
  box-shadow: 0 0 0 0 #e4e7ed inset !important;
}

.box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 65px;
}

/deep/ .el-form-item {
  margin-bottom: 10px;
}

/deep/ .el-input.is-disabled .el-input__inner {
  width: 220px;
}
</style>
  