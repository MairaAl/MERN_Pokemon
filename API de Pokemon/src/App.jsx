import { useState } from "react";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
  function fetchPoke() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemons([...pokemons, ...data.results]);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <button className="fetch-button" onClick={fetchPoke}>
        Fetch pokemons
      </button>
      <div>
        <ul>
          {pokemons.map((pokemon, index) => (
            <li key={index}>{pokemon.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
