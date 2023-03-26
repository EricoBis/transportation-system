import { createContext, useState } from "react";

export const DataContext = createContext();

export const trucks = [
  {
    id: 1,
    type: "Pequeno Porte",
    price: 4.87,
    max_weight: 1000
  },
  {
    id: 2,
    type: "Médio Porte",
    price: 11.92,
    max_weight: 4000
  },
  {
    id: 3,
    type: "Grande Porte",
    price: 27.44,
    max_weight: 10000
  },
];

export const DataProvider = ({ children }) => {
  //data obtained by registering transports
  const [registrationData, setRegistrationData] = useState([]);

  //data obtained by reading .csv file
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

  //returns the optimized total distance between a list of cities
  const getTotalDistance = (origin, destinationList) => {
    let aux = origin;
    let total = 0;
    destinationList.forEach((curr) => {
      const res = distanceBetween(aux, curr.city);
      aux = curr.city;
      total += res;
    });
    return total;
  };

  //returns the total weight of the products in a list
  const getTotalWeight = (products) => {
    return products.reduce((total, currProduct) => {
      return total + currProduct.weight * currProduct.quantity;
    }, 0);
  };

  const getTotalTrucks = (totalWeight) => {
    const largeSize = parseInt(totalWeight / 10000);
    const mediumSize = parseInt((totalWeight % 10000) / 4000);
    const smallSize = parseInt((totalWeight % 10000 % 4000) / 1000);

  };

  //add more data to transport
  const handleTransport = (transport) => {
    const totalDistance = getTotalDistance(
      transport.origin,
      transport.destination
    );
    const { destination } = transport;
    const totalWeight = destination.reduce((total, currCity) => {
      return total + getTotalWeight(currCity.unload_products);
    }, 0);

    // TODO
  };

  return (
    <DataContext.Provider
      value={{
        citiesDistances,
        setCitiesDistances,
        cities,
        setCities,
        distanceBetween,
        handleTransport,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

/*
registerData = [
{
  origin: ""; 
  products: [];
  destination: [
    { 
      city: "" 
      distance_from_origin: 
      unload_products: [
        {
        name:
         quantity:
         weight:
        }
      ]
    },
    {}
  ];
},
{}
]
*/
//776KM PORTO ALEGRE - FLORIANOPOLIS - CURITIBA
