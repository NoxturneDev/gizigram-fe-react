import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import Login from "./components/pages/Login";
import Admin from "./components/dashboard/Admin";
import User from "./components/pages/User";
import Scanner from "./components/scanner/Scanner";
import Notification from "./components/pages/Notification";
import Chat from "./components/pages/Chat";
import Profile from "./components/pages/ProfileUser";
import MainDashboard from "./components/dashboard/MainDashboard";
import {Toaster} from "@/components/ui/toaster.jsx";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/admin/dashboard-login", element: <Admin /> },
    { path: "/admin/main-dashboard", element: <MainDashboard /> },
    { path: "/app", element: <User /> },
    { path: "/app/login", element: <Login /> },
    { path: "/app/scanner", element: <Scanner /> },
    { path: "/app/notification", element: <Notification /> },
    { path: "/app/chat", element: <Chat /> },
    { path: "/app/profile", element: <Profile /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
