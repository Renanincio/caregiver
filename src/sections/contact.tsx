export const Contact = () => {
  return (
    <>
      <section className="min-h-screen bg-contact flex items-center">
        <div className=" max-w-[1280px] text-center flex flex-col m-auto">
          <h2 className="text-white text-[54px] leading-10 font-medium">
            We'd like to treat you to <br /> something special.
          </h2>
          <p className="text-white text-[18px] my-8">
            Sign up for our newsletter to get 10% off your next service with us!
          </p>
          <form className="flex flex-row gap-4">
            <input
              type="text"
              placeholder="first name"
              className="p-2 capitalize border-solid border-[1px] border-black"
            />
            <input
              type="email"
              placeholder="email"
              className="p-2 capitalize border-solid border-[1px] border-black"
            />
            <button
              type="submit"
              className="px-4 py-1 uppercase bg-greenPrimary text-[14px] text-white"
            >
              join the list
            </button>
          </form>
          <p className="text-[16px] text-white font-semibold mt-8">
            We do not share your email and you can unsubscribe at any time.
          </p>
        </div>
      </section>
    </>
  );
};
