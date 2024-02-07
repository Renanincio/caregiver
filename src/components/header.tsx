import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";

export const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="h-[70px] bg-header flex items-center">
      <nav
        className={
          menu
            ? "w-300px p-8 h-screen m-auto flex fixed top-0 left-0 bg-header transition-all duration-[.8s] z-10"
            : "w-300px p-8 h-screen m-auto hidden max-[900px]:flex fixed top-0 left-[-100%] bg-header transition-all duration-[.8s] z-10"
        }
      >
        <ul className="flex flex-col items-center italic gap-12 font-extrabold  transition-all delay-[.7] ease">
          <li className="">
            <a onClick={() => setMenu(false)} href="#">
              <h1 className="text-[48px] text-center leading-[.7] capitalize italic font-semibold">
                Insight
              </h1>
            </a>
          </li>
          <li className="">
            <a
              onClick={() => setMenu(false)}
              href="#home"
              className="transition-all delay-[.3] hover:text-greenSecondary"
            >
              Inicío
            </a>
          </li>
          <li className="">
            <a
              onClick={() => setMenu(false)}
              href="#about"
              className="transition-all delay-[.3] hover:text-greenSecondary"
            >
              Quem somos
            </a>
          </li>

          <li className="">
            <a
              href="#services"
              className="transition-all delay-[.3] hover:text-greenSecondary"
              onClick={() => setMenu(false)}
            >
              Serviços
            </a>
          </li>
          <li className="">
            <a
              onClick={() => setMenu(false)}
              href="#contact"
              className="transition-all delay-[.3] hover:text-greenSecondary"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>

      <nav className="max-w-[1280px] w-full max-h-[70px] pr-8 flex justify-center m-auto items-center">
        <ul className="flex items-center italic gap-12 font-extrabold max-[900px]:hidden transition-all delay-[.7] ease">
          <li className="">
            <a
              href="#home"
              className="transition-all delay-[.3] hover:text-greenSecondary"
            >
              Inicío
            </a>
          </li>
          <li className="">
            <a
              href="#about"
              className="transition-all delay-[.3] hover:text-greenSecondary"
            >
              Quem somos
            </a>
          </li>
          <li className="">
            <a href="#">
              <h1 className="text-[48px] text-center leading-[.7] capitalize italic font-semibold">
                Insight
              </h1>
            </a>
          </li>
          <li className="">
            <a
              href="#services"
              className="transition-all delay-[.3] hover:text-greenSecondary"
            >
              Serviços
            </a>
          </li>
          <li className="">
            <a href="#contact">
              <button className="bg-greenSecondary px-[22px] py-[3px] rounded-btn text-header hover:bg-transparent transition-all delay-[.3] hover:text-greenSecondary border-greenSecondary border-[1px] font-bold">
                Contato
              </button>
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <button
          onClick={() => setMenu(!menu)}
          className="hidden max-[900px]:flex mr-8"
        >
          <CgMenuRight />
        </button>
      </div>
    </div>
  );
};
