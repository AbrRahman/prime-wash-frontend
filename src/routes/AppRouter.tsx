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
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Review from "../pages/review/Review";
import ServiceManagement from "../pages/admin/serviceManagemnet/ServiceManagement";
import SlotManagement from "../pages/admin/slotManagement/SlotManagement";
import UserManagement from "../pages/admin/userManagement/UserManagement";
import BookingManagement from "../pages/admin/bookingManagement/BookingManagement";
import Success from "../pages/success/Success";
import UserPrivateRoute from "./UserPrivateRoute";
import AdminPrivateRoute from "./AdminPrivateRoute";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/services/:id", element: <ServiceDetails /> },
      { path: "/booking", element: <Booking /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/reviews", element: <Review /> },
      {
        path: "/dashboard",
        element: (
          <UserPrivateRoute>
            <UserLayout />{" "}
          </UserPrivateRoute>
        ),

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
  { path: "/success", element: <Success /> },

  {
    path: "/admin-dashboard",
    element: (
      <AdminPrivateRoute>
        <AdminDashboardLayout />
      </AdminPrivateRoute>
    ),
    children: [
      { path: "service-management", element: <ServiceManagement /> },
      { path: "slot-management", element: <SlotManagement /> },
      { path: "user-management", element: <UserManagement /> },
      { path: "booking-management", element: <BookingManagement /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default appRouter;
