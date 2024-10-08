'use client'
import { useState , useEffect } from 'react';
import Gallery from '@/components/Gallery';
import Header from '@/components/Header';
import CarouselAlto from '@/components/CarouselAlto';
import ContactForm from '@/components/ContactForm';
import WhatsAppButton from '@/components/WhatsApp';

export default function CasaPage() {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); 
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };


  const [showCarousel, setShowCarousel] = useState(false);
  const [maximizable, setMaximizable] = useState(true);

  const handleShowCarousel = (maximizable) => {
    setShowCarousel(true);
    setMaximizable(maximizable);
  };

  const handleCloseCarousel = (e) => {
    if (!maximizable && e.target.classList.contains('fixed')) {
      setShowCarousel(false);
    }
  };

  return (
    <main id="CasaDelAlto" className="overflow-x-auto min-h-screen">
      
      <Header title={"Casa del Alto"} subtitle={"Esquel"} />

      <section className="w-full p-5 mt-10 md:p-10">
        <div className=" md:block w-full h-96 md:h-[75vh]">
          <Gallery />
        </div>
      </section>
      <div>
        <WhatsAppButton/>
      </div>
     
      {showCarousel && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-20 flex items-center justify-center"
          onClick={handleCloseCarousel}
        >
          <div
            className="relative w-full max-w-4xl"
          >
            <CarouselAlto />
          </div>
        </div>
      )}

      <section className="px-4 lg:px-10">
        <div className="mx-auto  max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Alojamiento temporal para 6 huéspedes
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Olvidate de las preocupaciones en este espacio amplio y sereno.{' '}
              <br />
              Alejado del ruido en la ladera de la montaña, a tan solo 2 km
              del centro !
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-lg font-semibold leading-6 text-indigo-600">
                Ofrece
              </h4>
              <div className="h-px flex-auto bg-gray-100"></div>
            </div>
            <ul className="mt-8 grid grid-cols-2 md:grid-cols-2 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              <li className="pointer-events-none flex items-center ">
                <svg
                  className="h-6 w-5 justify-start flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Cocina</span>
              </li>
              <li className="pointer-events-none flex items-center ">
                <svg
                  className="h-6 w-5 justify-start flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Oficina</span>
              </li>
              <li className="pointer-events-none flex items-center ">
                <svg
                  className="h-6 w-5 justify-start flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Microondas</span>
              </li>
              <li className="pointer-events-none flex items-center ">
                <svg
                  className="h-6 w-5 justify-start flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Cafetera</span>
              </li>
              <li className="pointer-events-none flex items-center ">
                <svg
                  className="h-6 w-5 justify-start flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Excelente Calefacción</span>
              </li>
              <li className="pointer-events-none flex items-center ">
                <svg
                  className="h-6 w-5 justify-start flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Parrilla</span>
              </li> 
               <li className="pointer-events-none flex items-center ">
                <svg
                  className="h-6 w-5 justify-start flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Patio</span>
              </li>

              <li className="pointer-events-none flex items-center ">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>WiFi</span>
              </li>
              <li className="flex items-center pointer-events-none">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Smart TV</span>
              </li>
              <li className="flex items-center pointer-events-none">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Estacionamiento</span>
              </li>
              <li className="flex items-center pointer-events-none">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Bañera</span>
              </li>
              <li className="flex items-center pointer-events-none">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Lavarropas</span>
              </li>
              <li className="flex items-center pointer-events-none">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>3 dormitorios</span>
              </li>
              <li className="flex items-center pointer-events-none">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>2 baños</span>
              </li>
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 h-full lg:h-auto">
  <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:items-center lg:py-16 h-full">
    <div className="mx-auto max-w-xs px-8 h-full flex flex-col justify-center">
      <p className="text-base  font-semibold text-gray-600">
        Precio estimado
      </p>
      <p className="mt-6 flex items-baseline justify-center gap-x-2">
        <span className="text-5xl font-bold tracking-tight text-gray-900">
          $95
        </span>
        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
          USD
        </span>
      </p>
      <p className="mt-1 text-xs font-semibold text-gray-600">
        (sujeto a cantidad de personas)
      </p>
      <a
        href="#contacto"
        className="mt-8 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
      >
        Consultar disponibilidad
      </a>
    </div>
  </div>
</div>

          
        </div>
        
      </section>

 
      <section className="w-full p-5 md:p-10">
      <div className="w-full border rounded-3xl p-5 md:p-10">
        <span className="text-2xl md:text-3xl font-medium">Descripción</span>
        <hr className="my-3" />
        <p className="tracking-wide leading-relaxed text-lg md:text-xl font-normal">
          Ubicada en un lugar alto, seguro y tranquilo, con estupenda vista. <br /> 
          Posee un amplio y moderno living comedor, equipado con un smart tv de 50”, mesa y sillas
          para 8. <br />
          La casa cuenta con heladera, microondas, freezer y lavarropas. <br/> 
          Su interior se divide en 3 cuartos con amplios placares, camas con sommier y colchón. 
          {isMobile ? (
            <>
              {showFullDescription ? (
                <>
                  <br />
                  Estos espacios son una habitación matrimonial con baño en suite, y dos habitaciones con dos camas de una plaza con opción a
                  transformarlas en queen size. También cuenta con otro baño. <br /> 
                  Las habitaciones poseen ropa de cama de calidad , ambos baños son completos y cuentan con ammenities(shampoo, crema de enjuague, secador y plancha de pelo). <br /> 
                  Posee un patio privado  cerrado, con una parrilla y elementos de asador. <br /> 
                  Además, por su seguridad cuenta con matafuegos, detector de monóxido de
                  carbono y alarma.                 
                  <button onClick={toggleDescription} className="text-indigo-600 mt-4">
                    Ver menos
                  </button>
                </>
              ) : (
                <>
                  <span><br/></span>
                  <button onClick={toggleDescription} className="text-indigo-600 mt-4">
                    Ver más
                  </button>
                </>
              )}
            </>
          ) : (
            <>
              <br />
              Estos espacios son una habitación matrimonial con baño en suite, y dos habitaciones con dos camas de una plaza con opción a
                  transformarlas en queen size. También, cuenta con otro baño. <br /> 
                  Las habitaciones poseen ropa de cama de calidad , ambos baños son completos y cuentan con ammenities(shampoo, crema de enjuague, secador y plancha de pelo).  <br /> 
                  Posee un patio privado  cerrado, con una parrilla y elementos de asador. <br /> 
                  Además, por su seguridad cuenta con matafuegos, detector de monóxido de
                  carbono y alarma. 
            </>
          )}
        </p>
      </div>
    </section>

      <section className="w-full p-5 md:p-10">
        <div className="w-full border rounded-3xl p-5 md:p-10">
          <span className="text-2xl md:text-3xl font-medium">Ubicación</span>
          <hr className="my-3" />
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2922.0369371802394!2d-71.32964421510285!3d-42.914261967974575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961dac30ebcf0121%3A0x517bda940c125407!2sAvenida%20Alvear%20%26%20Belgrano%2C%20Esquel%2C%20Chubut!5e0!3m2!1ses!2sar!4v1709737940290!5m2!1ses!2sar"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
              className="rounded-lg h-auto md:h-96 lg:h-120"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section id='contacto' className="w-full p-5 md:p-10">
        <ContactForm/>
      </section>    

      <footer className="bg-gray-900 text-gray-300">
  <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
    <div className="flex flex-col items-center">
      <p className="mb-2">© 2024 Gabriela Mare</p>     
      <p className="mb-2">Esquel, Chubut.</p>
    </div>
  </div>
</footer>
    </main>
  );
}

{/* 
      <section className="w-full h-[auto] p-10">
        <div className="w-full h-full border rounded-3xl p-10">
          <span className="text-2xl font-medium">Ubicación</span>
          <hr />
          <br />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2922.0369371802394!2d-71.32964421510285!3d-42.914261967974575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961dac30ebcf0121%3A0x517bda940c125407!2sAvenida%20Alvear%20%26%20Belgrano%2C%20Esquel%2C%20Chubut!5e0!3m2!1ses!2sar!4v1709737940290!5m2!1ses!2sar"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            className="rounded-lg"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>    */}






