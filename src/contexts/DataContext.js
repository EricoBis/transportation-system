import { createContext, useState } from "react";

export const DataContext = createContext();

export const trucks = [
  {
    id: 1,
    type: "Pequeno Porte",
    price: 4.87,
  },
  {
    id: 2,
    type: "Médio Porte",
    price: 11.92,
  },
  {
    id: 3,
    type: "Grande Porte",
    price: 27.44,
  },
];

export const DataProvider = ({ children }) => {
  const [citiesDistances, setCitiesDistances] = useState({});

  const print = () => {

  };

  const consult = (origin, destination, transpMode) => {
    const distance = citiesDistances[origin][destination];
    const result = trucks.find(item => item.id === transpMode);
    const cost = result.price * distance;

    return {
      distance,
      cost,
    };
  };

  return (
    <DataContext.Provider
      value={{ citiesDistances, print, setCitiesDistances }}
    >
      {children}
    </DataContext.Provider>
  );
};
