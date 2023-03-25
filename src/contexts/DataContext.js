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
  const [cities, setCities] = useState([]);

  const transpCost = (distance, transpMode) => {
    const result = trucks.find((item) => item.id === transpMode);
    return result.price * distance;
  };

  const distanceBetween = (origin, destination) => {
    const distance = citiesDistances[origin][destination];
    return parseInt(distance);
  };

  return (
    <DataContext.Provider
      value={{
        citiesDistances,
        setCitiesDistances,
        cities,
        setCities,
        distanceBetween,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
