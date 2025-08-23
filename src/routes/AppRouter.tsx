import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Services from "../pages/services/Services";
import ServiceDetails from "../pages/servicesDetails/ServiceDetails";
import Booking from "../pages/booking/Booking";
import NotFound from "../pages/notFound/NotFound";
import UserLayout from "../layouts/UserLayout";
import ProfileDetails from "../pages/profile/ProfileDetails";
import MyBookings from "../pages/myBookings/MyBookings";
import UpcomingBooking from "../pages/upcomingBooking/UpcomingBooking";
import AdminDashboardLayout from "../layouts/AdminDashboardLayout";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/services/:id", element: <ServiceDetails /> },
      { path: "/booking", element: <Booking /> },
      {
        path: "/dashboard",
        element: <UserLayout />,
        children: [
          {
            path: "profile",
            element: <ProfileDetails />,
          },
          {
            path: "my-booking",
            element: <MyBookings />,
          },
          {
            path: "upcoming-booking",
            element: <UpcomingBooking />,
          },
        ],
      },
    ],
  },
  {
    path: "/admin",
    element: "",
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboardLayout />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default appRouter;
