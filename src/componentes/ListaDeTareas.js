import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import "../hojas-de-estillo/ListaDeTareas.css";
import Tarea from "./Tarea";

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      // Quita los espacios del principio o final de un string.
      const tareasActulizada = [tarea, ...tareas];
      setTareas(tareasActulizada);
    }
    console.log(tareas);
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  }

  const completarTarea = id => {
    const tareasActulizadas = tareas.map(tarea => {
      if(tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea
    });
    setTareas(tareasActulizadas);
  }

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tarea-lista-contenedor">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
          />
        ))}
      </div>
    </>
  );
}

export default ListaDeTareas;
