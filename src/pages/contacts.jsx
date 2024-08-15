import { Header } from "../components/header/header";
import { WhatsappLogo, FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react';

export const Contacts = () => {
  return (
    <>
      <Header />
      <h1 className="text-center text-xl font-bold mt-6">CONTACTS PAGE</h1>
      <h2 className="text-center text-2xl font-semibold mt-10">Contactos</h2>
      <p className="text-center text-lg mt-4 max-w-prose mx-auto">
        Entre em contactos connosco, visite as nossas plataformas e veja as doações feitas, você pode fazer o mesmo doando, fazendo o bem para a os que mais precisam.
      </p>
      <div className="flex rounded-box mt-10 mx-auto w-full max-w-screen-xl p-0">
        <div className="flex flex-row space-x-0">
          <div className="w-[600px] flex-shrink-0">
            <img
              src="/public/imgs/imagemContact.jpg"
              className="w-full h-auto"
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
              alt="Contact Image"
            />
          </div>
          <div className="w-[600px] flex-shrink-0">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              className="w-full h-auto"
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
              alt="Stock Photo"
            />
          </div>
        </div>
      </div>
      <div className="w-full max-w-screen-xl p-4 mt-10 mx-auto">
        <div className="w-[900px] mx-auto"> {/* Aumentei a largura do contêiner do formulário */}
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              // Add form submission logic here
            }}
          >
            <div className="flex flex-col md:flex-row md:space-x-6">
              <div className="flex-1">
                <label htmlFor="name" className="block text-lg mb-2">Nome:</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Digite seu nome"
                  className="w-full p-4 border border-gray-300 rounded-lg text-lg"
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="block text-lg mb-2">E-mail:</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Digite seu email"
                  className="w-full p-4 border border-gray-300 rounded-lg text-lg"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact" className="block text-lg mb-2">Contacto:</label>
              <input
                id="contact"
                type="tel"
                placeholder="Digite seu contacto"
                className="w-full p-4 border border-gray-300 rounded-lg text-lg"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg mb-2">Mensagem:</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Digite uma mensagem"
                className="w-full p-4 border border-gray-300 rounded-lg text-lg"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-3 rounded-lg text-lg font-semibold"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 flex justify-center space-x-4">
        <a href="https://wa.me/yourwhatsappphonenumber" target="_blank" rel="noopener noreferrer" className="text-green-600 text-4xl">
          <WhatsappLogo weight="bold" />
        </a>
        <a href="https://facebook.com/yourfacebookprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-4xl">
          <FacebookLogo weight="bold" />
        </a>
        <a href="https://instagram.com/yourinstagramprofile" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-4xl">
          <InstagramLogo weight="bold" />
        </a>
        <a href="https://twitter.com/yourtwitterprofile" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-4xl">
          <TwitterLogo weight="bold" />
        </a>
      </div>
    </>
  );
};
