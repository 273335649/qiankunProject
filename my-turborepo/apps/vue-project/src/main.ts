import * as Vue from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import './assets/main.css'

const { createApp } = Vue;

let app: Vue.App | null = null;

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  app = createApp(App);
  app.use(createPinia())
  app.use(router)
  app.mount('#app')
} else {
  renderWithQiankun({
    mount(props) {
      app = createApp(App);
      app.use(createPinia())
      app.use(router)
      app.mount(props.container?.querySelector('#app'));
    },
    bootstrap() {
      console.log('vue3 bootstrap');
    },
    update() {
      console.log('vue3 update');
    },
    unmount() {
      console.log('vue3 unmount');
      if (app) {
        app.unmount();
      }
    },
  });
}


