import { Link } from "react-router-dom";
import { Header } from "../components/header/header";
import imgError from "/imgs/404.jpg";
import { Footer } from "../components/footer/footer";

export const ErrorPage = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <div className="flex justify-center items-center w-[600px] mx-auto shadow-md flex-col py-20 my-20 font-roboto border border-castanho-200 rounded-md">
          <img src={imgError} alt="Logo 404" className="w-[20%] " />
          <div className=" flex justify-center flex-col">
            <strong className="text-8xl text-castanho-200 mt-2">OOPS</strong>
            <p className="text-center text-2xl mt-2 text-preto-100">
              Página não encontrada
            </p>

            <div className="flex justify-center items-center">
              <Link to="/">
                {" "}
                <button className="text-branco-100 text-sm border-spacing-4 shadow-md rounded-full bg-castanho-200 w-40 h-10 hover:bg-castanho-100  hover:transition-all duration-500 ease-in-out hover:duration-200 hover:ease-in-out hover:w-44 mt-4 hover:mt-5 hover:shadow-md hover:rounded-full">
                  Voltar a Página Inicial
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
