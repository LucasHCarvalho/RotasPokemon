import { useParams } from "react-router-dom";
import React from "react";
import Pokecard from "./pokecard";
import Pokeinfo from "./pokeinfo";
export default function Pokemon(){
    const {pokemonId} = useParams();
    const [pokemon, setPokemon] = React.useState({});

    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonId)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemon(data);
      });

    return <div>
        <Pokecard asset={pokemon.sprites.front_default}
                name={pokemon.id + ' - ' + pokemon.name}/>
        <Pokeinfo abilits={pokemon.abilities.map((ability) => ability.ability.name).join(', ')}
                types={pokemon.types.map((type) => type.type.name)}
                body={'height: ' + pokemon.height + 'm weight: ' + pokemon.weight + 'kg'}
                stats={pokemon.stats.map((st, i) => {
                  if (i < 3)
                    return (<span>{st.stat.name}: {st.base_stat} </span>);
                })}            />
    </div>
}