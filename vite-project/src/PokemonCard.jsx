function PokemonCard({ id , name}){
    return(
        <>
        <div className="pokemonCard">
            <h1> Id : {id}</h1>
            <h2> Name : {name}</h2>
            </div>
            
        </>
    );
}

export default PokemonCard;