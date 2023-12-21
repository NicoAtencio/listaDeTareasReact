import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tarea">
      <h1>App de lista de tareas</h1>
      <div className='tarea-lista-principal'>
        <h2>Mis tareas</h2>
        < ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
