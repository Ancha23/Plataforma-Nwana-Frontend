import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Plus } from "@phosphor-icons/react";

const products = [
  {
    product: "Roupa de Bebe",
    image: "/public/imgs/roupa-bebe.jpg",
    description: "Conjunto usado , mas em condicoes boas",
  },
  {
    product: "Bolo 2",
    image: "https://img.freepik.com/fotos-premium/caixa-de-doacao-com-roupas-de-verao-no-fundo-de-madeira-velha_104376-42.jpg?ga=GA1.1.860888004.1721808221&semt=ais_hybrid",
    description: "Descricao 2",
  },
  {
    product: "Conjunto de Menino",
    image: "/public/imgs/meninos.jpg",
    description: "Para bebe de 1 ano",
  },
  {
    product: "Medicamento 4",
    image: "https://img.freepik.com/fotos-premium/caixa-de-doacao-com-roupas-de-verao-no-fundo-de-madeira-velha_104376-42.jpg?ga=GA1.1.860888004.1721808221&semt=ais_hybrid",
    description: "Descricao 4",
  },
  {
    product: "Medicamento 5",
    image: "https://img.freepik.com/fotos-premium/caixa-de-doacao-com-roupas-de-verao-no-fundo-de-madeira-velha_104376-42.jpg?ga=GA1.1.860888004.1721808221&semt=ais_hybrid",
    description: "Descricao 5",
  },
  {
    product: "Medicamento 6",
    image: "https://img.freepik.com/fotos-premium/caixa-de-doacao-com-roupas-de-verao-no-fundo-de-madeira-velha_104376-42.jpg?ga=GA1.1.860888004.1721808221&semt=ais_hybrid",
    description: "Descricao 6",
  },
  {
    product: "Medicamento 7",
    image: "https://img.freepik.com/fotos-premium/caixa-de-doacao-com-roupas-de-verao-no-fundo-de-madeira-velha_104376-42.jpg?ga=GA1.1.860888004.1721808221&semt=ais_hybrid",
    description: "Descricao 7",
  },
 
];

export const CardHome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerView = 5;
  const slideCount = Math.ceil(products.length / slidesPerView);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideCount - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideCount - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="py-12 bg-white mt-20">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <h2 className="text-4xl font-roboto font-bold text-amarelo-100">
           Roupas Disponiveis para Requisicao
          </h2>
          <div
            className="w-[980px] h-1 ml-8"
            style={{ background: 'url("./pattern/traço.jpg")' }}
          ></div>
        </div>
        <div className="relative group overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${currentSlide * (100 / slideCount)}%)`,
              width: `${slideCount * 100}%`,
            }}
          >
            {products.map((product, index) => (
              <div key={index} className="flex-none w-1/5 px-2"> {/* Ajustado para 20% */}
                <div className="bg-branco-100 rounded-md shadow-md">
                  <div
                    className="h-52 w-full mb-4 rounded-t-md"
                    style={{
                      background: `url(${product.image})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat"
                    }}
                  ></div>
                  <h3 className="text-xl font-roboto font-bold mb-1 ml-4">
                    {product.product}
                  </h3>
                  <p className="text-sm font-roboto text-cinza-300 mb-4 ml-4">
                    {product.description}
                  </p>
                  <div className="flex">
                    <button className="bg-azul-100 hover:bg-amarelo-100 text-branco-100 font-roboto w-full h-10 px-3 py-1.5 font-light rounded-bl-md text-sm flex justify-center items-center gap-1 hover:text-branco-100 transition-all duration-300">
                     Ver Detalhes
                    </button>
                    <button className="bg-verde-100 hover:bg-verde-200 text-branco-100 font-roboto w-full font-semibold h-10 px-3 py-1.5 rounded-br-md text-sm uppercase flex justify-center items-center gap-1 hover:text-branco-100 transition-all duration-300">
                     Requisitar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 text-2xl rounded-full p-2 bg-castanho-200 text-branco-100 cursor-pointer"
            onClick={prevSlide}
          >
            <ArrowLeft size={22} />
          </div>
          <div
            className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 text-2xl rounded-full p-2 bg-castanho-200 text-branco-100 cursor-pointer"
            onClick={nextSlide}
          >
            <ArrowRight size={22} />
          </div>
        </div>
      </div>
    </section>
  );
};
