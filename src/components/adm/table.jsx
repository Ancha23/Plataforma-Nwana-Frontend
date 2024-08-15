import React, { useState } from "react";

const products = [
  {
    product: "Bolo de manga",
    image: "https://img.freepik.com/fotos-premium/caixa-de-doacao-com-roupas-de-verao-no-fundo-de-madeira-velha_104376-42.jpg?ga=GA1.1.860888004.1721808221&semt=ais_hybrid",
    description: "Descricao 1",
    status: "Pendente" // Estado inicial
  },
  {
    product: "Bolo 2",
    image: "https://img.freepik.com/fotos-premium/caixa-de-doacao-com-roupas-de-verao-no-fundo-de-madeira-velha_104376-42.jpg?ga=GA1.1.860888004.1721808221&semt=ais_hybrid",
    description: "Descricao 2",
    status: "Pendente" // Estado inicial
  },
  {
    product: "Bolo 2",
    image: "https://img.freepik.com/fotos-premium/caixa-de-doacao-com-roupas-de-verao-no-fundo-de-madeira-velha_104376-42.jpg?ga=GA1.1.860888004.1721808221&semt=ais_hybrid",
    description: "Descricao 2",
    status: "Pendente" // Estado inicial
  },
  {
    product: "Bolo 2",
    image: "https://img.freepik.com/fotos-premium/caixa-de-doacao-com-roupas-de-verao-no-fundo-de-madeira-velha_104376-42.jpg?ga=GA1.1.860888004.1721808221&semt=ais_hybrid",
    description: "Descricao 2",
    status: "Doado" // Estado inicial
  },
  {
    product: "Bolo 2",
    image: "https://img.freepik.com/fotos-premium/caixa-de-doacao-com-roupas-de-verao-no-fundo-de-madeira-velha_104376-42.jpg?ga=GA1.1.860888004.1721808221&semt=ais_hybrid",
    description: "Descricao 2",
    status: "Pendente" // Estado inicial
  },
  {
    product: "Bolo 2",
    image: "https://img.freepik.com/fotos-premium/caixa-de-doacao-com-roupas-de-verao-no-fundo-de-madeira-velha_104376-42.jpg?ga=GA1.1.860888004.1721808221&semt=ais_hybrid",
    description: "Descricao 2",
    status: "Doado" // Estado inicial
  },
  // Adicione mais produtos conforme necessário
];

export const TabelaDeControle = () => {
  const [productList, setProductList] = useState(products);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Imagem</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descrição</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {productList.map((product, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <img src={product.image} alt={product.product} className="h-16 w-16 object-cover" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {product.product}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {product.description}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${product.status === "Pendente" ? "text-red-600" : "text-green-600"}`}>
                {product.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

