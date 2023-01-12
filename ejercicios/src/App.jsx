import { useEffect, useState } from "react";

export default function App() {
  const [pokemons, setPokemon] = useState("");
  const [pokemonList, setPokemonList] = useState(null);

  useEffect(
    function () {
      async function fetchPokemon() {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonList}`
        );
        const pokemon = await response.json();
        console.log("esto es pokemon", pokemon)
        setPokemonList(pokemon);
      }
      fetchPokemon();
    },
    [pokemonList]
  );

  function selectPokemon(e) {
    setPokemon(e.target.value);
  }

  function addPokemonToList(e) {
    e.preventDefault();
    if (pokemons === "") {
      return;
    }
    setPokemonList([pokemons]);
    setPokemon("");
  }

  return (
    <div className="App">
      <h1>Busca tu Pokemon</h1>
      <form onSubmit={addPokemonToList}>
        <input value={pokemons} onChange={selectPokemon} />
        <button>Buscar</button>
      </form>
      {!pokemonList ? (<p>No hay pokemons</p>) : (<ul>
       <li key={pokemonList.id}>{<img src={pokemonList.sprites.front_default}/>}</li>
       <li>{pokemonList.name}</li>
       <li>{pokemonList.order}</li>
       <li>{pokemonList.weight}</li>
      </ul>)}
    </div>
  );
}
