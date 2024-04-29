import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Register from "./components/Register";
import { QueryClient, QueryClientProvider } from "react-query";
import { LoginPage } from "./components/LoginPage";
import Adminpanel from "./components/Adminpanel/AdminPanel";
import Dashboard from "./components/Adminpanel/Dashboard";
import Categories from "./components/Adminpanel/Categories";
import Products from "./components/Adminpanel/Products";
import AddProducts from "./components/Adminpanel/AddProduct";
import Orders from "./components/Adminpanel/Orders";
import Users from "./components/Adminpanel/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: "",
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "/admin",
    element: (
      <div>
        <Adminpanel />
      </div>
    ),
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/categories",
        element: <Categories />,
      },
      {
        path: "/admin/products",
        element: <Products />,
      },
      {
        path: "/admin/addproducts",
        element: <AddProducts />,
      },
      {
        path: "/admin/orders",
        element: <Orders />,
      },
      {
        path: "/admin/Users",
        element: <Users />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}
export default App;
