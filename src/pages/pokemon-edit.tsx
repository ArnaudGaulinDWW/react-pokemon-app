
import React, { FunctionComponent, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/loader";
import PokemonForm from "../components/pokemon-form";
import Pokemon from "../models/pokemon";
import PokemonService from "../services/pokemon-service";

type Params = { id: string | any};

const PokemonEdit: FunctionComponent<Params> = () => {
  const { id } = useParams<Params>();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    PokemonService.getPokemon(+id).then(pokemon => setPokemon(pokemon));
  }, [id]);

  return (
    <div>
      {pokemon ? (
        <div className="row">
          <h2 className="header center">Éditer {pokemon.name}</h2>
          <PokemonForm pokemon={pokemon} isEditForm={true}></PokemonForm>
        </div>
      ) : (
        <h4 className="center"><Loader/></h4>
      )}
    </div>
  );
};

export default PokemonEdit;
