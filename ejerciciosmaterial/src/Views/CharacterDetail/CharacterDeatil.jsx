import CharacterDetailView from "./CharacterDetailView";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CharacterDetail() {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();

  useEffect(function () {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await response.json();
      setCharacter(data);
    }
    fetchData();
  }, []);
  return <CharacterDetailView character={character} />;
}
