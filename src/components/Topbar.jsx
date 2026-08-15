function Topbar({ title }) {
  return (
    <header className="topbar">

      <div>
        <h1>{title}</h1>
        <p>Employee & Asset Management System</p>
      </div>

      <div className="topbar-right">

        <button className="notification-btn">
          🔔
          <span className="notification-dot"></span>
        </button>

        <div className="top-user">
          <div className="user-avatar">
            JM
          </div>

          <div>
            <strong>Jyotirmay</strong>
            <small>Administrator</small>
          </div>
        </div>

      </div>

    </header>
  );
}

export default Topbar;