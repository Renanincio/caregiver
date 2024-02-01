
export const Minisales = () => {
  return (
    <>
    <section id="minisales" className="min-h-screen p-8 bg-about flex items-center">
        <div className="flex justify-evenly w-full gap-4 max-w-[1280px] m-auto items-center">
            <img src="./minisales.jpg" alt="minisales" className="w-[450px] h-[450px] rounded-btn" />
            <div className="flex-col text-start max-w-[400px]">
                <p className="italic font-semibold text-[20px]">About Us</p>
                <h2 className="text-[48px] font-medium leading-10 my-6">Find healing from <br /> within.</h2>
                <p className=" font-medium text-[18px]">Founded in 2022, The Caregiver is a top rated Ayurvedic healing studio. All services are designed to inspire healing for one's mind, body, & spirit.</p>
                <button className="px-[48px] py-[10px] mt-8 font-bold italic capitalize border-[1px] bg-greenSecondary border-greenSecondary hover:bg-transparent transition-all delay-[.3] text-header hover:text-greenPrimary rounded-btn">Read More</button>

            </div>
        </div>

    </section>
    </>
  )
}
