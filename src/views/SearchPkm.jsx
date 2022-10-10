import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/ImgProvider";

const SearchPkm = () => {
  const { listName } = useContext(DataContext);

  const navigate = useNavigate();
  const goPokemon = (name) => {
    navigate(`/pokemones/${name}`);
  };
  return (
    <>
      <div className="search">
        <h2>Selecciona el Pokémon que quieras</h2>
        <select
          className="selector"
          onChange={(event) => goPokemon(event.target.value)}
        >
          <option value="">Pokemon</option>
          {listName?.results?.map((pokemon, i) => (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SearchPkm;
