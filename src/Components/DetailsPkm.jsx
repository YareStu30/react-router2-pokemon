import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DetailsPkm = () => {
  const [poke, setPoke] = useState();

  const { name } = useParams();

  useEffect(() => {
    const getAPI = async () => {
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const datos = await resp.json();
      setPoke(datos);
    };

    getAPI();
  }, []);

  return (
    <>
      <h1 className="title2">Características Pokémon</h1>
      {poke && (
        <>
          <div className="imgP">
            <p>Nombre: {poke.name}</p>
            <img src={poke.image} />
            <img
              src={poke.sprites?.other.home.front_default}
              alt={poke.name}
              className="pokemon-img"
            />
            <ul className="list">
              <li>hp: {poke.stats[1].base_stat}</li>
              <li>attack: {poke.stats[2].base_stat}</li>
              <li>defense: {poke.stats[3].base_stat}</li>
              <li>special-attack: {poke.stats[4].base_stat}</li>
              <li>type: {poke.types[0].type.name}</li>
            </ul>
          </div>
        </>
      )}

      <small className="text-muted">
        <Link to={`/pokemones`}>
          <button type="button" className="btn btn-success">
            Volver a Pokémon
          </button>
        </Link>
      </small>
    </>
  );
};

export default DetailsPkm;
