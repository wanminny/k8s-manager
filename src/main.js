import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'normalize.css'
import App from './App.vue'
import router from './router'

import * as ELIcons from '@element-plus/icons-vue'
// import { GlobalCmComponent } from "codemirror-editor-vue3";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import 'codemirror/theme/idea.css'
// import 'codemirror/theme/darcula.css'
// // 引入语言模式 可以从 codemirror/mode/ 下引入多个
// import 'codemirror/mode/yaml/yaml.js'



const app = createApp(App);
for (let iconName in ELIcons) {
    app.component(iconName,ELIcons[iconName])
}
// app.use(GlobalCmComponent, { componentName: "codemirror" });
app.use(createPinia()).use(router).use(ElementPlus).mount('#app')
