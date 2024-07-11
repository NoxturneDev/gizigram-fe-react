import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import Login from "./components/pages/Login";
import Admin from "./components/pages/Admin";
import User from "./components/pages/User";
import Scanner from "./components/scanner/Scanner";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/login", element: <Login /> },
    { path: "/admin", element: <Admin /> },
    { path: "/user", element: <User /> },
    { path: "/scanner", element: <Scanner /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
