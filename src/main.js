import { createApp } from 'vue'
import { createPinia } from 'pinia'

//import css
import './assets/css/app.css'

//import router
import App from './App.vue'
import router from './router'

//
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
