'use client'

import Image from "next/image";
import { useState, useRef, useEffect } from 'react';
import { imagesConesa } from "../../constants";
import videoConesa from "@/assets/VideoConesa.mp4";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export default function GalleryConesa() {
  const videoRef = useRef();
  const [showImageModal, setShowImageModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 640);
    }
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMediaClick = (media, type, index) => {
    setSelectedMediaIndex(index);
    setMediaType(type);
    if (type === 'video') {
      setShowVideoModal(true);
    } else {
      setShowImageModal(true);
    }
  };

  const handleNextMedia = () => {
    if (selectedMediaIndex === imagesConesa.length - 1) {
      setSelectedMediaIndex(0);
    } else if (selectedMediaIndex < imagesConesa.length - 1) {
      setSelectedMediaIndex(selectedMediaIndex + 1);
    }
  };

  const handlePrevMedia = () => {
    if (selectedMediaIndex > 0) {
      setSelectedMediaIndex(selectedMediaIndex - 1);
    }
  };

  const handleCloseModal = (e) => {
    setShowImageModal(false);
    setShowVideoModal(false);
  };

  const handleVideoClick = (e) => {
    e.stopPropagation();
  };

  return (    
   <>        
   
   <div className="lg:w-full lg:h-full h-3/4 flex gap-2">
      {isMobile ? (
        <div className="w-full h-full  overflow-hidden hover:cursor-pointer hover:brightness-75 transition-all duration-200"
        onClick={() => handleMediaClick(videoConesa, 'video', null)}>
          <video
            ref={videoRef} controls
            src={videoConesa}
            className="rounded-lg h-full w-full object-cover"
            onClick={handleVideoClick} />
        </div>
      ) : (
        <>
          <div className="lg:h-full w-full  overflow-hidden hover:cursor-pointer hover:brightness-75 transition-all duration-200"
            onClick={() => handleMediaClick(videoConesa, 'video', null)}>
            <video
              ref={videoRef} controls
              src={videoConesa}
              className="rounded-lg h-full w-full object-cover"
              onClick={handleVideoClick} />
          </div>
          <div className="w-full h-full flex gap-2">
            <div className={`w-1/2 h-full flex flex-col gap-2`}>
              {imagesConesa.slice(0, 2).map((image, index) => (
                <div
                key={index}
                className={`w-full h-1/2 overflow-hidden hover:cursor-pointer hover:brightness-75 transition-all duration-200`}
                onClick={() => handleMediaClick(image.src, 'image', index)}
                >
                  <Image
                    src={image.src}
                    className="rounded-lg h-full w-full object-cover" />
                </div>
              ))}
            </div>
            <div className={`w-1/2 h-full flex flex-col gap-2`}>
              {imagesConesa.slice(2, 4).map((image, index) => (
                <div
                key={index + 2}
                className={`w-full h-1/2 overflow-hidden hover:cursor-pointer hover:brightness-75 transition-all duration-200`}
                onClick={() => handleMediaClick(image.src, 'image', index + 2)}
                >
                  <Image
                    src={image.src}
                    className="rounded-lg h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      {(showImageModal || showVideoModal) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={handleCloseModal}>
          <div className="max-w-screen-xl mx-auto relative">
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevMedia();
              } }
              >
              <BsChevronLeft />
            </button>
            {mediaType === 'video' ? (
              <video
              src={selectedMediaIndex !== null ? imagesConesa[selectedMediaIndex].src : videoConesa}
              className="object-contain"
              controls
              width={600}
                height={isMobile ? 300 : 400}
                onClick={handleVideoClick} />
              ) : (
                <Image
                src={imagesConesa[selectedMediaIndex].src}
                className="object-contain"
                width={600}
                height={isMobile ? 400 : 400} />
              )}
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2"
              onClick={(e) => {
                e.stopPropagation();
                handleNextMedia();
              } }
              >
              <BsChevronRight />
            </button>
          </div>
        </div>
      )}
</div>


<div className=" lg:hidden w-full  h-[80] mt-5">
  <div className={`w-full h-1/2 overflow-hidden hover:cursor-pointer hover:brightness-75 transition-all duration-200`}
    onClick={() => handleMediaClick(imagesConesa[0].src, 'image', 0)}>
    <Image
      src={imagesConesa[0].src}
      className="rounded-lg h-full w-full object-cover"
      alt="Descripción de la imagen" />
  </div>
</div>
    </>
  );
}
// 'use client'
// import Image from "next/image";
// import { useState } from 'react';
// import { imagesConesa } from "../../constants";
// import videoConesa from "@/assets/VideoConesa.mp4"

// export default function GalleryConesa() {
  //   const [showMedia, setShowMedia] = useState(false);
  //   const [selectedMedia, setSelectedMedia] = useState(null);
  //   const [mediaType, setMediaType] = useState(null);
  
  //   const handleMediaClick = (media, type) => {
    //     if (type !== 'video') {
      //       setSelectedMedia(media);
      //       setMediaType(type);
      //       setShowMedia(true);
      
      //     }
      //   };

      //   const handleCloseModal = () => {
        //     setShowMedia(false);
//   };

//   return (
//     <div className="w-full h-full flex gap-2">
//       <div className="w-full h-full  overflow-hidden hover:cursor-pointer hover:brightness-75 transition-all duration-200"
//         onClick={() => handleMediaClick(videoConesa, 'video')}>
//         <video
//           src={videoConesa}
//           className="rounded-lg h-full w-full object-cover"
//           controls
//         />
//       </div>
//       <div className="w-full h-full flex gap-2">
//         <div className="w-full h-full flex flex-col gap-2">
//           <div
//             className="w-full h-full overflow-hidden hover:cursor-pointer hover:brightness-75 transition-all duration-200"
//             onClick={() => handleMediaClick(imagesConesa[6].src, 'image')}
//           >
//             <Image
//               src={imagesConesa[6].src}
//               className="rounded-lg h-full w-full object-cover"
//             />
//           </div>
//           <div
//             className="w-full h-full overflow-hidden hover:cursor-pointer hover:brightness-75 transition-all duration-200"
//             onClick={() => handleMediaClick(imagesConesa[8].src, 'image')}
//           >
//             <Image
//               src={imagesConesa[8].src}
//               className="rounded-lg h-full w-full object-cover"
//             />
//           </div>
//         </div>
//         <div className="w-full h-full flex flex-col gap-2">
//           <div
//             className="w-full h-full overflow-hidden hover:cursor-pointer hover:brightness-75 transition-all duration-200"
//             onClick={() => handleMediaClick(imagesConesa[12].src, 'image')}
//           >
//             <Image
//               src={imagesConesa[12].src}
//               className="rounded-lg h-full w-full object-cover"
//             />
//           </div>
//           <div
//             className="w-full h-full overflow-hidden hover:cursor-pointer hover:brightness-75 transition-all duration-200"
//             onClick={() => handleMediaClick(imagesConesa[28].src, 'image')}
//           >
//             <Image
//               src={imagesConesa[28].src}
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




//CODIGO PIOLA

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
//         onClick={() => handleImageClick(imagesConesa[0].src)}>
//         <Image
//           src={imagesConesa[0].src}
//           className="rounded-lg h-full w-full object-cover"
//         />
//       </div>
//       <div className="w-full h-full flex gap-2">
//         <div className="w-full h-full flex flex-col gap-2">
//           <div
//             className="w-full h-full overflow-hidden hover:cursor-pointer hover:brightness-75 transition-all duration-200"
//             onClick={() => handleImageClick(imagesConesa[6].src)}
//           >
//             <Image
//               src={imagesConesa[6].src}
//               className="rounded-lg h-full w-full object-cover"
//             />
//           </div>
//           <div
//             className="w-full h-full overflow-hidden hover:cursor-pointer hover:brightness-75 transition-all duration-200"
//             onClick={() => handleImageClick(imagesConesa[8].src)}
//           >
//             <Image
//               src={imagesConesa[8].src}
//               className="rounded-lg h-full w-full object-cover"
//             />
//           </div>
//         </div>
//         <div className="w-full h-full flex flex-col gap-2">
//           <div
//             className="w-full h-full overflow-hidden hover:cursor-pointer hover:brightness-75 transition-all duration-200"
//             onClick={() => handleImageClick(imagesConesa[12].src)}
//           >
//             <Image
//               src={imagesConesa[12].src}
//               className="rounded-lg h-full w-full object-cover"
//             />
//           </div>
//           <div
//             className="w-full h-full overflow-hidden hover:cursor-pointer hover:brightness-75 transition-all duration-200"
//             onClick={() => handleImageClick(imagesConesa[28].src)}
//           >
//             <Image
//               src={imagesConesa[28].src}
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





















