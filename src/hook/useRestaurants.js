import { useContext } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";

const useRestaurants = () => {
  const context = useContext(RestaurantsContext);
  return (context);
};

export default useRestaurants;