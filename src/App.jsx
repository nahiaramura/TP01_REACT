import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cita from './modules/Cita'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Crear mi cita</h1>

      </div>
      
      <div>
        <h1>Administrar tus citas</h1>
        <Cita/>
        
      </div>
    </>
  )
}

export default App
