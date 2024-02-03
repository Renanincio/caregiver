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
            <div className="h-[1px] w-[800px] bg-greenPrimary mb-8 mt-[70px] mx-auto " />
            <ul className="uppercase flex m-auto justify-center items-center gap-6">
              <li>Início</li>
              <li>Quem somos</li>
              <li>Serviços</li>
              <li>Contato</li>
            </ul>
          </div>
        </div>
        <footer className="bg-services min-h-[70px] ">
          <div className="max-w-[1280px] h-[70px] mx-auto flex items-center justify-between p-4">
            <p>© 2022 YOUR BRAND</p>
            <p>SITE CREDIT POLICIES</p>
          </div>
        </footer>
      </section>
    </>
  );
};
