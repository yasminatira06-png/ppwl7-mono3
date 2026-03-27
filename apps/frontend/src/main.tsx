import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
// import App from './ApiTest'

const path = window.location.pathname

let App
if (path === '/classroom') {
  const { default: ClassroomApp } = await import('./App3')
  App = ClassroomApp
} else {
  const { default: DefaultApp } = await import('./App2')
  App = DefaultApp
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)