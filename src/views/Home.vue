<template>
  <div class="home">
    <el-steps :active="active" :space="200" simple>
      <template #default>
        <div class="step_item" :class="active==1 ? 'activeDom' : ''" @click="jumpStep(1)">Step 1</div>
        <div class="step_icon"><el-icon><ArrowRight /></el-icon></div>
        <div class="step_item" :class="active==2 ? 'activeDom' : ''" @click="jumpStep(2)">Step 2</div>
        <div class="step_icon"><el-icon><ArrowRight /></el-icon></div>
        <div class="step_item" :class="active==3 ? 'activeDom' : ''" @click="jumpStep(3)">Step 3</div>
      </template>
      <!-- <el-step title="Step 1" @click="jumpStep(1)" />
      <el-step title="Step 2" @click="jumpStep(2)" />
      <el-step title="Step 3" @click="jumpStep(3)" /> -->
    </el-steps>
    <el-scrollbar ref="containerRef" class="mainContainer">
      <div id="step1" class="box">
        步骤1
      </div>
      <div id="step2" class="box">
        步骤2
      </div>
      <div id="step3" class="box">
        步骤3
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, reactive, toRefs, ref } from 'vue'

export default defineComponent({
  name: 'Home',
  setup () {
    const containerRef = ref()
    const data = reactive({
      active: 1
    })

    // 点击步骤条跳转事件
    const jumpStep = (val: any) => {
      console.log(val)
      data.active = val
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

    return {
      containerRef,
      ...toRefs(data),
      jumpStep
    }
  }
})
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100vh;
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
  .activeDom{
    color: #409EFF;
  }
}
.mainContainer .box{
  height: 500px;
}

// 滚动动画
.anchorAnimation {
  animation-name: anchorKeyframes;
  animation-duration: 2.5s;
  animation-fill-mode: both;
}
@keyframes anchorKeyframes {
  0% {
    background-color: transparent;
  }
  25% {
    background-color: rgba(93, 174, 255, 0.1);
  }
  50% {
    background-color: transparent;
  }
  75% {
    background-color: rgba(93, 174, 255, 0.1);
  }
  100% {
    background-color: transparent;
  }
}
</style>
