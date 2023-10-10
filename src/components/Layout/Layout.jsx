import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoading } from "redux/selectors";
import Loader from "components/Loader/Loader";
import Header from "components/Header/Header";
import { Section } from "./Layout.styled";

const Layout = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <Loader />}
      <Header />
      <main>
        <Section>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Section>
      </main>
    </>
  );
};

export default Layout;
