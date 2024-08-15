import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3033/api/auth/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex h-screen">
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
        </nav>
      </div>
      <div className="flex-1 p-8 bg-gray-100 overflow-y-auto">
        <h2 className="text-4xl font-semibold mb-8 text-center text-gray-900">
          Gestão de Usuários
        </h2>
        <div className="overflow-x-auto shadow-lg sm:rounded-lg">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Username
                </th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Email
                </th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Role
                </th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {users.map((user) => (
                <tr key={user._id} className="border-b border-gray-300">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">
                    {user.username}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">
                    {user.email}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">
                    {user.role}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-800 ml-4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors duration-300">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
