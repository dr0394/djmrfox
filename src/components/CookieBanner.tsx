import { useState, useEffect } from 'react';
import { Cookie, X, Settings, Check } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true
    });
  };

  const rejectAll = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      marketing: false
    });
  };

  const saveCustomPreferences = () => {
    savePreferences(preferences);
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="fixed bottom-6 left-6 z-50 max-w-md">
        {!showSettings ? (
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Cookie-Einstellungen
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern.
                    Sie können Ihre Einstellungen jederzeit anpassen.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={acceptAll}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-medium hover:shadow-lg transition-all"
                >
                  Alle akzeptieren
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={rejectAll}
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-all"
                  >
                    Alle ablehnen
                  </button>

                  <button
                    onClick={() => setShowSettings(true)}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:border-gray-400 transition-all flex items-center justify-center gap-2"
                  >
                    <Settings className="w-4 h-4" />
                    Einstellungen
                  </button>
                </div>
              </div>

              <div className="mt-4 text-xs text-gray-500">
                Weitere Informationen finden Sie in unserer{' '}
                <a href="/datenschutz" className="text-cyan-600 hover:underline">
                  Datenschutzerklärung
                </a>
                .
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Cookie className="w-6 h-6" />
                <h3 className="text-lg font-semibold">Cookie-Einstellungen</h3>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="text-white hover:bg-white/20 rounded-lg p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 max-h-[500px] overflow-y-auto">
              <div className="pb-4 border-b border-gray-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">Notwendige Cookies</h4>
                    <p className="text-sm text-gray-600">
                      Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <div className="w-12 h-6 bg-gray-300 rounded-full flex items-center px-1">
                      <div className="w-4 h-4 bg-white rounded-full shadow-sm ml-auto"></div>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  Immer aktiv
                </div>
              </div>

              <div className="pb-4 border-b border-gray-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">Analyse-Cookies</h4>
                    <p className="text-sm text-gray-600">
                      Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem Informationen anonym gesammelt werden.
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <button
                      onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.analytics ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-gray-300'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${
                          preferences.analytics ? 'translate-x-6' : ''
                        }`}
                      ></div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">Marketing-Cookies</h4>
                    <p className="text-sm text-gray-600">
                      Diese Cookies werden verwendet, um Besuchern auf Webseiten zu folgen und relevante Werbung anzuzeigen.
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <button
                      onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.marketing ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-gray-300'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${
                          preferences.marketing ? 'translate-x-6' : ''
                        }`}
                      ></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 border-t border-gray-200 flex items-center gap-3">
              <button
                onClick={() => setShowSettings(false)}
                className="flex-1 px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all"
              >
                Abbrechen
              </button>
              <button
                onClick={saveCustomPreferences}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Check className="w-5 h-5" />
                Speichern
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CookieBanner;
