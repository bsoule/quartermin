import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.scss'

// importing fontawesome stuff
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

library.add(fas, far) // Add the icons you want to use

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon) // Register globally
app.component('font-awesome-layers', FontAwesomeLayers) // Register globally
app.component('font-awesome-layers-text', FontAwesomeLayersText) // Register globally

app.mount('#app')

//createApp(App).mount('#app')
