function PokemonCard({ id , name}){

    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return(
        <>
        <div className="pokemonCard">
            <img src={imgUrl} alt={name} />
            <h1> Id : {id}</h1>
            <h2> Name : {name}</h2>
            </div>
            
        </>
    );
}

export default PokemonCard;