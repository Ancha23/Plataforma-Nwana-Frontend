import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";

export const About = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row justify-around items-center p-6 mt-12 space-y-6 lg:space-y-0 lg:space-x-6">
      <div className="w-full lg:w-1/2 p-2">
        <img 
          src="https://img.freepik.com/fotos-premium/voluntarios-classificando-roupas-doadas-em-um-centro-de-doacao-de-caridade-comunitaria_1304123-522.jpg?size=626&ext=jpg&ga=GA1.1.181496407.1723666645&semt=ais_hybrid" 
          alt="Imagem 1" 
          className="w-full h-[300px] object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full lg:w-1/2 p-2">
        <img 
          src="https://img.freepik.com/fotos-premium/voluntarios-organizando-itens-de-roupa-doados-em-um-evento-de-centro-comunitario-classificando-varias-roupas-em-caixas-para-redistribuicao_1099133-19769.jpg?size=626&ext=jpg&ga=GA1.1.181496407.1723666645&semt=ais_hybrid" 
          alt="Imagem 2" 
          className="w-full h-[300px] object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
    <div className="flex flex-col lg:flex-row justify-around items-center p-6 bg-gray-100 mt-12 space-y-6 lg:space-y-0 lg:space-x-6">
      <div className="w-full lg:w-[300px] h-[300px] p-4 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col justify-start items-center">
        <h2 className="text-xl font-bold mb-2 text-center">Visão</h2>
        <p className="text-black text-left">
          Ser a principal plataforma de doação e requisição de roupas infantis, promovendo solidariedade e sustentabilidade entre famílias
        </p>
      </div>
      <div className="w-full lg:w-[300px] h-[300px] p-4 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col justify-start items-center">
        <h2 className="text-xl font-bold mb-2 text-center">Missão</h2>
        <p className="text-black text-left">
          Facilitar a conexão entre famílias que desejam doar e aquelas que precisam de roupas infantis, criando um ambiente acessível e eficiente para ajudar o próximo
        </p>
      </div>
      <div className="w-full lg:w-[300px] h-[300px] p-4 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col justify-start items-center">
        <h2 className="text-xl font-bold mb-2 text-center">Slogan</h2>
        <p className="text-black text- ">
          "Unindo famílias, vestindo o futuro"
        </p>
      </div>
    </div>
   
  
    <div className="flex flex-col lg:flex-row justify-around items-center p-2 mt-12 space-y-6 lg:space-y-0 lg:space-x-6">
       
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

        
        <div className="w-full h-[400px] mt-6">
          <video 
            src="https://media.istockphoto.com/id/1390888524/video/young-woman-and-younger-siblings-arrive-at-charity-event.mp4?s=mp4-480x480-is&k=20&c=X-E5jlNJOqhBa9xvUDrCGskGHZNMju_ij6WueHcUszk=" 
            controls
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    
    
    

    </>
  );
};
