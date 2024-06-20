import { useState } from "react";

export function Pokemon({pokemon, onPokemonClick}){
  //  const pokemon = pokemons[(id-1)];
   // const evolution = pokemons[(id-1)].apiEvolutions[0].pokedexId-1;
   function choosePokemon(){
        onPokemonClick(pokemon);
   }

    return (
        <div onClick={choosePokemon} style={{backgroundColor: "#333", padding: "10px", margin: "10px", color: "white", display: "flex", justifyContent: "space-between"}}>
            <span>{pokemon.id}</span><span>{pokemon.name}</span><img style={{width: '20%', height: 'auto'}} src={pokemon.image}/>
        </div>
    )
}