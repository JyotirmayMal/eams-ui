import { useState } from "react";

function EmployeeAssets() {

  const [assignments, setAssignments] = useState([
    {
      id: 1,
      employee: "Rahul Kumar",
      asset: "Dell Latitude 5540",
      code: "AST001",
      assignedDate: "01 Aug 2026",
      returnedDate: "-",
      status: "ASSIGNED",
    },
    {
      id: 2,
      employee: "Priya Sharma",
      asset: "HP E24 Monitor",
      code: "AST003",
      assignedDate: "15 Jul 2026",
      returnedDate: "-",
      status: "ASSIGNED",
    },
    {
      id: 3,
      employee: "Amit Das",
      asset: "MacBook Pro 14",
      code: "AST002",
      assignedDate: "05 Jun 2026",
      returnedDate: "01 Aug 2026",
      status: "RETURNED",
    },
  ]);

  const [form, setForm] = useState({
    employee: "",
    asset: "",
    assignedDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setAssignments([
      ...assignments,
      {
        id: assignments.length + 1,
        employee: form.employee,
        asset: form.asset,
        code: "AST006",
        assignedDate: form.assignedDate,
        returnedDate: "-",
        status: "ASSIGNED",
      },
    ]);

    setForm({
      employee: "",
      asset: "",
      assignedDate: "",
    });
  };

  return (
    <div>

      <div className="page-heading">

        <div>
          <h2>Asset Assignment</h2>
          <p>
            Assign and track company assets issued to employees.
          </p>
        </div>

      </div>

      <div className="assignment-layout">

        <div className="card assignment-form-card">

          <div className="card-title">
            <div className="card-title-icon">
              ⇄
            </div>

            <div>
              <h3>Assign Asset</h3>
              <p>
                Issue an asset to an employee.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="form-field">
              <label>Employee</label>

              <select
                value={form.employee}
                onChange={(e) =>
                  setForm({
                    ...form,
                    employee: e.target.value,
                  })
                }
                required
              >
                <option value="">
                  Select employee
                </option>

                <option>Rahul Kumar</option>
                <option>Priya Sharma</option>
                <option>Amit Das</option>
                <option>Sneha Roy</option>
              </select>

            </div>

            <div className="form-field">
              <label>Asset</label>

              <select
                value={form.asset}
                onChange={(e) =>
                  setForm({
                    ...form,
                    asset: e.target.value,
                  })
                }
                required
              >
                <option value="">
                  Select available asset
                </option>

                <option>MacBook Pro 14</option>
                <option>Logitech MX Keys</option>
                <option>Dell Monitor</option>
              </select>

            </div>

            <div className="form-field">
              <label>Assigned Date</label>

              <input
                type="date"
                value={form.assignedDate}
                onChange={(e) =>
                  setForm({
                    ...form,
                    assignedDate: e.target.value,
                  })
                }
                required
              />

            </div>

            <button
              className="primary-button full-width"
              type="submit"
            >
              Assign Asset
            </button>

          </form>

        </div>

        <div className="card">

          <div className="card-header">
            <div>
              <h3>Assignment History</h3>
              <p>
                Recent asset assignments
              </p>
            </div>

            <span className="record-count">
              {assignments.length} Records
            </span>
          </div>

          <div className="assignment-list">

            {assignments.map((item) => (

              <div
                className="assignment-item"
                key={item.id}
              >

                <div className="assignment-icon">
                  ▣
                </div>

                <div className="assignment-details">

                  <strong>{item.asset}</strong>

                  <span>
                    {item.code} • Assigned to{" "}
                    {item.employee}
                  </span>

                  <small>
                    Assigned: {item.assignedDate}
                  </small>

                </div>

                <span
                  className={
                    item.status === "ASSIGNED"
                      ? "badge info"
                      : "badge neutral"
                  }
                >
                  {item.status}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default EmployeeAssets;