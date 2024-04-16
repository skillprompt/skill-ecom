import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./components/LoginPage";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>Homepage</h1>
        </div>
      ),
    },
    {
      path: "login",
      element: <LoginPage />,
    },
  ]);

  const query = new QueryClient();

  return (
    <QueryClientProvider client={query}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
