export const About = () => {
  return (
    <>
      <section
        id="about"
        className="min-h-screen  bg-about "
      >
        <div className="max-w-[1280px] m-auto p-8 flex justify-center items-center flex-col text-center">
        <h2 className="font-medium text-[32px] my-4">
          Once upon a time, massages were<br /> thought to be a luxury.
        </h2>
        <p className="mb-12">
          These days, thankfully, things have changed. Here at The Caregiver, we<br />
          believe that healing is both an art and a science. You deserve the
          true<br /> wealth that is wellness.
        </p>

        <h4 className="italic font-medium text-[20px]">We Are Here To Help</h4>
        <div className="h-[1px] w-[100px] bg-greenPrimary mb-8 mt-2" />
        <ul className="flex flex-row justify-evenly w-full">
          <li className="flex flex-col items-center max-w-[200px]">
            <img
              src="/massage.jpg"
              className="w-[150px] h-[150px] m-auto rounded-e-btn"
            />
            <h1 className="text-[28px] font-medium mt-4 mb-1">Body Work</h1>
            <p>
              Use this section to talk a little bit about your services and go
              into one of the primary benefits of choosing your business.{" "}
            </p>
          </li>
          <li className="flex flex-col items-center max-w-[200px]">
            <img
              src="/sauna.jpeg"
              className="w-[150px] h-[150px] m-auto rounded-e-btn"
            />
            <h1 className="text-[28px] font-medium mt-4 mb-1">Infrared Sauna</h1>
            <p>
              Use this section to talk a little bit about your services and go
              into one of the primary benefits of choosing your business.{" "}
            </p>
          </li>
          <li className="flex flex-col items-center max-w-[200px]">
            <img
              src="/facial.jpg"
              className="w-[150px] h-[150px] m-auto rounded-e-btn"
            />
            <h1 className="text-[28px] font-medium mt-4 mb-1">Energy Work</h1>
            <p>
              Use this section to talk a little bit about your services and go
              into one of the primary benefits of choosing your business.{" "}
            </p>
          </li>
        </ul>
        <button className="italic px-[24px] py-[6px] rounded-btn mt-8 border-[1px] border-greenSecondary font-semibold hover:bg-greenSecondary transition-all delay-[.3] hover:text-about">
          Explore Services
        </button>
        </div>
      </section>
    </>
  );
};
