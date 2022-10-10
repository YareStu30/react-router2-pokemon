import React from "react";
import { useEffect, useState } from "react";
export const DataContext = React.createContext();

const ImgProvider = (props) => {
  const [listName, setListName] = useState([]);

  useEffect(() => {
    jsonData();
  }, []);

  const jsonData = async () => {
    try {
      const url = "https://pokeapi.co/api/v2/pokemon/?limit=1000";
      const response = await fetch(url);
      const data = await response.json();
      setListName(data);
    } catch (e) {
      alert("No logramos encontrar ese pokémon, intenta otra vez");
    }
  };

  return (
    <DataContext.Provider
      value={{
        listName,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default ImgProvider;
