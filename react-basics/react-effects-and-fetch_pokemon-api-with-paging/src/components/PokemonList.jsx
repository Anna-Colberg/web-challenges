import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [results, setResults] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=0${results}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [results]);

  return (
    <main>
      <button type="button" onClick={() => {
        const nextResults = results - 20;
        if (nextResults <= 0){
          setResults (0);
          return;}
        setResults(nextResults);
      }}>Previous Page</button>
      <button type="button"onClick={() => setResults(results + 20)}>Next Page</button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
