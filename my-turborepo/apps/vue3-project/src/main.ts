import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

let app: any;

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    createApp(App).mount('#app')
} else {
    renderWithQiankun({
        mount(props) {
            app = createApp(App);
            app.mount(props.container?.querySelector('#app'));
        },
        bootstrap() {
            console.log('vue3 bootstrap');
        },
        update(props) {
            console.log('vue3 update');
        },
        unmount(props) {
            console.log('vue3 unmount');
            app && app.unmount();
        },
    });
}

