import HomeView from "./HomeView";
import { useState, useEffect } from "react";

export default function Home() {
  const [characters, setCharacters] = useState(null);

  useEffect(function () {
    async function fetchData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
    }
    fetchData();
  }, []);
  return <HomeView characters={characters} />;
}
