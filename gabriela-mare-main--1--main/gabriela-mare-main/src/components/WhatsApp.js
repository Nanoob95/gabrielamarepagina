import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {

    window.open('https://wa.me/', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 z-30 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-md focus:outline-none"
    >
      <FaWhatsapp size={24} />
    </button>
  );
};

export default WhatsAppButton;