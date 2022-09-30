import React, { FunctionComponent } from "react";
import PokemonList from "./pages/pokemon-list";
import PokemonsDetail from "./pages/pokemon-detail";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PageNotFound from "./pages/page-not-found";


const App: FunctionComponent = () => {

  return (
    <BrowserRouter>
      <nav>
        <div className="nav-wrapper teal">
          <Link to="/" className="brand-logo center">Pokédex</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<PokemonList/>}/>
        <Route path="/pokemons" element={<PokemonList/>}/>
        <Route path="/pokemons/:id" element={<PokemonsDetail/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
