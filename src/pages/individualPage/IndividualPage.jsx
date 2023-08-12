import "./IndividualPage.css";
import { useParams } from "react-router-dom";
import { useGlobalObject } from "../../context/MainContext";
export default function IndividualPage() {
  const { id } = useParams();
  const { state } = useGlobalObject();

  const individualInventory = state.inventoryData?.find(
    (item) => item.id === Number(id)
  );
  return (
    <div className="individual_container">
      <div style={{ textAlign: "start" }}>
        <h2>{individualInventory?.name}</h2>
        <img src={individualInventory?.imageUrl} alt="" height="300px" />
        <p>Price:{individualInventory?.price}</p>
        <p>Stock:{individualInventory?.stock}</p>
        <p>Supplier:{individualInventory?.supplier}</p>
        <p>Department:{individualInventory?.department}</p>
        <p>SKU:{individualInventory?.sku}</p>
        <p>Delivered:{individualInventory?.delivered}</p>
        <p>Description:{individualInventory?.description}</p>
      </div>
    </div>
  );
}
