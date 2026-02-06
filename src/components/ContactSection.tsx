import { useState } from 'react';
import { Mail, Phone, Send, Calendar, Users, MapPin, Clock, MessageSquare, CheckCircle } from 'lucide-react';

interface ContactSectionProps {
  type: 'home' | 'wedding' | 'party';
  variant?: 'light' | 'dark';
  accentColor?: string;
}

const ContactSection = ({ type, variant = 'light', accentColor }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    location: '',
    guestCount: '',
    package: '',
    message: ''
  });

  const isWedding = type === 'wedding';
  const isParty = type === 'party';
  const isHome = type === 'home';

  const getAccentColor = () => {
    if (accentColor) return accentColor;
    if (isWedding) return '#C09BB9';
    if (isParty) return '#FF6B00';
    return '#0891b2';
  };

  const effectiveAccent = getAccentColor();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = type === 'wedding' ? 'info@ihrhochzeits-dj.com' : type === 'party' ? 'info@ihr-party-dj.com' : 'info@dj-mrfox.com';
    const subject = encodeURIComponent(`Anfrage: ${formData.name} - ${formData.eventDate}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nE-Mail: ${formData.email}\nTelefon: ${formData.phone}\n\nVeranstaltungsdatum: ${formData.eventDate}\nOrt: ${formData.location}\nGästezahl: ${formData.guestCount}\nGewünschtes Paket: ${formData.package}\n\nNachricht:\n${formData.message}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactEmail = type === 'wedding' ? 'info@ihrhochzeits-dj.com' : type === 'party' ? 'info@ihr-party-dj.com' : 'info@dj-mrfox.com';

  return (
    <section id="contact" className="py-28 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: effectiveAccent }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-15"
        style={{ backgroundColor: effectiveAccent }}
      ></div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 backdrop-blur-sm border rounded-full px-5 py-2.5 mb-6 shadow-sm"
            style={{ backgroundColor: `${effectiveAccent}15`, borderColor: `${effectiveAccent}30` }}
          >
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: effectiveAccent }}></div>
            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: effectiveAccent }}>Kontakt</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Jetzt unverbindlich anfragen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Erzähl mir von deinem Event und ich melde mich innerhalb von 24 Stunden bei dir
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-gray-200/50 border border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${effectiveAccent}15` }}
              >
                <Send className="w-6 h-6" style={{ color: effectiveAccent }} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Anfrage senden</h3>
                <p className="text-sm text-gray-500">Alle Felder mit * sind Pflichtfelder</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-gray-50 text-gray-900 border-2 border-gray-100 rounded-xl transition-all focus:outline-none focus:border-gray-300 focus:bg-white"
                  placeholder="Dein vollstandiger Name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-gray-50 text-gray-900 border-2 border-gray-100 rounded-xl transition-all focus:outline-none focus:border-gray-300 focus:bg-white"
                    placeholder="deine@email.de"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-gray-50 text-gray-900 border-2 border-gray-100 rounded-xl transition-all focus:outline-none focus:border-gray-300 focus:bg-white"
                    placeholder="Deine Telefonnummer"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Veranstaltungsdatum *
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-gray-50 text-gray-900 border-2 border-gray-100 rounded-xl transition-all focus:outline-none focus:border-gray-300 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gästezahl
                  </label>
                  <input
                    type="number"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-gray-50 text-gray-900 border-2 border-gray-100 rounded-xl transition-all focus:outline-none focus:border-gray-300 focus:bg-white"
                    placeholder="ca. Anzahl"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ort / Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-gray-50 text-gray-900 border-2 border-gray-100 rounded-xl transition-all focus:outline-none focus:border-gray-300 focus:bg-white"
                  placeholder="Stadt oder Location-Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gewünschtes Paket
                </label>
                <select
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-gray-50 text-gray-900 border-2 border-gray-100 rounded-xl transition-all focus:outline-none focus:border-gray-300 focus:bg-white"
                >
                  <option value="">Bitte wählen...</option>
                  <option value="Bis Mitternacht">Bis Mitternacht (feste Endzeit)</option>
                  <option value="Open End">Open End (ohne Zeitlimit)</option>
                  <option value="Noch unsicher">Noch unsicher / Beratung gewünscht</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Deine Nachricht
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3.5 bg-gray-50 text-gray-900 border-2 border-gray-100 rounded-xl transition-all resize-none focus:outline-none focus:border-gray-300 focus:bg-white"
                  placeholder="Erzähl mir von deinem Event, besonderen Wünschen oder Fragen..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 text-white rounded-xl font-semibold transition-all hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-3 text-lg"
                style={{ backgroundColor: effectiveAccent }}
              >
                <Send className="w-5 h-5" />
                <span>Anfrage absenden</span>
              </button>

              <p className="text-xs text-gray-400 text-center">
                Mit dem Absenden stimmst du der Verarbeitung deiner Daten gemäß der Datenschutzerklärung zu.
              </p>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div
              className="rounded-3xl p-8 text-white relative overflow-hidden"
              style={{ backgroundColor: effectiveAccent }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

              <h3 className="text-xl font-semibold mb-6 relative">Direktkontakt</h3>

              <div className="space-y-5 relative">
                <a href="tel:015228459456" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Telefon</p>
                    <p className="font-medium text-lg">01522 8459456</p>
                  </div>
                </a>

                <a href={`mailto:${contactEmail}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">E-Mail</p>
                    <p className="font-medium">{contactEmail}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Video-Beratung</p>
                    <p className="font-medium">Kostenloses Gespräch</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Das erwartet dich</h3>
              <div className="space-y-4">
                {[
                  { icon: Clock, text: 'Antwort innerhalb 24 Stunden' },
                  { icon: Calendar, text: 'Persönliches Vorgespräch' },
                  { icon: Users, text: 'Individuelle Planung' },
                  { icon: MapPin, text: 'Bundesweit verfügbar' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${effectiveAccent}15` }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: effectiveAccent }} />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl p-6 border-2 border-dashed"
              style={{ borderColor: `${effectiveAccent}40`, backgroundColor: `${effectiveAccent}08` }}
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: effectiveAccent }} />
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong className="text-gray-900">Tipp:</strong> Beliebte Termine sind schnell vergeben.
                  Je früher du anfragst, desto besser!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
