import { useState } from "react";

function Payroll() {

  const [showModal, setShowModal] = useState(false);

  const [payrolls, setPayrolls] = useState([
    {
      id: "PAY001",
      employee: "Rahul Kumar",
      period: "July 2026",
      basic: "₹55,000",
      allowance: "₹12,000",
      deduction: "₹2,000",
      net: "₹65,000",
      status: "PAID",
    },
    {
      id: "PAY002",
      employee: "Priya Sharma",
      period: "July 2026",
      basic: "₹45,000",
      allowance: "₹8,000",
      deduction: "₹1,500",
      net: "₹51,500",
      status: "PAID",
    },
    {
      id: "PAY003",
      employee: "Amit Das",
      period: "July 2026",
      basic: "₹62,000",
      allowance: "₹10,000",
      deduction: "₹2,500",
      net: "₹69,500",
      status: "PENDING",
    },
    {
      id: "PAY004",
      employee: "Sneha Roy",
      period: "July 2026",
      basic: "₹42,000",
      allowance: "₹7,000",
      deduction: "₹1,000",
      net: "₹48,000",
      status: "PAID",
    },
  ]);

  const [form, setForm] = useState({
    employee: "",
    month: "August",
    year: "2026",
    basic: "",
    allowance: "",
    deduction: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const basic = Number(form.basic || 0);
    const allowance = Number(form.allowance || 0);
    const deduction = Number(form.deduction || 0);

    const net = basic + allowance - deduction;

    setPayrolls([
      ...payrolls,
      {
        id: `PAY00${payrolls.length + 1}`,
        employee: form.employee,
        period: `${form.month} ${form.year}`,
        basic: `₹${basic}`,
        allowance: `₹${allowance}`,
        deduction: `₹${deduction}`,
        net: `₹${net}`,
        status: "PENDING",
      },
    ]);

    setForm({
      employee: "",
      month: "August",
      year: "2026",
      basic: "",
      allowance: "",
      deduction: "",
    });

    setShowModal(false);
  };

  return (
    <div>

      <div className="page-heading">

        <div>
          <h2>Payroll Management</h2>
          <p>
            Manage employee salary and payroll records.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={() => setShowModal(true)}
        >
          + Add Payroll
        </button>

      </div>

      <div className="payroll-summary">

        <div className="mini-card">
          <span>Total Payroll</span>
          <strong>₹82.4L</strong>
          <small>This month</small>
        </div>

        <div className="mini-card">
          <span>Processed</span>
          <strong className="green-text">
            ₹76.2L
          </strong>
          <small>92% completed</small>
        </div>

        <div className="mini-card">
          <span>Pending</span>
          <strong className="orange-text">
            ₹6.2L
          </strong>
          <small>8% remaining</small>
        </div>

      </div>

      <div className="toolbar">

        <div className="search-wrapper">
          <span>⌕</span>

          <input
            placeholder="Search employee..."
          />
        </div>

        <div className="toolbar-actions">

          <select className="filter-select">
            <option>July 2026</option>
            <option>June 2026</option>
            <option>May 2026</option>
          </select>

          <button className="secondary-button">
            Export
          </button>

        </div>

      </div>

      <div className="table-card">

        <table>

          <thead>
            <tr>
              <th>Payroll ID</th>
              <th>Employee</th>
              <th>Period</th>
              <th>Basic Salary</th>
              <th>Allowances</th>
              <th>Deductions</th>
              <th>Net Salary</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {payrolls.map((payroll) => (

              <tr key={payroll.id}>

                <td>
                  <span className="code">
                    {payroll.id}
                  </span>
                </td>

                <td>
                  <strong>{payroll.employee}</strong>
                </td>

                <td>{payroll.period}</td>

                <td>{payroll.basic}</td>

                <td>{payroll.allowance}</td>

                <td className="deduction">
                  -{payroll.deduction}
                </td>

                <td>
                  <strong>{payroll.net}</strong>
                </td>

                <td>
                  <span
                    className={
                      payroll.status === "PAID"
                        ? "badge success"
                        : "badge warning"
                    }
                  >
                    {payroll.status}
                  </span>
                </td>

                <td>
                  <div className="table-actions">
                    <button className="action-edit">
                      View
                    </button>
                  </div>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {showModal && (

        <div className="modal-overlay">

          <div className="modal">

            <div className="modal-header">

              <div>
                <h3>Create Payroll</h3>
                <p>
                  Add a new employee payroll record.
                </p>
              </div>

              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>

            </div>

            <form onSubmit={handleSubmit}>

              <div className="form-grid">

                <div className="form-field full">
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
                  <label>Month</label>

                  <select
                    value={form.month}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        month: e.target.value,
                      })
                    }
                  >
                    <option>August</option>
                    <option>July</option>
                    <option>June</option>
                  </select>
                </div>

                <div className="form-field">
                  <label>Year</label>

                  <input
                    value={form.year}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        year: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="form-field">
                  <label>Basic Salary</label>

                  <input
                    type="number"
                    value={form.basic}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        basic: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="form-field">
                  <label>Allowances</label>

                  <input
                    type="number"
                    value={form.allowance}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        allowance: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="form-field">
                  <label>Deductions</label>

                  <input
                    type="number"
                    value={form.deduction}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        deduction: e.target.value,
                      })
                    }
                  />
                </div>

              </div>

              <div className="modal-footer">

                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="primary-button"
                >
                  Create Payroll
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

export default Payroll;