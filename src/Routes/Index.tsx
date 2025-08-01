import AuthLayout from "@/components/Auth/AuthLayout";
import Home from "@/Home";
import AuthEnterOtp from "@/pages/Auth/AuthEnterOtp";
import AuthLogin from "@/pages/Auth/AuthLogin";
import AuthRegister from "@/pages/Auth/AuthRegister";
import Welcome from "@/pages/Auth/Welcome";
import NotFound from "@/pages/NotFound";
import { createBrowserRouter } from "react-router-dom";
import Invite from "@/pages/Auth/Invite";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    index: true,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <AuthLogin /> },
      { path: "register", element: <AuthRegister /> },
      { path: "invite", element: <Invite /> },
      { path: "verify-otp/:email", element: <AuthEnterOtp /> },
      { path: "welcome", element: <Welcome /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
