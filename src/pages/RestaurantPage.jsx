import { useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantDetail from "../components/restaurant/RestaurantDetail";
import RestaurantHero from "../components/restaurant/RestaurantHero";
import Loader from "../components/sections/Loader";
import useRestaurants from "../hook/useRestaurants";

const RestaurantPage = () => {
  const { id: RestaurantId } = useParams();
  const { loading, Restaurant, setRestaurant, readRestaurant } = useRestaurants();

  useEffect(() => {
    readRestaurant(RestaurantId);
    
    return (() => {
      setRestaurant({});
    });
    
    // eslint-disable-next-line   
  }, [RestaurantId]);

  useEffect(() => {
    document.title = `${Restaurant.title} I Sin E Spoiler`;
  }, [Restaurant]);

  if (loading || Object.keys(Restaurant).length === 0) {
    return (<Loader />);
  } else {
    return (
      <>
        <RestaurantHero Restaurant={Restaurant} />
        <RestaurantDetail Restaurant={Restaurant} />
      </>
    );
  }

};

export default RestaurantPage;