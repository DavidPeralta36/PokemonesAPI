import React, { useState } from "react";

export const App = () => {
  const [pokemon, setPokemon] = useState([]);

  let arrIdPokemon = [];
  for (let i = 1; i <= 649; i++) {
    arrIdPokemon.push(i);
  }

  arrIdPokemon = arrIdPokemon.sort(() => Math.random() - 0.5).slice(0, 4);
  const elegido = [...arrIdPokemon].sort(() => Math.random() - 0.5)[0];

  const click = (id) => {
    console.log(
      id === elegido
        ? "Felicidades, ere mu buenO"
        : `Perdiste... Era ${elegido}`
    );
    arrDataPokemones(id);
  };

  const arrDataPokemones = async (id) => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const { name, sprites } = await resp.json();

    setPokemon({
      name,
      img: sprites.other.dream_world.front_default
    });
    console.log(pokemon.name);
    console.log(pokemon.img);
  };

  const removerfondo = () => {
    document.querySelector("img").classList.toggle("fondonegro");
  };
  return (
    <>
      <h1 className="container">¿Quien es este pokemon?</h1>
      <h1 className="container">{pokemon.name}</h1>
      <img
        className="imgP container fondonegro"
        alt="Pokemon"
        src={pokemon.img}
        onClick={removerfondo}
      />
      <div className=" container botones">
        {arrIdPokemon.map((id) => (
          <button
            key={id}
            className="btn btn-primary"
            onClick={() => click(id)}
          >
            {id}
          </button>
        ))}
      </div>
    </>
  );
};
