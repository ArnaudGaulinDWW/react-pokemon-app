import React, { FunctionComponent } from "react";
import PokemonList from "./pages/pokemon-list";
import PokemonsDetail from "./pages/pokemon-detail";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PokemonEdit from "./pages/pokemon-edit";
import PageNotFound from "./pages/page-not-found";
import PokemonAdd from "./pages/pokemon-add";


const App: FunctionComponent = () => {

  return (
    <BrowserRouter>
    {/* Barre de navigation présente sur toutes les pages */}
      <nav>
        <div className="nav-wrapper teal">
          <Link to="/" className="brand-logo center">Pokédex</Link>
        </div>
      </nav>
      {/* routes de l'application. Le selecteur "*" est a mettre en dernier */}
      <Routes>
        <Route path="/" element={<PokemonList/>}/>
        <Route path="/pokemons" element={<PokemonList />}/>
        <Route path="/pokemon/add" element={<PokemonAdd />}/>
        <Route path="/pokemons/edit/:id" element={<PokemonEdit id={undefined} />}/>
        <Route path="/pokemons/:id" element={<PokemonsDetail id={undefined} />}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
