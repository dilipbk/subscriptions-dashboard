import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Layout from "../common/layout";
import Dashboard from "../pages/Dashboard/Dashboard";

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
        element: <h1>This is users</h1>,
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
