import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [citiesDistances, setCitiesDistances] = useState({});

  const print = () =>{
    console.log(citiesDistances);
  }

  return (
    <DataContext.Provider value={{citiesDistances, print, setCitiesDistances }}>
      {children}
    </DataContext.Provider>
  );
};
