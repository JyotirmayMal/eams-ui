import { useState } from "react";

function Employees() {

  const [showModal, setShowModal] = useState(false);

  const [employees, setEmployees] = useState([
    {
      id: "EMP001",
      name: "Rahul Kumar",
      email: "rahul.kumar@company.com",
      department: "Engineering",
      designation: "Java Developer",
      salary: "₹65,000",
      status: "ACTIVE",
    },
    {
      id: "EMP002",
      name: "Priya Sharma",
      email: "priya.sharma@company.com",
      department: "Human Resources",
      designation: "HR Executive",
      salary: "₹52,000",
      status: "ACTIVE",
    },
    {
      id: "EMP003",
      name: "Amit Das",
      email: "amit.das@company.com",
      department: "Engineering",
      designation: "Software Engineer",
      salary: "₹72,000",
      status: "ACTIVE",
    },
    {
      id: "EMP004",
      name: "Sneha Roy",
      email: "sneha.roy@company.com",
      department: "Finance",
      designation: "Accountant",
      salary: "₹48,000",
      status: "ACTIVE",
    },
    {
      id: "EMP005",
      name: "Arjun Singh",
      email: "arjun.singh@company.com",
      department: "Engineering",
      designation: "Senior Developer",
      salary: "₹95,000",
      status: "INACTIVE",
    },
  ]);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    designation: "",
    salary: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      id: `EMP00${employees.length + 1}`,
      name: `${form.firstName} ${form.lastName}`,
      email: form.email,
      department: form.department,
      designation: form.designation,
      salary: `₹${form.salary}`,
      status: "ACTIVE",
    };

    setEmployees([...employees, newEmployee]);

    setForm({
      firstName: "",
      lastName: "",
      email: "",
      department: "",
      designation: "",
      salary: "",
    });

    setShowModal(false);
  };

  return (
    <div>

      <div className="page-heading">

        <div>
          <h2>Employee Directory</h2>
          <p>
            Manage employees and their organizational information.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={() => setShowModal(true)}
        >
          + Add Employee
        </button>

      </div>

      <div className="toolbar">

        <div className="search-wrapper">
          <span>⌕</span>

          <input
            placeholder="Search employees..."
          />
        </div>

        <div className="toolbar-actions">
          <button className="secondary-button">
            Filter
          </button>

          <button className="secondary-button">
            Export
          </button>
        </div>

      </div>

      <div className="table-card">

        <table>

          <thead>
            <tr>
              <th>Employee</th>
              <th>Employee ID</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {employees.map((employee) => (

              <tr key={employee.id}>

                <td>
                  <div className="table-person">

                    <div className="table-avatar">
                      {employee.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>

                    <div>
                      <strong>{employee.name}</strong>
                      <small>{employee.email}</small>
                    </div>

                  </div>
                </td>

                <td>
                  <span className="code">
                    {employee.id}
                  </span>
                </td>

                <td>{employee.department}</td>

                <td>{employee.designation}</td>

                <td>
                  <strong>{employee.salary}</strong>
                </td>

                <td>
                  <span
                    className={
                      employee.status === "ACTIVE"
                        ? "badge success"
                        : "badge danger"
                    }
                  >
                    {employee.status}
                  </span>
                </td>

                <td>
                  <div className="table-actions">
                    <button className="action-edit">
                      Edit
                    </button>

                    <button className="action-delete">
                      Delete
                    </button>
                  </div>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

        <div className="table-footer">
          Showing 1–5 of 124 employees
        </div>

      </div>

      {showModal && (

        <div className="modal-overlay">

          <div className="modal">

            <div className="modal-header">

              <div>
                <h3>Add New Employee</h3>
                <p>
                  Enter employee details below.
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

                <div className="form-field">
                  <label>First Name</label>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label>Last Name</label>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field full">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label>Department</label>

                  <select
                    name="department"
                    value={form.department}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Select department
                    </option>

                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Finance</option>
                    <option>Operations</option>
                  </select>

                </div>

                <div className="form-field">
                  <label>Designation</label>
                  <input
                    name="designation"
                    value={form.designation}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label>Salary</label>
                  <input
                    type="number"
                    name="salary"
                    value={form.salary}
                    onChange={handleChange}
                    placeholder="65000"
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
                  Create Employee
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

export default Employees;