import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowRight } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TopClothes = () => {
  const [clothes, setClothes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClothes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3033/api/clothing/clothing-items"
        );
        setClothes(response.data);
      } catch (error) {
        console.error("Erro ao buscar roupas:", error);
      }
    };

    fetchClothes();
  }, []);

  const handleRequest = async (itemId) => {
    const staticRequesterId = "66bcbe624007a6467bb4302b";
    try {
      const response = await axios.post("http://localhost:3033/api/requests", {
        itemId,
        requesterId: staticRequesterId,
      });
      console.log("Requisição criada com sucesso!", response.data);
      toast.success("Requisição criada com sucesso!");
    } catch (error) {
      console.error("Erro ao criar requisição.", error);
      toast.error("Erro ao criar requisição.");
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <h2 className="text-2xl font-roboto font-light text-verde-100 uppercase">
            Roupas Disponíveis
          </h2>
          <div
            className="w-[980px] h-1 ml-8"
            style={{ background: 'url("./pattern/pattern-kids.jpg")' }}
          ></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {clothes.map((item, index) => (
            <div
              key={index}
              className="bg-branco-100 rounded-md shadow-sm border-t-2 border-t-verde-100"
            >
              <div
                className="h-32 w-full mb-4 rounded-t-md"
                style={{
                  background: `url(${item.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <h3 className="text-xl font-roboto font-bold mb-1 ml-4">
                {item.itemName}
              </h3>
              <p className="text-sm font-roboto text-cinza-300 mb-4 ml-4">
                {item.size} - {item.condition}
              </p>
              <div className="">
                <button
                  onClick={() => handleRequest(item)}
                  className="bg-verde-100 text-branco-100 font-roboto w-full h-10 px-3 py-1.5 font-light rounded-b-md text-sm flex items-center gap-1 hover:bg-verde-200 hover:text-branco-100 transition-all duration-300"
                >
                  Solicitar
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};
