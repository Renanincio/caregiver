
export const Header = () => {
  return (
    <div className="min-h-[70px] bg-header flex items-center">
      <nav className="max-w-[1280px] m-auto">
        <ul className="flex items-center italic gap-12 font-extrabold ">
          <li className=""><a href="#home" className="transition-all delay-[.3] hover:text-greenSecondary">Inicío</a></li>
          <li className=""><a href="#about" className="transition-all delay-[.3] hover:text-greenSecondary">Quem somos</a></li>
          <li className=""><a href="#"><h1 className="text-[48px] text-center leading-[.7] capitalize italic font-semibold">Insight</h1></a></li>
          <li className=""><a href="#services" className="transition-all delay-[.3] hover:text-greenSecondary">Serviços</a></li>
          <li className=""><a href="#contact"><button className="bg-greenSecondary px-[22px] py-[3px] rounded-btn text-header hover:bg-transparent transition-all delay-[.3] hover:text-greenSecondary border-greenSecondary border-[1px] font-bold">Contato</button></a></li>
        </ul>
      </nav>
    </div>
  )
}
