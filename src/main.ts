import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/routers'
import '@/router/index'
import store from '@/store/index'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/index.scss'

import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

const app = createApp(App)
// 全局默认参数
VXETable.setup({
  table: {
    size: 'mini'
  }
})
function useTable(app: any) {
  app.use(VXETable)
}

import '@/icons' // icon
import SvgIcon from '@/component/SvgIcon/index.vue' // svg组件

import directive from '@/component/permission/index'
directive(app)

app.component('SvgIcon', SvgIcon)

app.use(ElementPlus)
app.use(useTable)
app.use(store).use(router).mount('#app')
