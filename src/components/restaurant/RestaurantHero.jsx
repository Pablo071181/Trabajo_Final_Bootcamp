const RestaurantHero = ({ Restaurant }) => {
  let backgroundImg = '';

  const { backdrop_path } = Restaurant;

  window.innerWidth >= 768 ? backgroundImg = `/w1280${backdrop_path}` : backgroundImg = `/w780${backdrop_path}`;

  return (
    <section
      className="section section--hero section--Restaurant-hero"
      style={{
        backgroundImage: `url(${process.env.REACT_APP_TMDB_IMAGE_BASE + backgroundImg})`
      }}
    />
  );
};

export default RestaurantHero;