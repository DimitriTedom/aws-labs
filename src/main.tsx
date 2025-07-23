import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";

<ToastContainer
  position="top-right"
  autoClose={2000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="colored"
  style={{ zIndex: 9999 }}
/>;
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);
