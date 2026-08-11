import { useState, useEffect } from "react"; // le parametre de usestate est la valeur initiale de l'état (toutefois 0)
import "./App.css";
{
  /* useState est toujours utilise pour manipuler le DOM mais pas "let" ou "var" */
}
// App est un composant React, il doit commencer par une majuscule
import Pokemon2 from "./Pokemon2";

function ShowThe50NextPokemons() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=100")
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="pokemon">
        {pokemon.map((poke) => {
          poke.id = poke.url.split("/")[6]; //split pour separer chaque mot par le parametre "/" n' etant pas inclus 
          return <Pokemon2 key={poke.id} id={poke.id} name={poke.name} />;
        })}
      </div>
    </>
  );
}

function ShowThe50Others(){
  const [pokem , setPokem] = useState([]);
  useEffect (() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=150")
    .then(response => response.json())
    .then(data => {
      setPokem(data.results)
    })
    .catch(err => console.log(err)
    )
  },[]);

  return(
    <>
    <div className="main">
      { pokem.map((pok) => {
        pok.id = pok.url.split("/")[6];
        return <Pokemon2 key={pok.id} id={pok.id} name={pok.name} />;
      })}
    </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <ShowThe50NextPokemons />
      <ShowThe50Others />
    </>
  );
}
