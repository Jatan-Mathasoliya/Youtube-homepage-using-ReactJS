import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Left from './components/leftcomponents/left'
import Right from './components/rightcomponents/right'
import './main.css'
import Test from './Test'

createRoot(document.getElementById('root')).render(
    <div className="main">
    <Left/>
    <Right/>
    </div>
)
