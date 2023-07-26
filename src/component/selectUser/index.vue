<template>
  <el-dialog
    v-model="dialogVisible"
    title="选择科室和人员"
    width="600px"
    :before-close="handleClose"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <el-form ref="formRef" :model="form" label-width="90px" :rules="rules">
      <el-form-item label="业务科室:" prop="user">
        <el-input v-model="form.user" readonly type="textarea" @click.self="showUserBox" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="success" @click="submitEvent">
          确定
        </el-button>
      </span>
    </template>
    <userBox ref="userBoxRef" @putData="getData"></userBox>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue';
import userBox from "./module/userBox.vue"

export default defineComponent({
  name: "selectUser",
  props: {
    
  },
  components: {
    userBox
  },
  setup(props) {
    const data = reactive({
      dialogVisible: false,
      curSelectUser: [],
      form: {
        user: ""
      },
      rules: {
        user: [{ required: true, message: '请选择业务科室', trigger: 'blur' }]
      }
    })

    const open = () => {
      data.dialogVisible = true;
    }
    const userBoxRef = ref();
    const showUserBox = () => {
      userBoxRef.value.open(data.curSelectUser);
    }
    const formRef = ref();
    const getData = (val: any) => {
      data.form.user = val.value;
      data.curSelectUser = val.selectId;
      formRef.value.validateField('user');
    }

    const submitEvent = () => {
      formRef.value.validate((valid: any) => {
        if(valid) {
          console.log(data.form)
          console.log(data.curSelectUser)
          setTimeout(() => {
            handleClose();
          }, 100)
        }
      })
    }
    const handleClose = () => {
      formRef.value.resetFields()
      data.curSelectUser = []
      data.dialogVisible = false;
    }

    return {
      ...toRefs(props),
      ...toRefs(data),
      open,
      formRef,
      userBoxRef,
      showUserBox,
      handleClose,
      getData,
      submitEvent
    }
  },
})
</script>

<style lang="scss" scoped>

</style>
