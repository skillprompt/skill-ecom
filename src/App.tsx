import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Register from "./components/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoginPage } from "./components/LoginPage";
import Adminpanel from "./components/Adminpanel/AdminPanel";
import Dashboard from "./components/Adminpanel/Dashboard";
import Products from "./components/Adminpanel/Products";
import AddProducts from "./components/Adminpanel/AddProduct";
import Orders from "./components/Adminpanel/Orders";
import Users from "./components/Adminpanel/Users";
import { Navbar } from "./components/Navbar";
import { Toaster } from "sonner";
import { NewPasswordForm } from "./components/NewPasswordForm";
import { FooterComponent } from "./components/Footer";
import { HomePageContainer } from "./components/HomePageContainer";
import { ContractUsForm } from "./components/ContractUsForm";
import { ProductsSidebar } from "./components/productsSide";

import Detail from "./components/Detail";
import CheckoutPage from "./components/CheckoutPage";
import { CategoryBar } from "./components/CategoryBar";
import SearchPage from "./components/SearchPage";
import Wishlist from "./components/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <CategoryBar />
        <Outlet />
        <FooterComponent />
      </>
    ),
    children: [
      {
        path: "/",
        element: <HomePageContainer />,
      },
      {
        path: "/contactUs",
        element: <ContractUsForm />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/cart",
        element: <CheckoutPage />,
      },
      {
        path: "/productsSidebar",
        element: <ProductsSidebar />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/login/reset/:resetToken",
    element: <NewPasswordForm />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  { path: "/details", element: <Detail /> },
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
      <Toaster richColors closeButton position="top-right" />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}
export default App;
