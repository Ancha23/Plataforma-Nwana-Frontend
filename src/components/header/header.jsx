import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { UserCircle, Flower, HandHeart } from "@phosphor-icons/react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Roupas", href: "/chothes" },
  { name: "Sobre", href: "/about" },
  { name: "Contactos", href: "/contacts" },
  { name: "Administrador", href: "/admin" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Header = () => {
  const [current, setCurrent] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrent(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  return (
    <Disclosure
      as="nav"
      className="bg-white border-b-2 border-b-verde-100 p-2 fixed top-0 left-0 right-0 z-50 h-20"
    >
      <div className="mx-auto max-w-7xl px-2 font-roboto sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <h1 className="flex text-4xl font-roboto font-bold leading-9 tracking-tight text-verde-100 border-2 border-verde-100 p-2">
                <Link to="/">Nwana</Link>
                <Flower size={20} weight="fill" className="text-verde-100" />
              </h1>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.href === current ? "page" : undefined}
                    className={classNames(
                      item.href === current
                        ? "border-b-2 border-b-verde-100 text-preto-100 font-roboto font-bold uppercase"
                        : "text-preto-100 font-roboto font-bold uppercase hover:border-b-verde-200 hover:border-b-2 hover:text-preto-100 transition-colors duration-300",
                      "rounded-lg px-4 py-2.5"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/donate"
              className="flex justify-center items-center font-bold text-2xl leading-6 bg-amarelo-100 px-8 py-2 mr-4 rounded-full border border-verde-100 text-branco-100 hover:bg-verde-100 transition-colors duration-300"
            >
              DOAR
              <HandHeart
                weight="fill"
                className="h-8 w-8 ml-4"
                aria-hidden="true"
              />
            </Link>

            <Menu as="div" className="relative">
              <div>
                <MenuButton className="rounded-full bg-cinza-100 p-2 text-verde-200 hover:text-verde-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-verde-200 transition-colors duration-300">
                  <UserCircle className="h-7 w-7" aria-hidden="true" />
                </MenuButton>
              </div>
              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem>
                  <a
                    href="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Login
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="/register"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Cadastro
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.href === current ? "page" : undefined}
              className={classNames(
                item.href === current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};
