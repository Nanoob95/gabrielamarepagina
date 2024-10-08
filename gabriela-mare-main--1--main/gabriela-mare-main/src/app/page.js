'use client'
import Image from "next/image";
import FotoCasa1 from "@/assets/img/booking-casa-el-alto.webp";
import FotoCasa2 from "@/assets/img/booking-casa-conesa.webp";
import ImagenPuntuacion from "@/assets/img/puntuacion-airbnb.webp";
import ImagenComentarioVanina from "@/assets/img/comentario-vanina.webp"
import ImagenComentarioVeronica from "@/assets/img/comentario-veronica.webp"
import ImagenComentarioTim from "@/assets/img/comentario-tim.webp";
import Cards from "@/components/Cards";
import Header from "@/components/Header";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsApp";
import Card from "@/components/Card";
import FotoAlto from "@/assets/img/Casa Alto/CasaAlto22_resultado.webp"
import FotoConesaExterior from "@/assets/img/Casa Conesa/conesa9_resultado.webp";
import CardConesa from "@/components/CardConesa";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <main className="min-w-full min-h-screen">
        <div>
          <WhatsAppButton />
        </div>

        <Header title={"Del Alto"} title2={"&"} title3={"Conesa"}  subtitle={"Hogares Patagónicos"} />

        <div className="flex flex-col mt-10 md:flex-row items-center justify-center md:gap-10">
          <div className="flex md:hover:-translate-y-0 transition-all duration-200 justify-center mb-6 md:mb-0">
            <Link href="#cards">
              <Image
                src={FotoCasa1}
                width={200}
                height={200}
                className="rounded-lg cursor-pointer"
              />
            </Link>
          </div>
          <div className="flex justify-center mb-6 md:mb-0">
            <Image
              src={ImagenPuntuacion}
              width={400}
              className="rounded-lg mt-10 mb-10 cursor-pointer"
            />
          </div>
          <div className="flex md:hover:-translate-y-0  transition-all duration-200 justify-center mb-6 md:mb-0">
            <Link href="#conesa">
              <Image
                src={FotoCasa2}
                width={200}
                height={200}
                className="rounded-lg cursor-pointer"
              />
            </Link>
          </div>
        </div>
        <div className="pb-5">
          <section className="bg-white mt-10 md:mt-20">
            <div className="flex flex-col items-center justify-center gap-14 md:gap-10 md:-translate-y-8">
              <p className="text-4xl md:text-5xl text-center px-5 font-light text-blue-800 mb-0 mt-0">
                Espacios cálidos, amplios y tranquilos
              </p>
              <p className="text-lg md:text-2xl  mb-0 text-center font-light text-blue-800">
                Disfruta de la comodidad y la autenticidad de nuestras casas.{" "}
                <br /> Sumérgete en la belleza de la Patagonia.
              </p>
            </div>
          </section>
          <section id="cards" className="p-5 flex justify-around mt-10">
            <div className="md:flex  md:justify-center md:gap-8">
              <Card
                image={FotoAlto.src}
                title="Casa del Alto "
                description={""}
                person="6 personas"
                bed="3 habitaciones"
                bath="2 baños"
                wifi="WiFi"
                kitchen="Cocina"
                tv="TV"
                parking="Estacionamiento"
                
                className="mb-6 md:mb-0"
              />

              <CardConesa
                image={FotoConesaExterior.src}
                title="Casa Conesa "
                description={""}
                person="7 personas"
                bed="4 habitaciones"
                bath="2 baños"
                wifi="WiFi"
                kitchen="Cocina"
                tv="TV"
               
                parking="Estacionamiento"                
                className="mb-6 md:mb-0"
              />
            </div>
          </section>
          <section id='contacto' className="w-full p-5 md:p-10">
        <ContactForm/>
      </section>
        </div>
        <div className="flex p-6 flex-col md:flex-row items-center mb-10 justify-between md:justify-between md:gap-10">
          <Image src={ImagenComentarioVanina} width={450} />
          <Image src={ImagenComentarioVeronica} width={450} />
          <Image src={ImagenComentarioTim} width={450} />
        </div>
  <footer className="bg-gray-900 text-gray-300">
  <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
    <div className="flex flex-col items-center">
      <p className="mb-2">© 2024 Gabriela Mare</p>
      <p className="mb-2">Esquel, Chubut.</p>
    </div>
  </div>
</footer>
      </main>
    </div>
  );
}


//SAFECODE

// import Image from "next/image";
// import FotoCasa1 from "@/assets/img/booking-casa-el-alto.webp";
// import FotoCasa2 from "@/assets/img/booking-casa-conesa.webp";

// import Link from "next/link";

// import ImagenPuntuacion from "@/assets/img/puntuacion-airbnb.webp";
// import ImagenComentarios from "@/assets/img/comentarios.webp";
// import Nav from "@/components/Nav.";
// import Header from "@/components/Header";
// import ContactForm from "@/components/ContactForm";
// import CasaPage from "./casa-del-alto/page";
// import CasaConesaPage from "./casa-conesa/page";
// import Carousel from "@/components/Carousel";
// import Cards from "@/components/Cards";


// export default function Home() {





//   return (

//     <main className="min-h-screen">

//       {/* <Nav /> */}
//       <Header  title={'Alquileres temporarios'} subtitle={'Esquel'} />

//       <div className="h-full bg-gray-200 w-full px-10 pb-10 ">
//       <section className="w-full h-auto bg-white mt-40">
//   <div className="flex flex-col items-center justify-center gap-14 md:gap-10 -translate-y-16 md:-translate-y-8">
//   <div className="flex flex-col items-center justify-center gap-14 md:gap-10 -translate-y-16 md:-translate-y-8">
//   <div className="flex flex-col md:flex-row items-center justify-center md:justify-between md:gap-10">
//     <div className="hidden md:block">
//       <Image
//         src={FotoCasa1}
//         width={350}
//         className="rounded-lg cursor-pointer hover:-translate-y-20 transition-all duration-200"
//       />
//     </div>
//     <div className="hidden md:block h-40" ></div> 
//     <Image
//       src={FotoCasa2}
//       width={350}
//       className="rounded-lg cursor-pointer   hover:-translate-y-20 transition-all duration-200"
//     />
//   </div>
// </div>
//     <div className="flex flex-col items-center gap-7">
//       <p className="text-4xl md:text-5xl text-center font-light text-blue-800">
//         Espacios cálidos, amplios y tranquilos
//       </p>
//       <p className="text-lg md:text-2xl text-center font-light text-blue-800">
//         Disfruta de la comodidad y la autenticidad de nuestras casas <br /> y
//         sumérgete en la belleza de la Patagonia.
//       </p>
//       <Image src={ImagenPuntuacion} width={350} />
//     </div>
//   </div>
// </section>
//        <Cards/>
//        <section > 
//        <CasaPage />      
//        </section>
       
//        <CasaConesaPage/>
//         <section
//           id="contacto"
//           className=" -translate-y-2 w-full h-auto p-24 flex flex-col gap-10 items-center rounded-b-lg shadow-bottom  bg-white justify-center "
//         >
//           <ContactForm />
//           {/* <Image src={ImagenComentarios} className="" /> */}
//         </section>
//       </div>
//       <footer className="w-full bg-black text-white text-center flex items-center justify-center h-24">
//         2024
//       </footer>
//     </main>
//   );
// }












// <div className="flex  flex-col md:flex-row items-center justify-center md:justify-between md:gap-10">
// <div className="hidden md:block">
//   <Image
//     src={FotoCasa1}
//     width={350}
//     className="rounded-lg cursor-pointer hover:-translate-y-20 transition-all duration-200"
//   />
// </div>
// <div className="hidden md:block h-40" ></div> 
// <Image
//   src={FotoCasa2}
//   width={350}
//   className="rounded-lg cursor-pointer   hover:-translate-y-20 transition-all duration-200"
// />
// </div>