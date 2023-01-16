import { useState } from 'react';
import './list.css'
import {v4 as uuidv4} from 'uuid';

export default function List({ list, onClick}) {

  const [nuevaTarea, setNuevaTarea] = useState("")

  function typeTarea(e){
    setNuevaTarea(e.target.value)
  }
  
  function addTareaToList(e){
    e.preventDefault()
    if(nuevaTarea === ""){
      return
    }
    const objetoNuevaTarea = {userId:1, id:uuidv4(),
    title:nuevaTarea,
    completed:false}
    const nuevaListaConTarea = [...list, objetoNuevaTarea]
    onClick(nuevaListaConTarea)
    console.log(nuevaListaConTarea)
    setNuevaTarea("")
  }

  function handleClick(id) {
    const newList = list.filter((item) => item.id !== id);
    onClick(newList);
  }

function toggleTachado(index){
  const newListTachada = [...list]
  newListTachada[index].completed = !newListTachada[index].completed;
  console.log(newListTachada)
  onClick(newListTachada);
}

  return (
    <div>
    <form onSubmit={addTareaToList}>
    <input value={nuevaTarea} onChange={typeTarea}/>
    <button>Anadir tarea</button>
    </form>
          <ol>
      {list.length === 0 ? (
        <h1>No hay lista para mostrar</h1>
      ) : (
        list
        .map((item,index) => (
            <div>
            <li key={index} >
                 <p className={item.completed ? "myClass" : ""}> {item.title}{" "}</p>
              <button onClick={() => handleClick(item.id)}>X</button> <button onClick={() => toggleTachado(index)}> Hecho</button>
            </li>
            </div>
          ))
      )}
    </ol>
    </div>
  );
}
