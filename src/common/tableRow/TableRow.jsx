import "./TableRow.css";
import { Link } from "react-router-dom";
export const TableRow = ({ data }) => {
  return (
    <tr>
      <td>
        <img src={data?.imageUrl} alt="productImage" height="60px" />
      </td>
      <td>
        <Link to={`/individualPage/${data.id}`}>{data?.name}</Link>
      </td>
      <td>{data?.description}</td>
      <td>${data?.price}</td>
      <td>{data?.stock}</td>
      <td>{data?.supplier}</td>
    </tr>
  );
};
