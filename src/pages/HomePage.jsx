import { useEffect } from "react";
import HomeHero from "../components/home/HomeHero";
import Loader from "../components/sections/Loader";
import useRestaurants from "../hook/useRestaurants";

const HomePage = () => {
  const { loading, Restaurants, readRestaurants } = useRestaurants();

  useEffect(() => {
    document.title = '¡Bienvenidos! Proyecto Final';
    readRestaurants();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return (<Loader />);
  } else {
    return (
      <HomeHero Restaurants={Restaurants} />
    );
  }
};

export default HomePage;