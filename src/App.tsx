import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Register from "./components/Register";
import { QueryClient, QueryClientProvider } from "react-query";
import { LoginPage } from "./components/LoginPage";
import { Navbar } from "./components/Navbar";
import { Toaster } from "sonner";
import { NewPasswordForm } from "./components/NewPasswordForm";
import { CategoryBar } from "./components/CategoryBar";
import { CarouselComponent } from "./components/CarouselComponent";
import { FooterComponent } from "./components/Footer";
import Card from "./components/Card";
import Banner from "./components/Banner";
// import Detail from "./components/Detail";
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
        path: "/home",
        element: (
          <>
            <CategoryBar />
            <CarouselComponent />
            <Card />
            <Banner />
            {/* <Detail /> */}
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
  },
  {
    path: "/register",
    element: <Register />,
  },
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
