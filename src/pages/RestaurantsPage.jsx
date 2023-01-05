import { useEffect } from "react";
import RestaurantsCards from "../components/restaurants/RestaurantsCards";
import useRestaurants from "../hook/useRestaurants";

const RestaurantsPage = () => {
  const { Restaurants, readRestaurants } = useRestaurants();

  useEffect(() => {
    document.title = 'Restaurant I Sin E Spoiler';
    readRestaurants();
    // eslint-disable-next-line
  }, []);

  return (
    <section className="section">
      <div className="container elements">
        <h2 className="section__title">Restaurant</h2>
        <RestaurantsCards Restaurants={Restaurants} />
      </div>
    </section>
  );
};

export default RestaurantsPage;