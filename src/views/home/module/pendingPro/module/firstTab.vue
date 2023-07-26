<template>
  <div class="home">
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
        <titleBox title="相关业务">
          <table class="tableBox" border="1" cellspacing="0" cellpadding="0" style="width: 100%;">
            <tbody>
              <tr>
                <td class="table_title">业务活动</td>
                <td><el-input v-model="input" readonly placeholder="" /></td>
                <td class="table_title">流程环节</td>
                <td><el-input v-model="input" placeholder="" /></td>
              </tr>
              <tr>
                <td class="table_title">业务单类型</td>
                <td><el-input v-model="input" placeholder="" /></td>
                <td class="table_title">业务单编号</td>
                <td><el-input v-model="input" placeholder="" /></td>
              </tr>
            </tbody>
          </table>
        </titleBox>
      </div>
      <div id="step2">
        <titleBox title="疑点问题">
          <table class="tableBox" border="1" cellspacing="0" cellpadding="0" style="width: 100%;">
            <tbody>
              <tr>
                <td class="table_title">存在的问题</td>
                <td colspan="5"><el-input v-model="input" type="textarea" placeholder="" /></td>
              </tr>
              <tr>
                <td class="table_title">涉及的风险</td>
                <td colspan="5"><el-input v-model="input" type="textarea" placeholder="" /></td>
              </tr>
              <tr>
                <td class="table_title">发生时间</td>
                <td colspan="2"><el-input v-model="input" placeholder="" /></td>
                <td class="table_title">风险</td>
                <td colspan="2"><el-input v-model="input" placeholder="" /></td>
              </tr>
              <tr>
                <td class="table_title">责任科室</td>
                <td colspan="2"><el-input v-model="input" placeholder="" /></td>
                <td class="table_title">经办人</td>
                <td colspan="2"><el-input v-model="input" placeholder="" /></td>
              </tr>
              <tr>
                <td class="table_title">风险描述</td>
                <td colspan="5"><el-input v-model="input" type="textarea" placeholder="" /></td>
              </tr>
            </tbody>
          </table>
        </titleBox>
      </div>
      <div id="step3">
        <titleBox title="问题核查">
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
            <el-form ref="form" :model="form" label-width="80px">
              <el-row :gutter="20">
                <el-col :span="24">
                  <el-form-item label="活动名称:">
                    <el-input v-model="form.name" type="textarea"></el-input>
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
                    <el-date-picker type="date" placeholder="" v-model="form.date1"></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
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
        </titleBox>
      </div>
      <div id="step4" class="box">
        风险应对
      </div>
      <div id="step5" class="box">
        报送意见
      </div>
      <div id="step6" class="box">
        纠正反馈
      </div>
      <div id="step7" class="box">
        处理记录
      </div>
      <div id="step8" class="box">
        结果应用
      </div>
    </el-scrollbar>
    <selectUser ref="selectUserRef"></selectUser>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, reactive, toRefs, ref } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue';
import titleBox from "@/component/titleBox.vue";
import selectUser from "@/component/selectUser/index.vue"

export default defineComponent({
  name: 'firstTab',
  components: {
    ArrowRight,
    titleBox,
    selectUser
  },
  setup () {
    const containerRef = ref()
    const data = reactive({
      input: "",
      curActive: 5,
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
      tableData: [{depart: "农业农村股", name: "莫登鹏", date: "2023-06-16 08:25:15", remark: "项目库指标已填列" }],
      form: {}
    })

    // 点击步骤条跳转事件
    const jumpStep = (val: any) => {
      nextTick(() => {
        // 页面滚动到指定位置
        console.log(containerRef.value)
        const dom = <any>document.querySelector(`#step${val}`)
        // 获取当前滚动的距离
        const offsetTop = dom ? dom.offsetTop : 0
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

    return {
      containerRef,
      ...toRefs(data),
      jumpStep,
      submitEvent,
      selectUserRef
    }
  }
})
</script>

<style lang="scss" scoped>
.home{
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
  height: calc(100% - 50px);
  .box{
    height: 500px;
  }
}

/* 表格边框 */
.tableBox {
  border-collapse:collapse;
  border-style: solid;
  border-width: 1px;
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
