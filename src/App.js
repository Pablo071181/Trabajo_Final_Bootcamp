import { Route, Routes } from 'react-router-dom';
import './App.css';
import { RestaurantsProvider } from './context/RestaurantsContext';
import PrimaryLayout from './layouts/PrimaryLayout';
import AboutUsPage from './pages/AboutUsPage';
import BookingPage from './pages/BookingPage';
import IntranetPage from './pages/IntranetPage';

import HomePage from './pages/HomePage';
import RestaurantPage from './pages/RestaurantPage';
import RestaurantsPage from './pages/RestaurantsPage';

function App() {
  return (
    <RestaurantsProvider>
      <Routes>
        <Route path="/" element={<PrimaryLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/Restaurants">
            <Route path=":id" element={<RestaurantPage />} />
            <Route index element={<RestaurantsPage />} />
          </Route>
          <Route path="/nosotros" element={<AboutUsPage />} />
          <Route path="*" element={<h1>404</h1>} />
          <Route path="/reservas" element={<BookingPage />} />
          <Route path="*" element={<h1>404</h1>} />
          <Route path="/intranet" element={<IntranetPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </RestaurantsProvider>
  );
}

export default App;
