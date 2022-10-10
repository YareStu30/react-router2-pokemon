import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DetailsPkm = () => {
  const [poke, setPoke] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    const getAPI = async () => {
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const datos = await resp.json();
      setPoke(datos);
    };

    getAPI();
  }, [name]);

  return (
    <>
      <h1 className="title2">Características Pokémon</h1>
      {poke && (
        <>
          <div className="imgP">
            <p>Nombre: {poke.name}</p>
            <img
              src={poke.sprites?.other.home.front_default}
              alt={poke.name}
              className="pokemon-img"
            ></img>

            <>
              <ul className="list">
                {poke.stats?.map((stat, i) => (
                  <li className="list2" key={i}>
                    {stat.stat.name} : {stat.base_stat}
                  </li>
                ))}
              </ul>
            </>
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
