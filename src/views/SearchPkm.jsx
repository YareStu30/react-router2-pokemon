import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context";

const SearchPkm = () => {
  const { data } = useContext(Context);
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const handle = (event) => {
    const character = event.target.value;
    if (character && character !== "") {
      setName(character);
    }
  };

  const goPokemon = (name) => {
    navigate(`/pokemones/${name}`);
  };

  return (
    <>
      <div className="search">
        {console.log(data)}
        <h2>Selecciona el Pokémon que quieras</h2>
        <select
          className="selector"
          onChange={(event) => goPokemon(event.target.value)}
        >
          <option value="">Pokemon</option>
          {data.results.map((personaje) => (
            <option key={personaje.name} value={personaje.name}>
              {" "}
              {personaje.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SearchPkm;
