export const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen bg-services flex flex-col justify-between"
    >
      <div className="max-w-[1280px] w-full m-auto p-8 flex flex-col text-center">
        <p className="mb-4">
          "A glowing testimonial goes right here. Carrot cake sweet<br /> roll
          shortbread dragée carrot cake muffin biscuit.<br /> Shortbread dragée carrot
          cake muffin biscuit."
        </p>
        <span className="mb-12">Emma Watson</span>
        <div className="bg-header w-full min-h-[400px] mb-[-200px] z-10 rounded-btn">
        <h4 className="italic font-medium text-[32px] mt-12">Your renewal awaits</h4>
        <div className="h-[1px] w-[100px] bg-greenSecondary mb-8 mt-2 m-auto" />
        <ul className="flex flex-row justify-evenly w-full gap-14 mb-12">
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
            <h1 className="text-[28px] font-medium mt-4 mb-1">
              Infrared Sauna
            </h1>
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
        </div>
      </div>
      <div className="w-full h-[400px] bg-[url('/services.jpg')]" />
    </section>
  );
};
