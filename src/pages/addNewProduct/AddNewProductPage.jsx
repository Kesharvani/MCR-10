import "./AddNewProductPage.css";
import { MenuItem } from "../../common/menuItem/MenuItem";
import { useGlobalObject } from "../../context/MainContext";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
export default function AddNewProductPage() {
  const navigate = useNavigate();
  const { state, dispatch } = useGlobalObject();
  const departmentArray = [
    ...new Set(state.inventoryData?.map((item) => item.department))
  ];
  const uniqueId = uuidv4();

  const [addInventory, setInventory] = useState({
    id: uniqueId,
    department: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: "",
    imageUrl: ""
  });

  const formHandler = (e) => {
    const { name, value } = e.target;

    setInventory((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("submitted");
    dispatch({ type: "ADD", payload: addInventory });
    navigate("/productlist");
  };
  return (
    <div className="dashboard_container">
      <MenuItem />
      <div className="dashboard_card_dash">
        <form onSubmit={submit}>
          <label htmlFor="deparment">Department</label>
          <select id="" required onChange={formHandler} name="department">
            {departmentArray?.map((item) => {
              return (
                <option value={item} key={item}>
                  {item}
                </option>
              );
            })}
          </select>
          <label htmlFor="deparment" name="name">
            name
          </label>
          <input type="text" required onChange={formHandler} name="name" />

          <label htmlFor="Description">Description</label>
          <input
            type="text"
            required
            onChange={formHandler}
            name="description"
          />

          <label htmlFor="Price">Price</label>
          <input type="number" required onChange={formHandler} name="price" />

          <label htmlFor="Stock">Stock</label>
          <input type="number" required onChange={formHandler} name="stock" />

          <label htmlFor="SKU">SKU</label>
          <input type="text" required onChange={formHandler} name="sku" />

          <label htmlFor="Suplier">Suplier</label>
          <input type="text" required onChange={formHandler} name="supplier" />

          <label htmlFor="Delivered">Delivered</label>
          <input
            type="nuumber"
            required
            onChange={formHandler}
            name="delivered"
          />

          <label htmlFor="ImageUrl">Image Url</label>
          <input type="text" required onChange={formHandler} name="imageUrl" />

          <input type="submit" value="Add product" />
        </form>
      </div>
    </div>
  );
}
