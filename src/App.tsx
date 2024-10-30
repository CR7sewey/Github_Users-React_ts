import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import { LandingPage } from "./pages/LandingPage";
import HomeLayout from "./pages/HomeLayout";
import { Error } from "./pages/Error";
import LogoutButton from "./pages/Logout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,

    },
    {
      path: "/logout",
      element: <LogoutButton />,
      errorElement: <Error />,

    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
