import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [donations, setDonations] = useState([]);
  const [requests, setRequests] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [showForm, setShowForm] = useState(false);

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

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [files, setFiles] = useState([]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("itemName", data.itemName);
    formData.append("description", data.description);
    formData.append("size", data.size);
    formData.append("condition", data.condition);
    formData.append("status", "Pendente");
    formData.append("donorId", "603d2f60b4e04232b08d4f5e");

    files.forEach((file) => formData.append("images", file));

    try {
      await axios.post(
        "http://localhost:3033/api/clothing/clothing-items",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Roupas adicionadas com sucesso!");
    } catch (error) {
      toast.error("Erro ao adicionar roupas!");
      console.error(error);
    }
  };

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
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
          {/* More navigation links */}
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="my-4">
              <input
                type="text"
                {...register("itemName", {
                  required: "Nome do item é obrigatório!",
                })}
                placeholder="Nome Do Item"
                className="block w-full font-medium rounded-md border-0 py-3 pr-10 pl-2 text-preto-100 shadow-sm ring-inset bg-cinza-100 placeholder:text-cinza-200 focus:ring-2 focus:ring-inset focus:ring-verde-100 focus:outline-none sm:text-sm sm:leading-6"
              />
              {errors.itemName && (
                <p className="text-red-500 text-sm">
                  {errors.itemName.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <textarea
                {...register("description", {
                  required: "Descrição é obrigatória!",
                })}
                placeholder="Descrição"
                className="block w-full font-medium rounded-md border-0 py-3 pr-10 pl-2 text-preto-100 shadow-sm ring-inset bg-cinza-100 placeholder:text-cinza-200 focus:ring-2 focus:ring-inset focus:ring-verde-100 focus:outline-none sm:text-sm sm:leading-6"
              />
              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <input
                type="text"
                {...register("size", { required: "Tamanho é obrigatório!" })}
                placeholder="Tamanho"
                className="block w-full font-medium rounded-md border-0 py-3 pr-10 pl-2 text-preto-100 shadow-sm ring-inset bg-cinza-100 placeholder:text-cinza-200 focus:ring-2 focus:ring-inset focus:ring-verde-100 focus:outline-none sm:text-sm sm:leading-6"
              />
              {errors.size && (
                <p className="text-red-500 text-sm">{errors.size.message}</p>
              )}
            </div>

            <div className="mb-4">
              <select
                {...register("condition", {
                  required: "Estado é obrigatório!",
                })}
                placeholder="Estado"
                className="block w-full font-medium rounded-md border-0 py-3 pr-10 pl-2 text-preto-100 shadow-sm ring-inset bg-cinza-100 placeholder:text-cinza-200 focus:ring-2 focus:ring-inset focus:ring-verde-100 focus:outline-none sm:text-sm sm:leading-6"
              >
                <option value="Novo">Novo</option>
                <option value="Usado">Usado</option>
              </select>
              {errors.condition && (
                <p className="text-red-500 text-sm">
                  {errors.condition.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium text-sm">
                Imagens
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                multiple
                accept="image/*"
                className="block w-full font-medium rounded-md border-0 py-3 pr-10 pl-2 text-preto-100 shadow-sm ring-inset bg-cinza-100 placeholder:text-cinza-200 focus:ring-2 focus:ring-inset focus:ring-verde-100 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-verde-100 text-white px-4 py-2 font-medium text-sm mb-4 rounded-full shadow-sm hover:bg-verde-200"
            >
              Adicionar
            </button>
          </form>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};
