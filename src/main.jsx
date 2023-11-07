import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/css/index.css'

import { BrowserRouter } from 'react-router-dom'



import { Menu } from './Menu'


ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <React.StrictMode>


<Menu> </Menu>
    
    
  </React.StrictMode>,
 </BrowserRouter> 
)
