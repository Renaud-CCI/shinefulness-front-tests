import './assets/main.css'
import 'tailwindcss/tailwind.css';
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import { languages, defaultLocale } from './locales/index.js';
import { createPinia } from 'pinia';
import router from './router';
import FontAwesomeIcon from "@/utilities/fontawesome-icons";
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import App from './App.vue';


// i18n
const messages = Object.assign(languages);

// Handle translations
const i18n = createI18n({
    legacy: false,
    fallbackLocale: 'fr',
    locale: defaultLocale,
    messages
});

// Vuetify
const vuetify = createVuetify({
    components,
    directives,
  })

const pinia = createPinia();

const app = createApp(App);

app .component( 'font-awesome-icon', FontAwesomeIcon);

app .use(i18n)
    .use(pinia)
    .use(router)
    .use(vuetify);


app .mount('#app');

