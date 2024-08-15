import { InstagramLogo } from "phosphor-react";
import {FacebookLogo} from "phosphor-react";
import {LinkedinLogo} from "phosphor-react";
import {YoutubeLogo} from "phosphor-react";



export const Footer = () => {
  return (
  
 <>
<footer className="bg-gradient-to-r from-green-400 to-green-600 text-white py-12">
  <div className="container mx-auto px-6 lg:px-8">
    <div className="flex flex-wrap justify-between items-start gap-8">
      
      
      <div className="w-full md:w-1/4 mb-8 md:mb-0">
        <h2 className="text-lg font-semibold mb-4">A NWANA</h2>
        <ul className="text-sm space-y-2">
          <li><a href="#" className="hover:underline transition-colors duration-300">Sobre Nós</a></li>
          <li><a href="#" className="hover:underline transition-colors duration-300">Serviços</a></li>
          <li><a href="#" className="hover:underline transition-colors duration-300">Equipe</a></li>
        </ul>
      </div>

      
      <div className="w-full md:w-1/4 mb-8 md:mb-0">
        <h2 className="text-lg font-semibold mb-4">ESPECIALISTAS</h2>
        <ul className="text-sm space-y-2">
          <li><a href="#" className="hover:underline transition-colors duration-300">Doações</a></li>
          <li><a href="#" className="hover:underline transition-colors duration-300">Assistência social</a></li>
          <li><a href="#" className="hover:underline transition-colors duration-300">Entre outros</a></li>
        </ul>
      </div>

    
      <div className="w-full md:w-1/4">
        <h2 className="text-lg font-semibold mb-4">CONTACTOS </h2>
        <ul className="text-sm space-y-2">
          <li><a href="mailto:geral@thokoza.co.mz" className="hover:underline transition-colors duration-300">geral@NWANA.co.mz</a></li>
          <li><a href="tel:+25886666660" className="hover:underline transition-colors duration-300">+258 84 294 4601</a></li>
          <li><a href="#" className="hover:underline transition-colors duration-300">Moçambique</a></li>
        </ul>
    

        <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-green-200 transition-colors duration-300">
                <FacebookLogo size={24} weight="fill" />
              </a>
              <a href="#" className="text-white hover:text-green-200 transition-colors duration-300">
                <InstagramLogo size={24} weight="fill" />
              </a>
              <a href="#" className="text-white hover:text-green-200 transition-colors duration-300">
                <LinkedinLogo size={24} weight="fill" />
              </a>
              <a href="#" className="text-white hover:text-green-200 transition-colors duration-300">
                <YoutubeLogo size={24} weight="fill" />
              </a>
            </div>
      </div>

    </div>
  </div>
</footer>
  

 </>

)
};
