import { Outlet } from "react-router-dom";
import Header from "../component/shared/header/Header";
import Footer from "../component/shared/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
