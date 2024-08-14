import { Header } from "../components/header/header";
import { SliderHome } from "../components/slides/slideHome";
import { CardHome } from "../components/cards/cardHome";
import { Footer } from "../components/footer/footer";

export const Home = () => {
  return (
    <>
      <Header />
      <h1>HOME PAGE</h1>
<SliderHome/>
<CardHome/>

  <div>
      {/* Primeiro Componente */}
      <div className="flex ml-10 mt-20 p-4">
      {/* Imagem à Esquerda */}
      <div className="flex-none w-[50%] ">
        <img 
          src="/public/imgs/roupas-cheias.jpg" 
          alt="Roupas" 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Texto e Botão à Direita */}
      <div className="flex-1 bg-white shadow-2xl w-[50%] h-auto">
        <h1 className="text-xl mb-4 ml-10 mt-20">
          <p>
            É com grande satisfação que anunciamos a concessionalização de doações de roupas para crianças, 
            uma iniciativa que visa atender às necessidades de jovens em situação de vulnerabilidade social.
          </p>
          <p>
            Situações como estas na fotografia ao lado são vistas todos os dias. Por isso, nós trazemos a solução.
          </p>
          <p>
            A nossa organização tem o prazer de oferecer uma gama de roupas infantis, cuidadosamente selecionadas, 
            para apoiar crianças que necessitam de vestuário adequado. Este projeto é uma parte fundamental do nosso 
            compromisso em promover o bem-estar e a dignidade das crianças em nossa comunidade.
          </p>
        </h1>
        <button className="bg-blue-500 text-white  mt-40 ml-96  w-60 h-10 mb-6 border border-green-500 rounded-md">
          Quero Doar Agora
        </button>
      </div>
    </div>

      {/* Segundo Componente */}
      <div className="flex mt-20 ml-16 space-x-4">
        <div className="w-[800px] bg-blue-100/30 p-4">
          <h1 className="text-7xl text-blue-600 font-bold">Quero Doar</h1>
          <p className="mt-20 text-2xl">Doar é muito importante e você pode ajudar muitas pessoas com o Doarei. Cadastre-se!</p>
          <button className="bg-blue-500 text-white mt-20 w-44 h-10 mb-6 border border-green-500 rounded-md">
            Quero Doar Agora
          </button>
        </div>
        <div className="w-[800px] bg-red-100/30 p-4">
          <h1 className="text-7xl text-red-600 font-bold">Quero Requisitar</h1>
          <p className="mt-20 text-2xl">Muitas pessoas podem ter o que você precisa. Vamos te ajudar a encontrá-las.</p>
          <button className="bg-red-500 text-white mt-20 w-44 h-10 mb-6 border border-green-500 rounded-md">
            Quero Requisitar Agora
          </button>
        </div>
      </div>
    </div>
<Footer/>
    </>
  );
};
