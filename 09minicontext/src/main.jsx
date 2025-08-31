
// main.jsx (or App.jsx wrapper)
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UserContextProvider from './context/UserContextProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

