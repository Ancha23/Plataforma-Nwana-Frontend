import React, { useState } from 'react';
import { Tag, TagSimple } from 'phosphor-react';

export const FormularioDePublicacao = () => {
  const [formData, setFormData] = useState({
    itemName: '',       // Nome do item
    description: '',    // Descrição do item
    size: '',           // Tamanho do item
    condition: '',      // Estado do item
    imageUrl: [],       // URLs das imagens
    publicationDate: '', // Data de publicação
  });
  const [imgPreviews, setImgPreviews] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'imageUrl' && files.length > 0) {
      const newImageUrl = [];
      const newImgPreviews = [];
      
      // Process each file
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onloadend = () => {
          newImageUrl.push(reader.result);
          newImgPreviews.push({ src: reader.result, name: file.name });

          // Update state when all files are processed
          if (newImageUrl.length === files.length) {
            setFormData((prev) => ({ ...prev, imageUrl: newImageUrl }));
            setImgPreviews(newImgPreviews);
          }
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Adiciona a data e a hora atuais
    const now = new Date();
    const publicationDate = now.toISOString(); // Obtém a data e a hora no formato ISO 8601
    
    // Atualiza o formData com a data de publicação
    const updatedFormData = { ...formData, publicationDate };

    if (updatedFormData.condition) {  // Validação para garantir que "estado" seja preenchido
      try {
        const response = await fetch('/api/publications', {  // Substitua '/api/publications' pela URL do seu backend
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedFormData),
        });

        if (!response.ok) {
          throw new Error('Erro ao enviar os dados.');
        }

        // Limpa o formulário e as pré-visualizações após o envio
        setFormData({ itemName: '', description: '', size: '', condition: '', imageUrl: [], publicationDate: '' });
        setImgPreviews([]);
        alert('Publicação criada com sucesso!');
      } catch (error) {
        console.error(error);
        alert('Erro ao criar a publicação.');
      }
    } else {
      alert('Por favor, preencha o estado da roupa.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-lg">
        <h1 className="text-2xl text-verde-100 mb-6 text-center">Formulario de Publicacao</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label className="block text-lg mb-2">Nome:</label>
            <input
              type="text"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              className="border p-2 w-full rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2">Descrição:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border p-2 w-full rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2">Tamanho:</label>
            <input
              type="text"
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2">Estado:</label>
            <div className="relative">
              <select
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                className="border p-2 w-full rounded bg-white"
                required
              >
                <option value="" disabled>Selecione o estado</option>
                <option value="new">Novo</option>
                <option value="used">Usado</option>
              </select>
              <div className="absolute top-3 right-3 text-gray-500">
                {formData.condition === 'new' ? (
                  <Tag size={24} />
                ) : formData.condition === 'used' ? (
                  <TagSimple size={24} />
                ) : null}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2">Imagens:</label>
            <input
              type="file"
              name="imageUrl"   // Renomeado para imageUrl
              accept="image/*"
              multiple
              onChange={handleChange}
              className="border p-2 w-full rounded"
              required
            />
            <div className="flex flex-wrap mt-4">
              {imgPreviews.map((img, index) => (
                <div key={index} className="w-1/4 p-2">
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded"
                  />
                  <p className="text-center text-sm mt-2">{img.name}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="bg-verde-100 text-white rounded-md py-2 px-4 w-full"
          >
            Publicar
          </button>
        </form>
      </div>
    </div>
  );
};
