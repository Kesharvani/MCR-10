import "./Department.css";
import { MenuItem } from "../../common/menuItem/MenuItem";
import { useGlobalObject } from "../../context/MainContext";
import { DashboardCard } from "../../common/dashboradCard/DashboardCard";
import { ACTION_TYPE } from "../../utils/Constant";
import { useNavigate } from "react-router-dom";
export default function Department() {
  const { state, dispatch } = useGlobalObject();
  const navigate = useNavigate();

  const departmentArray = [
    ...new Set(state.inventoryData?.map((item) => item.department))
  ];
  const dashboardHandler = (item) => {
    dispatch({ type: ACTION_TYPE.DEPARTMENTSELECTED, payload: item });
    navigate("/productlist");
  };

  return (
    <div className="dashboard_container">
      <MenuItem />
      <div className="dashboard_card_dash">
        {departmentArray?.map((item) => {
          return (
            <div onClick={() => dashboardHandler(item)}>
              <DashboardCard lable={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
