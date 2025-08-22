import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Services from "../pages/services/Services";
import ServiceDetails from "../pages/servicesDetails/ServiceDetails";
import Booking from "../pages/booking/Booking";
import NotFound from "../pages/notFound/NotFound";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/services/:id", element: <ServiceDetails /> },
      { path: "booking", element: <Booking /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default appRouter;
