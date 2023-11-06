import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.css'

import { BrowserRouter } from 'react-router-dom'
import { UsuariosComponent } from './components/UsuariosComponent'
import { HooksApp } from './HooksApp'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <React.StrictMode>
    <HooksApp></HooksApp>
    <UsuariosComponent></UsuariosComponent>
  </React.StrictMode>,
 </BrowserRouter> 
)
