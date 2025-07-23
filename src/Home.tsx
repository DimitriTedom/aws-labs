import AuthEnterOtp from "@/pages/Auth/AuthEnterOtp";
import AuthLogin from "@/pages/Auth/AuthLogin";
import AuthRegister from "@/pages/Auth/AuthRegister";
import CompleteRegistrationOTP from "@/pages/Auth/CompleteRegistrationOTP";
import EnterNewPassword from "@/pages/Auth/EnterNewPassword";
import ForgotPassword from "@/pages/Auth/ForgotPassword";
import NotFound from "@/pages/NotFound";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "@/components/Auth/AuthLayout";
import Index from "./pages/Index";

const Home = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Index />} index />
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<AuthLogin />} />
            <Route path="register" element={<AuthRegister />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route
              path="complete/:email"
              element={<CompleteRegistrationOTP />}
            />
            <Route path="verify-otp/:email" element={<AuthEnterOtp />} />
            <Route
              path="enter-new-password/:email"
              element={<EnterNewPassword />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default Home;
