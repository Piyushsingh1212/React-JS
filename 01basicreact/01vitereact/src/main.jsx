import { StrictMode } from 'react'
import React from 'react'

import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function MyApp() {
  return(
    <div>
      <h1>Custom app</h1>
    </div>
  )
}

const anotherElement = "chai aur react";

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google',
  anotherElement
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
 
  reactElement
  
)
