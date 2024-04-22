import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Register from "./components/Register";
import { QueryClient, QueryClientProvider } from "react-query";
import { LoginPage } from "./components/LoginPage";
import { Navbar } from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
  {
    path: "/login",
    element: <LoginPage />,
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
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}
export default App;
