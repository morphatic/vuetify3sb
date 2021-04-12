import { createApp } from 'vue'
import i18n from './i18n'
import vuetify from './plugins/vuetify'
import App from './App.vue'

const app = createApp(App)
app.use(i18n)
app.use(vuetify)

app.mount('#app')
