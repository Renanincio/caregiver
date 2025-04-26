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
            Quem sou eu?
          </motion.h2>
          <motion.article
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="mb-12 max-w-[600px] w-full p-4 font-medium text-[18px] leading-relaxed"
          >
            Sou Filipe Alexandre, psicólogo clínico, pós-graduando em
            Neuropsicologia e em formação pela INPBE. Trabalho com as abordagens
            da Terapia Cognitivo-Comportamental (TCC), Terapia de Aceitação e
            Compromisso (ACT) e Terapia Dialética Comportamental (DBT).
          </motion.article>
          <motion.article
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="mb-12  max-w-[600px] w-full p-4 font-medium text-[18px] leading-relaxed"
          >
            Mas mais do que títulos, o que me move é algo muito simples e
            profundo: ajudar você a se relacionar melhor consigo mesmo. Meu
            objetivo é que, ao longo do processo terapêutico, você desenvolva um
            repertório interno que permita se tornar protagonista da sua própria
            história — com mais consciência, autonomia e acolhimento.
          </motion.article>
        </main>
      </section>
    </>
  );
};
