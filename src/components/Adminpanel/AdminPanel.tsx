import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";
import AdminNavbar from "./AdminNavbar";
import { Outlet } from "react-router-dom";

export default function Adminpanel() {
  return (
    <>
      {/* <Navbar /> */}
      <AdminNavbar />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}
