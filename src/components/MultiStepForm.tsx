import { useState } from 'react';
import { X, ChevronRight, ChevronLeft, Mail, MessageCircle, Calendar, Users, Music, MapPin, Phone, User } from 'lucide-react';

interface MultiStepFormProps {
  isOpen: boolean;
  onClose: () => void;
  initialEventType?: 'wedding' | 'party' | 'general';
}

interface FormData {
  eventType: string;
  eventDate: string;
  guestCount: string;
  location: string;
  name: string;
  email: string;
  phone: string;
  musicPreferences: string;
  additionalInfo: string;
  contactMethod: 'whatsapp' | 'email' | 'both';
}

const MultiStepForm = ({ isOpen, onClose, initialEventType = 'general' }: MultiStepFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    eventType: initialEventType === 'wedding' ? 'Hochzeit' : initialEventType === 'party' ? 'Party/Event' : '',
    eventDate: '',
    guestCount: '',
    location: '',
    name: '',
    email: '',
    phone: '',
    musicPreferences: '',
    additionalInfo: '',
    contactMethod: 'whatsapp'
  });

  const totalSteps = 4;

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const generateWhatsAppMessage = () => {
    const message = `Hallo DJ Mr. Fox,

ich interessiere mich für Ihre DJ-Services für folgendes Event:

*Event-Details:*
📅 Veranstaltungsart: ${formData.eventType || 'Nicht angegeben'}
📆 Datum: ${formData.eventDate || 'Noch nicht festgelegt'}
👥 Gästeanzahl: ${formData.guestCount || 'Nicht angegeben'}
📍 Location: ${formData.location || 'Noch nicht festgelegt'}

*Kontaktdaten:*
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Telefon: ${formData.phone}

*Musikwünsche:*
🎵 ${formData.musicPreferences || 'Keine besonderen Wünsche'}

*Zusätzliche Informationen:*
${formData.additionalInfo || 'Keine weiteren Angaben'}

Ich freue mich auf Ihre Rückmeldung!`;

    return encodeURIComponent(message);
  };

  const generateEmailSubject = () => {
    return encodeURIComponent(`Anfrage für ${formData.eventType} am ${formData.eventDate}`);
  };

  const generateEmailBody = () => {
    const body = `Hallo DJ Mr. Fox,

ich interessiere mich für Ihre DJ-Services für folgendes Event:

Event-Details:
- Veranstaltungsart: ${formData.eventType || 'Nicht angegeben'}
- Datum: ${formData.eventDate || 'Noch nicht festgelegt'}
- Gästeanzahl: ${formData.guestCount || 'Nicht angegeben'}
- Location: ${formData.location || 'Noch nicht festgelegt'}

Kontaktdaten:
- Name: ${formData.name}
- Email: ${formData.email}
- Telefon: ${formData.phone}

Musikwünsche:
${formData.musicPreferences || 'Keine besonderen Wünsche'}

Zusätzliche Informationen:
${formData.additionalInfo || 'Keine weiteren Angaben'}

Ich freue mich auf Ihre Rückmeldung!

Mit freundlichen Grüßen
${formData.name}`;

    return encodeURIComponent(body);
  };

  const handleSubmit = () => {
    const phoneNumber = '4917012345678';
    const email = 'info@dj-mrfox.com';

    if (formData.contactMethod === 'whatsapp' || formData.contactMethod === 'both') {
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${generateWhatsAppMessage()}`;
      window.open(whatsappUrl, '_blank');
    }

    if (formData.contactMethod === 'email' || formData.contactMethod === 'both') {
      const emailUrl = `mailto:${email}?subject=${generateEmailSubject()}&body=${generateEmailBody()}`;
      window.location.href = emailUrl;
    }

    setTimeout(() => {
      onClose();
      setCurrentStep(1);
      setFormData({
        eventType: initialEventType === 'wedding' ? 'Hochzeit' : initialEventType === 'party' ? 'Party/Event' : '',
        eventDate: '',
        guestCount: '',
        location: '',
        name: '',
        email: '',
        phone: '',
        musicPreferences: '',
        additionalInfo: '',
        contactMethod: 'whatsapp'
      });
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75" onClick={onClose}></div>

        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
          <div className="absolute top-4 right-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="bg-white px-8 pt-8 pb-6">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-900">Anfrage senden</h3>
                <div className="text-sm text-gray-500">Schritt {currentStep} von {totalSteps}</div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="min-h-[400px]">
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <Music className="w-4 h-4" />
                      Welche Art von Event planen Sie?
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => updateFormData('eventType', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="Hochzeit">Hochzeit</option>
                      <option value="Geburtstag">Geburtstag</option>
                      <option value="Firmenfeier">Firmenfeier</option>
                      <option value="Party/Event">Party/Event</option>
                      <option value="Festival">Festival</option>
                      <option value="Sonstiges">Sonstiges</option>
                    </select>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4" />
                      Wann findet Ihr Event statt?
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => updateFormData('eventDate', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <Users className="w-4 h-4" />
                      Wie viele Gäste erwarten Sie?
                    </label>
                    <input
                      type="text"
                      value={formData.guestCount}
                      onChange={(e) => updateFormData('guestCount', e.target.value)}
                      placeholder="z.B. 50-100 Gäste"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="w-4 h-4" />
                      Wo findet das Event statt?
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => updateFormData('location', e.target.value)}
                      placeholder="Stadt oder Location-Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4" />
                      Ihr Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => updateFormData('name', e.target.value)}
                      placeholder="Vor- und Nachname"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4" />
                      Ihre E-Mail-Adresse
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      placeholder="ihre@email.de"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4" />
                      Ihre Telefonnummer
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      placeholder="+49 170 1234567"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <Music className="w-4 h-4" />
                      Haben Sie spezielle Musikwünsche?
                    </label>
                    <textarea
                      value={formData.musicPreferences}
                      onChange={(e) => updateFormData('musicPreferences', e.target.value)}
                      placeholder="z.B. 80er Jahre, Charts, Schlager, House..."
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Zusätzliche Informationen
                    </label>
                    <textarea
                      value={formData.additionalInfo}
                      onChange={(e) => updateFormData('additionalInfo', e.target.value)}
                      placeholder="Gibt es noch etwas, das wir wissen sollten?"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Wie möchten Sie kontaktiert werden?</h4>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-cyan-500 transition-all">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="whatsapp"
                          checked={formData.contactMethod === 'whatsapp'}
                          onChange={(e) => updateFormData('contactMethod', e.target.value as any)}
                          className="w-5 h-5 text-cyan-600"
                        />
                        <MessageCircle className="w-5 h-5 text-green-600" />
                        <span className="font-medium">WhatsApp</span>
                      </label>

                      <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-cyan-500 transition-all">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="email"
                          checked={formData.contactMethod === 'email'}
                          onChange={(e) => updateFormData('contactMethod', e.target.value as any)}
                          className="w-5 h-5 text-cyan-600"
                        />
                        <Mail className="w-5 h-5 text-blue-600" />
                        <span className="font-medium">E-Mail</span>
                      </label>

                      <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-cyan-500 transition-all">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="both"
                          checked={formData.contactMethod === 'both'}
                          onChange={(e) => updateFormData('contactMethod', e.target.value as any)}
                          className="w-5 h-5 text-cyan-600"
                        />
                        <div className="flex gap-2">
                          <MessageCircle className="w-5 h-5 text-green-600" />
                          <Mail className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="font-medium">Beides (empfohlen)</span>
                      </label>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h5 className="font-medium text-gray-900 mb-3">Zusammenfassung Ihrer Anfrage:</h5>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p><strong>Event:</strong> {formData.eventType || 'Nicht angegeben'}</p>
                      <p><strong>Datum:</strong> {formData.eventDate || 'Noch nicht festgelegt'}</p>
                      <p><strong>Gäste:</strong> {formData.guestCount || 'Nicht angegeben'}</p>
                      <p><strong>Location:</strong> {formData.location || 'Noch nicht festgelegt'}</p>
                      <p><strong>Name:</strong> {formData.name}</p>
                      <p><strong>E-Mail:</strong> {formData.email}</p>
                      <p><strong>Telefon:</strong> {formData.phone}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-gray-50 px-8 py-6 flex items-center justify-between border-t border-gray-200">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                currentStep === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Zurück
            </button>

            {currentStep < totalSteps ? (
              <button
                onClick={nextStep}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-medium hover:shadow-lg transition-all"
              >
                Weiter
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!formData.name || !formData.email || !formData.phone}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-medium hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Anfrage absenden
                {formData.contactMethod === 'whatsapp' && <MessageCircle className="w-5 h-5" />}
                {formData.contactMethod === 'email' && <Mail className="w-5 h-5" />}
                {formData.contactMethod === 'both' && (
                  <>
                    <MessageCircle className="w-5 h-5" />
                    <Mail className="w-5 h-5" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
