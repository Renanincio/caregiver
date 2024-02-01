export const Blog = () => {
  return (
    <>
      <section id="about" className="min-h-screen  bg-header ">
        <div className="max-w-[1280px] m-auto p-8 flex justify-center items-center flex-col text-center">
          <h2 className="font-medium text-[40px] my-16">
            Popular articles from our blog.
          </h2>

          <ul className="flex flex-row justify-evenly w-full">
            <li className="flex flex-col items-center max-w-[200px]">
              <img
                src="/blog1.jpg"
                className="w-[200px] h-[250px] m-auto rounded-e-btn"
              />
              <h1 className="text-[28px] font-medium mt-4 mb-6 leading-6">
                5 selfcare tips for the new year
              </h1>

              <h4 className="italic font-medium text-[16px]">Read More</h4>
              <div className="h-[1px] w-[50px] bg-greenPrimary mb-8 mt-2" />
            </li>
            <li className="flex flex-col items-center max-w-[200px]">
              <img
                src="/blog2.jpg"
                className="w-[200px] h-[250px] m-auto rounded-e-btn"
              />
              <h1 className="text-[28px] font-medium mt-4 mb-6 leading-6">
              How to add more hygge to your day
              </h1>

              <h4 className="italic font-medium text-[16px]">Read More</h4>
              <div className="h-[1px] w-[50px] bg-greenPrimary mb-8 mt-2" />
            </li>
            <li className="flex flex-col items-center max-w-[200px]">
              <img
                src="/blog3.jpg"
                className="w-[200px] h-[250px] m-auto rounded-e-btn"
              />
              <h1 className="text-[28px] font-medium mt-4 mb-6 leading-6">
              Five ways to boost your energy
              </h1>

              <h4 className="italic font-medium text-[16px]">Read More</h4>
              <div className="h-[1px] w-[50px] bg-greenPrimary mb-8 mt-2" />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
