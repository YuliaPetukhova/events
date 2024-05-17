import {createApp} from 'vue'
import './style.css'
import Index from './Index.vue'
import router from './router/router';
import axios from 'axios'
import VueAxios from 'vue-axios'
import {createPinia} from 'pinia'
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

createApp(Index).use(vuetify).use(router).use(createPinia()).use(VueAxios, axios).mount('#app')