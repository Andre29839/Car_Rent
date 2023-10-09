import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
import { Header } from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import { ContainerBox } from './Layout.styled';

const Layout = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <Loader />}
      <Header />
      <main>
        <ContainerBox>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </ContainerBox>
      </main>
    </>
  );
};

export default Layout;
