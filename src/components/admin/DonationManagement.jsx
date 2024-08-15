import { useEffect, useState } from "react";
import axios from "axios";

export const DonationManagement = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3033/api/clothing/clothing-items"
        );
        setDonations(response.data);
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };
    fetchDonations();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      if (status === "Rejeitado") {
        await axios.delete(
          `http://localhost:3033/api/clothing/clothing-items/${id}`
        );
        setDonations(donations.filter((item) => item._id !== id));
      } else {
        await axios.patch(
          `http://localhost:3033/api/clothing/clothing-items/${id}`,
          { status }
        );
        setDonations(
          donations.map((item) =>
            item._id === id ? { ...item, status } : item
          )
        );
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Donation Management
      </h2>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                Item Name
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {donations.map((item) => (
              <tr key={item._id} className="border-b border-gray-200">
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                  {item.itemName}
                </td>
                <td
                  className={`py-4 px-6 text-sm font-medium whitespace-nowrap ${
                    item.status === "Aprovado"
                      ? "text-green-600"
                      : item.status === "Rejeitado"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {item.status}
                </td>
                <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                  <button
                    onClick={() => updateStatus(item._id, "Aprovado")}
                    className="text-green-600 hover:text-green-800 mr-4"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => updateStatus(item._id, "Rejeitado")}
                    className="text-red-600 hover:text-red-800"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
