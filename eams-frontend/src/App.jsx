import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Assets from "./pages/Assets";
import EmployeeAssets from "./pages/EmployeeAssets";
import Payroll from "./pages/Payroll";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="employees" element={<Employees />} />
          <Route path="assets" element={<Assets />} />
          <Route path="employee-assets" element={<EmployeeAssets />} />
          <Route path="payroll" element={<Payroll />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;