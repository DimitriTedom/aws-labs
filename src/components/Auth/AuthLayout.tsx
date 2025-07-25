import { Outlet } from "react-router-dom";
import ProgressSidebar from "../ProgressSidebar";

const AuthLayout = () => {
  return (
    <div className="flex h-screen">
      <aside className="hidden w-1/3 lg:block bg-gray-100 p-6">
        <ProgressSidebar />
      </aside>
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
