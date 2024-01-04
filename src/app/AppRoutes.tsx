import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Layout from "../common/layout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Users from "../pages/Users/Users";
import UserDetail from "../pages/UserDetail/UserDetail";
import Subscriptions from "../pages/Subscriptions/Subscriptions";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <h1>Oops! Page not found</h1>,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "users/:userId",
        element: <UserDetail />,
      },
      {
        path: "subscriptions",
        element: <Subscriptions />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
