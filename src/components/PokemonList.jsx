import { useState } from 'react';
import { Pokemon } from './Pokemon';

export function PokemonList({pokemons, onPokemonClick}){
    const [alphaUp, setAlphaUp] = useState(false);
    const [alphaDown, setAlphaDown] = useState(false);
    const [byId, setById] = useState(true);

    function changeAlphaUp(){
        setAlphaUp(true);
        setAlphaDown(false);
        setById(false);
    }

    function changeAlphaDown(){
        setAlphaDown(true);
        setAlphaUp(false);
        setById(false);
    }

    function changeById(){
        setById(true);
        setAlphaUp(false);
        setAlphaDown(false);
    }

    return (
        <div className="pokemonList" style={{width: '40vw'}}>
            <p><button onClick={changeAlphaUp}>Croissant</button>
            <button onClick={changeAlphaDown}>Décroissant</button>
            <button onClick={changeById}>Id</button></p>
            
            {byId == true &&
                pokemons.map((pokemon, index) => (
                <Pokemon key={index} pokemons={pokemons} pokemon={pokemon} onPokemonClick={onPokemonClick}/>
            ))
            }

            {alphaUp == true &&
            pokemons.toSorted((a,b)=>a.name.localeCompare(b.name)).map((pokemon, index) => (
                <Pokemon key={index} pokemons={pokemons} pokemon={pokemon} onPokemonClick={onPokemonClick}/>
            ))
            }

            {alphaDown == true &&
            pokemons.toSorted((a,b)=>b.name.localeCompare(a.name)).map((pokemon, index) => (
                <Pokemon key={index} pokemons={pokemons} pokemon={pokemon} onPokemonClick={onPokemonClick}/>
            ))
            }

        </div>
    );
}