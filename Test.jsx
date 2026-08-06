import { useState } from "react";

function Compteur(){
    const [compte , setCompte] = useState(0);
    return (
        <div>
            <p>Vous avez clique {compte} fois</p>
            <button onClick={()=> setCompte(compte +1)}>
            CLIQUER
            </button>
        </div>
    );
}

function Bienvenue(){
    const nom = "Alex";
    return <h1>Bonjour {nom} !</h1>
}

function CarteProfil(props){
    return <h2>Nom : {props.nom}</h2>;
}

function App(){
    return (
        <div>
            <CarteProfil nom = "Sarah" />
            <CarteProfil nom = "Lucas" />
        </div>
    );
}

