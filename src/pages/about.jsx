import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { motion } from "framer-motion";
import { Roupas } from "../components/cards/cards";
export const About = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row justify-around items-center p-6 mt-16 space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="w-full lg:w-1/2 p-2">
          <img
            src="https://img.freepik.com/fotos-gratis/um-miudo-africano-a-desfrutar-da-vida_23-2151448529.jpg?t=st=1723681317~exp=1723684917~hmac=3f0fbf5b53457b9982e8ee0ea71ce791d1ad244138c3a3d409d4238f8611c17a&w=1380"
            alt="Imagem 1"
            className="w-full h-[900px] object-cover rounded-lg shadow-lg "
            style={{
              backgroundSize: "contain",
              opacity: "0.8",
            }}
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-around items-center p-6 bg-white shadow-xl mt-12 space-y-6 lg:space-y-0 lg:space-x-6">
        <motion.div
          initial={{ x: "-100%", opacity: 0.9 }}
          animate={{ x: 10, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9 }}
          className="w-full lg:w-[300px] h-[300px] p-4 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col justify-start items-center"
        >
          <h2 className="text-2xl font-bold mb-2 text-center mt-4 text-verde-100">
            Visão
          </h2>
          <p className="text-black text-left mt-8">
            Ser a principal plataforma de doação e requisição de roupas
            infantis, promovendo solidariedade e sustentabilidade entre famílias
          </p>
        </motion.div>

        <motion.div
          initial={{ y: "100%", opacity: 0.9 }}
          animate={{ y: 10, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9 }}
          className="w-full lg:w-[300px] h-[300px] p-4 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col justify-start items-center"
        >
          <h2 className="text-2xl font-bold mb-2 text-center mt-4 text-verde-100">
            Missão
          </h2>
          <p className="text-black text-left mt-8">
            Facilitar a conexão entre famílias que desejam doar e aquelas que
            precisam de roupas infantis, criando um ambiente acessível e
            eficiente para ajudar o próximo
          </p>
        </motion.div>

        <motion.div
          initial={{ x: "100%", opacity: 0.9 }}
          animate={{ x: 10, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9 }}
          className="w-full lg:w-[300px] h-[300px] p-4 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col justify-start items-center"
        >
          <h2 className="text-2xl font-bold mb-2 text-center mt-4 text-verde-100">
            Slogan
          </h2>
          <p className="text-black text-left mt-8 ">
            "Doar Roupas, Transformar Vidas: Apoiando Crianças com Dignidade"
          </p>
        </motion.div>
      </div>

      <div className="px-4 md:px-8 lg:px-16 xl:px-32 mx-auto min-w-[300px] max-w-[1900px] mt-52">
        <motion.h1
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="text-2xl ml-4 mt-8 md:ml-8 md:mt-10 lg:text-3xl lg:ml-10 lg:mt-12 text-amarelo-100"
        >
          Confira Alguns dos nossos Eventos!
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center mt-10">
          <div className="flex-1 p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-verde-100 font-bold">
              Evento de Doacao de Roupas-Maputo
            </h2>
            <p className="mt-4 md:mt-6 font-bold">
              O evento de doação de roupas para crianças é uma iniciativa que
              busca atender às necessidades de crianças que enfrentam
              dificuldades para acessar vestuário adequado!Junte-se a nós e faça
              parte desta causa nobre. Vamos trabalhar juntos para garantir que
              todas as crianças tenham acesso a roupas adequadas e que saibam
              que a nossa comunidade se importa com elas.
            </p>
            <span className="mt-6 md:mt-10 lg:mt-12 block relative">
              <div className="flex flex-col items-center">
                {" "}
                {/* Adicionei items-center para centralizar os botões */}
                <motion.div
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{ zIndex: 10 }} // Adicionei border temporária para depuração
                >
                  <button className="bg-verde-100 w-20 ml-28">
                    Requisitar
                  </button>
                </motion.div>
              </div>
            </span>
          </div>

          <div className="flex-1 p-4 md:p-8">
            <video
              src="https://media.istockphoto.com/id/1390888524/video/young-woman-and-younger-siblings-arrive-at-charity-event.mp4?s=mp4-480x480-is&k=20&c=X-E5jlNJOqhBa9xvUDrCGskGHZNMju_ij6WueHcUszk="
              controls
              autoPlay
              loop
              className="w-full h-auto max-w-md mx-auto"
              style={{ maxWidth: "100%", height: "auto" }}
            ></video>
          </div>
        </div>
      </div>

      <div className="relative mt-12">
        <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50 rounded-lg">
          <p className="text-lg  text-white text-left px-2">
            Pequenos gestos, grandes mudanças. Hoje, compartilhamos mais que
            roupas, compartilhamos amor e esperança. Doe, transforme vidas!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
