import Cita from './Cita';

const ListadoCitas = ({ citas, onEliminar }) => (
  <>
    {citas.length === 0 ? (
      <p>No hay citas aún</p>
    ) : (
      citas.map((cita) => (
        <Cita key={cita.id} cita={cita} onEliminar={onEliminar} />
      ))
    )}
  </>
);

export default ListadoCitas;
