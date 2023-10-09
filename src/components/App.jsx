import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Home from 'page/Home';
import Layout from './Layout/Layout';

const CatalogPage = lazy(() => import('page/Catalog'));
const Favorites = lazy(() => import('page/Favorites'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
};

export default App;
