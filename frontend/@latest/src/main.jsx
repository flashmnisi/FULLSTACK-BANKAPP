import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, RouterProvider ,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <App/>
   </BrowserRouter>
  </StrictMode>,
)
