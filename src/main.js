import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BaseCard from './components/ui/BaseCard.vue'
import BaseButton from './components/ui/BaseButton.vue'
import BaseSpinner from './components/ui/BaseSpinner.vue'

// defineAsyncComponent - 필요할때만 import
const BaseDialog = defineAsyncComponent(() => import('./components/ui/BaseDialog.vue'))

const app = createApp(App)

app.use(store)
app.use(router)

app.component('base-card',BaseCard)
app.component('base-button',BaseButton)
app.component('base-spinner',BaseSpinner)
app.component('base-dialog',BaseDialog)

app.mount('#app')