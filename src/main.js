import { createApp } from 'vue'
import App from './App.vue'
import {createVuetify} from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import "@mdi/font/css/materialdesignicons.css";
import AOS from "aos";
import "aos/dist/aos.css";

const vuetify = createVuetify({
    defaults: {
        global: {
            ripple: false
        }
    },
    components,
    directives,
    // v-icon font 설정
    icons: {
        defaultSet: 'mdi'
    }
})

AOS.init({duration: 1500});
createApp(App).use(vuetify).mount("#app");

