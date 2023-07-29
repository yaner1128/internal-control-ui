<template>
  <div class="app-container">
    <el-row :gutter="20">
      <!-- 左侧 -->
      <el-col :span="18">
        <el-scrollbar height="calc(100vh - 180px)">
          <!-- 提醒与待办 -->
          <titleIframe title="提醒与待办">
            <todoList></todoList>
          </titleIframe>
          <!-- 业务内控码 -->
          <titleIframe title="业务内控码">
            <businessCode></businessCode>
          </titleIframe>
          <!-- 督办事项 -->
          <titleIframe title="督办事项">
            <supervisionList></supervisionList>
          </titleIframe>
        </el-scrollbar>
      </el-col>
      <el-col :span="6">
        <el-scrollbar height="calc(100vh - 180px)">
          <!-- 单位内控码 -->
          <titleIframe title="单位内控码">
            <unitCode></unitCode>
          </titleIframe>
          <!-- 风险通报 -->
          <titleIframe title="风险通报">
            <reportView></reportView>
          </titleIframe>
          <!-- 体系制度 -->
          <titleIframe title="体系制度">
            <orderView></orderView>
          </titleIframe>
          <!-- 会议纪要 -->
          <titleIframe title="会议纪要">
            <meeting></meeting>
          </titleIframe>
          <!-- 内控简报 -->
          <titleIframe title="内控简报">
            <briefing></briefing>
          </titleIframe>
        </el-scrollbar>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue'
import titleIframe from '@/component/titleIframe/index.vue';
import todoList from "./module/toDoList/index.vue";
import unitCode from "./module/homeRight/unitCode.vue";
import reportView from "./module/homeRight/report.vue";
import orderView from "./module/homeRight/orderView.vue";
import meeting from "./module/homeRight/meeting.vue";
import briefing from "./module/homeRight/briefing.vue";
import supervisionList from "./module/supervisionList/index.vue";
import businessCode from "./module/businessCode/index.vue";

export default defineComponent({
  components: {
    titleIframe,
    todoList,
    businessCode,
    supervisionList,
    unitCode,
    reportView,
    orderView,
    meeting,
    briefing
  },
  setup() {
    const data = reactive({

    })
    return {
      ...toRefs(data)
    }
  },
})
</script>


