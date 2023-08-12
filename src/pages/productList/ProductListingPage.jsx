import "./ProductListingPage.css";
import { useGlobalObject } from "../../context/MainContext";
import { TableRow } from "../../common/tableRow/TableRow";
import { ACTION_TYPE } from "../../utils/Constant";
import { useNavigate } from "react-router-dom";
export default function ProductListingPage() {
  const navigate = useNavigate();
  const { state, dispatch } = useGlobalObject();
  const departmentArray = [
    ...new Set(state.inventoryData?.map((item) => item.department))
  ];

  const departmentFilter =
    state.departmentSelected === "alldepartment"
      ? state.inventoryData
      : state.inventoryData?.filter(
          (item) => item.department === state.departmentSelected
        );

  const showLowStockData = state.lowStock
    ? departmentFilter.filter((item) => item.stock <= 10)
    : departmentFilter;

  const sortByPrice =
    state.sorting === "price"
      ? [...showLowStockData?.sort((a, b) => a.price - b.price)]
      : showLowStockData;

  const sortByName =
    state.sorting === "name"
      ? [...sortByPrice?.sort((a, b) => a.name - b.name)]
      : sortByPrice;

  const sortByStock =
    state.sorting === "stock"
      ? [...sortByName?.sort((a, b) => a.stock - b.stock)]
      : sortByName;

  const departmentSelectHandler = (e) => {
    const value = e.target.value;
    dispatch({ type: ACTION_TYPE.DEPARTMENTSELECTED, payload: value });
  };

  const sortingHandler = (e) => {
    const value = e.target.value;
    dispatch({ type: ACTION_TYPE.SORTING, payload: value });
  };

  return (
    <div className="list_container">
      <header className="list_header">
        <h2>Products</h2>
        <select
          name="department"
          id="department"
          onChange={(e) => departmentSelectHandler(e)}
          defaultValue={state.departmentSelected}
        >
          <option value="alldepartment">All department</option>
          {departmentArray.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
        <label htmlFor="lowstock">
          <input
            type="checkbox"
            value={state.lowStock}
            onChange={(e) =>
              dispatch({
                type: ACTION_TYPE.LOWSTOCK,
                payload: e.target.checked
              })
            }
          />
          Low Stock Items
        </label>
        <select name="" id="" onChange={(e) => sortingHandler(e)}>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="stock">Stock</option>
        </select>
        <button
          className="add_new_product_btn"
          onClick={() => navigate("/add")}
        >
          New
        </button>
      </header>
      <table>
        <tr className="header_table_container">
          <th>Image</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Supplier</th>
        </tr>
        {sortByStock?.map((item) => {
          return <TableRow data={item} />;
        })}
      </table>
    </div>
  );
}
