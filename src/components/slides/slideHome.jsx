import { useState, useEffect } from "react";
import { Circle, ArrowLeft, ArrowRight } from "@phosphor-icons/react";

export const SliderHome = () => {
  const slides = [
    {
      src: "/public/imgs/imagemContact.jpg",
      feat: "Transforme Vidas com um Ato de Amor",
      text: "Cada gesto de carinho faz uma diferença significativa na vida das crianças que mais precisam. Contribua com sua solidariedade e ajude-nos a proporcionar um futuro melhor para essas crianças. Sua ajuda é um ato de amor que pode mudar vidas!",
    },
    {
      src: "/public/imgs/criancas-africanas.jpg",
      feat: "Juntos por um Futuro Melhor para as Crianças",
      text: "Vamos unir nossos esforços para garantir que cada criança tenha a oportunidade de crescer com dignidade e esperança. Sua contribuição faz parte de uma rede de apoio que transforma sonhos em realidade. Juntos, podemos fazer a diferença!",
    },

    {
      src: "/public/imgs/doacao.jpg",
      feat: "Doe Amor, Espalhe Esperança",
      text: "Com sua ajuda, podemos levar esperança e cuidados essenciais às crianças que enfrentam desafios diários. Cada doação é um passo em direção a um futuro mais brilhante e cheio de possibilidades. Doe amor e veja a diferença que você pode fazer.",
    },
    {
      src: "/public/imgs/criancas.jpg",
      feat: "Ajude a Construir Sorrisos e Sonhos",
      text: "Sua ajuda pode transformar vidas ao oferecer a cada criança a chance de sorrir e sonhar. Com sua generosidade, podemos oferecer apoio, educação e amor. Participe dessa missão e ajude a construir um futuro mais radiante para nossas crianças.",
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
    <div className="mx-auto w-screen h-[720px] font-roboto relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentSlide].src})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      >
        <div className="absolute right-[343px] top-0 bottom-0 w-[600px] bg-verde-100 bg-opacity-30 text-branco-100 font-roboto p-4 text-left flex flex-col items-start justify-center space-y-4">
          <p className="font-bold text-amarelo-100 text-2xl uppercase">
            {slides[currentSlide].feat}
          </p>
          <p className="text-md text-justify">{slides[currentSlide].text}</p>
          <button
            type="button"
            className="bg-amarelo-100 text-preto-100 font-roboto px-6 py-3 font-bold rounded-full flex items-center gap-2 uppercase hover:bg-verde-100 hover:text-branco-100 transition-all duration-300"
          >
            Doar agora
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
