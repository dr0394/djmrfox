import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '4917012345678';
  const defaultMessage = 'Hallo DJ Mr. Fox, ich interessiere mich für Ihre DJ-Services und hätte gerne weitere Informationen.';

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="WhatsApp kontaktieren"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
        <div className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all group-hover:scale-110">
          <MessageCircle className="w-8 h-8 text-white" fill="white" />
        </div>
      </div>
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap">
          Schreib mir auf WhatsApp
        </div>
      </div>
    </button>
  );
};

export default WhatsAppButton;
