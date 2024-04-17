import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Register from "./components/Register";
import { QueryClient, QueryClientProvider } from "react-query";
import { LoginPage } from "./components/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: "Homw page",
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "login",
    element: <LoginPage />,
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
