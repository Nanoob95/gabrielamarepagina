import Image from "next/image";
import FotoGabriela from "@/assets/img/gabriela-mare.webp";

export default function ContactForm() {
  return (
    <div className="overflow-x-auto min-h-screen items-center flex justify-center ">
      <div className="border rounded-lg p-5 shadow-lg w-full md:w-[70%] h-auto flex flex-col md:flex-row border-blue-800">
        <div className="md:w-1/2 flex flex-col items-center md:items-start p-1">
          <div className="text-center">
            <Image src={FotoGabriela} className="border w-48 h-48 rounded-full mx-auto mb-2" />
          </div>
          <div className="text-center">
            <span className="text-3xl text-blue-800 font-medium tracking-normal mb-2">
              Lucia Gabriela Mare
            </span>
          </div>
          <div className="text-left mt-2 md:mt-4">
            <p className="text-left lg:justify-center tracking-wide leading-relaxed font-light w-[95%] mx-auto md:mx-0 md:text-lg">
              Nacida en Esquel, Chubut. <br /> Me formé como Fonoaudióloga en
              Capital Federal y decidí volver a la Patagonia. <br/> Actualmente me
              encuentro trabajando con personas con trastornos auditivos y del
              lenguaje. <br/> Además de mi profesión, disfruto de la naturaleza, los viajes y
              compartir con amigos y familia.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 h-full flex flex-col justify-between gap-6 p-1">
          <span className="text-2xl text-blue-800 text-center mb-2 md:text-left">Consultas</span>
          <div className="flex flex-col gap-3">
            <label className="flex flex-col">
              <span>Nombre y Apellido</span>
              <input type="text" className="border rounded-lg py-1 px-3" />
            </label>
            <label className="flex flex-col">
              <span>Teléfono</span>
              <input type="text" className="border rounded-lg py-1 px-3" />
            </label>
            <label className="flex flex-col">
              <span>Correo Electrónico</span>
              <input type="text" className="border rounded-lg py-1 px-3" />
            </label>
            <label className="flex flex-col">
              <span>Mensaje</span>
              <textarea
                className="resize-none border rounded-lg py-1 px-3"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </label>
            <button className="bg-blue-800 text-white w-full md:w-[200px] py-2 rounded-lg hover:bg-blue-700 mx-auto">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}