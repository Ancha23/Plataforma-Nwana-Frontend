import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export const AdminDashboard = () => {
  const [donations, setDonations] = useState([]);
  const [requests, setRequests] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newItem, setNewItem] = useState({
    itemName: "",
    description: "",
    size: "",
    condition: "New",
  });

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3033/api/clothing/donations"
        );
        setDonations(response.data);
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };

    const fetchRequests = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3033/api/clothing/requests"
        );
        setRequests(response.data);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };

    fetchDonations();
    fetchRequests();
  }, []);

  const donationGraphData = {
    labels: ["Pending", "Approved", "Rejected"],
    datasets: [
      {
        label: "Donations",
        data: [
          donations.filter((d) => d.status === "Pending").length,
          donations.filter((d) => d.status === "Approved").length,
          donations.filter((d) => d.status === "Rejected").length,
        ],
        backgroundColor: ["#f59e0b", "#10b981", "#ef4444"],
      },
    ],
  };

  const requestGraphData = {
    labels: ["Pending", "Approved", "Rejected"],
    datasets: [
      {
        label: "Requests",
        data: [
          requests.filter((r) => r.status === "Pending").length,
          requests.filter((r) => r.status === "Approved").length,
          requests.filter((r) => r.status === "Rejected").length,
        ],
        backgroundColor: ["#f59e0b", "#10b981", "#ef4444"],
      },
    ],
  };

  const handleInputChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3033/api/clothing/items", newItem);
      setNewItem({
        itemName: "",
        description: "",
        size: "",
        condition: "New",
      });
      setShowForm(false);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div className="flex">
      {/* Side Navigation */}
      <div className="w-64 h-screen bg-verde-200 text-white font-roboto">
        <div className="flex items-center mb-6 bg-amarelo-100 p-4 text-preto-100">
          <img
            src="/imgs/avatar.jpg"
            alt="User"
            className="bg-branco-100 w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h4 className="text-lg font-bold">Teodoro Maroupa</h4>
            <p className="text-sm">Administrador</p>
          </div>
        </div>
        <nav className="space-y-2">
          <Link
            to="/admin/users"
            className="block py-2.5 px-4 hover:bg-amarelo-100 focus:bg-amarelo-100"
          >
            Usuários
          </Link>
          <Link
            to="/admin/donations"
            className="block py-2.5 px-4 hover:bg-amarelo-100"
          >
            Doações
          </Link>
          <Link
            to="/admin/requests"
            className="block py-2.5 px-4 hover:bg-amarelo-100"
          >
            Requisições
          </Link>
          <Link
            to="/admin/inventory"
            className="block py-2.5 px-4 hover:bg-amarelo-100"
          >
            Inventário
          </Link>
          {/* More navigation links */}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Welcome back, Brian!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Statistics Cards */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Due Tasks</h3>
            <p className="text-2xl font-bold text-blue-500">21</p>
            <p className="text-sm text-gray-500">Completed: 13</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Overdue</h3>
            <p className="text-2xl font-bold text-red-500">17</p>
            <p className="text-sm text-gray-500">From yesterday: 9</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Open Issues</h3>
            <p className="text-2xl font-bold text-yellow-500">24</p>
            <p className="text-sm text-gray-500">Closed today: 19</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Features</h3>
            <p className="text-2xl font-bold text-green-500">38</p>
            <p className="text-sm text-gray-500">Implemented: 16</p>
          </div>
        </div>

        {/* Graphs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Donations
            </h2>
            <Bar data={donationGraphData} />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Requests
            </h2>
            <Bar data={requestGraphData} />
          </div>
        </div>

        {/* Add Item Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Item
          </button>
        </div>

        {/* Add Item Form */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="mb-4">
              <label
                htmlFor="itemName"
                className="block text-gray-700 font-semibold"
              >
                Item Name
              </label>
              <input
                type="text"
                id="itemName"
                name="itemName"
                value={newItem.itemName}
                onChange={handleInputChange}
                className="w-full p-2 mt-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-semibold"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={newItem.description}
                onChange={handleInputChange}
                className="w-full p-2 mt-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="size"
                className="block text-gray-700 font-semibold"
              >
                Size
              </label>
              <input
                type="text"
                id="size"
                name="size"
                value={newItem.size}
                onChange={handleInputChange}
                className="w-full p-2 mt-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="condition"
                className="block text-gray-700 font-semibold"
              >
                Condition
              </label>
              <select
                id="condition"
                name="condition"
                value={newItem.condition}
                onChange={handleInputChange}
                className="w-full p-2 mt-2 border rounded"
              >
                <option value="New">New</option>
                <option value="Used">Used</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Add Item
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
