import { useState, useEffect } from "react"; // le parametre de usestate est la valeur initiale de l'état (toutefois 0)
import "./App.css"; {/* useState est toujours utilise pour manipuler le DOM mais pas "let" ou "var" */}
// App est un composant React, il doit commencer par une majuscule
import PokemonCard from "./PokemonCard";

export default function App() {
const [pokemons , setPokemons] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
useEffect(() => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
    .then(response => response.json()) //pour que response soit exploitable
     // texte brute en JSON 
     // // le .json() retourne aussi un promise donc on peut 
     // faire un autre .then pour récupérer les données
    .then(data => {
      setPokemons(data.results); // await fetch() pour attendre la réponse de l'API avant de continuer  // retourne tjrs un promise
    })
    .catch((err) => 
      {console.log("Error : ", err);
        return []; //toujours s'attendre à un retour de tableau meme si il est vide pour eviter les erreurs de type "undefined" dans le code
      });
  },[]);

  
  const filteredPokemons = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()); 
  });


  return(
    <>
    <div className="appContainer">
    <h1> Pokedex </h1>
    <p>All 100 first pokemons</p>
    <input
      type="text"
      placeholder="Rechercher un Pokémon"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="pokeFinder"
      />
    </div>
    <div className="pokemonContainer">
      {filteredPokemons.map((pokemon) => {
        const pokemonId = pokemon.url.split("/")[6];
      return(
        <PokemonCard
          key={pokemonId}
          id={pokemonId}
          name={pokemon.name}
          />
      );
      })}
    </div>
    </>
  );
}








  /* return (
    <>
      <h1>Hello !</h1>
      <div>name</div>
      <UserInfo name="Alice" age={25} />
      <Count />{" "}
      {/*Count n'a pas de contenu c'est pour cela qu'on utilise 
      cette syntaxe (voir aussi : <Count > <Count />)}
    </>
  ); */ 

// "<></>"" est appelé fragment, il permet de retourner
// plusieurs elements sans avoir besoin d'un div parent

/* function Count() {
  const [count, setCount] = useState(0);
  {/* useState est un hook qui permet de gérer l'état d'un composant }
  return (
    <>
      <p> Increment : {count}</p>
      {/* setCount est la fonction utilisée pour
     mettre à jour l'état de useState (dans ce cas, count est la valeur 
     de l'état (count === useState(0) === 0) et setCount est la fonction pour la modifier)}
      <button onClick={() => setCount(count + 1)}>+</button>
      {/* onClick s'attend toujours à une fonction mais non une valeur }
      <button onClick={() => setCount(count - 1)}>-</button>
      {/* useState pour gérer l'état }
      <br/>
    </>
  );
}
*/

// comment se partagent les informations entre composants ?

/* 
function UserInfo(props) {
  const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];

  return ( // toujours mettre des accolades pour les syntaxes javascript dans le JSX
    <>
      <h2>Liste des utilisateurs :</h2>
      {users.map((user, index) =>
        <user name={user.name} age={user.age} /> && user.age === props.age ? (
          <div key={index}> {/* key pour permettre a un tableau d'etre mis a jour (dans notre cas les id dans le tableau) } 
            <p>Nom : {user.name}</p>
            <p>Age : {user.age}</p>
          </div>
        ) : null
      )}
      <p>Nom : {props.name}</p>
      <p>Age : {props.age}</p>
    </>
  );
}
*/
