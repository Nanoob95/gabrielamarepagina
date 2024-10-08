import React from "react";
import { IoRestaurantOutline } from "react-icons/io5";
import { IoWifi } from "react-icons/io5";
import { IoTvOutline } from "react-icons/io5";
import { IoCarOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
// import Carousel from "./Carousel";
// import CarouselAlto from "./CarouselAlto"

import FotoDelAltoInterior from "@/assets/img/Casa Alto/CasaAlto23_resultado.webp";
import FotoConesaExterior from "@/assets/img/casa-conesa-exterior2.webp";




// CODIGO BEBOSTONKS pero responsive

export default function Cards() {
  return (
    <>  
<div className="w-full min-w-fit rounded h-[80vh] flex items-center justify-center p-10 bg-gradient-to-l from-blue-800 via-blue-900 to-blue-950">
  <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center gap-10 bg-blue-800 bg-opacity-30 shadow-lg rounded-l-lg sm:mb-2  ">
    <div className="mb-10">

    <span className="text-4xl lg:text-5xl text-white font-extralight p-2 border-b tracking-wide">
      Casa del Alto
    
    </span>
    </div>
    <div className="border flex flex-col gap-3 text-white px-5 py-5 rounded-lg md:w-3/4 lg:w-2/3 xl:w-1/2">
    <div className="flex flex-wrap items-center justify-between md:gap-5 gap-5 text-xl">
    <span className="flex items-center justify-center gap-1 font-normal">
      <IoPersonOutline />6
    </span>
    <span className="flex items-center justify-center gap-1 font-normal">
      <IoBedOutline />3
    </span>
    <span className="flex items-center justify-center gap-1 font-normal">
      <FaBath /> 2
    </span>
  </div>
  <div className="flex flex-wrap items-center justify-between gap-5 text-xl">
    <span className="flex items-center justify-center gap-1 font-normal">
      <IoRestaurantOutline />
      Cocina
    </span>
    <span className="flex items-center justify-center gap-1 font-normal">
      <IoWifi />
      Wifi
    </span>
    <span className="flex items-center justify-center gap-1 font-normal">
      <IoTvOutline />
      TV
    </span>
<div className="flex-grow">
    <span className="flex items-center justify-center  font-normal">
      <IoCarOutline />
      Estacionamiento
    </span>

</div>

  </div>
    </div>
    <Link
      className="px-3 py-2  border rounded-lg text-white font-bold tracking-wider text-xl hover:bg-blue-800 transition-all duration-200"
      href={"/casa-del-alto"}
    >
      VER MAS
    </Link>
  </div>
  <div className="hidden md:block w-1/2 h-full items-center justify-center bg-blue-900 rounded-r-lg overflow-hidden border border-blue-900 shadow-lg">
    <div className="flex items-center justify-center h-full">
      <Image
        src={FotoDelAltoInterior}
        className="rounded-lg h-full w-full object-cover"
      />
    </div>
  </div>
</div>

<div id="conesa" className="w-full h-[80vh] -translate-y-1 flex items-center justify-center p-10 bg-gradient-to-l from-blue-800 via-blue-900 to-blue-950">
  <div className="hidden  md:block w-1/2 h-full items-center justify-center bg-blue-900 rounded-l-lg overflow-hidden border border-blue-900 shadow-lg">
    <div className="flex items-center justify-center h-full">
      <Image
        src={FotoConesaExterior}
        className="rounded-lg h-full w-full object-cover"
        />
    </div>
  </div>
  <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center gap-10 bg-blue-800 bg-opacity-30 shadow-lg rounded-r-lg">
   <div className="mb-10">
    <span className="text-4xl lg:text-5xl text-white font-extralight p-2 border-b tracking-wide">
      Casa Conesa
    </span>
  </div>  
    <div className="border flex flex-col gap-3 text-white px-5 py-5 rounded-lg md:w-3/4 lg:w-2/3 xl:w-1/2">
  <div className="flex flex-wrap items-center justify-between md:gap-5 gap-5 text-xl">
    <span className="flex items-center justify-center gap-1 font-normal">
      <IoPersonOutline />4
    </span>
    <span className="flex items-center justify-center gap-1 font-normal">
      <IoBedOutline />3
    </span>
    <span className="flex items-center justify-center gap-1 font-normal">
      <FaBath /> 2
    </span>
  </div>
  <div className="flex flex-wrap items-center justify-between gap-5 text-xl">
    <span className="flex items-center justify-center gap-1 font-normal">
      <IoRestaurantOutline />
      Cocina
    </span>
    <span className="flex items-center justify-center gap-1 font-normal">
      <IoWifi />
      Wifi
    </span>
    <span className="flex items-center justify-center gap-1 font-normal">
      <IoTvOutline />
      TV
    </span>
    <div className="flex-grow">
    <span className="flex items-center justify-center  font-normal">
      <IoCarOutline />
      Estacionamiento
    </span>

</div>
  </div>
</div>
    <Link
      className="px-3 py-2  border rounded-lg text-white font-bold tracking-wider text-xl hover:bg-blue-800 transition-all duration-200"
      href={"/casa-conesa"}
      >
      VER MAS
    </Link>
  </div>
</div>

     
    </>
  );
  
}
// CODIGO CON SLIDERS POR IMAGENES

// export default function Cards() {
//   return (
//     <>
//       <div className="w-full md:flex md:items-center md:justify-center p-10 bg-gradient-to-l from-blue-800 via-blue-900 to-blue-950">
//         <div className="md:w-1/2 h-[40vh] md:h-[80vh] flex flex-col items-center justify-center gap-10bg-gradient-to-l from-blue-800 via-blue-900 to-blue-950 bg-opacity-30 shadow-lg rounded-l-lg">
//           <span className="text-5xl text-white font-extralight p-2 border-b tracking-wide">
//             Casa del Alto
//           </span>
//           <div className="border flex flex-col gap-3 text-white px-5 py-5 rounded-lg">
//             <div className="flex items-center justify-center gap-5 text-xl">
//               <span className="flex items-center justify-center gap-1 font-normal">
//                 <IoPersonOutline />6
//               </span>
//               <span className="flex items-center justify-center gap-1 font-normal">
//                 <IoBedOutline />3
//               </span>
//               <span className="flex items-center justify-center gap-1 font-normal">
//                 <FaBath /> 2
//               </span>
//             </div>
//             <div className="flex items-center justify-center gap-5 text-xl">
//               <span className="flex items-center justify-center gap-1 font-normal">
//                 <IoRestaurantOutline />
//                 Cocina
//               </span>
//               <span className="flex items-center justify-center gap-1 font-normal">
//                 <IoWifi />
//                 Wifi
//               </span>
//               <span className="flex items-center justify-center gap-1 font-normal">
//                 <IoTvOutline />
//                 TV
//               </span>
//               <span className="flex items-center justify-center gap-1 font-normal">
//                 <IoCarOutline />
//                 Estacionamiento
//               </span>
//             </div>
//           </div>
//           <Link
//             className="px-3 py-2 border rounded-lg text-white font-bold tracking-wider text-xl hover:bg-blue-800 transition-all duration-200"
//             href={"#CasaDelAlto"}
//           >
//             VER MÁS
//           </Link>
//         </div>
//         <div className="md:w-1/2 h-[40vh] md:h-[80vh] flex items-center justify-center bg-blue-900 rounded-r-lg overflow-hidden border border-blue-900 shadow-lg">
//           <CarouselAlto />
//         </div>
//       </div>

//       <div className="w-full md:flex md:items-center md:justify-center -translate-y-1 p-10 bg-gradient-to-l from-blue-800 via-blue-900 to-blue-950">
//         <div className="md:w-1/2 h-[40vh] md:h-[80vh] flex flex-col items-center justify-center gap-10 bg-blue-800 bg-opacity-30 shadow-lg rounded-l-lg">
//           <span className="text-5xl text-white font-extralight p-2 border-b tracking-wide">
//             Casa Conesa
//           </span>
//           <div className="border flex flex-col gap-3 text-white px-5 py-5 rounded-lg">
//             <div className="flex items-center justify-center gap-5 text-xl">
//               <span className="flex items-center justify-center gap-1 font-normal">
//                 <IoPersonOutline />4
//               </span>
//               <span className="flex items-center justify-center gap-1 font-normal">
//                 <IoBedOutline />3
//               </span>
//               <span className="flex items-center justify-center gap-1 font-normal">
//                 <FaBath /> 2
//               </span>
//             </div>
//             <div className="flex items-center justify-center gap-5 text-xl">
//               <span className="flex items-center justify-center gap-1 font-normal">
//                 <IoRestaurantOutline />
//                 Cocina
//               </span>
//               <span className="flex items-center justify-center gap-1 font-normal">
//                 <IoWifi />
//                 Wifi
//               </span>
//               <span className="flex items-center justify-center gap-1 font-normal">
//                 <IoTvOutline />
//                 TV
//               </span>
//               <span className="flex items-center justify-center gap-1 font-normal">
//                 <IoCarOutline />
//                 Estacionamiento
//               </span>
//             </div>
//           </div>
//           <Link
//             className="px-3 py-2 border rounded-lg text-white font-bold tracking-wider text-xl hover:bg-blue-800 transition-all duration-200"
//             href={"#CasaConesa"}
//           >
//             VER MÁS
//           </Link>
//         </div>
//         <div className="md:w-1/2 h-[40vh] md:h-[80vh] flex items-center justify-center bg-blue-900 rounded-r-lg overflow-hidden border border-blue-900 shadow-lg">
//           <Carousel />
//         </div>
//       </div>
//     </>
//   );
// }





