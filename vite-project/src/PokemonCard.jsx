function PokemonCard({ id , name}){

    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return(
        <>
        <div className="pokemonCard">
            <img src={imgUrl} alt={name} />
            <h1> id : {id}</h1>
            <h2> name : {name}</h2>
            </div>
            
        </>
    );
}

export default PokemonCard;
