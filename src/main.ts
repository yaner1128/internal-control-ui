import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/index.scss'

import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
// 全局默认参数
VXETable.setup({
  table: {
    size: 'mini'
  }
})
function useTable(app: any) {
  app.use(VXETable)
}

const app = createApp(App)

app.use(ElementPlus)
app.use(useTable)
app.use(store).use(router).mount('#app')
