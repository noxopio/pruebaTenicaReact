import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.css'
import { HooksApp } from './App'
import { BrowserRouter } from 'react-router-dom'
import { UsuariosComponent } from './components/UsuariosComponent'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <React.StrictMode>
    <HooksApp />
    <UsuariosComponent></UsuariosComponent>
  </React.StrictMode>,
 </BrowserRouter> 
)
