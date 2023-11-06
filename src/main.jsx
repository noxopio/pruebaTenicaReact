import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/css/index.css'

import { BrowserRouter } from 'react-router-dom'
import { UsuariosComponent } from './components/UsuariosComponent'
import { HooksApp } from './App'
import { ScreenUser } from './ScreenUser'
import { Menu } from './Menu'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <React.StrictMode>


<Menu> </Menu>
    
    
  </React.StrictMode>,
 </BrowserRouter> 
)
