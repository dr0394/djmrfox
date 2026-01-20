import { PartyPopper, Music, Mic, Zap, CheckCircle, Calendar, Clock, Users, Mail, Phone, Building2, Award, Star, ArrowRight, Play, ZoomIn, X } from 'lucide-react';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import TestimonialSlider from '../components/TestimonialSlider';
import FAQAccordion from '../components/FAQAccordion';
import ContactSection from '../components/ContactSection';

interface PartyPageProps {
  onNavigate: (page: 'home' | 'wedding' | 'party') => void;
}

const accentColor = '#FF6B00';
const accentColorLight = '#FF8C33';
const accentColorDark = '#E05A00';

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  type: 'image' | 'video';
}

const partyGalleryItems: GalleryItem[] = [
  {
    src: 'https://i.imgur.com/4kkvnHE.mp4',
    alt: 'Event Video',
    category: 'Video',
    type: 'video'
  },
  {
    src: 'https://i.imgur.com/8xlq3h6.jpeg',
    alt: 'Event Moment',
    category: 'Event',
    type: 'image'
  },
  {
    src: 'https://i.imgur.com/gthBXHs.jpeg',
    alt: 'Party Atmosphere',
    category: 'Party',
    type: 'image'
  },
  {
    src: 'https://i.imgur.com/ARjfNZC.mp4',
    alt: 'DJ Performance',
    category: 'Video',
    type: 'video'
  },
  {
    src: 'https://i.imgur.com/SC8oJvS.jpeg',
    alt: 'Hochzeit',
    category: 'Hochzeit',
    type: 'image'
  },
  {
    src: 'https://i.imgur.com/n15GPbv.jpeg',
    alt: 'Event Setup',
    category: 'Setup',
    type: 'image'
  },
  {
    src: 'https://i.imgur.com/NDVGL8o.jpeg',
    alt: 'Live Performance',
    category: 'Live',
    type: 'image'
  },
  {
    src: 'https://i.imgur.com/33mTfAt.mp4',
    alt: 'Party Video',
    category: 'Video',
    type: 'video'
  },
  {
    src: 'https://i.imgur.com/zVKZ8X6.jpeg',
    alt: 'Event Moment',
    category: 'Event',
    type: 'image'
  },
  {
    src: 'https://i.imgur.com/t0zaQat.jpeg',
    alt: 'DJ Setup',
    category: 'Setup',
    type: 'image'
  },
  {
    src: 'https://i.imgur.com/zBH9mtO.jpeg',
    alt: 'Party Crowd',
    category: 'Party',
    type: 'image'
  },
  {
    src: 'https://i.imgur.com/mUQWp9a.jpeg',
    alt: 'Hochzeitsfeier',
    category: 'Hochzeit',
    type: 'image'
  },
  {
    src: 'https://i.imgur.com/GDHRbrT.jpeg',
    alt: 'Event Atmosphere',
    category: 'Event',
    type: 'image'
  },
  {
    src: 'https://i.imgur.com/nISr7rf.jpeg',
    alt: 'Live Show',
    category: 'Live',
    type: 'image'
  },
  {
    src: 'https://i.imgur.com/SJb7hcc.jpeg',
    alt: 'Party Night',
    category: 'Party',
    type: 'image'
  },
  {
    src: 'https://i.imgur.com/KPytLRO.jpeg',
    alt: 'Event Details',
    category: 'Event',
    type: 'image'
  },
  {
    src: 'https://i.imgur.com/95rGaKS.jpeg',
    alt: 'DJ Equipment',
    category: 'Setup',
    type: 'image'
  },
  {
    src: 'https://i.imgur.com/azx2njQ.jpeg',
    alt: 'Hochzeit Celebration',
    category: 'Hochzeit',
    type: 'image'
  },
  {
    src: 'https://i.imgur.com/f67oWfe.jpeg',
    alt: 'Event Highlights',
    category: 'Event',
    type: 'image'
  },
  {
    src: 'https://i.imgur.com/cbNwVnC.jpeg',
    alt: 'Event Moment',
    category: 'Event',
    type: 'image'
  },
  {
    src: 'https://i.imgur.com/3zDqrc5.jpeg',
    alt: 'Event Memory',
    category: 'Event',
    type: 'image'
  }
];

const PartyPage = ({ onNavigate }: PartyPageProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const openLightbox = (index: number) => {
    setActiveImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % partyGalleryItems.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + partyGalleryItems.length) % partyGalleryItems.length);
  };
  const partyTestimonials = [
    {
      text: "Perfekt abgestimmte Musikauswahl, die auch ein Publikum mit gemischtem Alter begeistert. Die Tanzflache war die ganze Nacht voll!",
      author: "Thomas K.",
      event: "Firmenfeier"
    },
    {
      text: "Eine unvergessliche Nacht bis 4 Uhr morgens! Der DJ hat einfach den richtigen Riecher fur gute Musik und perfektes Timing.",
      author: "Britta",
      event: "60. Geburtstag"
    },
    {
      text: "Unsere Firmenfeier war ein voller Erfolg. Alle Kollegen waren begeistert und die Stimmung war fantastisch!",
      author: "Elisabeth M.",
      event: "Jahresabschlussfeier"
    },
    {
      text: "Die Moderation war professionell und hat die Feier perfekt strukturiert. Wurden wir jederzeit wieder buchen!",
      author: "Kerstin",
      event: "Firmenevent"
    }
  ];

  const partyFaqs = [
    {
      question: "Wie weit im Voraus sollte ich für meine Party buchen?",
      answer: "Eine rechtzeitige Buchung ist empfehlenswert, besonders für beliebte Termine wie Silvester, Fasching oder Wochenenden in der Hauptsaison. Idealerweise 3-6 Monate im Voraus, aber kontaktieren Sie mich gerne auch kurzfristig."
    },
    {
      question: "Können wir Sie vorher persönlich kennenlernen?",
      answer: "Selbstverständlich! Ein persönliches Kennenlernen ist jederzeit möglich – entweder vor Ort, per Telefon oder via Skype/Videoanruf. So können wir alle Details besprechen und Sie bekommen ein Gefühl dafür, wer Ihre Feier musikalisch begleitet."
    },
    {
      question: "Wie lange spielen Sie auf unserer Party?",
      answer: "Ich biete verschiedene Pakete an: Ein Paket mit fester Endzeit (z.B. bis Mitternacht) oder die Open-End-Option, bei der ich so lange spiele, bis die letzten Gäste gehen. Die Open-End-Option ist besonders beliebt für Partys ohne Zeitlimit."
    },
    {
      question: "Gibt es während der Party Spielpausen?",
      answer: "Nein, die Musik läuft durchgehend – außer Sie wünschen ausdrücklich eine Pause (z.B. für Reden oder Spiele). So bleibt die Energie konstant hoch und die Tanzfläche gefüllt."
    },
    {
      question: "Was benötigen Sie für Verpflegung und wie erfolgt die Bezahlung?",
      answer: "Ich benötige lediglich alkoholfreie Getränke und eine kleine Stärkung während der Veranstaltung. Die Bezahlung erfolgt normalerweise nach der Party in bar. Alle Details werden im Angebot festgehalten."
    },
    {
      question: "Wie viel Platz und welche technischen Voraussetzungen benötigen Sie?",
      answer: "Ich benötige etwa 2×2 Meter Platz für den DJ-Stand und einen normalen Stromanschluss (230V). Die komplette Licht- und Tontechnik bringe ich mit. Der Aufbau dauert etwa 45-60 Minuten, daher reise ich ca. 90 Minuten vor Beginn an."
    },
    {
      question: "Können wir unsere Musikwünsche mitteilen?",
      answer: "Unbedingt! Sie erhalten von mir einen Musikwunschbogen, den Sie vor der Party ausfüllen können. Außerdem liegt am Veranstaltungstag ein Musikwunschzettel aus, sodass auch Ihre Gäste Wünsche äußern können."
    },
    {
      question: "Können wir eigene CDs mitbringen?",
      answer: "Ja, gerne! Bitte geben Sie mir Ihre CDs spätestens beim Vorgespräch oder am Veranstaltungstag, damit ich sie in die Playlist integrieren kann."
    },
    {
      question: "Können Sie auch Kinderlieder spielen?",
      answer: "Selbstverständlich! Ich habe eine große Auswahl an Kinderliedern und spiele diese sehr gerne, wenn junge Gäste dabei sind."
    },
    {
      question: "Was ist, wenn die Location bereits eine Anlage hat?",
      answer: "Ich kann auch die vorhandene Anlage der Location nutzen, sofern sie meinen technischen Anforderungen entspricht. Allerdings kann ich für Ausfälle der Location-Technik keine Haftung übernehmen."
    }
  ];

  return (
    <div className="relative bg-white">
      <section className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.imgur.com/tPiandQ.jpeg"
            alt="Party"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        </div>

        <div className="relative z-10">
          <Navigation currentPage="party" onNavigate={onNavigate} variant="dark" />

          <div className="min-h-screen flex items-center overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-3 mb-10">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-white text-sm font-normal">5.0 auf Google</span>
                    </div>
                  </div>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-8 leading-[0.95] tracking-tight">
                    Eure Party.{' '}
                    <span className="relative">
                      <span className="relative z-10" style={{ color: accentColorLight }}>
                        Unvergesslich.
                      </span>
                    </span>
                  </h1>

                  <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl font-light">
                    Ich bin <strong className="text-white font-semibold">DJ Mr. Fox</strong>. Seit 20 Jahren sorge ich dafür, dass eure Gäste
                    <span className="text-white font-semibold"> bis zum Morgengrauen tanzen</span>.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mb-16">
                    <a
                      href="#contact"
                      className="group inline-flex items-center justify-center gap-3 px-10 py-6 text-white rounded-xl text-xl font-medium transition-all shadow-2xl hover:shadow-xl"
                      style={{ backgroundColor: accentColor }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = accentColorDark}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = accentColor}
                    >
                      Jetzt Anfrage senden
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <button
                      onClick={() => document.getElementById('meine-erfahrung')?.scrollIntoView({ behavior: 'smooth' })}
                      className="group inline-flex items-center justify-center gap-3 px-10 py-6 border-2 border-white/50 text-white rounded-xl text-xl font-medium hover:bg-white/10 transition-all"
                    >
                      <Play className="w-6 h-6 text-white" />
                      Mehr erfahren
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-8 max-w-xl">
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-semibold text-white mb-1">300+</div>
                      <div className="text-white/70 text-sm uppercase tracking-wider font-light">Partys</div>
                    </div>
                    <div className="text-center border-l border-r border-white/30">
                      <div className="text-4xl md:text-5xl font-semibold text-white mb-1">20+</div>
                      <div className="text-white/70 text-sm uppercase tracking-wider font-light">Jahre</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-semibold text-white mb-1">5.0</div>
                      <div className="text-white/70 text-sm uppercase tracking-wider font-light">Bewertung</div>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block relative">
                  <div className="relative max-w-md mx-auto">
                    <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-40" style={{ backgroundColor: accentColor }}></div>
                    <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-2 border-white/40 shadow-2xl">
                      <img
                        src="https://i.imgur.com/BB5h6bP.jpeg"
                        alt="DJ Mr. Fox bei einer Party"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent"></div>
                    </div>
                    <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl p-5 shadow-2xl">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: accentColor }}>
                          <Music className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-gray-900 font-medium">Ihr Party-DJ</div>
                          <div className="text-gray-500 text-sm">20+ Jahre Erfahrung</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <div className="w-8 h-14 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-2 h-3 rounded-full animate-pulse" style={{ backgroundColor: accentColorLight }}></div>
          </div>
        </div>
      </section>

      <section id="meine-erfahrung" className="py-32 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-16 items-start mb-32">
              <div className="lg:col-span-3 space-y-8">
                <div>
                  <span className="text-sm font-medium tracking-widest uppercase" style={{ color: accentColor }}>Partys sind meine Leidenschaft</span>
                  <h2 className="text-5xl md:text-6xl font-semibold text-gray-900 mt-4 mb-8 leading-tight">
                    Über 300 Partys – jede unvergesslich
                  </h2>
                </div>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                  <p className="text-2xl font-light text-gray-800">
                    Von intimen Geburtstagsfeiern über große Firmenfeste bis zu legendären Festival-Nächten – ich habe sie alle erlebt. Und jede Party war einzigartig.
                  </p>
                  <p>
                    Ob entspannte Lounge-Atmosphäre beim Dinner oder energiegeladene Tanzmusik bis zum Morgengrauen – ich weiß genau, welcher Sound zu welchem Moment passt. Ich lese die Stimmung, spüre die Energie und weiß, wann es Zeit ist für den nächsten Hit.
                  </p>
                  <p>
                    Von Charts über Classics bis zu speziellen Wünschen – mein Repertoire ist so vielseitig wie eure Gäste. Hauptsache: Die Tanzfläche ist voll und die Stimmung ist perfekt.
                  </p>
                  <p>
                    Seit 2005 werde ich im Ausland als DJ für die Clubs des Premium-Reiseveranstalter ALDIANA gebucht.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="sticky top-8 space-y-8">
                  <img
                    src="https://i.imgur.com/lYwzPd6.jpeg"
                    alt="Party Energy"
                    className="w-full rounded-2xl shadow-2xl"
                  />
                  <img
                    src="https://i.imgur.com/7e8IUh2.jpeg"
                    alt="Party Scene"
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>

            <div className="mb-24">
              <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12 text-center">Warum Firmen und Privatpersonen mich wählen</h3>
              <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
                {[
                  { title: 'Stimmungsvolles Gespür', desc: 'Ich lese die Tanzfläche und reagiere in Echtzeit auf die Energie' },
                  { title: 'Vielseitiges Repertoire', desc: 'Von Chart-Hits bis Classics – für jedes Publikum den richtigen Sound' },
                  { title: 'Internationale Erfahrung', desc: 'Seit 2005 ALDIANA-DJ mit Erfahrung in mehrsprachigen Events weltweit' },
                  { title: 'Open-End-Flexibilität', desc: 'Keine Zeitlimits – ich spiele, bis die letzten Gäste gehen' }
                ].map((item, index) => (
                  <div key={index} className="pb-8 border-b border-gray-200">
                    <h4 className="text-xl font-medium text-gray-900 mb-3">{item.title}</h4>
                    <p className="text-gray-600 font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-5xl font-semibold text-gray-900 mb-3">300+</div>
                <div className="text-lg text-gray-600 font-light">Partys & Events</div>
              </div>
              <div>
                <div className="text-5xl font-semibold text-gray-900 mb-3">20+</div>
                <div className="text-lg text-gray-600 font-light">Jahre Erfahrung</div>
              </div>
              <div>
                <div className="text-5xl font-semibold text-gray-900 mb-3">100%</div>
                <div className="text-lg text-gray-600 font-light">Energie</div>
              </div>
            </div>
          </div>
        </section>

      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-40"></div>

          <div className="max-w-4xl mx-auto text-center relative">
            <h2 className="text-3xl md:text-4xl font-semibold text-white/60 mb-6">
              Unsicher, ob ein DJ zu eurer Party passt?
            </h2>

            <div className="space-y-8 mb-12">
              <p className="text-2xl md:text-3xl lg:text-4xl text-white font-light leading-relaxed">
                Eure Party verdient <strong className="font-semibold" style={{ color: accentColorLight }}>keinen Show-DJ</strong>, sondern Musik, die im richtigen Moment das Richtige tut.
              </p>

              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-light">
                Ich arbeite ohne starre Playlists und passe mich euch und euren Gästen an – vom ersten Beat bis zum letzten Tanz.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 mb-10">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                Neugierig auf meinen Stil?
              </h3>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 font-light">
                Ich erstelle euch einen kurzen <strong className="font-semibold" style={{ color: accentColorLight }}>3-Song-Mix</strong>, der zeigt, wie sich eure Party anfühlen könnte.
              </p>

              <div className="space-y-6 text-lg md:text-xl text-white/80 mb-10 font-light">
                <p>
                  Wenn ihr denkt: <span className="text-white font-medium italic">"Ja, genau so soll unsere Party klingen"</span> – perfekt.
                </p>
                <p>
                  Wenn nicht, dann passen wir nicht zusammen – was völlig in Ordnung ist.
                </p>
              </div>

              <div className="inline-flex flex-col sm:flex-row items-center gap-3 text-white/70 text-sm mb-8">
                <span>Hochzeiten & Events</span>
                <span className="hidden sm:inline">•</span>
                <span>Berlin & Umgebung + 150 km</span>
                <span className="hidden sm:inline">•</span>
                <span className="font-medium" style={{ color: accentColorLight }}>Termine 2026 verfügbar</span>
              </div>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-10 py-6 text-white rounded-xl text-xl font-semibold transition-all shadow-2xl"
                style={{ backgroundColor: accentColor }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = accentColorDark}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = accentColor}
              >
                Jetzt kurz schreiben und Mix erhalten
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

      <section id="services" className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 text-center mb-6">
              Anlässe & Event-Typen
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto font-light">
              Professioneller DJ-Service für jeden Anlass – maßgeschneidert auf eure Party
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: 'Geburtstagsfeiern',
                  description: 'Vom 18. bis zum 80. Geburtstag – Musik für alle Generationen'
                },
                {
                  icon: Building2,
                  title: 'Firmenfeiern',
                  description: 'Jahresabschluss, Jubiläen, Sommerfeste – professionell und unterhaltsam'
                },
                {
                  icon: PartyPopper,
                  title: 'Silvester & Fasching',
                  description: 'Die Klassiker des Jahres – mit der perfekten Partymusik'
                },
                {
                  icon: Music,
                  title: 'Abi-Ball & Jugendweihe',
                  description: 'Moderne Hits und Classics für junge Leute und ihre Familien'
                },
                {
                  icon: Users,
                  title: 'Dorf- & Stadtfeste',
                  description: 'Große Events im Freien mit professioneller Beschallung'
                },
                {
                  icon: Zap,
                  title: 'Private Feiern',
                  description: 'Polterabend, Junggesellenabschied – eure Party, eure Regeln'
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all shadow-sm">
                  <service.icon className="w-12 h-12 mb-4" style={{ color: accentColor }} />
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 font-light">{service.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 bg-gray-50 p-8 rounded-2xl border-2" style={{ borderColor: `${accentColor}50` }}>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Inklusive:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Professionelle Licht- und Tontechnik',
                  'Musikwunschbogen vorab',
                  'Musikwunschzettel vor Ort',
                  'Funkmikrofon für Ansagen',
                  'Moderation auf Wunsch',
                  'Kinderlieder auf Wunsch',
                  'Keine Spielpausen',
                  'Persönliches Vorgespräch'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: accentColor }} />
                    <span className="text-gray-700 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      <section className="py-24 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 text-center mb-16">
              Pakete & Preise
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <div className="text-center mb-6">
                  <Clock className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                  <h3 className="text-3xl font-medium text-gray-900 mb-2">Basis-Paket</h3>
                  <p className="text-gray-600">Perfekt für Events mit festem Zeitplan</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    'Feste Endzeit (z.B. 0:00 Uhr)',
                    'Alle Leistungen inklusive',
                    'Musik vom Start bis zur Endzeit',
                    'Planbare Kosten'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="block w-full py-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg text-center font-medium transition-colors border border-gray-300">
                  Angebot anfordern
                </a>
              </div>

              <div className="bg-white p-8 rounded-2xl border-2 relative shadow-sm" style={{ borderColor: accentColor }}>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-white px-6 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: accentColor }}>
                  EMPFOHLEN
                </div>
                <div className="text-center mb-6">
                  <Zap className="w-16 h-16 mx-auto mb-4" style={{ color: accentColor }} />
                  <h3 className="text-3xl font-medium text-gray-900 mb-2">Open End</h3>
                  <p className="text-gray-700">Feiert so lange ihr möchtet!</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    'Keine Zeitbegrenzung',
                    'Alle Leistungen inklusive',
                    'Musik bis zum letzten Gast',
                    'Keine Überraschungen beim Preis',
                    'Maximale Flexibilität'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: accentColor }} />
                      <span className="text-gray-800 font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="block w-full py-4 text-white rounded-lg text-center font-medium transition-colors"
                  style={{ backgroundColor: accentColor }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = accentColorDark}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = accentColor}
                >
                  Angebot anfordern
                </a>
              </div>
            </div>
            <div className="mt-12 text-center text-gray-600 max-w-3xl mx-auto">
              <p className="mb-4">
                <strong className="text-gray-900">Verpflegung:</strong> Ich benötige lediglich alkoholfreie Getränke und eine kleine Stärkung während der Veranstaltung.
              </p>
              <p>
                <strong className="text-gray-900">Bezahlung:</strong> Die Bezahlung erfolgt normalerweise nach der Party in bar. Alle Details werden im individuellen Angebot festgehalten.
              </p>
            </div>
          </div>
        </section>

      <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 text-center mb-16">
              Ablauf & Vorbereitung
            </h2>
            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Unverbindliche Anfrage',
                  description: 'Füllen Sie das Kontaktformular aus oder nutzen Sie den Rückrufservice. Teilen Sie mir Ihren Termin und Ihre Wünsche mit.',
                  icon: Mail
                },
                {
                  step: '2',
                  title: 'Individuelles Angebot',
                  description: 'Sie erhalten ein maßgeschneidertes Angebot per E-Mail. Nach Ihrer Bestätigung bekommen Sie eine Buchungsbestätigung.',
                  icon: CheckCircle
                },
                {
                  step: '3',
                  title: 'Vorgesprach',
                  description: 'Etwa zwei Wochen vor der Party führen wir ein ausführliches Telefonat zur Feinabstimmung: Programm, Highlights, Musikwünsche.',
                  icon: Phone
                },
                {
                  step: '4',
                  title: 'Aufbau & Soundcheck',
                  description: 'Ich reise ca. 90 Minuten vor Beginn an und baue das komplette Equipment auf. Alles wird getestet und perfekt vorbereitet.',
                  icon: Music
                },
                {
                  step: '5',
                  title: 'Eure Party',
                  description: 'Vom ersten Song bis zum letzten Tanz bin ich für Sie da. Musikwünsche werden jederzeit entgegengenommen und umgesetzt.',
                  icon: PartyPopper
                },
                {
                  step: '6',
                  title: 'Feedback',
                  description: 'Nach Ihrer Party freue ich mich über Ihr Feedback. Ihre Erfahrung hilft mir, noch besser zu werden.',
                  icon: Zap
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 text-white rounded-full flex items-center justify-center text-2xl font-medium" style={{ backgroundColor: accentColor }}>
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <item.icon className="w-8 h-8" style={{ color: accentColor }} />
                      <h3 className="text-2xl font-medium text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 text-lg font-light">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      <section className="py-24 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 text-center mb-16">
              Impressionen & Equipment
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
              {partyGalleryItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="relative group overflow-hidden rounded-xl aspect-square cursor-pointer shadow-lg"
                >
                  {item.type === 'video' ? (
                    <>
                      <video
                        src={item.src}
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-900/40">
                        <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Play className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mb-3 transform scale-75 group-hover:scale-100 transition-transform duration-300" style={{ backgroundColor: 'rgba(255, 107, 0, 0.2)' }}>
                      {item.type === 'video' ? (
                        <Play className="w-6 h-6 text-white" />
                      ) : (
                        <ZoomIn className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <span className="text-white font-medium">{item.category}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-block px-3 py-1 text-white text-xs font-medium rounded-full" style={{ backgroundColor: 'rgba(255, 107, 0, 0.8)' }}>
                      {item.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white p-8 rounded-2xl border-2 shadow-sm" style={{ borderColor: `${accentColor}50` }}>
              <h3 className="text-2xl font-medium text-gray-900 mb-6 text-center">Technische Details</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Professionelle Technik',
                    items: ['Computergesteuerte Lichtanlage der Spitzenklasse inkl. Nebelmaschine & Lasershow', 'Ca. 2×3 m Platzbedarf', 'Standard-Stromanschluss (230V)', 'Kompletter Aufbau in 90-120 Min.']
                  },
                  {
                    title: 'Musikservice',
                    items: ['Keine Spielpausen', 'Musikwunschbogen & -zettel', 'Eigene CDs willkommen', 'Riesiges Musikarchiv', 'Kinderlieder auf Wunsch']
                  },
                  {
                    title: 'Moderation',
                    items: ['Professionelle Moderation', 'Ansagen & Programmpunkte', 'Internationale Events', 'Mehrsprachige Ansagen']
                  }
                ].map((section, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-medium text-gray-900 mb-4">{section.title}</h4>
                    <ul className="space-y-2">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: accentColor }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 text-center mb-16">
              Das sagen meine Kunden
            </h2>
            <TestimonialSlider testimonials={partyTestimonials} accentColor="orange" variant="light" />
          </div>
        </section>

      <section className="py-24 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 text-center mb-16">
              Häufige Fragen
            </h2>
            <FAQAccordion faqs={partyFaqs} accentColor="orange" variant="light" />
          </div>
        </section>

        <ContactSection type="party" variant="light" accentColor={accentColor} />

        <Footer type="party" onNavigate={onNavigate} variant="light" />

        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-gray-950/95 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div
              className="max-w-5xl max-h-[85vh] px-4"
              onClick={(e) => e.stopPropagation()}
            >
              {partyGalleryItems[activeImage].type === 'video' ? (
                <video
                  src={partyGalleryItems[activeImage].src}
                  controls
                  autoPlay
                  className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                />
              ) : (
                <img
                  src={partyGalleryItems[activeImage].src}
                  alt={partyGalleryItems[activeImage].alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                />
              )}
              <div className="text-center mt-4">
                <span className="text-white font-medium">{partyGalleryItems[activeImage].alt}</span>
                <span className="text-gray-500 mx-3">|</span>
                <span style={{ color: accentColorLight }}>{partyGalleryItems[activeImage].category}</span>
              </div>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {partyGalleryItems.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setActiveImage(index); }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeImage
                      ? 'w-6'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  style={index === activeImage ? { backgroundColor: accentColor } : {}}
                />
              ))}
            </div>
          </div>
        )}
    </div>
  );
};

export default PartyPage;
