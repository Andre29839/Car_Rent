import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from 'components/SideBar/SideBar';
import Loader from 'components/Loader/Loader';
import { ContainerBox } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <SideBar />
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
