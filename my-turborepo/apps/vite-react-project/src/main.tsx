import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

let app: any;

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
} else {
  renderWithQiankun({
    mount(props) {
      app = createRoot(props.container?.querySelector('#root')!);
      app.render(
        <StrictMode>
          <App />
        </StrictMode>)
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


