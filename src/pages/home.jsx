import { Header } from "../components/header/header";
import { SliderHome } from "../components/slides/slideHome";
import { Footer } from "../components/footer/footer";
import { Link } from "react-router-dom";
import { TopClothes } from "../components/cards/topClothes";
import { HandHeart } from "@phosphor-icons/react";
import { BottomCardStats } from "../components/cards/bottomCardStats";

export const Home = () => {
  return (
    <>
      <Header />
      <SliderHome />
      <TopClothes />

      <div className="shadow-2xl border-b-4 border-b-amarelo-100">
        {/* Primeiro Componente */}
        <div className="flex bg-verde-100 p-20 mx-auto h-full">
          {/* Imagem à Esquerda */}
          <div className="flex-none w-[50%] ">
            <img
              src="/public/imgs/criancas-africanas.jpg"
              alt="Roupas"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Texto e Botão à Direita */}
          <div className="flex-1 bg-white  w-[50%] h-auto font-roboto">
            <h1 className="text-lg p-14 text-justify text-preto-100 ">
              <p className="mb-4">
                É com grande satisfação que anunciamos a concessionalização de
                doações de roupas para crianças, uma iniciativa que visa atender
                às necessidades de jovens em situação de vulnerabilidade social.
              </p>
              <p className="mb-4">
                Situações como estas na fotografia ao lado são vistas todos os
                dias. Por isso, nós trazemos a solução.
              </p>
              <p className="mb-4">
                A nossa organização tem o prazer de oferecer uma gama de roupas
                infantis, cuidadosamente selecionadas, para apoiar crianças que
                necessitam de vestuário adequado. Este projeto é uma parte
                fundamental do nosso compromisso em promover o bem-estar e a
                dignidade das crianças em nossa comunidade.
              </p>
            </h1>
            <Link
              to="/donate"
              className="flex justify-center items-center font-bold text-lg bg-amarelo-100 px-8 py-2 ml-14 w-[50%] rounded-full border border-verde-100 uppercase text-branco-100 hover:bg-verde-100 transition-colors duration-300"
            >
              Quero Doar Agora!
              <HandHeart
                weight="fill"
                className="h-8 w-8 ml-4"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-branco-100">
        <BottomCardStats />
      </div>
      <Footer />
    </>
  );
};
