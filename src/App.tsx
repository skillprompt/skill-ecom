import Nabbar from './Component/Nabbar';
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Register from "./components/Register";
import { QueryClient, QueryClientProvider } from "react-query";
import { LoginPage } from "./components/LoginPage";
import Nabbar from './Component/Nabbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nabbar />,
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
