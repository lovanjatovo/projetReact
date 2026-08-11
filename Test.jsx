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

function MyButton(){
    return(
        <>
        <button> I'm a button </button>
        </>
    );
}

function Authentification(){
    return(
        <>
        <h1>Authentifiez vous</h1>
        <MyButton />
        </>
    );
}

const user = {
    name: heidi,
    imageUrl: "https://image/example.com",
    imageSize: 20
}

function User(){
    return(
        <>
        <div>
            <h1>{user.name}</h1>
            <img src={user.imageUrl} alt={"photo of : " + user.name} 
            style= {{
                width: user.imageSize,
                heigth: user.imageSize,
                borderRadius: user.imageSize + 200  
            }}
            />
        </div>
        </>
    );
}