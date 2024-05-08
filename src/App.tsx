import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Register from "./components/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoginPage } from "./components/LoginPage";
import Adminpanel from "./components/Adminpanel/AdminPanel";
import Dashboard from "./components/Adminpanel/Dashboard";
import Categories from "./components/Adminpanel/Categories";
import Products from "./components/Adminpanel/Products";
import AddProducts from "./components/Adminpanel/AddProduct";
import Orders from "./components/Adminpanel/Orders";
import Users from "./components/Adminpanel/Users";
import { Navbar } from "./components/Navbar";
import { Toaster } from "sonner";
import { NewPasswordForm } from "./components/NewPasswordForm";
import { FooterComponent } from "./components/Footer";
// import Detail from "./components/Detail";
import { HomePageContainer } from "./components/HomePageContainer";
import { ContractUsForm } from "./components/ContractUsForm";
import { ProductsSidebar } from "./components/productsSide";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
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
        element: <div>This is the wishlist page</div>,
      },
      {
        path: "/cart",
        element: <div>This is the cart page</div>,
      },
      {
        path: "/productsSidebar",
        element: <ProductsSidebar />,
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
      <Toaster richColors closeButton position="top-right" />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}
export default App;
