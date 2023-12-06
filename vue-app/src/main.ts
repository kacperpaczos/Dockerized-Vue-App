import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Oruga from "@oruga-ui/oruga-next";
import { bulmaConfig } from "@oruga-ui/theme-bulma";

import "@oruga-ui/theme-bulma/dist/bulma.css";

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(Oruga, bulmaConfig)

app.use(createPinia())
app.use(router)

app.mount('#app')

