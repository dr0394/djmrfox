import { Music2, Mail, Phone, MapPin, Heart, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  type: 'home' | 'wedding' | 'party';
  onNavigate: (page: 'home' | 'wedding' | 'party') => void;
  variant?: 'light' | 'dark';
}

const Footer = ({ type, onNavigate, variant = 'light' }: FooterProps) => {
  const isWedding = type === 'wedding';
  const isParty = type === 'party';

  const getAccentColor = () => {
    if (isWedding) return '#C09BB9';
    if (isParty) return '#FF6B00';
    return '#0891b2';
  };

  const accentColor = getAccentColor();
  const email = type === 'wedding' ? 'info@ihrhochzeits-dj.com' : type === 'party' ? 'info@ihr-party-dj.com' : 'info@dj-mrfox.com';
  const address = type === 'wedding' ? 'Am Busch 11, 15806 Zossen' : 'Dorfstraße 35a, 13597 Berlin';

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: accentColor }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 pt-20 pb-8 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              {type === 'wedding' ? (
                <img
                  src="https://ihrhochzeits-dj.com/images/logo-hdj-ohne-ringe_8gltpx3c.png"
                  alt="Ihr Hochzeits-DJ"
                  className="h-14 w-auto brightness-0 invert"
                />
              ) : (
                <>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: accentColor }}
                  >
                    <Music2 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">DJ Mr. Fox</div>
                    <div className="text-gray-400 text-sm">
                      {type === 'party' && 'Ihr Party-DJ'}
                      {type === 'home' && 'Professioneller DJ-Service'}
                    </div>
                  </div>
                </>
              )}
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
              Über 20 Jahre Erfahrung für unvergessliche Events. Professionell, zuverlässig und mit Leidenschaft für gute Musik.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:015228459456"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/15 rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4" style={{ color: accentColor }} />
                <span className="text-sm">01522 8459456</span>
              </a>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/15 rounded-xl transition-colors"
              >
                <Mail className="w-4 h-4" style={{ color: accentColor }} />
                <span className="text-sm">{email}</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-4">
              {[
                { label: 'Startseite', page: 'home' as const },
                { label: 'Hochzeits-DJ', page: 'wedding' as const },
                { label: 'Party-DJ', page: 'party' as const }
              ].map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span>Kontakt</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Rechtliches</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#impressum"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span>Impressum</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </li>
              <li>
                <a
                  href="#datenschutz"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span>Datenschutz</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: accentColor }} />
                <span className="text-sm text-gray-400">{address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>{new Date().getFullYear()} DJ Mr. Fox</span>
              <span className="text-gray-600">|</span>
              <span className="flex items-center gap-1">
                Mit <Heart className="w-3 h-3" style={{ color: accentColor }} /> gemacht
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <span>Alle Inhalte urheberrechtlich geschützt</span>
              <span className="hidden md:inline text-gray-700">|</span>
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors underline underline-offset-2"
              >
                EU-Streitschlichtung
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
