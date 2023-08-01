<template>
  <Title-iframe title="制度规范查询">
    <!-- 搜索框 -->
    <div class="searchBox">
      <el-input v-model="input3" placeholder="请输入标题或关键字">
        <template #append>
          <el-button type="primary" link>搜索条目</el-button>
        </template>
      </el-input>
    </div>
    <!-- 展示列表 -->
    <el-scrollbar height="calc(100vh - 320px)" style="border: 1px solid #ccc;">
      <ul class="info">
        <li class="item" v-for="(item, index) in infoList" :key="index">
          <div class="left">
            <p class="title">{{ item.title }}</p>
            <p><span class="label">编&nbsp;&nbsp;&nbsp;号：</span><span>{{ item.code }}</span></p>
            <p><span class="label">关键字：</span><span>{{ item.key }}</span></p>
            <p><span class="label">摘&nbsp;&nbsp;&nbsp;要：</span><span>{{ item.desc }}</span></p>
          </div>
          <div class="right">
            <span>{{ item.date }}</span>
            <span>浏览：({{ item.num }})</span>
          </div>
        </li>
      </ul>
    </el-scrollbar>
    <!-- 分页 -->
    <Pagination align="left" :pageObj="pageObj" :total="total"></Pagination>
  </Title-iframe>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "Specif",
  setup() {
    const data = reactive({
      infoList: [
        { title: '靖州县财政局关于成立内部控制委员会的通知', code: '财政监督股[2022]035号', key: '成立内部控制委员会', desc: '(靖财105号)靖州县财政局关于成立内部控制委员会的通知', date: '2022-09-20 15:09:32', num: 0 },
        { title: '靖州县财政局关于成立内部控制委员会的通知', code: '财政监督股[2022]035号', key: '成立内部控制委员会', desc: '(靖财105号)靖州县财政局关于成立内部控制委员会的通知', date: '2022-09-20 15:09:32', num: 0 },
        { title: '靖州县财政局关于成立内部控制委员会的通知', code: '财政监督股[2022]035号', key: '成立内部控制委员会', desc: '(靖财105号)靖州县财政局关于成立内部控制委员会的通知', date: '2022-09-20 15:09:32', num: 0 },
        { title: '靖州县财政局关于成立内部控制委员会的通知', code: '财政监督股[2022]035号', key: '成立内部控制委员会', desc: '(靖财105号)靖州县财政局关于成立内部控制委员会的通知', date: '2022-09-20 15:09:32', num: 0 },
        { title: '靖州县财政局关于成立内部控制委员会的通知', code: '财政监督股[2022]035号', key: '成立内部控制委员会', desc: '(靖财105号)靖州县财政局关于成立内部控制委员会的通知', date: '2022-09-20 15:09:32', num: 0 },
        { title: '靖州县财政局关于成立内部控制委员会的通知', code: '财政监督股[2022]035号', key: '成立内部控制委员会', desc: '(靖财105号)靖州县财政局关于成立内部控制委员会的通知', date: '2022-09-20 15:09:32', num: 0 },
        { title: '靖州县财政局关于成立内部控制委员会的通知', code: '财政监督股[2022]035号', key: '成立内部控制委员会', desc: '(靖财105号)靖州县财政局关于成立内部控制委员会的通知', date: '2022-09-20 15:09:32', num: 0 },
        { title: '靖州县财政局关于成立内部控制委员会的通知', code: '财政监督股[2022]035号', key: '成立内部控制委员会', desc: '(靖财105号)靖州县财政局关于成立内部控制委员会的通知', date: '2022-09-20 15:09:32', num: 0 },
        { title: '靖州县财政局关于成立内部控制委员会的通知', code: '财政监督股[2022]035号', key: '成立内部控制委员会', desc: '(靖财105号)靖州县财政局关于成立内部控制委员会的通知', date: '2022-09-20 15:09:32', num: 0 },
        { title: '靖州县财政局关于成立内部控制委员会的通知', code: '财政监督股[2022]035号', key: '成立内部控制委员会', desc: '(靖财105号)靖州县财政局关于成立内部控制委员会的通知', date: '2022-09-20 15:09:32', num: 0 },
      ],
      pageObj: {
        page: 0,
        size: 5
      },
      total: 37
    })

    return {
      ...toRefs(data)
    }
  },
});
</script>

<style lang="scss" scoped>
.searchBox{
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  .el-input{
    width: 500px;
  }
}
.info{
  // border: 1px solid #ccc;
  .item{
    height: 120px;
    padding: 10px 15px;
    border-bottom: 1px dotted #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .label{
      width: 60px;
      display: inline-block;
    }
    .title{
      cursor: pointer;
      color: #2381df;
      font-weight: bold;
      font-size: 15px;
    }
  }
  .left,.right{
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 14px;
  }
  .left{
    height: 100%;
    justify-content: space-around;
  }
}
</style>
