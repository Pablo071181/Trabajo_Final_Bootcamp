import { Link } from "react-router-dom";

const RestaurantsCards = ({ Restaurants }) => {
  return (
    <div className="cards">
      {
        Restaurants.map((element, index) => {
          const { backdrop_path, id, title } = element;
          return (
            <div key={index} className="card card--Restaurants">
              <Link to={`${id}`} className="card__header">
                <img
                  src={`${process.env.REACT_APP_TMDB_IMAGE_BASE}/w300${backdrop_path}`}
                  alt={title}
                  width="100%"
                  height="auto"
                  className="card__header-img"
                />
              </Link>
              <div className="card__body card__body--Restaurants">
                <h3 className="card__title card__title--Restaurants">{title}</h3>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default RestaurantsCards;