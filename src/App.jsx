//import { useState } from 'react'
import './App.css'
import './index.css'
import Formulario from './modules/Formulario.jsx'
import Citas from './modules/Cita.jsx'

function App() {

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <Formulario />
            
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            <Citas Nombre="Nina" Duenio='Lola' Fecha= '2020-04-05' Hora='06:26' Sintomas= 'Se rompio una pata'/>
            <Citas Nombre="Tobi" Duenio='Nahi' Fecha= '2003-02-05' Hora='23:34' Sintomas= 'Le duele la panza'/>
            <Citas Nombre="Cucki" Duenio='Aaron' Fecha= '2007-08-05' Hora='16:15' Sintomas= 'Vomitos'/>

          </div>
        </div>
      </div>
    </>
  )
}

export default App


