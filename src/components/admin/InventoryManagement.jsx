import { useEffect, useState } from "react";
import axios from "axios";

export const InventoryManagement = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3033/api/clothing/inventory"
        );
        setInventory(response.data);
      } catch (error) {
        console.error("Error fetching inventory:", error);
      }
    };
    fetchInventory();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Inventory Management
      </h2>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                Item Name
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                Condition
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {inventory.map((item) => (
              <tr key={item._id} className="border-b border-gray-200">
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                  {item.itemName}
                </td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                  {item.condition}
                </td>
                <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                  <span
                    className={`${
                      item.status === "Aprovado"
                        ? "text-green-600"
                        : item.status === "Rejeitado"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
