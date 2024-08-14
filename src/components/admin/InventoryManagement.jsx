import { useEffect, useState } from "react";
import axios from "axios";

export const InventoryManagement = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      const response = await axios.get(
        "http://localhost:3033/api/clothing/inventory"
      );
      setInventory(response.data);
    };
    fetchInventory();
  }, []);

  return (
    <div>
      <h2>Inventory Management</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Item Name</th>
            <th className="py-2">Condition</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item._id}>
              <td className="py-2">{item.itemName}</td>
              <td className="py-2">{item.condition}</td>
              <td className="py-2">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
