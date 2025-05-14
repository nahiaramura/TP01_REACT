import { useState } from 'react';

const Formulario = ({ onAgregarCita }) => {
  const [mascota, setMascota] = useState('');
  const [dueño, setDueño] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState('');

  const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

  const manejarSubmit = (e) => {
    e.preventDefault();

    if ([mascota, dueño, fecha, hora, sintomas].includes('')) {
      setError('Todos los campos son obligatorios');
      return;
    }

    if (!soloLetras.test(mascota)) {
      setError('El nombre de la mascota solo debe contener letras');
      return;
    }

    if (!soloLetras.test(dueño)) {
      setError('El nombre del dueño solo debe contener letras');
      return;
    }

    if (sintomas.trim().length < 3) {
      setError('Los síntomas deben describirse correctamente');
      return;
    }

    setError('');

    const nuevaCita = {
      id: crypto.randomUUID(),
      mascota,
      dueño,
      fecha,
      hora,
      sintomas,
    };

    onAgregarCita(nuevaCita);

    setMascota('');
    setDueño('');
    setFecha('');
    setHora('');
    setSintomas('');
  };

  return (
    <>
      {error && <p className="alerta-error">{error}</p>}
      <form onSubmit={manejarSubmit}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          value={mascota}
          onChange={(e) => setMascota(e.target.value)}
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          value={dueño}
          onChange={(e) => setDueño(e.target.value)}
        />
        <label>Fecha</label>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
        <label>Hora</label>
        <input
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        />
        <label>Síntomas</label>
        <textarea
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
        />
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
};

export default Formulario;
