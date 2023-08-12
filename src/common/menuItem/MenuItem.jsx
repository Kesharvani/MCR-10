import "./MenuItem.css";
import { useNavigate } from "react-router-dom";
import { useGlobalObject } from "../../context/MainContext";
import { ACTION_TYPE } from "../../utils/Constant";
export const MenuItem = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useGlobalObject();

  const dashboardHandler = () => {
    dispatch({ type: ACTION_TYPE.MENUSELECTED, payload: "dashboard" });
    navigate("/");
  };
  const departmentHandler = () => {
    dispatch({ type: ACTION_TYPE.MENUSELECTED, payload: "department" });
    navigate("/department");
  };
  const productsHandler = () => {
    dispatch({ type: ACTION_TYPE.MENUSELECTED, payload: "products" });
    navigate("/productlist");
  };
  return (
    <>
      <ul className="menu_items">
        <li
          onClick={dashboardHandler}
          className={state.menuSelected === "dashboard" && "bold_style"}
        >
          Dashboard
        </li>
        <li
          onClick={departmentHandler}
          className={state.menuSelected === "department" && "bold_style"}
        >
          Departments
        </li>
        <li
          onClick={productsHandler}
          className={state.menuSelected === "products" && "bold_style"}
        >
          Products
        </li>
      </ul>
    </>
  );
};
