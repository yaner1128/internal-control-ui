<template>
  <div class="firstTab">
    <el-steps :active="curActive" :space="200" simple>
      <template #default>
        <template v-for="(step, index) in stepList" :key="index">
          <div class="step_item" :class="(index+1) != curActive ? (index < curActive ? 'successDom' : '') : 'activeDom'" @click="jumpStep(index+1)">{{ step.name }}</div>
          <div class="step_icon" v-if="index != stepList.length-1"><el-icon><ArrowRight /></el-icon></div>
        </template>
      </template>
    </el-steps>
    <el-scrollbar ref="containerRef" class="mainContainer">
      <div id="step1">
        <titleBox title="相关业务" :isShow="curActive==1" v-slot="{ disabled }">
          <table class="tableBox" border="1" cellspacing="0" cellpadding="0" style="width: 100%;">
            <tbody>
              <tr>
                <td class="table_title">业务活动</td>
                <td><el-input v-model="infoForm.business_active" placeholder="" :disabled="disabled" /></td>
                <td class="table_title">流程环节</td>
                <td><el-input v-model="infoForm.process_Name" placeholder="" :disabled="disabled" /></td>
              </tr>
              <tr>
                <td class="table_title">业务单类型</td>
                <td><el-input v-model="infoForm.business_order_type" placeholder="" :disabled="disabled" /></td>
                <td class="table_title">业务单编号</td>
                <td><el-input v-model="infoForm.business_order_code" placeholder="" :disabled="disabled" /></td>
              </tr>
            </tbody>
          </table>
          <el-form label-width="80px" v-if="!disabled">
            <el-row :gutter="20" justify="center">
              <el-col :span="10">
                <el-form-item>
                  <el-button type="success">完成</el-button>
                  <el-button type="primary" @click="submitEvent">提交/报送</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </titleBox>
      </div>
      <div id="step2">
        <titleBox title="疑点问题" :isShow="curActive==2" v-slot="{ disabled }">
          <table class="tableBox" border="1" cellspacing="0" cellpadding="0" style="width: 100%;">
            <tbody>
              <tr>
                <td class="table_title">存在的问题</td>
                <td colspan="5"><el-input v-model="input" type="textarea" :rows="2" placeholder="" :disabled="disabled" /></td>
              </tr>
              <tr>
                <td class="table_title">涉及的风险</td>
                <td colspan="5"><el-input v-model="input" type="textarea" :rows="2" placeholder="" :disabled="disabled" /></td>
              </tr>
              <tr>
                <td class="table_title">发生时间</td>
                <td colspan="2">
                  <el-date-picker :clearable="false" v-model="input" type="date" value-format="YYYY-MM-DD" placeholder="" :disabled="disabled" />
                </td>
                <td class="table_title">风险</td>
                <td colspan="2"><el-input v-model="input" placeholder="" :disabled="disabled" /></td>
              </tr>
              <tr>
                <td class="table_title">责任科室</td>
                <td colspan="2"><el-input v-model="input" placeholder="" :disabled="disabled" /></td>
                <td class="table_title">经办人</td>
                <td colspan="2"><el-input v-model="input" placeholder="" :disabled="disabled" /></td>
              </tr>
              <tr>
                <td class="table_title">风险描述</td>
                <td colspan="5"><el-input v-model="input" type="textarea" :rows="2" placeholder="" :disabled="disabled" /></td>
              </tr>
            </tbody>
          </table>
          <el-form label-width="80px" v-if="!disabled">
            <el-row :gutter="20" justify="center">
              <el-col :span="10">
                <el-form-item>
                  <el-button type="success">完成</el-button>
                  <el-button type="primary" @click="submitEvent">提交/报送</el-button>
                  <el-button type="">关闭</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </titleBox>
      </div>
      <div id="step3">
        <titleBox title="问题核查" :isShow="curActive==3" v-slot="{ disabled }">
          <titleBox title="核查记录">
            <el-table :data="tableData" border style="width: 100%" :header-cell-style="{ height: '36px', backgroundColor: '#f0f0f0' }">
              <el-table-column type="index" label="序号" width="60" />
              <el-table-column prop="depart" label="单位(科室)" width="180" />
              <el-table-column prop="name" label="处理人" width="120" />
              <el-table-column prop="date" label="日期" width="180" />
              <el-table-column prop="remark" label="意见" />
            </el-table>
          </titleBox>
          <titleBox title="核查情况说明">
            <el-form ref="formRef" :model="form" label-width="80px" :disabled="disabled">
              <el-row :gutter="20">
                <el-col :span="24">
                  <el-form-item label="活动名称:">
                    <el-input v-model="form.name" type="textarea" :rows="2"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-form-item label="核查人:">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="核查时间:">
                    <el-date-picker type="date" placeholder="" v-model="form.date"></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </titleBox>
          <el-form label-width="80px" v-if="!disabled">
            <el-row :gutter="20" justify="center">
              <el-col :span="10">
                <el-form-item>
                  <el-button type="success">完成</el-button>
                  <el-button type="primary" @click="submitEvent">提交/报送</el-button>
                  <el-button type="">关闭</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </titleBox>
      </div>
      <div id="step4">
        <titleBox title="风险应对" :isShow="curActive==4" v-slot="{ disabled }">
          <el-form :model="form" label-width="130px" :disabled="disabled">
            <el-form-item label="涉及的风险:" prop="name">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="风险类型:" prop="name">
                  <el-input v-model="form.name" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="风险级别:" prop="name">
                  <el-select v-model="form.region" placeholder=" ">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="可能导致的后果:" prop="name">
                  <el-select v-model="form.region" placeholder=" ">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label="问题起因(客观):" prop="name">
              <el-input v-model="form.name" type="textarea" :rows="2" />
            </el-form-item>
            <el-form-item label="问题起因(主观):" prop="name">
              <el-input v-model="form.name" type="textarea" :rows="2" />
            </el-form-item>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="应对处理方法建议:" prop="name">
                  <el-select v-model="form.region" placeholder=" ">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label="应对意见:" prop="name">
              <el-input v-model="form.name" type="textarea" :rows="2" />
            </el-form-item>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="提交人:" prop="user">
                  <el-input v-model="form.user" disabled />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="提交时间:" prop="date">
                  <el-input v-model="form.date" disabled />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <el-form label-width="80px" v-if="!disabled">
            <el-row :gutter="20" justify="center">
              <el-col :span="10">
                <el-form-item>
                  <el-button type="success">完成</el-button>
                  <el-button type="primary" @click="submitEvent">提交/报送</el-button>
                  <el-button type="">关闭</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </titleBox>
      </div>
      <div id="step5">
        <titleBox title="风险应对报送意见" :isShow="curActive==5" v-slot="{ disabled }">
          <el-table
            :data="tableData"
            border
            :header-cell-style="{ height: '36px', backgroundColor: '#F5F5F5', color: '#555' }">
            <el-table-column type="index" label="序号" width="60" />
            <el-table-column prop="name" label="处理人" width="140" />
            <el-table-column prop="name" label="审批人" width="140" />
            <el-table-column prop="date" label="日期" width="180" />
            <el-table-column prop="remark" label="意见" />
          </el-table>
          <el-form label-width="80px" v-if="!disabled">
            <el-row :gutter="20" justify="center">
              <el-col :span="10">
                <el-form-item>
                  <el-button type="success">完成</el-button>
                  <el-button type="primary" @click="submitEvent">提交/报送</el-button>
                  <el-button type="">关闭</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </titleBox>
      </div>
      <div id="step6">
        <titleBox title="纠正处理反馈" :isShow="curActive==6" v-slot="{ disabled }">
          <el-form :model="form" label-width="130px" :disabled="disabled">
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="应对处理方法建议:" prop="name">
                  <el-select v-model="form.region" placeholder=" ">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label="反馈说明:" prop="name">
              <el-input v-model="form.name" type="textarea" :rows="2" />
            </el-form-item>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="提交人:" prop="user">
                  <el-input v-model="form.user" disabled />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="提交时间:" prop="date">
                  <el-input v-model="form.date" disabled />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <el-form label-width="80px" v-if="!disabled">
            <el-row :gutter="20" justify="center">
              <el-col :span="10">
                <el-form-item>
                  <el-button type="success">完成</el-button>
                  <el-button type="primary" @click="submitEvent">提交/报送</el-button>
                  <el-button type="">关闭</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </titleBox>
      </div>
      <div id="step7">
        <titleBox title="纠正处理记录" :isShow="curActive==7" v-slot="{ disabled }">
          <el-form :model="form" label-width="130px" :disabled="disabled">
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="应对处理方式:" prop="name">
                  <el-select v-model="form.region" placeholder=" ">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="应对处理时间:" prop="name">
                  <el-date-picker :clearable="false" v-model="form.date" type="date" value-format="YYYY-MM-DD" placeholder="" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label="反馈说明:" prop="name">
              <el-input v-model="form.name" type="textarea" :rows="2" />
            </el-form-item>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="提交人:" prop="user">
                  <el-input v-model="form.user" disabled />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="提交时间:" prop="date">
                  <el-input v-model="form.date" disabled />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <el-form label-width="80px" v-if="!disabled">
            <el-row :gutter="20" justify="center">
              <el-col :span="10">
                <el-form-item>
                  <el-button type="success">完成</el-button>
                  <el-button type="primary" @click="submitEvent">提交/报送</el-button>
                  <el-button type="">关闭</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </titleBox>
      </div>
      <div id="step8">
        <titleBox title="纠正结果应用" :isShow="curActive==8" v-slot="{ disabled }">
          <el-table :data="tableData8" border style="width: 100%" :header-cell-style="{ height: '36px', backgroundColor: '#f0f0f0' }">
            <el-table-column type="index" label="序号" width="60" />
            <el-table-column prop="date" label="日期" width="160" />
            <el-table-column prop="agencyName" label="单位(科室)" width="160" />
            <el-table-column prop="userName" label="提交人" width="120" />
            <el-table-column prop="suggest" label="优化改进建议" min-width="200" />
            <el-table-column prop="desc1" label="内控制度完善" min-width="200" />
            <el-table-column prop="desc2" label="控制规则完善" min-width="200" />
          </el-table>
          <div class="btnBox" v-if="!disabled">
            <el-button type="success" @click="insertRow">新增</el-button>
            <el-button type="primary" @click="saveRow('tableData8', 'form8')">保存</el-button>
            <el-button type="danger">关闭</el-button>
          </div>
          <el-form ref="form8Ref" :model="form8" label-width="130px" v-if="!disabled" :disabled="!isEdit">
            <el-form-item label="优化改进建议:" prop="suggest">
              <el-input v-model="form8.suggest" type="textarea" :rows="2" />
            </el-form-item>
            <el-form-item label="内控制度完善:" prop="desc1">
              <el-input v-model="form8.desc1" type="textarea" :rows="2" />
            </el-form-item>
            <el-form-item label="控制规则完善:" prop="desc2">
              <el-input v-model="form8.desc2" type="textarea" :rows="2" />
            </el-form-item>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="提交人:" prop="userName">
                  <el-input v-model="form8.userName" disabled />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="提交时间:" prop="date">
                  <el-input v-model="form8.date" disabled />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <el-form label-width="80px" v-if="!disabled">
            <el-row :gutter="20" justify="center">
              <el-col :span="10">
                <el-form-item>
                  <el-button type="success">完成</el-button>
                  <el-button type="primary" @click="submitEvent">提交/报送</el-button>
                  <el-button type="">关闭</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </titleBox>
      </div>
    </el-scrollbar>
    <selectUser ref="selectUserRef"></selectUser>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, reactive, toRefs, ref, computed, watch } from 'vue'
import { mapState, mapGetters, useStore } from 'vuex'
import { ArrowRight } from '@element-plus/icons-vue';
import titleBox from "@/component/titleBox.vue";
import selectUser from "@/component/selectUser/index.vue";
import { formatDate } from "@/utils/date";

export default defineComponent({
  name: 'firstTab',
  components: {
    ArrowRight,
    titleBox,
    selectUser
  },
  props: {
    active: {
      type: Number
    }
  },
  setup (props) {
    const store = useStore();
    const user = computed(
      mapGetters(['user']).user.bind({ $store: store })
    );

    const containerRef = ref()
    const data = reactive({
      isEdit: false,
      input: "",
      curActive: 1,
      stepList: [
        { id: 1, name: '相关业务' },
        { id: 2, name: '疑点问题' },
        { id: 3, name: '问题核查' },
        { id: 4, name: '风险应对' },
        { id: 5, name: '报送意见' },
        { id: 6, name: '纠正反馈' },
        { id: 7, name: '处理记录' },
        { id: 8, name: '结果应用' },
      ],
      tableData: [],
      form: {
        name: "",
        user: user.value.name,
        date: formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss')
      },
      infoForm: {},
      tableData8: <any>[],
      form8: {
        agencyName: user.value.agencyName,
        userName: user.value.name,
        date: formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss'),
        suggest: "",
        desc1: "",
        desc2: ""
      }
    })

    watch(() => props.active, (val: any) => {
      data.curActive = val;
    })

    // 点击步骤条跳转事件
    const jumpStep = (val: any) => {
      // data.curActive = val
      nextTick(() => {
        // 页面滚动到指定位置
        const dom = <any>document.querySelector(`#step${val}`)
        // 获取当前滚动的距离
        // -外边距距离
        const offsetTop = dom ? dom.offsetTop - 10 : 0;
        containerRef.value.setScrollTop(offsetTop)

        dom.classList.add('anchorAnimation')
        setTimeout(() => {
          dom.classList.remove('anchorAnimation')
        }, 2500)
      })
    }
    // 提交报送
    const selectUserRef = ref();
    const submitEvent = () => {
      selectUserRef.value.open();
    }

    // 新增
    const insertRow = () => {
      data.isEdit = true;
    }
    // 保存当前行数据
    const form8Ref = ref();
    const saveRow = (listName: string, formName: string) => {
      const rowData = { ...data[formName as keyof typeof data] };
      data[listName as keyof typeof data].push(rowData);

      setTimeout(() => {
        form8Ref.value.resetFields();
        data.isEdit = false;
      }, 100)
    }

    return {
      user,
      containerRef,
      ...toRefs(data),
      jumpStep,
      submitEvent,
      selectUserRef,
      insertRow,
      saveRow,
      form8Ref
    }
  }
})
</script>

<style lang="scss" scoped>
.firstTab{
  width: 100%;
  height: calc(100vh - 190px);
  overflow: hidden;
  box-sizing: border-box;
}
.el-steps{
  display: flex;
  justify-content: space-around;
  color: #a8abb2;
  .step_item{
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .step_icon{
    display: flex;
    align-items: center;
    transform: scaleY(1.5);
  }
  .successDom{
    color: #67C23A;
  }
  .activeDom{
    color: #333;
  }
}
.mainContainer{
  padding-top: 10px;
  height: calc(100% - 45px);
  /deep/ .el-form-item{
    margin-bottom: 5px;
    label{
      font-weight: 500;
    }
  }
  /deep/ .el-input,.el-select{
    width: 100%;
  }
  .el-table{
    margin: 10px 0;
  }
  .btnBox{
    margin-bottom: 10px;
    text-align: right;
  }
}

/* 表格边框 */
.tableBox {
  border-color: #888;
  border-collapse:collapse;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 10px;
  .table_title{
    width: 140px;
  }
  // tr{
  //   display: flex;
  //   flex-direction: row;
  //   flex-wrap: nowrap;
  //   width: 100%;
  // }
  td,th {
    text-align: center;
    // padding: 10px 10px;
    // flex: 1 0 25%;
    // display: flex;
    // justify-content: center;
    // align-items: center;
  }
}
</style>
