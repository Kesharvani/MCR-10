import "./DashboardCard.css";
export const DashboardCard = ({ lable, count, color }) => {
  return (
    <div className="dashboard_card">
      <h1 style={{ color }}>{count}</h1>
      <h3>{lable}</h3>
    </div>
  );
};
