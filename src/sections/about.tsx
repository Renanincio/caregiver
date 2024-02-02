export const About = () => {
  return (
    <>
      <section
        id="about"
        className="min-h-screen  bg-about "
      >
        <div className="max-w-[1280px] m-auto p-8 flex justify-center items-center flex-col text-center">
        <h2 className="font-medium text-[32px] my-4">
          Quem somos?
        </h2>
        <p className="mb-12 w-[600px]">
        Na Clínica Insight, dedicamo-nos a fornecer um ambiente terapêutico em total conformidade com o código de ética da psicologia. Nossa equipe especializada em terapia cognitivo-comportamental e psicanálise oferece uma ampla gama de recursos para atender às necessidades individuais de nossos pacientes. Conheça quem somos e descubra como podemos auxiliar no seu bem-estar emocional.
        </p>

        <h4 className="italic font-medium text-[20px]">Aqui nós ajudamos</h4>
        <div className="h-[1px] w-[100px] bg-greenPrimary mb-8 mt-2" />
        
          <div className="flex flex-col items-center">
          <h2 className="text-[42px] uppercase font-medium mb-8 mt-16">Terapia Individual</h2>
            <img
              src="/terapiaindi.jpeg"
              className="w-[575px] h-[425px] m-auto rounded-e-btn"
            />
            
            <p className="text-[18px] font-medium w-[800px] mt-8">

            A terapia individual é um contexto terapêutico singular, proporcionando um espaço dedicado à exploração profunda de pensamentos e sentimentos, focado na abordagem de questões específicas que possam influenciar a vida do indivíduo. Nossos profissionais, embasados nas melhores evidências em psicologia, comprometem-se a estabelecer um ambiente terapêutico seguro e confidencial, promovendo a expressão aberta e a análise cuidadosa de experiências íntimas.

Ao longo desse processo, nosso psicólogo especializado emprega abordagens terapêuticas embasadas em evidências, visando compreender de maneira aprofundada os desafios emocionais e oferecer intervenções práticas. A terapia individual, moldada pelas melhores práticas da psicologia, representa uma jornada adaptativa de autoexploração, apoio emocional e desenvolvimento pessoal. Estamos dedicados a guiar o indivíduo rumo ao seu bem-estar emocional e à consecução de metas, ancorados nas evidências científicas mais robustas.
            </p>
          </div>
        
        <button className="italic px-[36px] py-[6px] text-[20px] rounded-btn mt-8 border-[1px] border-greenSecondary font-semibold hover:bg-greenSecondary transition-all delay-[.3] hover:text-about">
          Explorar serviços
        </button>
        </div>
      </section>
    </>
  );
};
