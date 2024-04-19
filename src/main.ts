import { createApp } from 'vue'
import './style.css'
import Index from './Index.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})
createApp(Index).use(vuetify).mount('#app')
