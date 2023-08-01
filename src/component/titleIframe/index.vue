<template>
  <div class="box_wrap">
    <div class="title">
      <div class="left_title">
        <img src="@/assets/image/drop.png" alt="" style="width: 22px">
        {{ title }}</div>
      <settingIconVue></settingIconVue>
    </div>
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import settingIconVue from '@/component/settingVue/index.vue';

export default defineComponent({
  name: "titleIframe",
  components: {
    settingIconVue,
  },
  props: {
    title: {
      type: String
    }
  },
  setup(prop) {
    
    return {
      ...toRefs(prop)
    }
  },
})
</script>

<style lang="scss" scoped>
.box_wrap{
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  // padding: 0 10px;
  margin: 10px;
  border-radius: 5px 5px 0 0;
  .title{
    width: 100%;
    height: 40px;
    padding: 0 15px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    font-size: 18px;
    font-weight: bold;
    background-color: #f8f8f8;
    border-radius: 5px 5px 0 0;
    .left_title{
      display: flex;
      align-items: center;
    }
  }
  .container{
    width: 100%;
    padding: 10px 10px;
    min-height: 10px;
  }
}
</style>
