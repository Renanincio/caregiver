export const Home = () => {
  return (
    <section id="home" className="bg-[url('./home.jpg')] bg-no-repeat bg-cover bg-right min-h-screen flex items-center justify-center flex-col">
      <p className="italic">Ayurvedic Massage Parlour</p>
      <h1 className="text-[48px] my-8 font">Release & Renew</h1>
      <button className="px-[48px] py-[10px] font-bold border-[1px] bg-greenSecondary border-greenSecondary hover:bg-transparent transition-all delay-[.3] text-header hover:text-greenPrimary rounded-btn">Book Now</button>
    </section>
  );
};
