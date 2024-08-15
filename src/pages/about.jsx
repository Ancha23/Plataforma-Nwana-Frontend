import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center p-6 mt-16 space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="w-full lg:w-1/2">
          <img
            src="https://img.freepik.com/fotos-gratis/um-miudo-africano-a-desfrutar-da-vida_23-2151448529.jpg?t=st=1723681317~exp=1723684917~hmac=3f0fbf5b53457b9982e8ee0ea71ce791d1ad244138c3a3d409d4238f8611c17a&w=1380"
            alt="Imagem 1"
            className="w-full h-auto max-h-[600px] object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Mission, Vision, Slogan */}
      <div className="flex flex-col lg:flex-row justify-around items-center p-6 bg-white shadow-lg mt-12 space-y-6 lg:space-y-0 lg:space-x-6">
        {[
          {
            title: "Visão",
            text: "Ser a principal plataforma de doação e requisição de roupas infantis, promovendo solidariedade e sustentabilidade entre famílias",
          },
          {
            title: "Missão",
            text: "Facilitar a conexão entre famílias que desejam doar e aquelas que precisam de roupas infantis, criando um ambiente acessível e eficiente para ajudar o próximo",
          },
          {
            title: "Slogan",
            text: '"Doar Roupas, Transformar Vidas: Apoiando Crianças com Dignidade"',
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="w-full lg:w-[300px] h-[300px] p-4 bg-white border border-gray-200 rounded-lg shadow-lg text-center"
          >
            <h2 className="text-2xl font-bold mb-2 text-verde-100">
              {item.title}
            </h2>
            <p className="text-gray-700 mt-6">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Event Section */}
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 mx-auto max-w-[1900px] mt-24">
        <motion.h1
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl text-amarelo-100 font-bold text-center"
        >
          Confira Alguns dos nossos Eventos!
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center mt-12 space-y-10 md:space-y-0 md:space-x-8">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-verde-100 font-bold mb-6">
              Evento de Doação de Roupas - Maputo
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              O evento de doação de roupas para crianças é uma iniciativa que
              busca atender às necessidades de crianças que enfrentam
              dificuldades para acessar vestuário adequado! Junte-se a nós e
              faça parte desta causa nobre. Vamos trabalhar juntos para garantir
              que todas as crianças tenham acesso a roupas adequadas e que
              saibam que a nossa comunidade se importa com elas.
            </p>

            <motion.button
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="mt-8 bg-verde-100 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-verde-200 transition-colors"
            >
              Requisitar
            </motion.button>
          </div>

          <div className="flex-1">
            <video
              src="https://media.istockphoto.com/id/1390888524/video/young-woman-and-younger-siblings-arrive-at-charity-event.mp4?s=mp4-480x480-is&k=20&c=X-E5jlNJOqhBa9xvUDrCGskGHZNMju_ij6WueHcUszk="
              controls
              autoPlay
              loop
              className="w-full h-auto rounded-lg shadow-lg"
            ></video>
          </div>
        </div>
      </div>
      {/* Closing Section */}
      <div className="relative mt-16 py-8 px-4 md:px-8 lg:px-16 bg-verde-100 rounded-lg text-center">
        <p className="text-lg md:text-xl text-white">
          Pequenos gestos, grandes mudanças. Hoje, compartilhamos mais que
          roupas, compartilhamos amor e esperança. Doe, transforme vidas!
        </p>
      </div>

      <Footer />
    </>
  );
};
