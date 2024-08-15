

import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { HeaderDoctor } from "../components/header/indexDoctor";
import { Footer } from "../components/footer/index";
import { useAllPatientsByDoctorId } from "../hooks/useAllPatients";

const UserModal = ({ patient, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
      <h2 className="text-3xl font-bold mb-6">Detalhes do Paciente</h2>
      <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
        <div className="flex flex-col">
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-900">
              ID:
              <input
                type="text"
                value={patient._id}
                readOnly
                className="mt-2 block w-full border-none bg-gray-400 rounded-lg shadow-sm text-lg text-white p-2"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-900">
              Endereço:
              <input
                type="text"
                value={patient.endereço}
                readOnly
                className="mt-2 block w-full border-none bg-gray-400 rounded-lg shadow-sm text-lg text-black p-2"
              />
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-900">
              Nome:
              <input
                type="text"
                value={patient.nome}
                readOnly
                className="mt-2 block w-full border-none bg-gray-400 rounded-lg shadow-sm text-lg text-black p-2"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-900">
              Telefone:
              <input
                type="text"
                value={patient.telefone}
                readOnly
                className="mt-2 block w-full border-none bg-gray-400 rounded-lg shadow-sm text-lg text-black p-2"
              />
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 mb-6">
        <div className="flex-1">
          <label className="block text-lg font-medium text-gray-900">
            Data:
            <input
              type="text"
              value={new Date(patient.data_hora).toLocaleDateString()}
              readOnly
              className="mt-2 block w-full border-none bg-gray-400 rounded-lg shadow-sm text-lg text-black p-2"
            />
          </label>
        </div>
        <div className="flex-1">
          <label className="block text-lg font-medium text-gray-900">
            Status:
            <input
              type="text"
              value={patient.status}
              readOnly
              className={`mt-2 block w-full border-none rounded-lg shadow-sm text-lg ${getStatusClass(
                patient.status
              )} p-2`}
            />
          </label>
        </div>
      </div>
      <button
        onClick={onClose}
        className="mt-6 px-6 py-3 bg-blue-700 text-white text-lg rounded-lg hover:bg-blue-700"
      >
        Fechar
      </button>
    </div>
  </div>
);

const getStatusClass = (status) => {
  switch (status.toLowerCase()) {
    case "agendada":
      return "bg-verde-100";
    case "concluída":
      return "bg-gray-300";
    case "cancelada":
      return "bg-vermelho-100";
    default:
      return "bg-white";
  }
};

export const Patients = () => {
  const [searchParams] = useSearchParams();
  const [selectedPatient, setSelectedPatient] = useState(null);

  const id = "66b237df86773eb391816a0f";
  const { patients = [], loading, error } = useAllPatientsByDoctorId(id);

  useEffect(() => {
    console.log("Patients data:", patients);
  }, [patients]);

  function getFilteredPatients() {
    const searchString = searchParams.get("search");
    if (!searchString || searchString.trim() === "") {
      return patients;
    } else {
      return patients.filter((patient) =>
        patient?.nome.toLowerCase().includes(searchString.toLowerCase())
      );
    }
  }

  const handleViewDetails = (patient) => {
    setSelectedPatient(patient);
  };

  const handleCloseModal = () => {
    setSelectedPatient(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <HeaderDoctor />
      <main className="container mx-auto px-4 py-8 mt-20">
        <h1 className="text-3xl font-bold mb-4">Lista de Pacientes</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nome
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Endereço
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Telefone
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {getFilteredPatients().map((patient) =>
                patient ? (
                  <tr key={patient.pacienteId}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {patient.pacienteId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <Link
                        to={`/patients/${patient.pacienteId}`}
                        className="text-blue-600 hover:underline"
                      >
                        {patient.nome}
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {patient.endereço}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {patient.telefone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(patient.data_hora).toLocaleDateString()}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${getStatusClass(
                        patient.status
                      )}`}
                    >
                      {patient.status}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button
                        onClick={() => handleViewDetails(patient)}
                        className="px-4 py-2 bg-white text-black border border-gray-300 rounded-lg hover:bg-gray-100"
                      >
                        Ver Detalhes
                      </button>
                    </td>
                  </tr>
                ) : null
              )}
            </tbody>
          </table>
        </div>
        {selectedPatient && (
          <PatientModal patient={selectedPatient} onClose={handleCloseModal} />
        )}
      </main>
      <Footer />
    </>
  );
};
