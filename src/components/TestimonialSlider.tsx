import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  text: string;
  author: string;
  event: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  accentColor?: 'purple' | 'red' | 'blue' | 'rose' | 'mauve' | 'orange';
  variant?: 'light' | 'dark';
}

const mauveColor = '#C09BB9';
const mauveDark = '#a07a99';
const orangeColor = '#FF6B00';
const orangeDark = '#E05A00';

const TestimonialSlider = ({ testimonials, accentColor = 'blue', variant = 'light' }: TestimonialSliderProps) => {
  const [current, setCurrent] = useState(0);
  const isDark = variant === 'dark';
  const isMauve = accentColor === 'mauve';
  const isOrange = accentColor === 'orange';

  const getAccentColors = () => {
    switch (accentColor) {
      case 'purple':
        return {
          bg: 'bg-purple-400',
          border: 'border-purple-300',
          button: 'bg-purple-400 hover:bg-purple-500',
          dot: 'bg-purple-400',
          dotInactive: 'bg-purple-200'
        };
      case 'red':
        return {
          bg: 'bg-red-600',
          border: 'border-red-300',
          button: 'bg-red-600 hover:bg-red-700',
          dot: 'bg-red-600',
          dotInactive: 'bg-red-200'
        };
      case 'rose':
        return {
          bg: 'bg-rose-500',
          border: 'border-rose-300',
          button: 'bg-rose-500 hover:bg-rose-600',
          dot: 'bg-rose-500',
          dotInactive: isDark ? 'bg-rose-500/30' : 'bg-rose-200'
        };
      case 'mauve':
        return {
          bg: '',
          border: '',
          button: '',
          dot: '',
          dotInactive: ''
        };
      default:
        return {
          bg: 'bg-blue-600',
          border: 'border-blue-300',
          button: 'bg-blue-600 hover:bg-blue-700',
          dot: 'bg-blue-600',
          dotInactive: 'bg-blue-200'
        };
    }
  };

  const colors = getAccentColors();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (isMauve || isOrange) {
    const color = isOrange ? orangeColor : mauveColor;
    const colorDark = isOrange ? orangeDark : mauveDark;

    return (
      <div className="relative max-w-4xl mx-auto">
        <div className="rounded-2xl shadow-xl p-8 md:p-12 border-2 bg-white/40 backdrop-blur-sm" style={{ borderColor: `${color}50` }}>
          <div className="w-16 h-16 text-white p-3 rounded-full mb-6 mx-auto flex items-center justify-center" style={{ backgroundColor: color }}>
            <Quote className="w-10 h-10" />
          </div>
          <div className="min-h-[200px] flex flex-col justify-center">
            <p className="text-xl md:text-2xl text-center mb-8 leading-relaxed text-gray-700">
              "{testimonials[current].text}"
            </p>
            <div className="text-center">
              <p className="font-bold text-lg text-gray-900">{testimonials[current].author}</p>
              <p className="text-gray-600">{testimonials[current].event}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={prev}
            className="p-3 text-white rounded-full shadow-lg transition-all hover:scale-110"
            style={{ backgroundColor: color }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = colorDark}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = color}
            aria-label="Vorheriges Testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className="h-3 rounded-full transition-all"
                style={{
                  backgroundColor: index === current ? color : `${color}40`,
                  width: index === current ? '2rem' : '0.75rem'
                }}
                aria-label={`Zu Testimonial ${index + 1} springen`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-3 text-white rounded-full shadow-lg transition-all hover:scale-110"
            style={{ backgroundColor: color }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = colorDark}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = color}
            aria-label="Nachstes Testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className={`rounded-2xl shadow-xl p-8 md:p-12 border-2 ${isDark ? 'bg-white/5 backdrop-blur-sm border-white/10' : `bg-white ${colors.border}`}`}>
        <Quote className={`w-16 h-16 ${colors.bg} text-white p-3 rounded-full mb-6 mx-auto`} />
        <div className="min-h-[200px] flex flex-col justify-center">
          <p className={`text-xl md:text-2xl text-center mb-8 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            "{testimonials[current].text}"
          </p>
          <div className="text-center">
            <p className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{testimonials[current].author}</p>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{testimonials[current].event}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={prev}
          className={`p-3 ${colors.button} text-white rounded-full shadow-lg transition-all hover:scale-110`}
          aria-label="Vorheriges Testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === current ? `${colors.dot} w-8` : colors.dotInactive
              }`}
              aria-label={`Zu Testimonial ${index + 1} springen`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className={`p-3 ${colors.button} text-white rounded-full shadow-lg transition-all hover:scale-110`}
          aria-label="Nachstes Testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
