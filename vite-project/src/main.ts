import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store, key } from './store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import '@/assets/css/reset.less';

const app = createApp(App);
app.use(router);
app.use(store, key);
app.use(ElementPlus);
app.mount('#app');