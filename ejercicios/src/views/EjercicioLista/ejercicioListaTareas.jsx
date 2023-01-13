import { useEffect, useState  } from "react";
import List from "../../components/List/List";


export default function EjercicioLista(){
const [toDo, setToDo] = useState([])

useEffect(function(){
    async function fetchList(){
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        const list = await response.json();
        setToDo(list)
    }
    fetchList();
},
[]);

    return(
        <div>
            <h1>Esto es el ejercicio de lista</h1>
            <List list={toDo.slice(0,20)} onClick={setToDo}/>
        </div>
    )
}