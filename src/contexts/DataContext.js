import { createContext, useState } from "react";

export const DataContext = createContext();

export const trucks = [
  {
    id: 3,
    type: "Grande Porte",
    price: 27.44,
    max_weight: 10000,
  },
  {
    id: 2,
    type: "Médio Porte",
    price: 11.92,
    max_weight: 4000,
  },
  {
    id: 1,
    type: "Pequeno Porte",
    price: 4.87,
    max_weight: 1000,
  },
];

const truckTypes = {
  1: {
    type: "Grande Porte",
    price: 27.44,
    max_weight: 10000,
  },
  2: {
    type: "Médio Porte",
    price: 11.92,
    max_weight: 4000,
  },
  3: {
    type: "Pequeno Porte",
    price: 4.87,
    max_weight: 1000,
  },
};

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

  const getDistancePerRoute = (origin, destinationList, costPerKm) => {
    let aux = origin;
    let result = [];
    destinationList.forEach((curr) => {
      const distance = distanceBetween(aux, curr.city);
      const costPerRoute = costPerKm * distance;
      result.push({
        origin: aux,
        destination: curr.city,
        distance: distance,
        route_cost: costPerRoute
      });
      aux = curr.city;
    });
    return result;
  };

  const getTotalProducts = (destinationList) => {
    let total = 0;
    destinationList.forEach((dest) => {
      dest.unload_products.forEach((product) => (total += parseInt(product.quantity)));
    });
    return total;
  };

  //returns the total weight of the products in a list
  const getTotalWeight = (products) => {
    return products.reduce((total, currProduct) => {
      return total + currProduct.weight * currProduct.quantity;
    }, 0);
  };

  //returns an object containing the quantity of each truck needed and the total cost per km
  let list = [];
  const getTotalTrucks = (totalWeight) => {
    list = [];
    for (let index = 1; index <= 3; index++) {
      let trucks = {
        1: 0,
        2: 0,
        3: 0,
        cost_per_km: 0,
      };
      getTotalTrucksAux(trucks, index, totalWeight);
    }

    let cheapestCost = list[0];
    list.forEach((trucks) => {
      const cost =
        trucks[1] * truckTypes[1].price +
        trucks[2] * truckTypes[2].price +
        trucks[3] * truckTypes[3].price;
      trucks.cost_per_km = cost;
      if (cheapestCost.cost_per_km > cost) cheapestCost = trucks;
    });
    return cheapestCost;
  };

  //recursive function that finds all possible combinations of truck quantities
  const getTotalTrucksAux = (trucks, currtype, currWeight) => {
    const res = currWeight - truckTypes[currtype].max_weight;
    trucks[currtype] = trucks[currtype] + 1;

    const aux = {
      1: trucks[1],
      2: trucks[2],
      3: trucks[3],
      cost_per_km: 0,
    };

    if (res > 0) getTotalTrucksAux(trucks, currtype, res);
    else list.push(trucks);

    currtype++;
    if (currtype <= 3 && res > 0) getTotalTrucksAux(aux, currtype, res);
  };

  //add more data to transport
  const handleTransport = (transport) => {
    const { origin, destination } = transport;
    const totalDistance = getTotalDistance(origin, destination);

    const totalWeight = destination.reduce((total, currCity) => {
      return total + getTotalWeight(currCity.unload_products);
    }, 0);

    const trucksNeeded = getTotalTrucks(totalWeight);

    const routesDistances = getDistancePerRoute(
      origin,
      destination,
      trucksNeeded.cost_per_km
    );

    const totalCost =
      getTotalDistance(origin, destination) * trucksNeeded.cost_per_km;

    const totalProducts = getTotalProducts(destination);
    const unitCost = totalCost / totalProducts;
    const averageCostKm = totalCost / totalDistance;

    return {
      ...transport,
      total_distance: totalDistance,
      routes_distances: routesDistances,
      total_weight: totalWeight,
      trucks_needded: trucksNeeded,
      total_cost: totalCost,
      total_products: totalProducts,
      unit_cost: unitCost,
      average_cost_km: averageCostKm,
    };
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
        getTotalTrucks,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

/*

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
  total_distance: 
  routes_distances: []
  total_weight: 
  trucks_needded: {}
  total_cost: 
  total_products: 
  unit_cost: 
}

//776KM PORTO ALEGRE - FLORIANOPOLIS - CURITIBA

*/
