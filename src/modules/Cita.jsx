import React from 'react';
import { Fragment } from 'react';
function crearCita() 
{
    return (
<Fragment className="one-half column">
        
        <h2>Administra tus citas</h2>
        <div className="cita">
          <p>Mascota: </p>
          <p>Dueño: </p>
          <p>Fecha: </p>
          <p>Hora: </p>
          <p>Sintomas: </p><button class="button elimnar u-full-width">Eliminar ×</button>
        </div>
        </Fragment>
    );

}

export default crearCita;