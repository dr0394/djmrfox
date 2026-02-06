import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Music2, Heart, PartyPopper, CheckCircle, ArrowRight, Play } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FAQAccordion from '../components/FAQAccordion';
import ContactSection from '../components/ContactSection';
import GallerySection from '../components/GallerySection';
import MultiStepForm from '../components/MultiStepForm';
import WhatsAppButton from '../components/WhatsAppButton';
import CookieBanner from '../components/CookieBanner';
import GoogleReviews from '../components/GoogleReviews';
import ParallaxSection from '../components/ParallaxSection';

const HomePage = () => {
  const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const homeFaqs = [
    {
      question: "Wie früh sollte ich Sie buchen?",
      answer: "Je früher, desto besser – vor allem für Hochzeiten und Events an Wochenenden. Schreiben Sie mir einfach und wir schauen, ob Ihr Wunschtermin noch frei ist."
    },
    {
      question: "Was kostet es, Sie zu buchen?",
      answer: "Das hängt von der Art Ihres Events, der Location und der Dauer ab. Schreiben Sie mir die Details und ich schicke Ihnen innerhalb von 24 Stunden ein faires Angebot."
    },
    {
      question: "Kann ich Musikwünsche äußern?",
      answer: "Auf jeden Fall! Sie können mir im Vorfeld eine Wunschliste schicken und auch während der Party jederzeit Wünsche äußern. Ihr Event, Ihre Musik."
    },
    {
      question: "Machen Sie Pausen beim Auflegen?",
      answer: "Nein. Die Musik läuft durchgehend – von der ersten bis zur letzten Minute. So bleibt die Stimmung die ganze Nacht über auf dem Höhepunkt."
    },
    {
      question: "Bringen Sie Ihre eigene Technik mit?",
      answer: "Ja, alles inklusive. Ich bringe professionelles Sound- und Lichtequipment mit. Sie brauchen nur einen Stromanschluss und etwas Platz für meinen Aufbau."
    }
  ];

  return (
    <div className="relative bg-white overflow-x-hidden">
      <Navigation />

      <section className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.imgur.com/6FBRmId.jpeg"
            alt="DJ Event Hintergrund"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 min-h-screen flex items-center pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left order-1 lg:order-1">
                <a
                  href="https://www.google.com/search?sca_esv=d237f51df001ed9b&sxsrf=ANbL-n7wCh1qkjDhZif_gdNJiTEWSTYmqw:1769161897995&si=AL3DRZHrmvnFAVQPOO2Bzhf8AX9KZZ6raUI_dT7DG_z0kV2_x4QlQY-mut2sV68S_F_ltiARfVzor71oGTCSB91RonIrmsIPJj3Vv3OcsI38v6f0fVxW-n5RmTHzaqfntvkU-sPqXEpn&q=DJ+Mr.+Fox+Rezensionen&sa=X&ved=2ahUKEwibsuvTsaGSAxUn8rsIHSmsAMwQ0bkNegQINxAH&biw=1728&bih=889&dpr=2&aic=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full px-5 py-3 mb-8 shadow-sm hover:shadow-md transition-all"
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
                        <svg key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-700 text-sm font-medium">5.0 auf Google</span>
                  </div>
                </a>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Ihr Event.{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-[#027BC8] to-[#2ACFFD] bg-clip-text text-transparent">
                    Unvergesslich.
                  </span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-[#2ACFFD]/30 -rotate-1"></span>
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Ich bin <strong className="text-gray-900 font-semibold">DJ Mr. Fox</strong>. Seit 20 Jahren sorge ich dafür, dass Ihre Gäste
                <span className="text-[#027BC8] font-semibold"> bis 6 Uhr morgens tanzen</span>.
              </p>

              <div className="lg:hidden mb-8">
                <div className="relative max-w-xs mx-auto">
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#027BC8]/30 via-[#2ACFFD]/30 to-[#027BC8]/30 rounded-3xl blur-2xl animate-pulse"></div>
                  <div className="relative aspect-[2/3] rounded-2xl overflow-hidden border-2 border-white/40 shadow-2xl shadow-[#027BC8]/20">
                    <img
                      src="https://i.imgur.com/tPiandQ.jpeg"
                      alt="DJ Mr. Fox"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-[#027BC8] to-[#2ACFFD] text-white rounded-xl text-lg font-semibold hover:opacity-90 transition-all shadow-lg shadow-[#027BC8]/20"
                >
                  Jetzt Anfrage senden
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => document.getElementById('meine-geschichte')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-5 border-2 border-[#027BC8] text-[#027BC8] rounded-xl text-lg font-medium hover:bg-[#027BC8]/5 transition-all"
                >
                  <Play className="w-5 h-5" />
                  Mehr erfahren
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-[#027BC8] flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Volle Tanzfläche garantiert</span>
                </div>
                <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-[#027BC8] flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Musik für alle Generationen</span>
                </div>
                <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-[#027BC8] flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Profi-Equipment inklusive</span>
                </div>
                <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-[#027BC8] flex-shrink-0" />
                  <span className="text-gray-700 text-sm">20+ Jahre Erfahrung</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative order-2 lg:order-2">
              <div className="relative max-w-sm mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#027BC8]/30 via-[#2ACFFD]/30 to-[#027BC8]/30 rounded-3xl blur-2xl animate-pulse"></div>
                <div className="relative aspect-[2/3] rounded-3xl overflow-hidden border-2 border-white/40 shadow-2xl shadow-[#027BC8]/20">
                  <img
                    src="https://i.imgur.com/RRjxyv1.jpeg"
                    alt="DJ Mr. Fox"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white backdrop-blur-xl border border-gray-200 rounded-2xl p-5 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#027BC8] to-[#2ACFFD] rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-900 font-medium">Erfahrung seit 2003</div>
                      <div className="text-gray-500 text-sm">Ihr Partner für Events</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      <ParallaxSection
        imageUrl="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1920"
        height="medium"
        overlayOpacity={0.75}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ein DJ macht den Unterschied
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
            Zwischen einer Party, die in Erinnerung bleibt, und einer Party, die schon während des Events vergessen wird.
          </p>
          <button
            onClick={() => setIsFormOpen(true)}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all shadow-2xl"
          >
            Jetzt anfragen
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </ParallaxSection>

      <section id="meine-geschichte" className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#027BC8]/10 border border-[#027BC8]/20 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-[#027BC8] rounded-full"></div>
              <span className="text-[#027BC8] text-sm font-semibold uppercase tracking-wider">Die Lösung</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Ein DJ, der Ihre{' '}
              <span className="bg-gradient-to-r from-[#027BC8] to-[#2ACFFD] bg-clip-text text-transparent">Gäste versteht</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                    <img
                      src="https://i.imgur.com/t0zaQat.jpeg"
                      alt="DJ Setup"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                    <img
                      src="https://i.imgur.com/zBH9mtO.jpeg"
                      alt="Party Crowd"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                    <img
                      src="https://i.imgur.com/gthBXHs.jpeg"
                      alt="Party Atmosphere"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                    <img
                      src="https://i.imgur.com/SC8oJvS.jpeg"
                      alt="Hochzeit"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-br from-[#027BC8] to-[#2ACFFD] text-white px-8 py-5 rounded-2xl shadow-2xl shadow-[#027BC8]/30 border border-[#2ACFFD]/30 z-10">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold mb-1">20+</div>
                  <div className="text-[#2ACFFD]/70 text-sm">Jahre Erfahrung</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed mb-10">
                <p>
                  <strong className="text-gray-900 font-semibold">Ich bin DJ Mr. Fox.</strong> Seit 2003 ist es mein Job,
                  Menschen zum Tanzen zu bringen. Nicht irgendwie – sondern so, dass sie noch Jahre später davon erzählen.
                </p>
                <p>
                  Ich lese die Stimmung. Ich spüre, wann der richtige Moment für den nächsten Hit ist.
                  Und ich weiß genau, welcher Song bei welcher Gästegruppe funktioniert.
                </p>
                <div className="bg-[#027BC8]/10 border-l-4 border-[#027BC8] p-6 rounded-xl">
                  <p className="text-gray-900 font-medium italic">
                    "Der perfekte Moment entsteht nicht durch Zufall – sondern durch Erfahrung, Gespür und die richtige Musik zur richtigen Zeit."
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsFormOpen(true)}
                className="group inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-[#027BC8] to-[#2ACFFD] text-white rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-[#027BC8]/30 transition-all"
              >
                Unverbindlich anfragen
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: CheckCircle, title: 'Volle Tanzfläche', desc: 'Von Anfang bis Ende' },
              { icon: Heart, title: 'Alle Generationen', desc: 'Musik für jeden Geschmack' },
              { icon: Music2, title: 'Profi-Technik', desc: 'Komplett inklusive' },
              { icon: Music2, title: 'Non-Stop-Musik', desc: 'Keine Pausen' }
            ].map((item, i) => (
              <div key={i} className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#2ACFFD] hover:bg-[#027BC8]/5 transition-all shadow-sm">
                <item.icon className="w-8 sm:w-10 h-8 sm:h-10 text-[#027BC8] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ParallaxSection
        imageUrl="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1920"
        height="large"
        overlayOpacity={0.8}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Ihr Event verdient mehr als Standard
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto">
            Ich arbeite ohne starre Playlists und passe mich Ihnen und Ihren Gästen an – von der ersten bis zur letzten Minute.
          </p>
          <button
            onClick={() => setIsFormOpen(true)}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#027BC8] to-[#2ACFFD] text-white rounded-xl text-lg sm:text-xl font-semibold hover:shadow-2xl hover:shadow-[#027BC8]/30 transition-all"
          >
            Jetzt kurz schreiben
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </ParallaxSection>

      <section className="py-20 md:py-28 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#027BC8]/10 border border-[#027BC8]/20 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-[#027BC8] rounded-full"></div>
              <span className="text-[#027BC8] text-sm font-semibold uppercase tracking-wider">Meine Spezialgebiete</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Was darf es für Sie sein?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div
              onClick={() => navigate('/hochzeit')}
              className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-[3/4] md:aspect-auto md:h-[550px] border border-gray-200 shadow-lg hover:shadow-2xl transition-all"
            >
              <img
                src="https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Hochzeit"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-16 h-16 rounded-2xl overflow-hidden mb-6 shadow-lg">
                  <img src="https://i.imgur.com/7fgTevm.png" alt="Hochzeit Logo" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Hochzeit</h3>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-md">
                  Ihr schönster Tag verdient den perfekten Soundtrack. Von der Trauung bis zum letzten Tanz.
                </p>
                <div className="inline-flex items-center gap-3 text-lg font-semibold text-white group-hover:gap-5 transition-all">
                  Mehr erfahren
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </div>

            <div
              onClick={() => navigate('/party')}
              className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-[3/4] md:aspect-auto md:h-[550px] border border-gray-200 shadow-lg hover:shadow-2xl transition-all"
            >
              <img
                src="https://i.imgur.com/SJb7hcc.jpeg"
                alt="Party"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-16 h-16 rounded-2xl overflow-hidden mb-6 shadow-lg">
                  <img src="https://i.imgur.com/ym4Cnoe.png" alt="Party Logo" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Party</h3>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-md">
                  Geburtstag, Firmenfeier oder Festival? Ich sorge dafür, dass Ihre Gäste nicht mehr aufhören wollen.
                </p>
                <div className="inline-flex items-center gap-3 text-lg font-semibold text-white group-hover:gap-5 transition-all">
                  Mehr erfahren
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => setIsFormOpen(true)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#027BC8] to-[#2ACFFD] text-white rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-[#027BC8]/30 transition-all"
            >
              Jetzt unverbindlich anfragen
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <GoogleReviews onCTAClick={() => setIsFormOpen(true)} />

      <GallerySection />

      <section className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#027BC8]/10 border border-[#027BC8]/20 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-[#027BC8] rounded-full"></div>
              <span className="text-[#027BC8] text-sm font-semibold uppercase tracking-wider">Der Ablauf</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              So einfach geht's
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              In nur vier Schritten zu Ihrem unvergesslichen Event
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#027BC8]/30 to-transparent"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Sie schreiben mir",
                  desc: "Erzählen Sie mir von Ihrem Event. Ich antworte innerhalb von 24 Stunden.",
                  icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                },
                {
                  step: "02",
                  title: "Wir sprechen",
                  desc: "Telefonat oder Treffen. Ich will verstehen, was Sie sich wünschen.",
                  icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                },
                {
                  step: "03",
                  title: "Ich bereite vor",
                  desc: "Musikwünsche oder freie Hand - ich stelle die perfekte Playlist zusammen.",
                  icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                },
                {
                  step: "04",
                  title: "Event wird legendär",
                  desc: "90 Min vorher da, entspannter Aufbau - dann tanzen Ihre Gäste bis zum Schluss.",
                  icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                }
              ].map((item, i) => (
                <div key={i} className="group relative">
                  <div className="relative flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <div className="absolute -inset-3 bg-gradient-to-br from-[#027BC8]/20 to-[#2ACFFD]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative w-20 h-20 bg-gradient-to-br from-[#027BC8] to-[#2ACFFD] rounded-2xl flex items-center justify-center shadow-lg shadow-[#027BC8]/30 group-hover:shadow-[#027BC8]/50 group-hover:scale-110 transition-all duration-300">
                        <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                        </svg>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-[#027BC8] rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-[#027BC8]">{item.step}</span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#027BC8] transition-colors">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                  </div>

                  {i < 3 && (
                    <div className="hidden lg:block absolute top-10 -right-4 w-8 text-[#027BC8]/40">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => setIsFormOpen(true)}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#027BC8] to-[#2ACFFD] text-white rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-[#027BC8]/30 transition-all"
            >
              Jetzt Schritt 1 starten
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#027BC8]/10 border border-[#027BC8]/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-[#027BC8] rounded-full"></div>
            <span className="text-[#027BC8] text-sm font-semibold uppercase tracking-wider">Bekannt von</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Locations, die mir vertrauen
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'The Lakeside Burghotel zu Strausberg',
              'Hotel "Döllnsee" Schorfheide',
              'Hotel "Jagdschloss Waldsee"',
              'Relais & Chateaux Gutshaus Stolpe',
              'Landhaus "Hubertus" Berlin',
              'Seehotel Schloss Klink Müritz',
              '"Templiner Hof" Fürstenberg',
              'Cafe Wildau',
              'KHC Kühlhausberg Neustrelitz'
            ].map((name, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all">
                <span className="text-base sm:text-lg font-medium text-gray-900">{name}</span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <button
              onClick={() => setIsFormOpen(true)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#027BC8] to-[#2ACFFD] text-white rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-[#027BC8]/30 transition-all"
            >
              Jetzt Termin sichern
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#027BC8]/10 border border-[#027BC8]/20 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-[#027BC8] rounded-full"></div>
              <span className="text-[#027BC8] text-sm font-semibold uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Noch Fragen?
            </h2>
          </div>
          <FAQAccordion faqs={homeFaqs} variant="light" />

          <div className="mt-12 text-center">
            <button
              onClick={() => setIsFormOpen(true)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#027BC8] to-[#2ACFFD] text-white rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-[#027BC8]/30 transition-all"
            >
              Weitere Fragen? Schreib mir
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <ParallaxSection
        imageUrl="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1920"
        height="medium"
        overlayOpacity={0.75}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Bereit für ein unvergessliches Event?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
            Schreiben Sie mir jetzt und sichern Sie sich Ihren Wunschtermin.
            Beliebte Daten sind schnell vergeben.
          </p>
          <button
            onClick={() => setIsFormOpen(true)}
            className="group inline-flex items-center gap-3 px-10 py-6 bg-white text-gray-900 rounded-2xl text-xl font-semibold hover:bg-gray-100 transition-all shadow-2xl shadow-black/20"
          >
            Jetzt anfragen
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </ParallaxSection>

      <ContactSection type="home" variant="light" />

      <Footer />

      <MultiStepForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} initialEventType="general" />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
};

export default HomePage;
