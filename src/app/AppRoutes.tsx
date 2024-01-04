import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Layout from "../common/layout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Users from "../pages/Users/Users";
import UserDetail from "../pages/UserDetail/UserDetail";

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
        element: <h1>This is subscriptions</h1>,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
