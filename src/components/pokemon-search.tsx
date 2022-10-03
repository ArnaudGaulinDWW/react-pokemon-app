import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import Pokemon from '../models/pokemon';
import PokemonService from '../services/pokemon-service';
 
const PokemonSearch: FunctionComponent = () => {
  
  const [term, setTerm] = useState<string>('');
  //probleme  entre array et object avec typeScript voir :
  // https://www.web-dev-qa-db-fra.com/fr/typescript/largument-de-type-...-nest-pas-attribuable-au-parametre-de-type-...-ts-2345/809583851/
  const [pokemons, setPokemons] = useState<Pokemon[] | any>([]);
 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const term = e.target.value;
    setTerm(term);
    if(term.length <= 1) {
      setPokemons([]);
      return;
    }
 
    PokemonService.searchPokemon(term).then(pokemons => setPokemons(pokemons));
  }
  
  return (
    <div className="row"> 
    <div className="col s12 m6 offset-m3"> 
      <div className="card"> 
      <div className="card-content"> 
        <div className="input-field"> 
        <input type="text" placeholder="Rechercher un pokémon" value={term} onChange={e => handleInputChange(e)} /> 
        </div> 
        <div className='collection'>
        {/* ajout ici sur le paramètre pokemon de tout les types a cause du problème si dessus rechercher une meilleure solution */}
        {pokemons.map((pokemon: { id: React.Key | undefined; name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
          <Link key={pokemon.id} to={`/pokemons/${pokemon.id}`} className="collection-item">
            {pokemon.name}
          </Link>
        ))}
        </div> 
      </div> 
      </div> 
    </div> 
    </div>
  );
}
  
export default PokemonSearch;