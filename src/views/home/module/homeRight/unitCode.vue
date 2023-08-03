<template>
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
          <span class="label">主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;体：</span>
          <el-select v-model="agencyCode" placeholder=" " size="small">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </li>
        <li class="item">
          <span class="label">类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</span>
          <span>单位内控码</span>
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
        <li class="item btnIcon" @click="btnArchitecture">
          <div class="lamp"></div>
          <div>内控组织架构</div>
        </li>
        <li class="item btnIcon" @click="btnSystem">
          <div class="lamp"></div>
          <div>内控制度体系</div>
        </li>
        <li class="item btnIcon" @click="btnEnvironment">
          <div class="lamp"></div>
          <div>内控基础环境</div>
        </li>
        <li class="item">
          <div class="lamp"></div>
          <div>内控监管要求</div>
        </li>
        <li class="item">
          <div class="lamp"></div>
          <div>内控执行情况</div>
        </li>
      </ul>
    </div>
    <!-- 内控组织架构组件 -->
    <architectureVue ref="architectureVueRef"></architectureVue>
    <!-- 内控制度体系组件 -->
    <systemVue ref="systemVueRef"></systemVue>
    <!-- 内控基础环境组件 -->
    <environment ref="environmentRef"></environment>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import architectureVue from './module/architecture.vue'
import systemVue from './module/system.vue'
import environment from './module/environment.vue'

export default defineComponent({
  components: {
    architectureVue,
    systemVue,
    environment
  },
  name: "unitCode",
  setup() {
    const data = reactive({
      agencyCode: '',
      options: [
        { label: '靖州县财政局', value: '10001' },
        { label: '行政政法股', value: '10002' },
        { label: '科教文股', value: '10003' },
        { label: '社会保障股', value: '10004' },
        { label: '农业农村股', value: '10005' },
        { label: '经济建设股', value: '10006' }
      ]
    })

    // 点击内控组织架构
    const architectureVueRef = ref();
    const btnArchitecture = () => {
      architectureVueRef.value.open()
    }

    // 点击内控制度体系
    const systemVueRef = ref();
    const btnSystem = () => {
      systemVueRef.value.open()
    }

    // 点击内控基础环境
    const environmentRef = ref();
    const btnEnvironment = () => {
      environmentRef.value.open();
    }

    return {
      ...toRefs(data),
      btnArchitecture,
      architectureVueRef,
      btnSystem,
      systemVueRef,
      btnEnvironment,
      environmentRef
    }
  },
})
</script>

<style lang="scss" scoped>
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
</style>
