import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Register from "./components/Register";
import { QueryClient, QueryClientProvider } from "react-query";
import { LoginPage } from "./components/LoginPage";
<<<<<<< HEAD
import Adminpanel from "./components/Adminpanel/AdminPanel";
import Dashboard from "./components/Adminpanel/Dashboard";
import Categories from "./components/Adminpanel/Categories";
import Products from "./components/Adminpanel/Products";
import AddProducts from "./components/Adminpanel/AddProduct";
import Orders from "./components/Adminpanel/Orders";
import Users from "./components/Adminpanel/Users";
=======
import { Navbar } from "./components/Navbar";
import { Toaster } from "sonner";
import { NewPasswordForm } from "./components/NewPasswordForm";
import { CategoryBar } from "./components/CategoryBar";
import { CarouselComponent } from "./components/CarouselComponent";
>>>>>>> e54ac510815d9026d554c68b81b7ea7b5c6ad084

const router = createBrowserRouter([
  {
    path: "/",
<<<<<<< HEAD
    element: "",
=======
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/home",
        element: (
          <>
            <CategoryBar />
            <CarouselComponent />
          </>
        ),
      },
      {
        path: "/contactUs",
        element: <div>Contact us haii</div>,
      },
    ],
  },
  {
    path: "/login/",
    element: <LoginPage />,
  },
  {
    path: "/login/reset/:resetToken",
    element: <NewPasswordForm />,
>>>>>>> e54ac510815d9026d554c68b81b7ea7b5c6ad084
  },
  {
    path: "/register",
    element: <Register />,
  },
<<<<<<< HEAD
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
=======
>>>>>>> e54ac510815d9026d554c68b81b7ea7b5c6ad084
]);

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Toaster richColors position="top-right" />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}
export default App;
