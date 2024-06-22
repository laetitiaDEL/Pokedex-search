
export function PokemonDetail({pokemon}){

    return (
        <div className="pokemonDetails">
            <p>n°{pokemon.id}</p>
            <img src={pokemon.image} width="50%" height= "auto"/>
            <h2 className="pokemon-card">{pokemon.name}</h2>
            <p>Types</p>
            {(pokemon.apiTypes).map((type, index) => (
                <img src={type.image} key={index} style={{height: '20px', width: '20px'}}/>
            ))}
            
            
        </div>
    )
}