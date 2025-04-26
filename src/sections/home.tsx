import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <section id="home" className="bg-services min-h-screen flex">
      <div className="max-w-[1280px] mx-auto flex min-h-screen h-full justify-evenly items-center w-full max-[900px]:flex-wrap max-[900px]:pb-4">
        <div className="flex flex-col max-w-[700px] pl-4 ">
          <motion.h1
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="font-semibold capitalize text-[48px] leading-[1] mb-8 mt-16"
          >
            Filipe Alexandre
            <br />
            psicólogo pós-graduando em neuropsicologia
          </motion.h1>
          <motion.article
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="max-w-[400px] italic capitalize leading-relaxed mb-8"
          >
            Criador do{" "}
            <a
              href="https://www.tiktok.com/@psicologia_na_praticaa?_t=ZM-8vrLwiAknNn&_r=1"
              target="__blank"
              className="text-greenSecondary"
            >
              @psicologia na prática
            </a>{" "}
            divulgando psicologia de forma simples e acessível. Perfil
            profissional no Instagram{" "}
            <a
              href="https://www.instagram.com/filipe_alexandree/"
              target="__blank"
              className="text-greenSecondary"
            >
              @filipe_alexandree.
            </a>
          </motion.article>
          <a href="#about" className="max-[900px]:mx-auto">
            <button className="py-[10px] w-[230px] font-bold italic capitalize border-[1px] bg-greenSecondary border-greenSecondary hover:bg-transparent transition-all delay-[.3] text-header hover:text-greenPrimary rounded-btn max-[900px]:mb-4 ">
              Saiba mais
            </button>
          </a>
        </div>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          speed={900}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={false}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-full max-w-[475px] max-[900px]:w-full "
        >
          <SwiperSlide className="h-full">
            <img
              src="./Filipe1.jpg"
              alt="foto de um psicólogo"
              className="w-[475px] h-screen rounded-btn max-[900px]:w-[425px] max-[900px]:h-[550px] max-[900px]:mx-auto max-[550px]:max-w-[550px] max-[550px]:w-full max-[550px]:px-2"
            />
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <img
              src="./filipe2.jpg"
              alt="foto de um psicólogo"
              className="w-[475px] h-screen rounded-btn max-[900px]:w-[425px] max-[900px]:h-[550px] max-[900px]:mx-auto max-[550px]:max-w-[550px] max-[550px]:w-full max-[550px]:px-2"
            />
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <img
              src="./Filipe3.jpg"
              alt="foto de um psicólogo"
              className="w-[475px] h-screen rounded-btn max-[900px]:w-[425px] max-[900px]:h-[550px] max-[900px]:mx-auto max-[550px]:max-w-[550px] max-[550px]:w-full max-[550px]:px-2"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
