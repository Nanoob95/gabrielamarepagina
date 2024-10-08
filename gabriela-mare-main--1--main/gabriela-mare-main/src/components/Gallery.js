'use client'
import Image from "next/image";
import { useState, useRef, useEffect } from 'react';
import { imagesDelAlto } from "../../constants";
import videoConesa from "@/assets/VideoConesa.mp4";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export default function GalleryConesa() {
  const videoRef = useRef();
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 640);
    }
    handleResize(); // Para establecer el valor inicial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMediaClick = (index) => {
    setSelectedMediaIndex(index);
    setShowImageModal(true);
  };

  const handleNextMedia = () => {
    if (selectedMediaIndex === imagesDelAlto.length - 1) {
      setSelectedMediaIndex(0);
    } else if (selectedMediaIndex < imagesDelAlto.length - 1) {
      setSelectedMediaIndex(selectedMediaIndex + 1);
    }
  };

  const handlePrevMedia = () => {
    if (selectedMediaIndex > 0) {
      setSelectedMediaIndex(selectedMediaIndex - 1);
    }
  };

  const handleCloseModal = () => {
    setShowImageModal(false);
  };

  return (    
    <>        
      <div className="lg:w-full lg:h-full h-3/4 flex gap-2">
        <div className="lg:h-full w-full  overflow-hidden hover:cursor-pointer hover:brightness-75 transition-all duration-200"
          onClick={() => handleMediaClick(0)}>
          <Image
            src={imagesDelAlto[0].src}
            className="rounded-lg h-full w-full object-cover"
            alt="Descripción de la imagen" />
        </div>
        {!isMobile && (
          <div className="w-full h-full flex gap-2">
            <div className={`w-1/2 h-full flex flex-col gap-2`}>
              {imagesDelAlto.slice(15, 17).map((image, index) => (
                <div
                  key={index + 1}
                  className={`w-full h-1/2 overflow-hidden hover:cursor-pointer hover:brightness-75 transition-all duration-200`}
                  onClick={() => handleMediaClick(index + 1)}
                >
                  <Image
                    src={image.src}
                    className="rounded-lg h-full w-full object-cover"
                    alt="Descripción de la imagen" />
                </div>
              ))}
            </div>
            <div className={`w-1/2 h-full  flex-col gap-2 hidden lg:flex`}>
              {imagesDelAlto.slice(19, 21).map((image, index) => (
                <div
                  key={index + 3}
                  className={`w-full h-1/2 overflow-hidden hover:cursor-pointer hover:brightness-75 transition-all duration-200`}
                  onClick={() => handleMediaClick(index + 3)}
                >
                  <Image
                    src={image.src}
                    className="rounded-lg h-full w-full object-cover"
                    alt="Descripción de la imagen" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {showImageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={handleCloseModal}>
          <div className="max-w-screen-xl mx-auto relative">
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevMedia();
              }}
            >
              <BsChevronLeft />
            </button>
            <div className="w-full h-full flex justify-center items-center">
              <Image
                src={imagesDelAlto[selectedMediaIndex].src}
                className="rounded-lg object-contain"
                width={600}
                height={isMobile ? 300 : 400}
                alt="Descripción de la imagen"
              />
            </div>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2"
              onClick={(e) => {
                e.stopPropagation();
                handleNextMedia();
              }}
            >
              <BsChevronRight />
            </button>
          </div>
        </div>
      )}
    
    </>
  );
}
// 
// {showMedia && (
//   <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={handleCloseModal}>
//     <div className="max-w-screen-xl mx-auto relative">
//       <button
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2"
//         onClick={(e) => {
//           e.stopPropagation();
//           handlePrevMedia();
//         }}
//       >
//         <BsChevronLeft />
//       </button>
//       {mediaType === 'video' ? (
//         <video src={selectedMediaIndex !== null ? imagesDelAlto[selectedMediaIndex].src : videoConesa} className="object-contain" controls width={600} height={400} />
//       ) : (
//         <Image src={imagesDelAlto[selectedMediaIndex].src} className="object-contain" width={600} height={400} />
//       )}
//       <button
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2"
//         onClick={(e) => {
//           e.stopPropagation();
//           handleNextMedia();
//         }}
//       >
//         <BsChevronRight />
//       </button>
//     </div>
//   </div>
// )}
// </div>
// );
// }














// 'use client'
// import Image from "next/image";
// import { useState } from 'react';
// import { imagesDelAlto } from "../../constants";
// import CarouselAlto from "@/components/CarouselAlto"

// export default function GalleryConesa() {
//   const [showMedia, setShowMedia] = useState(false);
//   const [selectedMedia, setSelectedMedia] = useState(null);
//   const [mediaType, setMediaType] = useState(null);

//   const handleMediaClick = (media, type) => {
//     setSelectedMedia(media);
//     setMediaType(type);
//     setShowMedia(true);
//   };

//   const handleCloseModal = () => {
//     setShowMedia(false);
//   };

//   return (
//     <div className="w-full h-full flex gap-2">

// <CarouselAlto />

//       {/* <div className="w-full h-full  overflow-hidden hover:cursor-pointer hover:brightness-75 transition-all duration-200"
//         onClick={() => handleMediaClick(imagesDelAlto[0].src, 'image')}>
//         <Image
//           src={imagesDelAlto[0].src}
//           className="rounded-lg h-full w-full object-cover"
//           controls
//         />
//       </div> */}
//       <div className="w-full h-full flex gap-2">
//         <div className="w-full h-full flex flex-col gap-2">
//           <div
//             className="w-full h-full overflow-hidden hover:cursor-pointer hover:brightness-75 transition-all duration-200"
//             onClick={() => handleMediaClick(imagesDelAlto[15].src, 'image')}
//           >
//             <Image
//               src={imagesDelAlto[15].src}
//               className="rounded-lg h-full w-full object-cover"
//             />
//           </div>
//           <div
//             className="w-full h-full overflow-hidden hover:cursor-pointer hover:brightness-75 transition-all duration-200"
//             onClick={() => handleMediaClick(imagesDelAlto[17].src, 'image')}
//           >
//             <Image
//               src={imagesDelAlto[17].src}
//               className="rounded-lg h-full w-full object-cover"
//             />
//           </div>
//         </div>
//         <div className="w-full h-full flex flex-col gap-2">
//           <div
//             className="w-full h-full overflow-hidden hover:cursor-pointer hover:brightness-75 transition-all duration-200"
//             onClick={() => handleMediaClick(imagesDelAlto[3].src, 'image')}
//           >
//             <Image
//               src={imagesDelAlto[3].src}
//               className="rounded-lg h-full w-full object-cover"
//             />
//           </div>
//           <div
//             className="w-full h-full overflow-hidden hover:cursor-pointer hover:brightness-75 transition-all duration-200"
//             onClick={() => handleMediaClick(imagesDelAlto[18].src, 'image')}
//           >
//             <Image
//               src={imagesDelAlto[18].src}
//               className="rounded-lg h-full w-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//       {showMedia && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={handleCloseModal}>
//           <div className="max-w-screen-xl mx-auto">
//             {mediaType === 'video' ? (
//               <video src={selectedMedia} className="object-contain" controls width={600} height={400} />
//             ) : (
//               <Image src={selectedMedia} className="object-contain" width={600} height={400} />
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }










// export default function GalleryConesa() {
//   const [showImage, setShowImage] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageClick = (image) => {
//     setSelectedImage(image);
//     setShowImage(true);
//   };

//   const handleCloseModal = () => {
//     setShowImage(false);
//   };

//   return (
//     <div className="w-full h-full flex gap-2">
//       <div className="w-full h-full  overflow-hidden hover:cursor-pointer hover:brightness-75 transition-all duration-200"
//         onClick={() => handleImageClick(imagesDelAlto[0].src)}>
//         <Image
//           src={imagesDelAlto[0].src}
//           className="rounded-lg h-full w-full object-cover"
//         />
//       </div>
//       <div className="w-full h-full flex gap-2">
//         <div className="w-full h-full flex flex-col gap-2">
//           <div
//             className="w-full h-full overflow-hidden hover:cursor-pointer hover:brightness-75 transition-all duration-200"
//             onClick={() => handleImageClick(imagesDelAlto[15].src)}
//           >
//             <Image
//               src={imagesDelAlto[15].src}
//               className="rounded-lg h-full w-full object-cover"
//             />
//           </div>
//           <div
//             className="w-full h-full overflow-hidden hover:cursor-pointer hover:brightness-75 transition-all duration-200"
//             onClick={() => handleImageClick(imagesDelAlto[17].src)}
//           >
//             <Image
//               src={imagesDelAlto[17].src}
//               className="rounded-lg h-full w-full object-cover"
//             />
//           </div>
//         </div>
//         <div className="w-full h-full flex flex-col gap-2">
//           <div
//             className="w-full h-full overflow-hidden hover:cursor-pointer hover:brightness-75 transition-all duration-200"
//             onClick={() => handleImageClick(imagesDelAlto[3].src)}
//           >
//             <Image
//               src={imagesDelAlto[3].src}
//               className="rounded-lg h-full w-full object-cover"
//             />
//           </div>
//           <div
//             className="w-full h-full overflow-hidden hover:cursor-pointer hover:brightness-75 transition-all duration-200"
//             onClick={() => handleImageClick(imagesDelAlto[18].src)}
//           >
//             <Image
//               src={imagesDelAlto[18].src}
//               className="rounded-lg h-full w-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//       {showImage && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={handleCloseModal}>
//           <div className="max-w-screen-xl mx-auto">
//             <Image src={selectedImage} alt="Selected Image" className="object-contain" width={600} height={400} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
