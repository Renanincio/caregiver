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

                <motion.p
                  whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="text-[16px] font-normal w-[550px] mt-8"
                >
                  A terapia individual é um contexto terapêutico singular,
                  proporcionando um espaço dedicado à exploração profunda de
                  pensamentos e sentimentos, focado na abordagem de questões
                  específicas que possam influenciar a vida do indivíduo. Nossos
                  profissionais, embasados nas melhores evidências em
                  psicologia, comprometem-se a estabelecer um ambiente
                  terapêutico seguro e confidencial, promovendo a expressão
                  aberta e a análise cuidadosa de experiências íntimas. Ao longo
                  desse processo, nosso psicólogo especializado emprega
                  abordagens terapêuticas embasadas em evidências, visando
                  compreender de maneira aprofundada os desafios emocionais e
                  oferecer intervenções práticas. A terapia individual, moldada
                  pelas melhores práticas da psicologia, representa uma jornada
                  adaptativa de autoexploração, apoio emocional e
                  desenvolvimento pessoal. Estamos dedicados a guiar o indivíduo
                  rumo ao seu bem-estar emocional e à consecução de metas,
                  ancorados nas evidências científicas mais robustas.
                </motion.p>
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

                <motion.p
                  whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="text-[16px] font-normal w-[550px] mt-8"
                >
                  Em nossa abordagem no Insight, oferecemos testes diagnósticos
                  realizados por profissionais especializados em psicologia.
                  Estes testes são aplicados para detectar e avaliar possíveis
                  transtornos mentais, proporcionando uma compreensão mais
                  profunda de suas emoções e desafios pessoais, como ansiedade,
                  depressão, autismo, transtornos de personalidade, entre
                  outros. Ao escolher nossos serviços de testes diagnósticos,
                  você está dando o primeiro passo em direção a uma jornada de
                  autoconhecimento e bem-estar emocional. Estamos aqui para
                  oferecer suporte e orientação personalizada.
                </motion.p>
              </li>
            </SwiperSlide>
          </Swiper>
        </ul>

        <button className="italic w-[225px] py-[6px] text-[20px] mx-auto rounded-btn my-14 border-[1px] border-greenSecondary font-semibold hover:bg-greenSecondary transition-all delay-[.3] hover:text-about">
          Entre em contato
        </button>
      </div>
    </section>
  );
};
