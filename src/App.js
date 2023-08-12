import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Department from "./pages/department/Department";
import ProductListingPage from "./pages/productList/ProductListingPage";
import IndividualPage from "./pages/individualPage/IndividualPage";
import AddNewProductPage from "./pages/addNewProduct/AddNewProductPage";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/department" element={<Department />} />
        <Route path="/productlist" element={<ProductListingPage />} />
        <Route path="/individualPage/:id" element={<IndividualPage />} />
        <Route path="/add" element={<AddNewProductPage />} />
      </Routes>
    </div>
  );
}
