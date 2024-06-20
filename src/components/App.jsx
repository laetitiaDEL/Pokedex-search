import { PokemonList } from "./PokemonList";
import "./App.css";
import { SearchBar } from "./SearchBar";
import { PokemonDetail } from "./PokemonDetail";
import { useState } from "react";
import { Pokemon } from "./Pokemon";


export function App({pokemons}){
    const [pokemon, setPokemon] = useState(pokemons[0]);
    const [filterAttaque, setFilterAttaque] = useState(0);
    const [filterDefense, setFilterDefense] = useState(0);

    function changePokemon(inputText){
        fetch('https://pokebuildapi.fr/api/v1/pokemon/'+inputText)
        .then(res =>  res.json())
        .then(pokemon => {
            setPokemon(pokemon);
        });
    }

    function changeFilterAttaque(event){
        setFilterAttaque(event.target.value);
    }
    
    function changeFilterDefense(event){
        setFilterDefense(event.target.value);
    }

    function newCurrent(pokemon){
        setPokemon(pokemon);
    }


    const filteredPokemons = pokemons.filter((pokemon)=>{
        return (pokemon.stats.attack >= filterAttaque  && pokemon.stats.defense >= filterDefense);
    });

    return (
        <div style={{display: "flex"}}>

            <PokemonList pokemons={filteredPokemons} onPokemonClick={newCurrent}/>
 
            <div style={{textAlign: "center"}}>
                <SearchBar onChangeSearch={changePokemon}/>

                <p>Points d'attaque : <input onInput={changeFilterAttaque} type="range" min="0" max="140" step="1" name="attaque"/>{filterAttaque}</p>

                <p>Points de défense : <input onInput={changeFilterDefense} type="range" min="0" max="190" step="1" name="defense"/>{filterDefense}</p>

                <PokemonDetail pokemon={pokemon} />
                {pokemon.apiEvolutions &&
                <>
                <p>Evolution</p>
                    {
                        pokemon.apiEvolutions.map((evolution, index) => (
                            <Pokemon key={index} pokemon={pokemons[evolution.pokedexId-1]} onPokemonClick={newCurrent}/>
                        ))
                    }

                </>
                }
            </div>
        </div>
    );
}

/*

*/