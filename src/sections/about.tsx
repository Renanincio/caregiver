import { motion } from "framer-motion";

export const About = () => {
  return (
    <>
      <section id="about" className="min-h-screen  bg-about max-[900px]:pt-8">
        <main className="max-w-[1280px] m-auto h-screen p-8 flex justify-center items-center flex-col text-center">
          <motion.h2
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="font-medium text-[48px] my-4"
          >
            Quem somos?
          </motion.h2>
          <motion.article
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="mb-12 max-w-[600px] w-full p-4 font-medium text-[18px] leading-relaxed"
          >
            Na Clínica Insight, dedicamo-nos a fornecer um ambiente terapêutico
            em total conformidade com o código de ética da psicologia. Nossa
            equipe especializada em terapia cognitivo-comportamental e
            psicanálise oferece uma ampla gama de recursos para atender às
            necessidades individuais de nossos pacientes. Conheça quem somos e
            descubra como podemos auxiliar no seu bem-estar emocional.
          </motion.article>
          <motion.article
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="mb-12  max-w-[600px] w-full p-4 font-medium text-[18px] leading-relaxed"
          >
            Utilizamos como linha de atendimento a Psicologia Baseada em
            Evidências para pacientes com transtornos mentais e àqueles que
            buscam melhor qualidade de vida e performance através de uma boa
            saúde mental.
          </motion.article>
        </main>
      </section>
    </>
  );
};
