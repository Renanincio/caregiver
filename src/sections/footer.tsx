export const Footer = () => {
  const images = [
    {
      id: 1,
      url: "./facial.jpg",
    },
    {
      id: 2,
      url: "./blog2.jpg",
    },
    {
      id: 3,
      url: "./massage.jpg",
    },
    {
      id: 4,
      url: "./sauna.jpeg",
    },
    {
      id: 5,
      url: "./blog1.jpg",
    },
  ];
  return (
    <>
      <section className="min-h-[100vh] bg-header flex flex-col justify-between">
        <div>
          <div className=" max-w-[1280px] m-auto p-8">
            <ul className="flex justify-center items-center gap-4">
              {images.map((image) => (
                <li key={image.id}>
                  <img
                    src={image.url}
                    alt={image.url}
                    className="h-[125px] w-[125px] rounded-btn mt-[-80px]"
                  />
                </li>
              ))}
            </ul>

            <div className="flex text-center justify-center mt-[200px] gap-16">
              <p>
                Phone:
                <br />
                123-456-7890
              </p>
              <h2 className="text-[42px] uppercase font-medium leading-10">
                The
                <br /> caregiver
              </h2>
              <p>
                555 Hope Street,
                <br />
                Newport, RI
              </p>
            </div>
            <div className="h-[1px] w-[800px] bg-greenPrimary mb-8 mt-[70px] mx-auto " />
            <ul className="uppercase flex m-auto justify-center items-center gap-6">
              <li>about</li>
              <li>services</li>
              <li>blog</li>
              <li>contact</li>
              <li>careers</li>
            </ul>
          </div>
        </div>
        <footer className="bg-services min-h-[70px] ">
          <div className="max-w-[1280px] h-[70px] mx-auto flex items-center justify-between p-4">
            <p>© 2022 YOUR BRAND</p>
            <p>SITE CREDIT POLICIES</p>
          </div>
        </footer>
      </section>
    </>
  );
};
