import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import 'aos/dist/aos.css'
import AOS from 'aos'

AOS.init()

createApp(App).mount('#app')
