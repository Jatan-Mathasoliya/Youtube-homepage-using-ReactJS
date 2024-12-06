import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Left from './components/leftcomponents/left'
import Right from './components/rightcomponents/right'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="main">
    <Left/>
    <Right/>
    </div>
  </StrictMode>,
)
