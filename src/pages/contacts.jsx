import { Header } from "../components/header/header";
import { WhatsappLogo, FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react';
import { Footer } from "../components/footer/footer";

export const Contacts = () => {
  return (
    <>
      <Header />
      <h2 className=" text-center text-4xl font-bold mt-32">Contactos</h2>
      
      <div className="flex flex-wrap justify-center mt-10 mx-auto max-w-screen-xl p-0 space-x-8">
        <div className="w-full max-w-md flex-shrink-0">
          <img
            src="https://img.freepik.com/fotos-gratis/pequena-aluna-mostrando-um-celular-vazio_23-2148764033.jpg?t=st=1723693151~exp=1723696751~hmac=2fa15d06fc6afc6bace101f0b2805f1d0d6e105cb6749350cba750fa8e74fd97&w=740"
            className="w-full h-auto rounded-lg shadow-lg"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
            alt="Contact Image"
          />
        </div>
        <div className="w-full max-w-md flex-shrink-0">
          {/* Formulário ao lado da imagem */}
          <div className="w-full">
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                // Adicione a lógica de envio do formulário aqui
              }}
            >
              <div className="flex flex-col md:flex-row md:space-x-6">
                <div className="flex-1">
                  <label htmlFor="name" className="block text-lg mb-2 text-verde-100">Nome:</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Digite seu nome"
                    className="w-full p-4 border border-gray-300 rounded-lg text-lg hover:bg-amarelo-100/10"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="block text-lg mb-2 text-verde-100">E-mail:</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Digite seu email"
                    className="w-full p-4 border border-gray-300 hover:bg-amarelo-100/10 rounded-lg text-lg"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact" className="block text-lg mb-2 ">Contacto:</label>
                <input
                  id="contact"
                  type="tel"
                  placeholder="Digite seu contacto"
                  className="w-full p-4 border border-gray-300 rounded-lg text-lg hover:bg-amarelo-100/10"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg mb-2 text-verde-100">Mensagem:</label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Digite uma mensagem"
                  className="w-full p-4 border border-gray-300 rounded-lg text-lg hover:bg-amarelo-100/10"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white p-3 rounded-lg text-lg font-semibold mt-32"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
      <p className="text-center text-lg mt-4 max-w-prose mx-auto">
        Entre em contacto connosco, visite as nossas plataformas e veja as doações feitas. Você pode fazer o mesmo doando, fazendo o bem para os que mais precisam.
      </p>
      <div className="mt-8 flex justify-center space-x-4 mb-8">
        <a href="https://wa.me/yourwhatsapp" target="_blank" rel="noopener noreferrer" className="text-green-600 text-4xl">
          <WhatsappLogo weight="bold" />
        </a>
        <a href="https://facebook.com/yourfacebook" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-4xl">
          <FacebookLogo weight="bold" />
        </a>
        <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-4xl">
          <InstagramLogo weight="bold" />
        </a>
        <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-4xl">
          <TwitterLogo weight="bold" />
        </a>
      </div>
      <Footer/>
    </>
  );
};
