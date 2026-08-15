import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    {
      path: "/",
      icon: "▦",
      label: "Dashboard",
    },
    {
      path: "/employees",
      icon: "♙",
      label: "Employees",
    },
    {
      path: "/assets",
      icon: "▣",
      label: "Assets",
    },
    {
      path: "/employee-assets",
      icon: "⇄",
      label: "Asset Assignment",
    },
    {
      path: "/payroll",
      icon: "₹",
      label: "Payroll",
    },
  ];

  return (
    <aside className="sidebar">

      <div className="brand">
        <div className="brand-logo">E</div>

        <div>
          <h2>EAMS</h2>
          <span>Employee Management</span>
        </div>
      </div>

      <div className="menu-label">
        MAIN MENU
      </div>

      <nav>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="admin-avatar">JM</div>

        <div>
          <strong>Jyotirmay</strong>
          <small>Administrator</small>
        </div>
      </div>

    </aside>
  );
}

export default Sidebar;