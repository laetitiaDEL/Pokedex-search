import React from "react";
import ReactDOM from "react-dom/client";

import {App} from "./components/App";


//La méthode ReactDOM.createRoot permet de créer un composant React lié à une véritable balise HTML.
const root = ReactDOM.createRoot(document.querySelector("#root"));
//La méthode render permet d'afficher le composant
//La méthode render prend en paramètre du JSX, soit le HTML à afficher

fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/150')
    .then(res =>  res.json())
    .then(pokemons => {
        root.render((
            <App pokemons={pokemons}/>
        ));
    });

