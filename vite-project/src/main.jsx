import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App /*, { Count}*/ from './App.jsx'
// import User from './User.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Count /> */}
    {/*<User />*/}
  </StrictMode>
)
