import './list.css'

export default function List({ list, onClick}) {
  function handleClick(id) {
    const newList = list.filter((item) => item.id !== id);
    onClick(newList);
  }

function toggleTachado(index){
  const newListTachada = [...list]
  newListTachada[index].completed = !newListTachada[index].completed;
  onClick(newListTachada);
  
}

  return (
    <ol>
      {!list ? (
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
  );
}
