import './list.css'

export default function List({ list, onClick, funcionCrossed, crossed }) {
  function handleClick(id) {
    const newList = list.filter((item) => item.id !== id);
    onClick(newList);
  }

 function toggleCrossed(){
    funcionCrossed(crossed => !crossed)
  }

  let toggleTachado= crossed ? 'myClass' : null

  return (
    <ol>
      {!list ? (
        <h1>No hay lista para mostrar</h1>
      ) : (
        list
        .filter((item) => item.id <= 20)
        .map((item) => (
            <div>
            <li key={item.id} >
                 <p className={toggleTachado}> {item.title}{" "} </p>
              <button onClick={() => handleClick(item.id)}>X</button> <button onClick={toggleCrossed}> Hecho</button>
            </li>
            </div>
          ))
      )}
    </ol>
  );
}
