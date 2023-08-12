import { useGlobalObject } from "../../context/MainContext";
import { MenuItem } from "../../common/menuItem/MenuItem";
import "./Dashboard.css";
import { DashboardCard } from "../../common/dashboradCard/DashboardCard";
export default function Dashboard() {
  const { state } = useGlobalObject();

  const totalCount = state.inventoryData?.reduce(
    (acc, curr) => acc + curr.stock,
    0
  );

  const totalDelivered = state.inventoryData?.reduce(
    (acc, curr) => acc + curr?.delivered,
    0
  );

  const totalLowStockItem = state.inventoryData?.reduce(
    (acc, curr) => (curr?.stock <= 10 ? acc + 1 : acc),
    0
  );

  return (
    <div className="dashboard_container">
      <MenuItem />
      <div className="dashboard_card_dash not_clickable">
        <DashboardCard lable="Total stock" count={totalCount} color="green" />
        <DashboardCard
          lable="Total Delivered"
          count={totalDelivered}
          color="orange"
        />
        <DashboardCard
          lable="Low Stock Items"
          count={totalLowStockItem}
          color="red"
        />
      </div>
    </div>
  );
}
