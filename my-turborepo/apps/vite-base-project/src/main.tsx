import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

import { start, registerMicroApps } from 'qiankun'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

const apps = [
  {
    name: 'sub-vue3',
    entry: '//localhost:5175',
    container: '#child-app',
    activeRule: '/sub-vue3',
  },
  {
    name: 'sub-vue',
    entry: '//localhost:5176',
    container: '#child-app',
    activeRule: '/sub-vue',
  },
  {
    name: 'sub-react',
    entry: '//localhost:5174',
    container: '#child-app',
    activeRule: '/sub-react',
  },
]
registerMicroApps(apps, {
  beforeLoad: [
    async app => {
      console.log('before load', app.name)
    },
  ],
  beforeMount: [
    async app => {
      console.log('before mount', app.name)
    },
  ],
  afterMount: [
    async app => {
      console.log('after mount', app.name)
    },
  ],
  afterUnmount: [
    async app => {
      console.log('after unmount', app.name)
    }
  ]
})

start();