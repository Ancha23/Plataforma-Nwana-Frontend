import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

export const BottomCardStats = () => {
  return (
    <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-pattern opacity-20"></div>{" "}
      {/* Optional background pattern */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Assine nosso boletim informativo
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-900">
              Fique por dentro das últimas notícias e atualizações. Receba
              conteúdo exclusivo diretamente no seu email.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Endereço de email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Seu email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-lg border-0 bg-white/10 px-4 py-2 text-gray-900 placeholder-gray-900/80 shadow-sm ring-1 ring-inset ring-gray-900/20 focus:ring-2 focus:ring-inset focus:ring-teal-200 sm:text-base sm:leading-6"
              />
              <button
                type="submit"
                className="flex-none rounded-lg bg-gray-900/10 px-4 py-2.5 text-base font-semibold text-gray-900 shadow-sm hover:bg-teal-600 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900/20 transition duration-300 ease-in-out"
              >
                Assinar
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-lg bg-white/10 p-3 shadow-sm ring-1 ring-white/20">
                <CalendarDaysIcon
                  aria-hidden="true"
                  className="h-7 w-7 text-verde-100"
                />
              </div>
              <dt className="mt-4 text-lg font-semibold text-gray-900">
                Artigos semanais
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-800">
                Receba artigos interessantes e relevantes diretamente em seu
                email. Semanalmente.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-lg bg-white/10 p-3 shadow-sm ring-1 ring-white/20">
                <HandRaisedIcon
                  aria-hidden="true"
                  className="h-7 w-7 text-verde-100"
                />
              </div>
              <dt className="mt-4 text-lg font-semibold text-gray-900">
                Sem spam
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-800">
                Garantimos que seu email será usado apenas para este propósito.
                Sem spam, apenas conteúdo de qualidade.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};
