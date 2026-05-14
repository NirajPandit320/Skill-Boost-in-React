import { useState } from "react";
import { useEffect } from "react";

export const HowNotToFetchApi = () => {

const [apiData, setApiData] = useState(null);
const [loading, setLoading] = useState(true);
const [error,setError] = useState("");

const API='https://pokeapi.co/api/v2/pokemon/pikachu';

const fetchpokemon=()=>
    {
    fetch(API)
    .then((res)=>res.json())
    .then((data)=>{setApiData(data);setLoading(false);})

    .catch((err)=>
        console.log(err));
        setError(error);
        setLoading(false);
    }


    useEffect(()=>
    {    
        fetchpokemon();

    },[])

console.log(apiData);


if(!apiData)
{
    return <h1>Loading...</h1>
}
return(
        <section className="container">
            <header>
                <h1>Lets Catch Pokemon</h1>
                <h1>{error.message}</h1>
            </header>
            <ul className="pokemon-list">
                <li className="pokemon-card">
                    <figure>
                        <img src={apiData.sprites.other.dream_world.front_default} alt={apiData.name} className="pokemon-image"/>
                    </figure>
                    <h2 className="pokemon-name">{apiData.name}</h2>
                </li>
            </ul>
        </section>
    );
}
