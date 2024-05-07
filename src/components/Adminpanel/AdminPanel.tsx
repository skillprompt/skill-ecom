import Sidebar from "./Sidebar";
import AdminNavbar from "./AdminNavbar";
import { Outlet } from "react-router-dom";

export default function Adminpanel() {
  return (
    <>
      <AdminNavbar />
      <div className="flex h-screen w-full">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}
