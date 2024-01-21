
export const Header = () => {
  return (
    <div className="min-h-[70px] bg-header flex items-center">
      <nav className="max-w-[1280px] m-auto">
        <ul className="flex items-center italic gap-12 font-extrabold ml-16">
          <li className=""><a href="home" className="transition-all delay-[.3] hover:text-greenSecondary">Home</a></li>
          <li className=""><a href="about" className="transition-all delay-[.3] hover:text-greenSecondary">About</a></li>
          <li className=""><a href="services" className="transition-all delay-[.3] hover:text-greenSecondary">Services</a></li>
          <li className=""><h1 className="text-[32px] text-center leading-[.7] uppercase not-italic font-medium">The<br /> Caregiver</h1></li>
          <li className=""><a href="minisale" className="transition-all delay-[.3] hover:text-greenSecondary">Mini Sales</a></li>
          <li className=""><a href="blog" className="transition-all delay-[.3] hover:text-greenSecondary">Blog</a></li>
          <li className=""><button className="bg-greenSecondary px-[22px] py-[3px] rounded-btn text-header hover:bg-transparent transition-all delay-[.3] hover:text-greenSecondary border-greenSecondary border-[1px] font-bold">Book Now</button></li>
        </ul>
      </nav>
    </div>
  )
}
