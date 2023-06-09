import { createContext, useState } from "react";

export const DataContext = createContext();

export const Size = {
  large: 1,
  medium: 2,
  small: 3,
};

export const truckTypes = {
  1: {
    id: 1,
    type: "Grande Porte",
    price: 27.44,
    max_weight: 10000,
  },
  2: {
    id: 2,
    type: "Médio Porte",
    price: 11.92,
    max_weight: 4000,
  },
  3: {
    id: 3,
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

  //returns the cost of the distance by a mode of transport
  const transpCost = (distance, transpMode) => {
    if (transpMode > 3 || transpMode < 1) return;
    const price = truckTypes[transpMode].price;
    return (price * distance).toFixed(2);
  };

  //returns the distance between two cities
  const distanceBetween = (origin, destination) => {
    if (origin === "" || destination === "") return;
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
        route_cost: costPerRoute,
      });
      aux = curr.city;
    });
    return result;
  };

  const getTotalProducts = (destinationList) => {
    let total = 0;
    destinationList.forEach((dest) => {
      dest.unload_products.forEach(
        (product) => (total += parseInt(product.quantity))
      );
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
  const getTotalTrucks = (totalWeight, totalDistance) => {
    list = [];
    for (let index = 1; index <= 3; index++) {
      let trucks = {
        1: 0,
        2: 0,
        3: 0,
        cost_per_km: 0,
        small_cost: 0,
        medium_cost: 0,
        large_cost: 0,
      };
      getTotalTrucksAux(trucks, index, totalWeight);
    }

    let cheapestCost = list[0];
    list.forEach((trucks) => {
      const costSmall = trucks[Size.small] * truckTypes[Size.small].price;
      const costMedium = trucks[Size.medium] * truckTypes[Size.medium].price;
      const costLarge = trucks[Size.large] * truckTypes[Size.large].price;
      const totalCost = costSmall + costMedium + costLarge;
      trucks.small_cost = costSmall * totalDistance;
      trucks.medium_cost = costMedium * totalDistance;
      trucks.large_cost = costLarge * totalDistance;
      trucks.cost_per_km = totalCost;
      if (cheapestCost.cost_per_km > totalCost) cheapestCost = trucks;
    });
    return cheapestCost;
  };

  //recursive function that finds all possible combinations of truck quantities
  const getTotalTrucksAux = (trucks, currtype, currWeight) => {
    const res = currWeight - truckTypes[currtype].max_weight;
    trucks[currtype] = trucks[currtype] + 1;

    const aux = {
      ...trucks,
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

    const trucksNeeded = getTotalTrucks(totalWeight, totalDistance);

    const routesDistances = getDistancePerRoute(
      origin,
      destination,
      trucksNeeded.cost_per_km
    );

    const totalCost = (
      getTotalDistance(origin, destination) * trucksNeeded.cost_per_km
    ).toFixed(2);

    const totalProducts = getTotalProducts(destination);
    const unitCost = (totalCost / totalProducts).toFixed(2);
    const averageCostKm = (totalCost / totalDistance).toFixed(2);

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
        transpCost,
        distanceBetween,
        handleTransport,
        registrationData,
        setRegistrationData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
