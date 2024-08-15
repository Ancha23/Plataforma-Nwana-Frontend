import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { motion } from 'framer-motion';
import { Heart } from 'phosphor-react';

export const About = () => {

  
  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row justify-around items-center p-6 space-y-6 lg:space-y-0 lg:space-x-6 mt-16 ">
      <div className="w-full  p-2 h-[400px]">
        <img 
          src="https://img.freepik.com/fotos-gratis/um-miudo-africano-a-desfrutar-da-vida_23-2151448529.jpg?t=st=1723681317~exp=1723684917~hmac=3f0fbf5b53457b9982e8ee0ea71ce791d1ad244138c3a3d409d4238f8611c17a&w=1380" 
          alt="Imagem 1" 
          className="w-full h-[900px] object-cover rounded-lg shadow-lg "
          style={{
            backgroundSize:'contain',
            opacity:'0.8'

          }}
        />
      </div>
     
    </div>
    <div
     className="flex flex-col lg:flex-row justify-around items-center p-6 bg-white shadow-xl mt-12 space-y-6 lg:space-y-0 lg:space-x-6">
      <motion.div 
      initial={{ x: '-100%', opacity: 0.9 }}
      animate={{ x:  10, scale: 1, rotate: 0 }}
      transition={{ duration: 0.9,   }}

      className="w-full lg:w-[300px] h-[300px] p-4 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col justify-start items-center">
        <h2 className="text-2xl font-bold mb-2 text-center mt-4">Visão</h2>
        <p className="text-black text-left mt-8">
          Ser a principal plataforma de doação e requisição de roupas infantis, promovendo solidariedade e sustentabilidade entre famílias
        </p>
      </motion.div>

      <motion.div
      initial={{ y: '100%', opacity: 0.9 }}
      animate={{ y:  10, scale: 1, rotate: 0 }}
      transition={{ duration: 0.9,   }} 
      className="w-full lg:w-[300px] h-[300px] p-4 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col justify-start items-center">
        <h2 className="text-2xl font-bold mb-2 text-center mt-4">Missão</h2>
        <p className="text-black text-left mt-8">
          Facilitar a conexão entre famílias que desejam doar e aquelas que precisam de roupas infantis, criando um ambiente acessível e eficiente para ajudar o próximo
        </p>
      </motion.div>

      <motion.div
      initial={{ x: '100%', opacity: 0.9 }}
      animate={{ x:  10, scale: 1, rotate: 0 }}
      transition={{ duration: 0.9,   }} 
      className="w-full lg:w-[300px] h-[300px] p-4 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col justify-start items-center">
        <h2 className="text-2xl font-bold mb-2 text-center mt-4">Slogan</h2>
        <p className="text-black text-left mt-8 ">
          "Unindo famílias, vestindo o futuro"
        </p>
      </motion.div>
    </div>

    <div className="w-full h-[400px] mt-60">
          <video 
            src="https://media.istockphoto.com/id/1390888524/video/young-woman-and-younger-siblings-arrive-at-charity-event.mp4?s=mp4-480x480-is&k=20&c=X-E5jlNJOqhBa9xvUDrCGskGHZNMju_ij6WueHcUszk=" 
            controls
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>


        <div className="relative">
      {/* Função PulsingHeart definida aqui */}
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'loop' }}
        className="absolute ml-80 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ zIndex: 10 }}
      >
        <Heart weight="fill" size={300} color="#FF007A" />
      </motion.div>
      
      {/* Blocos de Conteúdo */}
      <div className="flex mt-48  p-4 relative">
        <div className="w-[1800px] h-auto bg-blue-100/30 relative z-0 ml-10">
          <h1 className="text-5xl text-blue-600/90 font-bold ml-96 mt-10">Quero Doar</h1>
          <p className="mt-20 text-2xl ml-96">Doar é muito importante e você pode ajudar muitas pessoas com o Doarei. Cadastre-se!</p>
          <button className="bg-blue-500 text-white mt-20 w-44 h-10 mb-6 border rounded-md ml-96">
            Quero Doar Agora
          </button>
          <button className="bg-red-500 text-white mt-20 w-44 h-10 mb-6 border rounded-md">
            Quero Requisitar Agora
          </button>
        </div>
       
      </div>
    </div>
    
   
    <div className="flex  lg:flex-row justify-around items-center p-2 mt-96 space-y-6 lg:space-y-0 lg:space-x-6">
       
        <div className="w-full lg:w-1/2 p-2">
          <img 
            src="https://t4.ftcdn.net/jpg/07/87/17/33/240_F_787173366_q6vDqoTnay0UwS0BznMpDd3sEBKReuXX.jpg"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        
      </div>


      <div className="relative mt-12">
        
        <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50 rounded-lg">
          <p className="text-lg  text-white text-left px-2">
          Pequenos gestos, grandes mudanças. Hoje, compartilhamos mais que roupas, compartilhamos amor e esperança. Doe, transforme vidas!
          </p>
        </div>

        
        
      </div>


    </>
  );
};
