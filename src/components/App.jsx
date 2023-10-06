import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SideBar from './SideBar/SideBar';
import Home from 'page/Home';

const Catalog = lazy(() => import('../page/Catalog'));
const Favorites = lazy(() => import('../page/Favorites'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SideBar />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
};

export default App;
