export const Brands = () => {
  const brands = [
    {
      id: 1,
      url: "./brands1.png",
      alt: "logo brand1",
    },
    {
      id: 2,
      url: "./brands2.png",
      alt: "logo brand2",
    },
    {
      id: 3,
      url: "./brands3.png",
      alt: "logo brand3",
    },
    {
      id: 4,
      url: "./brands4.png",
      alt: "logo brand4",
    },
    {
      id: 5,
      url: "./brands5.png",
      alt: "logo brand5",
    },
  ];

  return (
    <>
      <section className="h-[40vh] bg-[#E2CCC7]">
        <div className="m-auto max-w-[1280px] h-full flex justify-center items-center text-center flex-col">
          <p className="italic text-white text-[18px] font-semibold">
            As Featured In
          </p>
          <ul className="flex w-full justify-between">
            {brands.map((brand) => (
              <li key={brand.id}>
                <img src={brand.url} alt={brand.alt} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
