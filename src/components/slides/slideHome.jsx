import { useState, useEffect } from "react";
import { Circle, ArrowLeft, ArrowRight } from "@phosphor-icons/react";

export const SliderHome = () => {
  const slides = [
    {
      src: "/public/imgs/imagemContact.jpg",
      feat: "DOAR E UM ACTO DE AMOR",
      text: "Nos ajude a alcancar as criancas que precisam de Ajuda!",
    },
    {
      src: "/public/imgs/criancas-africanas.jpg",
      feat: "DOAR E UM ACTO DE AMOR",
      text: "Transforme a Forma Como Você Cuida da Sua Sociedade. Agendar Doe e Rquisite Ropas para Criancas,  é Rápido e Fácil.",
    },

    
    {
      src: "/public/imgs/doacao.jpg",
      feat: "Venha Doar",
      text: "",
    },
    {
      src: "/public/imgs/criancas.jpg",
      feat: "CRIANCAS FELIZES, E UM MUNDO MELHOR",
      text: "Aqui Voce pode Requisitar Doacoes de Roupas e Tambem Doar! Vamos la",
    },
  ];

  const [currentSlide, setcurrentSlide] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newSlide = isFirstSlide ? slides.length - 1 : currentSlide - 1;
    setcurrentSlide(newSlide);
  };

  const nextSlide = () => {
    const isLastSlide = currentSlide === slides.length - 1;
    const newSlide = isLastSlide ? 0 : currentSlide + 1;
    setcurrentSlide(newSlide);
  };

  const goToSlide = (slideIndex) => {
    setcurrentSlide(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="mx-auto w-screen h-[720px] relative group mt-20">
      <div
        style={{ backgroundImage: `url(${slides[currentSlide].src})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      >
        <div className="absolute left-[343px] top-0 bottom-0 w-[600px] bg-preto-100 bg-opacity-30 text-branco-100 font-roboto p-4 text-left flex flex-col items-start justify-center space-y-4">
          <p className="font-bold text-creme-100 text-2xl">
            {slides[currentSlide].feat}
          </p>
          <p className="text-lg">{slides[currentSlide].text}</p>
          <button
            type="button"
            className="bg-creme-100 text-preto-100 font-roboto px-6 py-3 font-bold rounded-full flex items-center gap-2 uppercase hover:bg-castanho-100 hover:text-branco-100 transition-all duration-300"
          >
            Cadastrar agora
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="flex top-4 justify-center py-4">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              currentSlide === slideIndex
                ? "text-castanho-200"
                : "text-castanho-100"
            }`}
          >
            <Circle size={16} />
          </div>
        ))}
      </div>
    </div>
  );
};
