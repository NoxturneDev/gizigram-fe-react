import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import Login from "./components/pages/Login";
import Admin from "./components/pages/Admin";
import User from "./components/pages/User";
import Scanner from "./components/scanner/Scanner";
import Notification from "./components/pages/Notification";
import Chat from "./components/pages/Chat";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/admin", element: <Admin /> },
    { path: "/app", element: <User /> },
    { path: "/app/login", element: <Login /> },
    { path: "/app/scanner", element: <Scanner /> },
    { path: "/app/notification", element: <Notification />},
    { path: "/app/chat", element: <Chat />}
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
