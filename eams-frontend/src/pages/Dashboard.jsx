import { Link } from "react-router-dom";

function Dashboard() {
  const stats = [
    {
      title: "Total Employees",
      value: "124",
      change: "+8.2%",
      icon: "♙",
      type: "blue",
    },
    {
      title: "Total Assets",
      value: "186",
      change: "+5.4%",
      icon: "▣",
      type: "purple",
    },
    {
      title: "Assigned Assets",
      value: "143",
      change: "+3.1%",
      icon: "⇄",
      type: "green",
    },
    {
      title: "Monthly Payroll",
      value: "₹82.4L",
      change: "+6.8%",
      icon: "₹",
      type: "orange",
    },
  ];

  const recentEmployees = [
    {
      name: "Rahul Kumar",
      role: "Java Developer",
      department: "Engineering",
      status: "ACTIVE",
    },
    {
      name: "Priya Sharma",
      role: "HR Executive",
      department: "Human Resources",
      status: "ACTIVE",
    },
    {
      name: "Amit Das",
      role: "Software Engineer",
      department: "Engineering",
      status: "ACTIVE",
    },
    {
      name: "Sneha Roy",
      role: "Accountant",
      department: "Finance",
      status: "ACTIVE",
    },
  ];

  return (
    <div>

      <div className="welcome-banner">
        <div>
          <h2>Good morning, Jyotirmay 👋</h2>
          <p>
            Here's an overview of your organization today.
          </p>
        </div>

        <div className="welcome-date">
        {new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })}
        </div>
      </div>

      <div className="stats-grid">

        {stats.map((stat) => (
          <div className="stat-card" key={stat.title}>

            <div className={`stat-icon ${stat.type}`}>
              {stat.icon}
            </div>

            <div className="stat-details">
              <span>{stat.title}</span>
              <strong>{stat.value}</strong>

              <small className="positive">
                ↑ {stat.change} this month
              </small>
            </div>

          </div>
        ))}

      </div>

      <div className="dashboard-grid">

        <div className="card">

          <div className="card-header">
            <div>
              <h3>Recent Employees</h3>
              <p>Recently added employees</p>
            </div>

            <Link to="/employees" className="view-link">
              View All →
            </Link>
          </div>

          <div className="employee-list">

            {recentEmployees.map((employee, index) => (
              <div className="employee-row" key={employee.name}>

                <div className="employee-avatar">
                  {employee.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <div className="employee-info">
                  <strong>{employee.name}</strong>
                  <span>{employee.role}</span>
                </div>

                <div className="employee-department">
                  {employee.department}
                </div>

                <span className="badge success">
                  {employee.status}
                </span>

              </div>
            ))}

          </div>

        </div>

        <div className="card">

          <div className="card-header">
            <div>
              <h3>Asset Overview</h3>
              <p>Current asset distribution</p>
            </div>

            <Link to="/assets" className="view-link">
              View All →
            </Link>
          </div>

          <div className="asset-overview">

            <div className="asset-progress-row">
              <div>
                <span>Assigned</span>
                <strong>143</strong>
              </div>

              <div className="progress">
                <div
                  className="progress-bar blue-bar"
                  style={{ width: "77%" }}
                />
              </div>
            </div>

            <div className="asset-progress-row">
              <div>
                <span>Available</span>
                <strong>31</strong>
              </div>

              <div className="progress">
                <div
                  className="progress-bar green-bar"
                  style={{ width: "17%" }}
                />
              </div>
            </div>

            <div className="asset-progress-row">
              <div>
                <span>Under Maintenance</span>
                <strong>12</strong>
              </div>

              <div className="progress">
                <div
                  className="progress-bar orange-bar"
                  style={{ width: "6%" }}
                />
              </div>
            </div>

          </div>

        </div>

      </div>

      <div className="quick-actions card">

        <div className="card-header">
          <div>
            <h3>Quick Actions</h3>
            <p>Frequently used operations</p>
          </div>
        </div>

        <div className="quick-action-grid">

          <Link to="/employees" className="quick-action">
            <div className="quick-icon blue-bg">♙</div>
            <div>
              <strong>Add Employee</strong>
              <span>Create a new employee record</span>
            </div>
          </Link>

          <Link to="/assets" className="quick-action">
            <div className="quick-icon purple-bg">▣</div>
            <div>
              <strong>Add Asset</strong>
              <span>Register a company asset</span>
            </div>
          </Link>

          <Link to="/employee-assets" className="quick-action">
            <div className="quick-icon green-bg">⇄</div>
            <div>
              <strong>Assign Asset</strong>
              <span>Assign asset to employee</span>
            </div>
          </Link>

          <Link to="/payroll" className="quick-action">
            <div className="quick-icon orange-bg">₹</div>
            <div>
              <strong>Manage Payroll</strong>
              <span>View salary records</span>
            </div>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;