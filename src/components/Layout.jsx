import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function Layout() {
  const location = useLocation();

  const getTitle = () => {
    if (location.pathname === "/") return "Dashboard";
    if (location.pathname === "/employees") return "Employees";
    if (location.pathname === "/assets") return "Assets";
    if (location.pathname === "/employee-assets") return "Asset Assignment";
    if (location.pathname === "/payroll") return "Payroll";

    return "Dashboard";
  };

  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <Topbar title={getTitle()} />

        <div className="page-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;