export const Footer = () => {
  return (
    <>
      <section className="min-h-[100vh] bg-header flex flex-col justify-between">
        <div>
          <div className=" max-w-[1280px] m-auto p-8">
            <div className="flex text-center w-full justify-center mt-[200px]">
              <p className="w-[300px]">
                Contato:
                <br />
                +55 21 97029-6191
                <br />
                +55 21 97190-7289
              </p>
              <h2 className="text-[48px] w-[300px] uppercase font-medium leading-10 italic">
                Insight
              </h2>
              <p className="w-[300px]">
                Estrada do Galeão, 2655 - <br />
                Jardim Guanabara,
                <br />
                Rio de Janeiro - RJ, 21931-385
              </p>
            </div>
            <div className="h-[1px] max-w-[800px] w-full bg-greenPrimary mb-8 mt-[70px] mx-auto " />
            <ul className="uppercase flex m-auto justify-center items-center gap-6">
              <a href="#home">
                <li className="transition-all delay-[.3] hover:text-greenSecondary">
                  Início
                </li>
              </a>
              <a href="#about">
                <li className="transition-all delay-[.3] hover:text-greenSecondary">
                  Quem somos
                </li>
              </a>
              <a href="#services">
                <li className="transition-all delay-[.3] hover:text-greenSecondary">
                  Serviços
                </li>
              </a>
              <a href="#contact">
                <li className="transition-all delay-[.3] hover:text-greenSecondary">
                  Contato
                </li>
              </a>
            </ul>
          </div>
        </div>
        <footer className="bg-services min-h-[70px] ">
          <div className="max-w-[1280px] h-[70px] mx-auto flex items-center justify-between p-4">
            <p>© 2022 Insight Programmation</p>
            <p>Site Credit Insight Programmation</p>
          </div>
        </footer>
      </section>
    </>
  );
};
