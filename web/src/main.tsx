import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import '@styles/globals.css'
import AuthContextProvider from '@contexts/AuthContext'

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.querySelector('#root')
)
