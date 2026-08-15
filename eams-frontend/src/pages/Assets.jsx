import { useState } from "react";

function Assets() {

  const [showModal, setShowModal] = useState(false);

  const [assets, setAssets] = useState([
    {
      code: "AST001",
      name: "Dell Latitude 5540",
      type: "Laptop",
      purchaseDate: "12 Jan 2026",
      status: "ASSIGNED",
    },
    {
      code: "AST002",
      name: "MacBook Pro 14",
      type: "Laptop",
      purchaseDate: "20 Feb 2026",
      status: "AVAILABLE",
    },
    {
      code: "AST003",
      name: "HP E24 Monitor",
      type: "Monitor",
      purchaseDate: "05 Mar 2026",
      status: "ASSIGNED",
    },
    {
      code: "AST004",
      name: "Logitech MX Keys",
      type: "Keyboard",
      purchaseDate: "18 Mar 2026",
      status: "AVAILABLE",
    },
    {
      code: "AST005",
      name: "Dell Dock WD19",
      type: "Docking Station",
      purchaseDate: "25 Apr 2026",
      status: "MAINTENANCE",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    type: "",
    purchaseDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setAssets([
      ...assets,
      {
        code: `AST00${assets.length + 1}`,
        name: form.name,
        type: form.type,
        purchaseDate: form.purchaseDate,
        status: "AVAILABLE",
      },
    ]);

    setForm({
      name: "",
      type: "",
      purchaseDate: "",
    });

    setShowModal(false);
  };

  return (
    <div>

      <div className="page-heading">

        <div>
          <h2>Asset Inventory</h2>
          <p>
            Track and manage company assets and equipment.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={() => setShowModal(true)}
        >
          + Add Asset
        </button>

      </div>

      <div className="asset-summary">

        <div className="mini-card">
          <span>Total Assets</span>
          <strong>186</strong>
        </div>

        <div className="mini-card">
          <span>Available</span>
          <strong className="green-text">31</strong>
        </div>

        <div className="mini-card">
          <span>Assigned</span>
          <strong className="blue-text">143</strong>
        </div>

        <div className="mini-card">
          <span>Maintenance</span>
          <strong className="orange-text">12</strong>
        </div>

      </div>

      <div className="toolbar">

        <div className="search-wrapper">
          <span>⌕</span>

          <input
            placeholder="Search assets..."
          />
        </div>

        <div className="toolbar-actions">
          <button className="secondary-button">
            All Assets
          </button>

          <button className="secondary-button">
            Filter
          </button>
        </div>

      </div>

      <div className="table-card">

        <table>

          <thead>
            <tr>
              <th>Asset</th>
              <th>Asset Code</th>
              <th>Type</th>
              <th>Purchase Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {assets.map((asset) => (

              <tr key={asset.code}>

                <td>
                  <div className="table-person">

                    <div className="asset-table-icon">
                      ▣
                    </div>

                    <div>
                      <strong>{asset.name}</strong>
                      <small>Company Asset</small>
                    </div>

                  </div>
                </td>

                <td>
                  <span className="code">
                    {asset.code}
                  </span>
                </td>

                <td>{asset.type}</td>

                <td>{asset.purchaseDate}</td>

                <td>

                  <span
                    className={
                      asset.status === "AVAILABLE"
                        ? "badge success"
                        : asset.status === "ASSIGNED"
                        ? "badge info"
                        : "badge warning"
                    }
                  >
                    {asset.status}
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

      </div>

      {showModal && (

        <div className="modal-overlay">

          <div className="modal small-modal">

            <div className="modal-header">

              <div>
                <h3>Add New Asset</h3>
                <p>
                  Register a new company asset.
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

              <div className="form-field">
                <label>Asset Name</label>

                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="form-field">
                <label>Asset Type</label>

                <select
                  value={form.type}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      type: e.target.value,
                    })
                  }
                  required
                >
                  <option value="">
                    Select type
                  </option>

                  <option>Laptop</option>
                  <option>Monitor</option>
                  <option>Keyboard</option>
                  <option>Mouse</option>
                  <option>Mobile</option>
                  <option>Docking Station</option>
                </select>
              </div>

              <div className="form-field">
                <label>Purchase Date</label>

                <input
                  type="date"
                  value={form.purchaseDate}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      purchaseDate: e.target.value,
                    })
                  }
                  required
                />
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
                  Add Asset
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

export default Assets;