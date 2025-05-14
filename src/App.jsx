import { useState, useEffect } from 'react';
import Formulario from './modules/Formulario';
import ListadoCitas from './modules/ListadoCitas';
import './index.css';

function App() {
  const [citas, setCitas] = useState(() => {
    const citasGuardadas = localStorage.getItem('citas');
    return citasGuardadas ? JSON.parse(citasGuardadas) : [];
  });

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

  const agregarCita = (cita) => {
    setCitas([...citas, cita]);
  };

  const eliminarCita = (id) => {
    const citasActualizadas = citas.filter((cita) => cita.id !== id);
    setCitas(citasActualizadas);
  };

  return (
    <div className="container">
      <h1>Administrador de Pacientes</h1>
      <div className="row">
        <div className="one-half column">
          <h2>Crear Mi Cita</h2>
          <Formulario onAgregarCita={agregarCita} />
        </div>
        <div className="one-half column">
          <h2>Administra tus Citas:</h2>
          <ListadoCitas citas={citas} onEliminar={eliminarCita} />
        </div>
      </div>
    </div>
  );
}

export default App;
