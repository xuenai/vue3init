import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { DatePicker } from 'ant-design-vue'
import 'assets/styles/common.less'

createApp(App)
  .use(store)
  .use(router)
  .use(DatePicker)
  // .component(DatePicker.name, DatePicker)
  .mount('#app')
