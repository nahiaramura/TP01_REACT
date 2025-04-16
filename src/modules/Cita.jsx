import React from 'react';

const CrearCita = (props) => {
  return (
    <div className="cita">
      <p>{props.id}</p>
      <p>Nombre:  {props.Nombre}</p>
      <p>Dueño: {props.Duenio}</p>
      <p>Fecha: {props.Fecha}</p>
      <p>Hora: {props.Hora}</p>
      <p>Sintomas: {props.Sintomas}</p>
      
      <button>
        Eliminar ×
      </button>
    </div>
  );
}

export default CrearCita;