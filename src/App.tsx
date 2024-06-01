import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Register from "./pages/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoginPage } from "./pages/Login";
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
import { HomePage } from "./pages/Home";
import { ContractUsPage } from "./pages/ContactUs";
import { ProductsSidebar } from "./components/productsSide";
import Detail from "./components/Detail";
import CheckoutPage from "./pages/Checkout";
import { CategoryBar } from "./components/CategoryBar";
import SearchPage from "./pages/Search";
import WishlistPage from "./pages/Wishlist";
import Category from "./components/Adminpanel/Category";

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
        element: <HomePage />,
      },
      {
        path: "/contactUs",
        element: <ContractUsPage />,
      },
      {
        path: "/wishlist",
        element: <WishlistPage />,
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
      { path: "/details", element: <Detail /> },
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
  {
    path: "/admin",
    element: <Adminpanel />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/category",
        element: <Category />,
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
