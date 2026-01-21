import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: 'home' | 'wedding' | 'party';
  onNavigate: (page: 'home' | 'wedding' | 'party') => void;
  variant?: 'light' | 'dark';
}

const Navigation = ({ currentPage, onNavigate, variant }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLightVariant = variant === 'light';
  const isDarkVariant = variant === 'dark';
  const isPartyLight = currentPage === 'party' && variant === 'light';
  const isHomeLight = currentPage === 'home' && variant === 'light';
  const isWeddingDark = currentPage === 'wedding' && variant === 'dark';
  const isPartyDark = currentPage === 'party' && variant === 'dark';

  const getColors = () => {
    if (isLightVariant) {
      const accentColor = isPartyLight ? '#FF6B00' : (isHomeLight ? '#3B82F6' : '#C09BB9');
      const accentDark = isPartyLight ? '#E05A00' : (isHomeLight ? '#2563EB' : '#a07a99');
      return {
        bgScrolled: 'bg-white/95 backdrop-blur-xl',
        textScrolled: 'text-gray-900',
        textDefault: 'text-gray-900',
        button: 'text-white',
        buttonBg: accentColor,
        buttonHover: accentDark,
        activeIndicator: accentColor
      };
    }
    if (isWeddingDark) {
      return {
        bgScrolled: 'bg-white/95 backdrop-blur-xl',
        textScrolled: 'text-gray-900',
        textDefault: 'text-white',
        button: 'text-white',
        buttonBg: '#C09BB9',
        buttonHover: '#a07a99',
        activeIndicator: '#C09BB9'
      };
    }
    if (isPartyDark) {
      return {
        bgScrolled: 'bg-white/95 backdrop-blur-xl',
        textScrolled: 'text-gray-900',
        textDefault: 'text-white',
        button: 'text-white',
        buttonBg: '#FF6B00',
        buttonHover: '#E05A00',
        activeIndicator: '#FF6B00'
      };
    }
    switch (currentPage) {
      case 'party':
        return {
          bgScrolled: 'bg-gray-950/95 backdrop-blur-xl',
          textScrolled: 'text-white',
          textDefault: 'text-white',
          button: 'bg-blue-500 hover:bg-blue-600 text-white',
          buttonBg: '',
          buttonHover: '',
          activeIndicator: 'bg-blue-500'
        };
      default:
        return {
          bgScrolled: 'bg-white/95 backdrop-blur-xl',
          textScrolled: 'text-gray-900',
          textDefault: 'text-white',
          button: 'bg-blue-500 hover:bg-blue-600 text-white',
          buttonBg: '',
          buttonHover: '',
          activeIndicator: 'bg-cyan-500'
        };
    }
  };

  const colors = getColors();
  const textColor = isScrolled ? colors.textScrolled : colors.textDefault;
  const navBg = isScrolled ? colors.bgScrolled : 'bg-transparent';

  const navItems = [
    { key: 'home', label: 'Start' },
    { key: 'wedding', label: 'Hochzeit' },
    { key: 'party', label: 'Party' }
  ];

  return (
    <nav className={`${navBg} ${textColor} fixed w-full top-0 z-50 transition-all duration-500 ${isScrolled ? 'shadow-xl shadow-black/5' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => onNavigate('home')}
            className="group flex items-center gap-3 hover:opacity-90 transition-all"
          >
            {currentPage === 'wedding' ? (
              <img
                src="https://ihrhochzeits-dj.com/images/logo-hdj-ohne-ringe_8gltpx3c.png"
                alt="Ihr Hochzeits-DJ"
                className={`h-12 w-auto transition-all ${!isScrolled && variant === 'dark' ? 'brightness-0 invert' : ''}`}
              />
            ) : (
              <>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-semibold text-lg">DJ</span>
                </div>
                <div className="text-left hidden sm:block">
                  <div className="text-lg font-medium tracking-tight">Mr. Fox</div>
                  <div className="text-xs opacity-60 tracking-wide">DJ & Entertainment</div>
                </div>
              </>
            )}
          </button>

          <div className="hidden md:flex items-center">
            <div className={`flex items-center gap-1 ${isScrolled ? 'bg-gray-100/80' : (isLightVariant ? 'bg-gray-900/10' : 'bg-white/10')} rounded-full p-1.5 backdrop-blur-sm`}>
              {navItems.map((item) => {
                const isActive = currentPage === item.key;

                return (
                  <button
                    key={item.key}
                    onClick={() => onNavigate(item.key as 'home' | 'wedding' | 'party')}
                    className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? `${isScrolled ? 'bg-white text-gray-900 shadow-md' : (isLightVariant ? 'bg-white/80 text-gray-900 shadow-md' : 'bg-white/20 text-white')}`
                        : `${isScrolled ? 'text-gray-600 hover:text-gray-900' : (isLightVariant ? 'text-gray-700 hover:text-gray-900' : 'text-white/80 hover:text-white')}`
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
            {(isLightVariant || isWeddingDark || isPartyDark) ? (
              <a
                href="#contact"
                className="ml-6 px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-white"
                style={{ backgroundColor: colors.buttonBg }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.buttonHover || ''}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = colors.buttonBg || ''}
              >
                Anfragen
              </a>
            ) : (
              <a
                href="#contact"
                className={`ml-6 px-6 py-2.5 ${colors.button} rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5`}
              >
                Anfragen
              </a>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2.5 rounded-xl transition-colors ${isScrolled ? 'hover:bg-gray-100' : (isLightVariant ? 'hover:bg-gray-900/10' : 'hover:bg-white/10')}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'max-h-80' : 'max-h-0'}`}>
        <div className={`${(isLightVariant || isWeddingDark || isPartyDark) ? 'bg-white/95 backdrop-blur-xl' : colors.bgScrolled} border-t ${(isLightVariant || isWeddingDark || isPartyDark) ? 'border-gray-200' : 'border-white/10'} px-4 py-4 space-y-2`}>
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                onNavigate(item.key as 'home' | 'wedding' | 'party');
                setIsOpen(false);
              }}
              className={`block w-full text-left px-4 py-3 rounded-xl transition-all text-sm font-medium ${
                currentPage === item.key
                  ? `${(isLightVariant || isWeddingDark || isPartyDark) ? 'bg-gray-100 text-gray-900' : (currentPage === 'party' ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-900')}`
                  : `${(isLightVariant || isWeddingDark || isPartyDark) ? 'text-gray-600 hover:bg-gray-50' : (currentPage === 'party' ? 'text-gray-300 hover:bg-white/5' : 'text-gray-600 hover:bg-gray-50')}`
              }`}
            >
              {item.label}
            </button>
          ))}
          {(isLightVariant || isWeddingDark || isPartyDark) ? (
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-6 py-3 rounded-xl text-sm font-medium transition-all mt-4 text-white"
              style={{ backgroundColor: colors.buttonBg }}
            >
              Jetzt anfragen
            </a>
          ) : (
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className={`block w-full text-center px-6 py-3 ${colors.button} rounded-xl text-sm font-medium transition-all mt-4`}
            >
              Jetzt anfragen
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
