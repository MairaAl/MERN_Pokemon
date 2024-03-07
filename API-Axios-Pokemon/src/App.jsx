import { useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
  function fetchPoke() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        setPokemons([...pokemons, ...response.data.results]);
      });
  }
  return (
    <>
      <button onClick={fetchPoke}>Fetch pokemons</button>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
