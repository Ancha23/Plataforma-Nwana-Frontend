import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'phosphor-react'; // Importar ícones

const initialProducts = [
  {
    id: 1,
    nome: "Bolo de manga",
    tamanho: "M",
    imagem: "https://img.freepik.com/fotos-premium/caixa-de-doacao-com-roupas-de-verao-no-fundo-de-madeira-velha_104376-42.jpg?ga=GA1.1.860888004.1721808221&semt=ais_hybrid",
    descricao: "Descricao 1",
    data: "2024-08-01",
    estado: "Pendente" // Estado inicial
  },
  {
    id: 2,
    nome: "Bolo 2",
    tamanho: "L",
    imagem: "https://img.freepik.com/fotos-premium/caixa-de-doacao-com-roupas-de-verao-no-fundo-de-madeira-velha_104376-42.jpg?ga=GA1.1.860888004.1721808221&semt=ais_hybrid",
    descricao: "Descricao 2",
    data: "2024-08-02",
    estado: "Pendente" // Estado inicial
  },
  // Adicione mais produtos conforme necessário
];

export const TableDonor = () => {
  const [productList, setProductList] = useState(initialProducts);

  const updateStatus = (id, newStatus) => {
    setProductList(productList.map(product =>
      product.id === id ? { ...product, estado: newStatus } : product
    ));
  };

  return (
    <div className="overflow-x-auto mt-20">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descrição</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tamanho</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Imagem</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {productList.map((product) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {product.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {product.nome}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {product.descricao}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {product.tamanho}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <img src={product.imagem} alt={product.nome} className="h-16 w-16 object-cover" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {product.data}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${product.estado === "Pendente" ? "text-red-600" : "text-green-600"}`}>
                {product.estado === "Pendente" ? (
                  <XCircle size={24} color="red" weight="bold" />
                ) : (
                  <CheckCircle size={24} color="green" weight="bold" />
                )}
                {product.estado}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-end space-x-2">
        <button onClick={() => setProductList(productList.map(product => ({ ...product, estado: 'Pendente' })))}
                className="px-4 py-2 bg-yellow-500 text-white rounded">
          Pendente
        </button>
        <button onClick={() => setProductList(productList.map(product => ({ ...product, estado: 'Aprovado' })))}
                className="px-4 py-2 bg-green-500 text-white rounded">
          Aprovado
        </button>
        <button onClick={() => setProductList(productList.map(product => ({ ...product, estado: 'Cancelado' })))}
                className="px-4 py-2 bg-red-500 text-white rounded">
          Cancelado
        </button>
      </div>
    </div>
  );
};
