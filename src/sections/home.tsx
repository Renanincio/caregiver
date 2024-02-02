export const Home = () => {
  return (
    <section id="home" className="bg-services min-h-screen">
      <div className="max-w-[1280px] mx-auto flex h-screen justify-evenly items-center">
        <div className="flex flex-col">
          <h1 className="font-semibold capitalize text-[48px] leading-10 mb-8 mt-16">
            Filipe Alexandre
            <br /> psicólogo formado pela Unisuam
          </h1>
          <p className="w-[400px] italic capitalize leading-relaxed">
            fundador da página no Instagram papo_psi1. Aonde é divulgados um
            pouco da psicologia de maneira mais fácil.
          </p>
          <button className=" py-[10px] w-[230px] mt-16 font-bold italic capitalize border-[1px] bg-greenSecondary border-greenSecondary hover:bg-transparent transition-all delay-[.3] text-header hover:text-greenPrimary rounded-btn">Saiba mais</button>
        </div>
        <img
          src="./Filipe1.jpg"
          alt="foto de um psicólogo"
          className="w-[475px] h-full rounded-btn"
        />
      </div>
    </section>
  );
};
