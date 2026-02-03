import { Music2, Mail, Phone, MapPin, Heart, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);
  const location = useLocation();

  const type = location.pathname === '/hochzeit' ? 'wedding' : location.pathname === '/party' ? 'party' : 'home';

  const isWedding = type === 'wedding';
  const isParty = type === 'party';

  const getAccentColor = () => {
    if (isWedding) return '#C09BB9';
    if (isParty) return '#FF6B00';
    return '#0891b2';
  };

  const accentColor = getAccentColor();
  const email = type === 'wedding' ? 'info@ihrhochzeits-dj.com' : type === 'party' ? 'info@ihr-party-dj.com' : 'info@dj-mrfox.com';
  const address = type === 'wedding' ? 'Am Busch 11, 15806 Zossen' : 'Am Busch 11, 15806 Zossen';

  return (
    <>
      <footer className="bg-gradient-to-br from-gray-50 to-white text-gray-900 relative overflow-hidden border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 pt-20 pb-8 relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <Link
                to="/"
                className="flex items-center gap-4 mb-6 hover:opacity-80 transition-opacity"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: accentColor }}
                >
                  <Music2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">DJ Mr. Fox</div>
                  <div className="text-gray-600 text-sm">
                    {type === 'wedding' && 'Ihr Hochzeits-DJ'}
                    {type === 'party' && 'Ihr Party-DJ'}
                    {type === 'home' && 'Professioneller DJ-Service'}
                  </div>
                </div>
              </Link>
              <p className="text-gray-600 mb-8 leading-relaxed max-w-md">
                Über 20 Jahre Erfahrung für unvergessliche Events. Professionell, zuverlässig und mit Leidenschaft für gute Musik.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:015228459456"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 hover:border-gray-400 rounded-xl transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4" style={{ color: accentColor }} />
                  <span className="text-sm text-gray-900">01522 8459456</span>
                </a>
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 hover:border-gray-400 rounded-xl transition-colors shadow-sm"
                >
                  <Mail className="w-4 h-4" style={{ color: accentColor }} />
                  <span className="text-sm text-gray-900">{email}</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-gray-900">Navigation</h3>
              <ul className="space-y-4">
                {[
                  { label: 'Startseite', path: '/' },
                  { label: 'Hochzeits-DJ', path: '/hochzeit' },
                  { label: 'Party-DJ', path: '/party' }
                ].map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 group"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href="#contact"
                    className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 group"
                  >
                    <span>Kontakt</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-gray-900">Rechtliches</h3>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => setShowImpressum(true)}
                    className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 group"
                  >
                    <span>Impressum</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowDatenschutz(true)}
                    className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 group"
                  >
                    <span>Datenschutz</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </button>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: accentColor }} />
                  <span className="text-sm text-gray-600">{address}</span>
                </div>
                <div className="mt-4 flex items-start gap-3">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: accentColor }} />
                  <a href="https://wa.me/4915228459456" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    WhatsApp: +49 1522 8459456
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <span>{new Date().getFullYear()} DJ Mr. Fox</span>
                <span className="text-gray-400">|</span>
                <span className="flex items-center gap-1">
                  Mit <Heart className="w-3 h-3" style={{ color: accentColor }} /> gemacht
                </span>
              </div>

              <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
                <span>Alle Inhalte urheberrechtlich geschützt</span>
                <span className="hidden md:inline text-gray-400">|</span>
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-700 transition-colors underline underline-offset-2"
                >
                  EU-Streitschlichtung
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {showImpressum && (
        <div className="fixed inset-0 z-50 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowImpressum(false)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Impressum</h2>
              <button onClick={() => setShowImpressum(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Angaben gemäß § 5 TMG</h3>
                <p>Stefan Zetzsche</p>
                <p>DJ Mr. Fox</p>
                <p>{address}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Kontakt</h3>
                <p>Telefon: 01522 8459456</p>
                <p>E-Mail: {email}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Steuernummer</h3>
                <p>FA Luckenwalde 050/292/07390</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                <p>Stefan Zetzsche</p>
                <p>{address}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Haftungsausschluss</h3>
                <p className="mb-2"><strong>Haftung für Inhalte:</strong> Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.</p>
                <p className="mb-2"><strong>Haftung für Links:</strong> Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.</p>
                <p><strong>Urheberrecht:</strong> Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {showDatenschutz && (
        <div className="fixed inset-0 z-50 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowDatenschutz(false)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Datenschutzerklärung</h2>
              <button onClick={() => setShowDatenschutz(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Datenschutz auf einen Blick</h3>
                <p className="mb-2"><strong>Allgemeine Hinweise:</strong> Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Datenerfassung auf dieser Website</h3>
                <p className="mb-2"><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
                <p className="mb-2">Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
                <p className="mb-2"><strong>Wie erfassen wir Ihre Daten?</strong></p>
                <p className="mb-2">Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Allgemeine Hinweise und Pflichtinformationen</h3>
                <p className="mb-2"><strong>Datenschutz:</strong> Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
                <p className="mb-2">Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Kontaktformular</h3>
                <p className="mb-2">Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.</p>
                <p className="mb-2">Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
                <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Ihre Rechte</h3>
                <p className="mb-2">Sie haben das Recht:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
                  <li>Die Berichtigung unrichtiger oder die Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
                  <li>Die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
                  <li>Die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">6. Cookies</h3>
                <p>Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher zu gestalten. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und einzeln über deren Annahme entscheiden.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
