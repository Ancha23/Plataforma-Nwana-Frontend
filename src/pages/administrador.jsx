import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [donations, setDonations] = useState([]);
  const [requests, setRequests] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newItem, setNewItem] = useState({
    itemName: "",
    description: "",
    size: "",
    condition: "New",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get(
          "http://localhost:3033/api/auth/users"
        );
        const donationResponse = await axios.get(
          "http://localhost:3033/api/clothing/clothing-items"
        );
        const requestResponse = await axios.get(
          "http://localhost:3033/api/requests"
        );
        const inventoryResponse = await axios.get(
          "http://localhost:3033/api/clothing/inventory"
        );

        setUsers(userResponse.data);
        setDonations(donationResponse.data);
        setRequests(requestResponse.data);
        setInventory(inventoryResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const normalizeStatus = (status) => status.trim().toLowerCase();

  const donationGraphData = {
    labels: ["Pendente", "Aprovado", "Rejeitado"],
    datasets: [
      {
        label: "Doações",
        data: [
          donations.filter((d) => normalizeStatus(d.status) === "pendente")
            .length,
          donations.filter((d) => normalizeStatus(d.status) === "aprovado")
            .length,
          donations.filter((d) => normalizeStatus(d.status) === "rejeitado")
            .length,
        ],
        backgroundColor: ["#f59e0b", "#10b981", "#ef4444"],
      },
    ],
  };

  const requestGraphData = {
    labels: ["Pendente", "Aprovado", "Rejeitado"],
    datasets: [
      {
        label: "Requisições",
        data: [
          requests.filter((r) => normalizeStatus(r.status) === "pendente")
            .length,
          requests.filter((r) => normalizeStatus(r.status) === "aprovado")
            .length,
          requests.filter((r) => normalizeStatus(r.status) === "rejeitado")
            .length,
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
    <div className="flex h-screen">
      {/* Side Navigation */}
      <div className="w-64 bg-verde-200 text-white font-roboto">
        <div className="flex items-center mb-6 bg-amarelo-100 p-4 text-preto-100">
          <img
            src="/imgs/avatar.jpg"
            alt="User"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h4 className="text-lg font-bold">Teodoro Maroupa</h4>
            <p className="text-sm">Administrador</p>
          </div>
        </div>
        <nav className="space-y-2">

    
          <Link
            to="/admin/users"
            className="block py-2.5 px-4 hover:bg-amarelo-100 hover:text-preto-100 rounded transition-colors"
          >
            Usuários
          </Link>
          <Link
            to="/admin/donations"
            className="block py-2.5 px-4 hover:bg-amarelo-100 hover:text-preto-100 rounded transition-colors"
          >
            Doações
          </Link>
          <Link
            to="/admin/requests"
            className="block py-2.5 px-4 hover:bg-amarelo-100 hover:text-preto-100 rounded transition-colors"
          >
            Requisições
          </Link>
          <Link
            to="/admin/inventory"
            className="block py-2.5 px-4 hover:bg-amarelo-100 hover:text-preto-100 rounded transition-colors"
          >
            Inventário
          </Link>
           
          <Link
            to="/"
            className="block py-2.5 px-4 hover:bg-amarelo-100 hover:text-preto-100 rounded transition-colors"
          >
            Home
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Bem-vindo de volta, Teodoro!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Statistics Cards */}
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-700">Usuários</h3>
            <p className="text-2xl font-bold text-blue-500">{users.length}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-700">Requisições</h3>
            <p className="text-2xl font-bold text-yellow-500">
              {requests.length}
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-700">Inventário</h3>
            <p className="text-2xl font-bold text-green-500">
              {inventory.length}
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-700">Doações</h3>
            <p className="text-2xl font-bold text-red-500">
              {donations.length}
            </p>
          </div>
        </div>

        {/* Graphs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Doações
            </h2>
            <Bar data={donationGraphData} />
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Requisições
            </h2>
            <Bar data={requestGraphData} />
          </div>
        </div>

        {/* Add Item Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Adicionar Item
          </button>
        </div>

        {/* Add Item Form */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg space-y-4"
          >
            <div>
              <label
                htmlFor="itemName"
                className="block text-gray-700 font-semibold"
              >
                Nome do Item
              </label>
              <input
                type="text"
                id="itemName"
                name="itemName"
                value={newItem.itemName}
                onChange={handleInputChange}
                className="w-full p-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-gray-700 font-semibold"
              >
                Descrição
              </label>
              <textarea
                id="description"
                name="description"
                value={newItem.description}
                onChange={handleInputChange}
                className="w-full p-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="size"
                className="block text-gray-700 font-semibold"
              >
                Tamanho
              </label>
              <input
                type="text"
                id="size"
                name="size"
                value={newItem.size}
                onChange={handleInputChange}
                className="w-full p-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="condition"
                className="block text-gray-700 font-semibold"
              >
                Condição
              </label>
              <select
                id="condition"
                name="condition"
                value={newItem.condition}
                onChange={handleInputChange}
                className="w-full p-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="New">Novo</option>
                <option value="Used">Usado</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Adicionar
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
