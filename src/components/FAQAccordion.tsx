import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  accentColor?: 'purple' | 'red' | 'blue' | 'rose' | 'mauve' | 'orange';
  variant?: 'light' | 'dark';
}

const mauveColor = '#C09BB9';
const orangeColor = '#FF6B00';

const FAQAccordion = ({ faqs, accentColor = 'blue', variant = 'light' }: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const isDark = variant === 'dark';
  const isMauve = accentColor === 'mauve';
  const isOrange = accentColor === 'orange';

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (isMauve || isOrange) {
    const color = isOrange ? orangeColor : mauveColor;

    return (
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/40 backdrop-blur-sm border-2 rounded-2xl overflow-hidden transition-all"
            style={{ borderColor: openIndex === index ? `${color}80` : '#e5e7eb' }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/30 transition-colors"
            >
              <span className="text-lg font-medium text-gray-900 pr-4">{faq.question}</span>
              <ChevronDown
                className="w-6 h-6 flex-shrink-0 transition-transform"
                style={{ color: color, transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="px-6 pb-5 text-gray-600 leading-relaxed font-light">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const getDarkAccentColor = () => {
    switch (accentColor) {
      case 'rose':
        return { border: 'border-rose-500/30', icon: 'text-rose-400' };
      case 'purple':
        return { border: 'border-purple-500/30', icon: 'text-purple-400' };
      case 'red':
        return { border: 'border-red-500/30', icon: 'text-red-400' };
      default:
        return { border: 'border-cyan-500/30', icon: 'text-cyan-400' };
    }
  };

  if (isDark || accentColor === 'rose') {
    const darkColors = getDarkAccentColor();
    return (
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all ${
              openIndex === index ? darkColors.border : 'hover:border-white/20'
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
            >
              <span className="text-lg font-medium text-white pr-4">{faq.question}</span>
              <ChevronDown
                className={`w-6 h-6 ${darkColors.icon} flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const getAccentColors = () => {
    switch (accentColor) {
      case 'purple':
        return {
          border: 'border-purple-200',
          bg: 'bg-purple-50',
          text: 'text-purple-600',
          hover: 'hover:bg-purple-50'
        };
      case 'red':
        return {
          border: 'border-red-200',
          bg: 'bg-red-50',
          text: 'text-red-600',
          hover: 'hover:bg-red-50'
        };
      default:
        return {
          border: 'border-blue-200',
          bg: 'bg-blue-50',
          text: 'text-blue-600',
          hover: 'hover:bg-blue-50'
        };
    }
  };

  const colors = getAccentColors();

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`border-2 ${colors.border} rounded-xl overflow-hidden transition-all ${
            openIndex === index ? colors.bg : 'bg-white'
          }`}
        >
          <button
            onClick={() => toggleFAQ(index)}
            className={`w-full px-6 py-5 flex items-center justify-between text-left ${colors.hover} transition-colors`}
          >
            <span className="text-lg font-medium text-gray-900 pr-4">{faq.question}</span>
            <ChevronDown
              className={`w-6 h-6 ${colors.text} flex-shrink-0 transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="px-6 pb-5 text-gray-700 leading-relaxed font-light">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
