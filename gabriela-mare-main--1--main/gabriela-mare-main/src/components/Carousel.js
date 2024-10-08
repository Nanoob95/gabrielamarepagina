'use client'
//CODIGO DECENTE 2
import Image from "next/image";
import { useState } from 'react';
import { imagesConesa } from "../../constants";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Modal = ({ image, onClose, onNext, onPrev }) => {
  const handlePrev = (e) => {
    e.stopPropagation();
    onPrev();
  };

  const handleNext = (e) => {
    e.stopPropagation();
    onNext();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <div className="relative max-w-full max-h-full">
        <button className="absolute top-2 right-2 text-white" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <button className="absolute top-1/2 left-4 text-white transform -translate-y-1/2" onClick={handlePrev}>
          <BsChevronLeft className="w-10 h-10" />
        </button>
        <button className="absolute top-1/2 right-4 text-white transform -translate-y-1/2" onClick={handleNext}>
          <BsChevronRight className="w-10 h-10" />
        </button>
        <div className="w-full h-full">
          <Image src={image.src} alt='' className='w-full h-full object-contain' />
        </div>
      </div>
    </div>
  );
};

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showArrows, setShowArrows] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === imagesConesa.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? imagesConesa.length - 1 : prevSlide - 1));
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className=' relative w-full' onMouseEnter={() => setShowArrows(true)} onMouseLeave={() => setShowArrows(false)}>
      <div className='flex items-center justify-center w-full h-[80vh] mx-auto'>
        <div className='relative w-full h-full overflow-hidden rounded-lg' onClick={openModal}>
          <div className='relative w-full h-full'>
            <div className='absolute top-0 left-0 w-full h-full' style={{ display: 'block' }}>
              <Image src={imagesConesa[currentSlide].src} alt='' className='w-full h-full object-cover' />
            </div>
          </div>
          {showArrows && (
            <>
              <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} className='absolute left-5 top-1/2 transform -translate-y-1/2 -translate-x-4 w-8 h-8'>
                <BsChevronLeft className='w-full h-full text-white' />
              </button>
              <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} className='absolute right-5 top-1/2 transform -translate-y-1/2 translate-x-4 w-8 h-8'>
                <BsChevronRight className='w-full h-full text-white' />
              </button>
            </>
          )}
        </div>
      </div>
      {modalOpen && (
        <Modal
          image={imagesConesa[currentSlide]}
          onClose={closeModal}
          onNext={nextSlide}
          onPrev={prevSlide}
        />
      )}
    </div>
  );
};

export default Carousel;







//CODIGO DECENTE 1

// import Image from 'next/image';
// import React, { useState } from 'react';
// import { imagesConesa } from "../../constants";
// import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

// const Carousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [showArrows, setShowArrows] = useState(false);

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide === imagesConesa.length - 1 ? 0 : prevSlide + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide === 0 ? imagesConesa.length - 1 : prevSlide - 1));
//   };

//   return (
//     <div
//       className='relative w-full'
//       onMouseEnter={() => setShowArrows(true)}
//       onMouseLeave={() => setShowArrows(false)}
//     >
//       <div className='flex items-center justify-center w-full h-[80vh] mx-auto'>
//         <div className='relative w-3/4 h-full overflow-hidden rounded-lg'>
//           <div className='relative w-full h-full'>
//             {imagesConesa.map((image, index) => (
//               <div key={index} className='absolute top-0 left-0 w-full h-full' style={{ display: index === currentSlide ? 'block' : 'none' }}>
//                 <Image src={image.src} alt='' className='w-full h-full object-cover' />
//               </div>
//             ))}
//           </div>
//           {showArrows && (
//             <>
//               <button onClick={prevSlide} className='absolute left-5 top-1/2 transform -translate-y-1/2 -translate-x-4 w-8 h-8'>
//                 <BsChevronLeft className='w-full h-full text-white' />
//               </button>
//               <button onClick={nextSlide} className='absolute right-5 top-1/2 transform -translate-y-1/2 translate-x-4 w-8 h-8'>
//                 <BsChevronRight className='w-full h-full text-white' />
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
