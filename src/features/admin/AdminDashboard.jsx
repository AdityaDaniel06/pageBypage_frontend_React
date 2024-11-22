import { Outlet } from "react-router-dom";
import { MyFooter } from "../../utils/MyFooter";

import Sidebar from "./Sidebar";

function AdminDashboard() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <header className="bg-emerald-600 p-4 text-white">
            <h1 className="text-2xl">Admin Dashboard</h1>
          </header>
          <Outlet />
        </div>
      </div>
      <MyFooter />
    </>
  );
}

export default AdminDashboard;
