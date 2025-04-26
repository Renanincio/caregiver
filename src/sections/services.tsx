import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

export const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen bg-services flex flex-col justify-between"
    >
      <div className="max-w-[1280px] w-full m-auto p-8 flex flex-col text-center">
        <h4 className="italic font-medium text-[48px]">Aqui nós ajudamos</h4>
        <div className="h-[1px] w-[300px] bg-greenPrimary mb-8 mt-2 mx-auto" />

        <ul className="flex  justify-between items-start">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={false}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <li className="flex flex-col justify-center text-center items-center">
                <motion.h2
                  whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="text-[42px] uppercase font-medium mb-8 mt-16"
                >
                  Terapia Individual
                </motion.h2>
                <img
                  src="/terapiaindi.jpeg"
                  className="w-[475px] h-[325px] m-auto rounded-e-btn"
                />

                <motion.article
                  whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="text-[16px] font-normal max-w-[550px] w-full max-[900px]:px-2 mt-8"
                >
                  Como é o meu trabalho na terapia? Atuo com terapia individual,
                  e meu trabalho vai além da escuta ativa. A escuta é
                  importante, claro — mas comigo, você encontrará um espaço onde
                  suas questões são acolhidas e trabalhadas com seriedade,
                  sensibilidade e base científica. Cada intervenção, cada
                  reflexão, é construída considerando dois pilares: o que a
                  ciência nos mostra como eficaz e o que faz sentido dentro da
                  sua história, da sua realidade e dos seus valores. A terapia
                  não é sobre dizer o que fazer, mas sobre caminhar ao seu lado,
                  te ajudando a enxergar possibilidades e escolhas mais
                  conscientes. Meu papel é guiar você nesse processo. Te ajudar
                  a acessar recursos internos, compreender padrões, fortalecer
                  sua autonomia e, principalmente, te apoiar para que você se
                  torne protagonista da sua própria história.
                </motion.article>
              </li>
            </SwiperSlide>

            <SwiperSlide>
              <li className="flex flex-col justify-center text-center items-center">
                <motion.h2
                  whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="text-[42px] uppercase font-medium mb-8 mt-16"
                >
                  Diagnóstico
                </motion.h2>
                <img
                  src="/diagnóstico.jpeg"
                  className="w-[475px] h-[325px] m-auto rounded-e-btn"
                />

                <motion.article
                  whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="text-[16px] font-normal max-w-[550px] w-full max-[900px]:px-2 mt-8"
                >
                  Como é o meu trabalho na avaliação neuropsicológica? Muitas
                  pessoas procuram uma avaliação em busca de respostas. Querem
                  entender melhor por que certas dificuldades acontecem, como
                  funcionam seus pensamentos, sua memória, sua atenção — e,
                  principalmente, o que podem fazer a partir disso. Meu objetivo
                  com a avaliação neuropsicológica é justamente esse: ajudar
                  você a se enxergar com mais clareza e profundidade. Trabalho
                  com os testes mais atualizados e cientificamente validados,
                  escolhidos conforme as necessidades de cada caso, sempre com
                  um olhar individualizado e humano. Mais do que entregar um
                  laudo, meu foco é proporcionar um processo de descoberta.
                  Compreender como sua mente funciona é o ponto de partida para
                  escolhas mais conscientes, maior clareza sobre seus desafios e
                  a construção de caminhos que realmente estejam alinhados com
                  quem você é.
                </motion.article>
              </li>
            </SwiperSlide>
          </Swiper>
        </ul>

        <a href="#contact">
          <button className="italic w-[225px] py-[6px] text-[20px] mx-auto rounded-btn my-14 border-[1px] border-greenSecondary font-semibold hover:bg-greenSecondary transition-all delay-[.3] hover:text-about">
            Entre em contato
          </button>
        </a>
      </div>
    </section>
  );
};
