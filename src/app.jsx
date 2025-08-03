import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./Components/body";
import Footer from "./components/footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import AppError from "./components/error";
import AboutUs from "./components/about";
import Contact from "./components/contact";
import Login from "./components/login";
import RestaurantMenu from "./components/restaurantMenu";
import Profile from "./components/profile";
import ProfileClass from "./components/profileClass";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <AppError />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
        children: [
          {
            path: "profile",
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurantMenu/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
