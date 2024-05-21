import * as RadioGroup from "@radix-ui/react-radio-group";

export const Contact = () => {
  
  return (
    <>
      <section id="contact" className="min-h-screen bg-contact flex items-center">
        <div className=" max-w-[1280px] text-center flex flex-col m-auto max-[900px]:px-6">
          <h2 className="text-white text-[54px] leading-10 font-medium">
            Ficou com dúvidas?
          </h2>
          <p className="text-white text-[18px] my-8">
            Pegue um café e entre em contato conosco!
          </p>
          <form action="https://formsubmit.co/clinicapsicologicainsigth@gmail.com" method="POST" className="flex flex-col gap-4 text-start max-[900px]:px-8">
            <input
              type="text"
              placeholder="Nome"
              name="nome"
              className="p-2 capitalize border-solid border-[1px] border-greenPrimary bg-white outline-none"
            />
            <input
              type="email"
              placeholder="email"
             name="email"
              className="p-2 capitalize border-solid border-[1px] border-greenPrimary bg-white outline-none"
            />
            <input type="hidden" name="_next" value="https://caregiver-nu.vercel.app/"></input>
            <input type="hidden" name="_captcha" value="false"></input>
            <textarea
              className="p-2 capitalize border-solid border-[1px] border-greenPrimary bg-white outline-none"
              name="Mensagem"
              rows={1}
              placeholder="Como podemos ajudar?"
       
            />
            <RadioGroup.Root
              className="RadioGroupRoot flex flex-col gap-4 text-start"
              defaultValue="default"
              name="Tipo de atendimento:"
              aria-label="View density"
            >
              <legend>Tipo de atendimento:</legend>
              <div className="flex items-center gap-2">
                <RadioGroup.Item
                  className="RadioGroupItem bg-white w-[15px] h-[15px] rounded-[100%] hover:bg-greenPrimary"
                  value="Presencial"
                  id="r2"
             
                >
                  <RadioGroup.Indicator className="RadioGroupIndicator flex items-center justify-center w-full h-full relative after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-greenPrimary" />
                </RadioGroup.Item>
                <label htmlFor="r2">Presencial</label>
                <br />
              </div>
              <div className="flex items-center gap-2">
                <RadioGroup.Item
                  className="RadioGroupItem bg-white w-[15px] h-[15px] rounded-[100%] hover:bg-greenPrimary"
                  value="Online"
                  id="r3"
             
                >
                  <RadioGroup.Indicator className="RadioGroupIndicator flex items-center justify-center w-full h-full relative after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-greenPrimary" />
                </RadioGroup.Item>
                <label htmlFor="r3">Online</label>
                <br />
              </div>
              <button
                type="submit"
                className="px-4 py-1 uppercase bg-greenPrimary text-[14px] text-white"
              >
                Enviar
              </button>
            </RadioGroup.Root>
          </form>
        </div>
      </section>
    </>
  );
};
