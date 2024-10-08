
'use client'
import { useState, useRef, useEffect } from 'react';
import GalleryConesa from "@/components/GalleryConesa";
import Carousel from "@/components/Carousel"
import HeaderConesa from "@/components/HeaderConesa";
import ContactForm from '@/components/ContactForm';
import videoConesa from "@/assets/VideoConesa.mp4"
import WhatsAppButton from '@/components/WhatsApp';
export default function CasaPage() {
  const [showCarousel, setShowCarousel] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const videoRef = useRef(videoConesa);
  const [isMobile, setIsMobile] = useState(false);
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleShowCarousel = () => {
    setShowCarousel(true);
  };

  const handleCloseCarousel = () => {
    setShowCarousel(false);
  };

  const handleCarouselClick = (e) => {
    e.stopPropagation();
  };

  const handleShowVideoModal = () => {
    setShowVideoModal(true);
  };

  const handleCloseVideoModal = () => {
    setShowVideoModal(false);
  };

  return (
    <main id="CasaDelAlto" className="overflow-x-auto min-w-full min-h-screen">
      <HeaderConesa title={"Casa Conesa"} subtitle={"Esquel"} />

      <section className="w-full p-6 md:p-10">
        <div className="md:block mb-10 w-full h-96 md:h-[75vh]">
          <GalleryConesa />
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
            onClick={handleCarouselClick}
          >
            <Carousel />
          </div>
        </div>
      )}

      {showVideoModal && (
        <div
          className={`fixed inset-0 z-20 flex items-center justify-center ${
            isMobile ? 'p-5' : ''
          }`}
          onClick={handleCloseVideoModal}
        >
          <div className={`relative ${isMobile ? 'w-5/6' : 'w-full max-w-4xl'} max-w-4xl ${isMobile ? 'max-h-[50vh]' : ''}`}>
            <video ref={videoRef} controls className="w-full h-auto">
              <source src={videoConesa} type="video/mp4" />
            </video>
          </div>
        </div>
      )}

      <section className="px-4 lg:px-10 lg:mt-0 mt-40">
        <div className="mx-auto  max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Alojamiento temporal para 7 huéspedes
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
            <ul class="mt-8 grid grid-cols-2 md:grid-cols-2 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              <li class="pointer-events-none flex items-center ">
                <svg
                  class="h-6 w-5 justify-start flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Cocina</span>
              </li>
              <li class="pointer-events-none flex items-center ">
                <svg
                  class="h-6 w-5 justify-start flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Microondas</span>
              </li>
              <li class="pointer-events-none flex items-center ">
                <svg
                  class="h-6 w-5 justify-start flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Lavavajillas</span>
              </li>
              <li class="pointer-events-none flex items-center ">
                <svg
                  class="h-6 w-5 justify-start flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Muebles de Jardin

                </span>
              </li>
              <li class="pointer-events-none flex items-center ">
                <svg
                  class="h-6 w-5 justify-start flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Nespresso</span>
              </li>
              <li class="pointer-events-none flex items-center ">
                <svg
                  class="h-6 w-5 justify-start flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Jacuzzi</span>
              </li>
              <li class="pointer-events-none flex items-center ">
                <svg
                  class="h-6 w-5 justify-start flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Patio</span>
              </li>
              <li class="pointer-events-none flex items-center ">
                <svg
                  class="h-6 w-5 justify-start flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Playroom</span>
              </li>
              <li class="pointer-events-none flex items-center ">
                <svg
                  class="h-6 w-5 justify-start flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Parrilla</span>
              </li>
              <li class="pointer-events-none flex items-center ">
                <svg
                  class="h-6 w-5 flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Wifi</span>
              </li>
              <li class="pointer-events-none flex items-center ">
                <svg
                  class="h-6 w-5 flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>TV</span>
              </li>
              <li class="pointer-events-none flex items-center ">
                <svg
                  class="h-6 w-5 flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Estacionamiento</span>
              </li>
              <li class="pointer-events-none flex items-center ">
                <svg
                  class="h-6 w-5 flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Excelente Calefacción</span>
              </li>
              <li class="pointer-events-none flex items-center ">
                <svg
                  class="h-6 w-5 flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Lavarropas</span>
              </li>
              <li class="pointer-events-none flex items-center ">
                <svg
                  class="h-6 w-5 flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>4 dormitorios</span>
              </li>
              <li class="pointer-events-none flex items-center ">
                <svg
                  class="h-6 w-5 flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>2 baños</span>
              </li>
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 h-full lg:h-auto">
  <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:items-center lg:py-16 h-full">
    <div className="mx-auto max-w-xs px-8 h-full flex flex-col justify-center">
      <p className="text-base font-semibold text-gray-600">
        Precio estimado
      </p>
      <p className="mt-6 flex items-baseline justify-center gap-x-2">
        <span className="text-5xl font-bold tracking-tight text-gray-900">
          $105
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
        Relájate en este espacio cálido, amplio, tranquilo y elegante. <br />Ubicada a 2.6 km del centro, 300m desde la avenida de ingreso y a 700m de la ruta de acceso a La Hoya.
          {isMobile ? (
            <>
              {showFullDescription ? (
                <>
                  <br />
                  Ambientación minimalista con ambientes super luminosos y  un amplio patio trasero, parrilla, arboles frutales y estacionamiento independiente. <br />
          Camas con sommier, amplios placards, ammenities (shampoo, crema de enjuague, secador y plancha de pelo,) ropa de baño y cama incluida. <br /> 
          Además, por su seguridad cuenta con matafuegos, detector de monóxido de
            carbono y alarma. <br />
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
            <br/>
              Ambientación minimalista con ambientes super luminosos y  un amplio patio trasero, parrilla, arboles frutales y estacionamiento independiente. <br />
          Camas con sommier, amplios placards, ammenities (shampoo, crema de enjuague, secador y plancha de pelo,) ropa de baño y cama incluida. <br /> 
          Además, por su seguridad cuenta con matafuegos, detector de monóxido de
            carbono y alarma. <br />
            </>
          )}
        </p>
      </div>
    </section>


     

      <section className="w-full p-5 md:p-10">
        <div class="w-full border rounded-3xl p-5 md:p-10">
          <span class="text-2xl md:text-3xl font-medium">Ubicación</span>
          <hr class="my-3" />
          <div class="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11689.288502370367!2d-71.3013926!3d-42.9082469!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961dad51351b3455%3A0x8de6608c80a4d859!2sCasa%20Conesa!5e0!3m2!1ses!2sar!4v1714116369213!5m2!1ses!2sar"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
              class="rounded-lg h-auto md:h-96 lg:h-120"
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





