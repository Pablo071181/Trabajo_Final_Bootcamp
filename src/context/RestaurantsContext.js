import axiosInstance from "../config/axiosInstance";
const { createContext, useState } = require("react");

export const RestaurantsContext = createContext();

export const RestaurantsProvider = ({ children }) => {

  const [loading, setLoading] = useState(false);
  const [Restaurant, setRestaurant] = useState({});
  const [Restaurants, setRestaurants] = useState([]);

  const readRestaurants = async () => {
    try {
      setLoading(true);
      const options = {
        method: 'GET',
        url: '/discover/Restaurant?page=1'
      };
      const { data } = await axiosInstance(options);
      setRestaurants(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const readRestaurant = async (id) => {
    try {
      setLoading(true);
      const options = {
        method: 'GET',
        url: `/Restaurant/${id}`
      };
      const { data } = await axiosInstance(options);
      setRestaurant(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RestaurantsContext.Provider
      value={{
        loading,
        Restaurant,
        Restaurants,
        setRestaurant,
        readRestaurants,
        readRestaurant
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};