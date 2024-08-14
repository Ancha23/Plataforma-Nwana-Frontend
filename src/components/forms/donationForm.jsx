import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "../header/header";

export const DonationForm = () => {
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
    <>
      <Header />
      <div className="max-w-md h-full flex flex-col mx-auto mt-40 px-2 py-2 items-center justify-center bg-branco-100 shadow-lg font-roboto rounded-md border-b-4 border-verde-100">
        <h2 className="text-left text-lg font-bold text-preto-100 m-4 uppercase">
          Adicionar Roupas
        </h2>
        <div
          className="w-[380px] h-1 cover"
          style={{ background: 'url("./pattern/pattern-kids.jpg")' }}
        ></div>
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
              <p className="text-red-500 text-sm">{errors.itemName.message}</p>
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
              {...register("condition", { required: "Estado é obrigatório!" })}
              placeholder="Estado"
              className="block w-full font-medium rounded-md border-0 py-3 pr-10 pl-2 text-preto-100 shadow-sm ring-inset bg-cinza-100 placeholder:text-cinza-200 focus:ring-2 focus:ring-inset focus:ring-verde-100 focus:outline-none sm:text-sm sm:leading-6"
            >
              <option value="Novo">Novo</option>
              <option value="Usado">Usado</option>
            </select>
            {errors.condition && (
              <p className="text-red-500 text-sm">{errors.condition.message}</p>
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
        <ToastContainer />
      </div>
    </>
  );
};
