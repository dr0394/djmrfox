import { useState } from 'react';
import { Heart, Music, Mic, Sparkles, CheckCircle, Calendar, Clock, Users, Mail, Phone, Gift, Star, ArrowRight, Play } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import TestimonialSlider from '../components/TestimonialSlider';
import FAQAccordion from '../components/FAQAccordion';
import ContactSection from '../components/ContactSection';
import MultiStepForm from '../components/MultiStepForm';
import WhatsAppButton from '../components/WhatsAppButton';
import CookieBanner from '../components/CookieBanner';

const accentColor = '#C09BB9';
const accentColorLight = '#d4b8cf';
const accentColorDark = '#a07a99';

const WeddingPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const weddingTestimonials = [
    {
      text: "Stefan, wir danken dir für unsere wundervolle Hochzeitsfeier! Nach anfänglichen Schwierigkeiten haben wir einen Musikabend erleben dürfen, den wir nicht so schnell vergessen. Ich habe Menschen tanzen sehen, bei denen ich es NIEMALS für ansatzweise möglich gehalten hätte - alle voll des Lobes für deine Musikauswahl.",
      author: "Svenja & Tobi",
      event: "Hochzeit"
    },
    {
      text: "Vielen vielen Dank nochmal für den gelungenen Abend! Es hat alles so gut geklappt, es war wirklich unser schönster Tag. Die Musikwünsche erfüllt, alles in einer super Zusammenstellung. Das hat alles gepasst! Es war ein traumhafter Abend!",
      author: "Mandy & Denis",
      event: "Hochzeit"
    },
    {
      text: "Die Party war einfach Spitze, auch dank deiner Musik. Als Moderator auch ein Topmann. Junge hast du die Versteigerung des Strumpfbandes gerockt! Wir werden dich beim nächsten Anlass auf jeden Fall wieder buchen.",
      author: "Lysanna & Marcel",
      event: "Hochzeit"
    },
    {
      text: "Wir können dich nur weiterempfehlen. Die Vorbereitung war sehr angenehm und unkompliziert. Und wir hatten einen tollen Abend! Das Eingehen auf die verschiedenen Menschen und Musikrichtungen hat sehr gut funktioniert. Alles in Allem SUPER!!!",
      author: "Janina & Stefan",
      event: "Hochzeit"
    },
    {
      text: "Sie haben unsere Hochzeit zu einem wundervollen Tag gemacht. Wir hatten eine tolle Party und Sie haben bei all unseren Gästen und auch dem Chef des Hotels einen riesigen Eindruck hinterlassen. Danke auch für Ihre Flexibilität bei der Erfüllung all der vielen Musikwünsche.",
      author: "Nicole & Mike",
      event: "Hochzeit"
    },
    {
      text: "Die Musikauswahl bei der Hochzeit war dann klasse, die Übergänge grandios und deine Moderationen super! Besonders klasse war, dass wirklich alle getanzt haben und immer für jeden etwas dabei war. Als wir alle zusammen im Kreis zu russischen und griechischen Klängen tanzten, war ich überglücklich.",
      author: "Sarah & Christoph",
      event: "Hochzeit"
    },
    {
      text: "Vielen Dank für die wunderbare musikalische Gestaltung von unserem Polterabend und unserer Hochzeit! Wir haben gefeiert bis morgens um 6:00 Uhr, es war großartig! Du hast dich auf all unsere Wünsche eingelassen, die Musik zum Essen war toll und später kamen unsere Lieder und die Wünsche der Gäste, alle haben getanzt.",
      author: "Elisabeth",
      event: "Hochzeit & Polterabend"
    },
    {
      text: "Vielen Dank für die tolle musikalische Begleitung unseres ganzen Hochzeitstages! Es hat viel Spaß gemacht und für uns war es perfekt!",
      author: "Dana & Daniel",
      event: "Hochzeit"
    },
    {
      text: "Wir hatten eine tolle Party und haben getanzt, bis die Sonne wieder aufging; genau, wie wir uns das gewünscht hatten. Herzlichen Dank für Ihre Ausdauer bis morgens um 5:30 Uhr und die Flexibilität bei den Musikwünschen der Gäste!",
      author: "Sabine & Philipp",
      event: "Hochzeit"
    },
    {
      text: "Du hast uns bei einer vorherigen Hochzeit überzeugt und auch bei unserer Feier haben wir mit Dir die richtige Wahl getroffen: super Organisation, keine offene Fragen und Musik, wie wir und unsere Gäste sie sich gewünscht haben! Ein ganz besonderes Dankeschön für den Schnitt unseres Hochzeitssongs. Grandiose Party - 100% zufrieden!",
      author: "Julia & Karsten",
      event: "Hochzeit"
    }
  ];

  const weddingFaqs = [
    {
      question: "Wie weit im Voraus sollte ich für meine Hochzeit buchen?",
      answer: "Eine frühzeitige Buchung ist sehr empfehlenswert, insbesondere für Hochzeiten an beliebten Terminen (Samstage in der Hochsaison Mai bis September). Idealerweise 6-12 Monate im Voraus, aber kontaktieren Sie mich gerne auch kurzfristig – manchmal lässt sich noch etwas einrichten."
    },
    {
      question: "Können wir Sie vorher persönlich kennenlernen?",
      answer: "Selbstverständlich! Ein persönliches Kennenlernen ist jederzeit möglich – entweder vor Ort, per Telefon oder via Skype/Videoanruf. So können wir alle Details besprechen und Sie bekommen ein Gefühl dafür, wer Ihren großen Tag musikalisch begleitet."
    },
    {
      question: "Wie lange spielen Sie auf unserer Hochzeit?",
      answer: "Ich biete verschiedene Pakete an: Ein Paket mit fester Endzeit (z.B. bis Mitternacht) oder die Open-End-Option, bei der ich so lange spiele, bis die letzten Gäste gehen. Die Open-End-Option ist besonders beliebt, da Sie sich keine Gedanken über zusätzliche Kosten machen müssen und die Party so lange dauern kann, wie Sie möchten."
    },
    {
      question: "Gibt es während der Hochzeit Spielpausen?",
      answer: "Nein, die Musik läuft durchgehend – außer Sie wünschen ausdrücklich eine Pause (z.B. für Reden oder Spiele). So bleibt die Stimmung konstant gut und die Tanzfläche gefüllt."
    },
    {
      question: "Was benötigen Sie für Verpflegung und wie erfolgt die Bezahlung?",
      answer: "Ich benötige lediglich alkoholfreie Getränke und eine kleine Stärkung während der Veranstaltung. Die Bezahlung erfolgt normalerweise nach der Hochzeit in bar. Alle Details werden im Angebot festgehalten."
    },
    {
      question: "Wie viel Platz und welche technischen Voraussetzungen benötigen Sie?",
      answer: "Ich benötige etwa 2×2 Meter Platz für den DJ-Stand und einen normalen Stromanschluss (230V). Die komplette Licht- und Tontechnik bringe ich mit. Der Aufbau dauert etwa 90 Minuten, daher reise ich ca. 90 Minuten vor Beginn an."
    },
    {
      question: "Können wir unsere Musikwünsche mitteilen?",
      answer: "Unbedingt! Sie erhalten von mir einen Musikwunschbogen, den Sie vor der Hochzeit ausfüllen können. Außerdem liegt am Veranstaltungstag ein Musikwunschzettel aus, sodass auch Ihre Gäste Wünsche äußern können. Eigene CDs sind ebenfalls willkommen."
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
      question: "Was passiert, wenn Sie krank werden?",
      answer: "Für den unwahrscheinlichen Fall einer Erkrankung habe ich ein Netzwerk an professionellen Vertretungs-DJs, die einspringen können. Ihre Hochzeit ist in jedem Fall abgesichert."
    }
  ];

  return (
    <div className="relative bg-white">
      <section className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.imgur.com/PW5BLgA.jpeg"
            alt="Hochzeit Hintergrund"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/75 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10">
          <Navigation />

          <div className="min-h-[calc(100vh-5rem)] flex items-center overflow-hidden pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 lg:order-1">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="https://i.imgur.com/7zTzAmc.jpeg"
                      alt="Hochzeit"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <a
                    href="https://www.google.com/search?sca_esv=d237f51df001ed9b&sxsrf=ANbL-n7wCh1qkjDhZif_gdNJiTEWSTYmqw:1769161897995&si=AL3DRZHrmvnFAVQPOO2Bzhf8AX9KZZ6raUI_dT7DG_z0kV2_x4QlQY-mut2sV68S_F_ltiARfVzor71oGTCSB91RonIrmsIPJj3Vv3OcsI38v6f0fVxW-n5RmTHzaqfntvkU-sPqXEpn&q=DJ+Mr.+Fox+Rezensionen&sa=X&ved=2ahUKEwibsuvTsaGSAxUn8rsIHSmsAMwQ0bkNegQINxAH&biw=1728&bih=889&dpr=2&aic=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full px-5 py-3 mb-10 shadow-sm hover:shadow-md transition-all"
                  >
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
                      <span className="text-gray-900 text-sm font-normal">5.0 auf Google</span>
                    </div>
                  </a>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-8 leading-[0.95] tracking-tight">
                  Euer Tag.{' '}
                  <span className="relative">
                    <span className="relative z-10" style={{ color: accentColor }}>
                      Unvergesslich.
                    </span>
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-2xl font-light">
                  Ich bin <strong className="text-gray-900 font-semibold">DJ Mr. Fox</strong>. Seit 20 Jahren sorge ich dafür, dass eure Gäste
                  <span className="text-gray-900 font-semibold"> bis zum Morgengrauen tanzen</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-16">
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="group inline-flex items-center justify-center gap-3 px-10 py-6 text-white rounded-xl text-xl font-medium transition-all shadow-lg hover:shadow-xl"
                    style={{ backgroundColor: accentColor }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = accentColorDark}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = accentColor}
                  >
                    Jetzt Anfrage senden
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => document.getElementById('meine-erfahrung')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group inline-flex items-center justify-center gap-3 px-10 py-6 border-2 border-gray-300 text-gray-900 rounded-xl text-xl font-medium hover:bg-gray-50 transition-all"
                  >
                    <Play className="w-6 h-6 text-gray-900" />
                    Mehr erfahren
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-8 max-w-xl">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-semibold text-gray-900 mb-1">200+</div>
                    <div className="text-gray-600 text-sm uppercase tracking-wider font-light">Hochzeiten</div>
                  </div>
                  <div className="text-center border-l border-r border-gray-300">
                    <div className="text-4xl md:text-5xl font-semibold text-gray-900 mb-1">20+</div>
                    <div className="text-gray-600 text-sm uppercase tracking-wider font-light">Jahre</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-semibold text-gray-900 mb-1">5.0</div>
                    <div className="text-gray-600 text-sm uppercase tracking-wider font-light">Bewertung</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section id="meine-erfahrung" className="py-32 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-16 items-start mb-32">
              <div className="lg:col-span-3 space-y-8">
                <div>
                  <span className="text-sm font-medium tracking-widest uppercase" style={{ color: accentColor }}>Hochzeiten sind meine Leidenschaft</span>
                  <h2 className="text-5xl md:text-6xl font-semibold text-gray-900 mt-4 mb-8 leading-tight">
                    Über 200 Hochzeiten – jede einzigartig
                  </h2>
                </div>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                  <p className="text-2xl font-light text-gray-800">
                    Ich durfte schon so viele Paare an ihrem schonsten Tag begleiten – und jede Hochzeit war anders. Jede hatte ihre eigene Geschichte, ihre eigene Stimmung, ihren eigenen Magic Moment.
                  </p>
                  <p>
                    Von romantischen Schlosshochzeiten uber entspannte Gartenfeiern bis zu eleganten Hotelhochzeiten – ich habe gelernt, dass es nicht den einen perfekten Song gibt. Es geht darum, euch zu verstehen, eure Gaste zu lesen und den richtigen Ton zu treffen.
                  </p>
                  <p>
                    Der erste Tanz, der Moment wenn Oma mit Enkel tanzt, die wilden Partyphase um Mitternacht – ich kenne all diese Momente und weiß genau, welche Musik sie perfekt macht.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="sticky top-8 space-y-8">
                  <img
                    src="https://i.imgur.com/wo664zk.jpeg"
                    alt="DJ Mr. Fox"
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>

            <div className="mb-24">
              <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12 text-center">Warum Brautpaare mich wählen</h3>
              <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
                {[
                  { title: 'Einfühlsame Begleitung', desc: 'Romantische Momente während der Trauung und beim ersten Tanz' },
                  { title: 'Elegante Atmosphäre', desc: 'Dezente Hintergrundmusik beim Dinner, die Gespräche ermöglicht' },
                  { title: 'Generationsübergreifend', desc: 'Tanzmusik, die von der Oma bis zum Enkel alle begeistert' },
                  { title: 'Individuelle Beratung', desc: 'Persönliches Vorgespräch und maßgeschneiderte Musikauswahl' }
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
                <div className="text-5xl font-semibold text-gray-900 mb-3">200+</div>
                <div className="text-lg text-gray-600 font-light">Hochzeiten</div>
              </div>
              <div>
                <div className="text-5xl font-semibold text-gray-900 mb-3">20+</div>
                <div className="text-lg text-gray-600 font-light">Jahre Erfahrung</div>
              </div>
              <div>
                <div className="text-5xl font-semibold text-gray-900 mb-3">100%</div>
                <div className="text-lg text-gray-600 font-light">Herzblut</div>
              </div>
            </div>
          </div>
        </section>

      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-40"></div>

          <div className="max-w-4xl mx-auto text-center relative">
            <h2 className="text-3xl md:text-4xl font-semibold text-white/60 mb-6">
              Unsicher, ob ein DJ zu euch passt?
            </h2>

            <div className="space-y-8 mb-12">
              <p className="text-2xl md:text-3xl lg:text-4xl text-white font-light leading-relaxed">
                Eure Hochzeit verdient <strong className="font-semibold" style={{ color: accentColorLight }}>keinen Show-DJ</strong>, sondern Musik, die im richtigen Moment das Richtige tut.
              </p>

              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-light">
                Ich arbeite ohne starre Playlists und passe mich euch und euren Gästen an – vom Sektempfang bis zum letzten Tanz.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 mb-10">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                Neugierig auf meinen Stil?
              </h3>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 font-light">
                Ich erstelle euch einen kurzen <strong className="font-semibold" style={{ color: accentColorLight }}>4-Titel-Mix in einem Genre Eurer Wahl</strong>, der zeigt, wie sich euer Abend anfühlen könnte.
              </p>

              <div className="space-y-6 text-lg md:text-xl text-white/80 mb-10 font-light">
                <p>
                  Wenn ihr denkt: <span className="text-white font-medium italic">"Ja, genau so soll unsere Hochzeit klingen"</span> – perfekt.
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

              <button
                onClick={() => setIsFormOpen(true)}
                className="group inline-flex items-center justify-center gap-3 px-10 py-6 text-white rounded-xl text-xl font-semibold transition-all shadow-2xl"
                style={{ backgroundColor: accentColor }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = accentColorDark}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = accentColor}
              >
                Jetzt kurz schreiben und Mix erhalten
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

      <section id="services" className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 text-center mb-6">
              Meine Leistungen für Ihren großen Tag
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto font-light">
              Vom ersten Ton bis zum letzten Tanz – rundum-sorglos musikalische Begleitung
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: 'Trauung & Zeremonie',
                  description: 'Feierliche Musik für Ihren Einzug, die Zeremonie und den Auszug – perfekt abgestimmt auf Ihre Wünsche'
                },
                {
                  icon: Sparkles,
                  title: 'Sektempfang',
                  description: 'Elegante Hintergrundmusik für entspannte Gespräche und erste Gratulationen'
                },
                {
                  icon: Users,
                  title: 'Dinner-Begleitung',
                  description: 'Dezente, stilvolle Musik während des Essens – nicht zu laut, nicht zu leise'
                },
                {
                  icon: Music,
                  title: 'Eröffnungstanz',
                  description: 'Beratung zur Songauswahl und professionelle Ansage Ihres ersten Tanzes als Ehepaar'
                },
                {
                  icon: Mic,
                  title: 'Moderation',
                  description: 'Charmante Moderation von Programmpunkten, Reden, Spielen und Überraschungen'
                },
                {
                  icon: Gift,
                  title: 'Party-Musik',
                  description: 'Tanzmusik für alle Altersgruppen – von Schlager bis Charts, von 60er bis heute'
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
                  'Funkmikrofon für Reden',
                  'Kinderlieder auf Wunsch',
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
                  <h3 className="text-3xl font-medium text-gray-900 mb-2">Bis Mitternacht</h3>
                  <p className="text-gray-600">Perfekt für klassische Hochzeitsfeiern</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    'Feste Endzeit (z.B. 0:00 Uhr)',
                    'Alle Leistungen inklusive',
                    'Musik von Trauung bis Mitternacht',
                    'Planbare Kosten'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={() => setIsFormOpen(true)} className="block w-full py-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg text-center font-medium transition-colors border border-gray-300">
                  Angebot anfordern
                </button>
              </div>

              <div className="bg-white p-8 rounded-2xl border-2 relative shadow-sm" style={{ borderColor: accentColor }}>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-white px-6 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: accentColor }}>
                  EMPFOHLEN
                </div>
                <div className="text-center mb-6">
                  <Sparkles className="w-16 h-16 mx-auto mb-4" style={{ color: accentColor }} />
                  <h3 className="text-3xl font-medium text-gray-900 mb-2">Open End</h3>
                  <p className="text-gray-700">Feiern Sie so lange Sie möchten!</p>
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
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="block w-full py-4 text-white rounded-lg text-center font-medium transition-colors"
                  style={{ backgroundColor: accentColor }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = accentColorDark}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = accentColor}
                >
                  Angebot anfordern
                </button>
              </div>
            </div>
            <div className="mt-12 text-center text-gray-600 max-w-3xl mx-auto">
              <p className="mb-4">
                <strong className="text-gray-900">Verpflegung:</strong> Ich benötige lediglich alkoholfreie Getränke und eine kleine Stärkung während der Veranstaltung.
              </p>
              <p>
                <strong className="text-gray-900">Bezahlung:</strong> Die Bezahlung erfolgt normalerweise nach der Hochzeit in bar. Alle Details werden im individuellen Angebot festgehalten.
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
                  description: 'Füllen Sie das Kontaktformular aus oder nutzen Sie den Rückrufservice. Teilen Sie mir Ihren Hochzeitstermin und Ihre Wünsche mit.',
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
                  title: 'Vorgespräch',
                  description: 'Etwa zwei Wochen vor der Hochzeit führen wir ein ausführliches Telefonat zur Feinabstimmung: Eröffnungstanz, Spiele, Highlights, Musikwünsche.',
                  icon: Phone
                },
                {
                  step: '4',
                  title: 'Aufbau & Soundcheck',
                  description: 'Ich reise ca. 90 Minuten vor Beginn der Trauung an und baue das komplette Equipment auf. Alles wird getestet und perfekt vorbereitet.',
                  icon: Music
                },
                {
                  step: '5',
                  title: 'Ihr großer Tag',
                  description: 'Von der Trauung bis zum letzten Tanz bin ich für Sie da. Musikwünsche werden jederzeit entgegengenommen und umgesetzt.',
                  icon: Heart
                },
                {
                  step: '6',
                  title: 'Feedback',
                  description: 'Nach Ihrer Hochzeit freue ich mich über Ihr Feedback. Ihre Erfahrung hilft mir, noch besser zu werden.',
                  icon: Sparkles
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
              Impressionen
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'https://i.imgur.com/MiSynkm.jpeg',
                'https://i.imgur.com/q8ti509.jpeg',
                'https://i.imgur.com/9V8y01m.jpeg',
                'https://i.imgur.com/Xnja1KE.jpeg',
                'https://i.imgur.com/9OUHdZ3.jpeg',
                'https://i.imgur.com/D4pZwBs.jpeg',
                'https://i.imgur.com/ZuUD490.jpeg',
                'https://i.imgur.com/ej3WAAS.jpeg',
                'https://i.imgur.com/Jp8JCWs.jpeg'
              ].map((img, index) => (
                <div key={index} className="relative group overflow-hidden rounded-xl aspect-square cursor-pointer shadow-lg">
                  <img src={img} alt={`Hochzeit ${index + 1}`} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity" style={{ backgroundColor: accentColor }}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

      <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 text-center mb-16">
              Das sagen unsere Brautpaare
            </h2>
            <TestimonialSlider testimonials={weddingTestimonials} accentColor="mauve" variant="light" />
          </div>
        </section>

      <section className="py-24 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 text-center mb-16">
              Häufige Fragen
            </h2>
            <FAQAccordion faqs={weddingFaqs} accentColor="mauve" variant="light" />
          </div>
        </section>

        <ContactSection type="wedding" variant="light" accentColor={accentColor} />

        <Footer />

        <MultiStepForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} initialEventType="wedding" />
        <WhatsAppButton />
        <CookieBanner />
    </div>
  );
};

export default WeddingPage;
