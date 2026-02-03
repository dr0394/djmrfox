import { Star } from 'lucide-react';

interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
}

interface GoogleReviewsProps {
  onCTAClick: () => void;
}

const reviews: Review[] = [
  {
    author: "Sarah Weber",
    rating: 5,
    text: "Absolut empfehlenswert! Stefan hat unsere Hochzeit zu einem unvergesslichen Erlebnis gemacht. Die Tanzfläche war die ganze Nacht voll und die Musikauswahl perfekt auf unsere Gäste abgestimmt.",
    date: "vor 2 Wochen"
  },
  {
    author: "Michael Krüger",
    rating: 5,
    text: "Professionell, zuverlässig und musikalisch top! Bei unserem Firmenevent hat DJ Mr. Fox alle Generationen begeistert. Sehr zu empfehlen!",
    date: "vor 1 Monat"
  },
  {
    author: "Julia Schmidt",
    rating: 5,
    text: "Die beste Entscheidung für unseren 50. Geburtstag! Stefan hat ein unglaubliches Gespür für die richtige Musik zum richtigen Zeitpunkt. Alle Gäste waren begeistert.",
    date: "vor 3 Wochen"
  },
  {
    author: "Andreas Hoffmann",
    rating: 5,
    text: "Von der ersten Absprache bis zum letzten Song - alles perfekt! Die Technik war erstklassig und die Musikauswahl hat jeden auf die Tanzfläche gebracht.",
    date: "vor 1 Woche"
  },
  {
    author: "Lisa Becker",
    rating: 5,
    text: "Unsere Hochzeit war ein Traum! Stefan hat mit seiner Musik genau die richtige Atmosphäre geschaffen. Wir und unsere Gäste werden diesen Tag nie vergessen.",
    date: "vor 2 Monaten"
  },
  {
    author: "Thomas Richter",
    rating: 5,
    text: "Absolute Empfehlung! Professionell, sympathisch und musikalisch einfach nur Weltklasse. Die Party ging bis 6 Uhr morgens - niemand wollte gehen!",
    date: "vor 3 Wochen"
  }
];

const GoogleReviews = ({ onCTAClick }: GoogleReviewsProps) => {
  const averageRating = 5.0;
  const totalReviews = 127;

  return (
    <section className="py-28 px-4 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <a
            href="https://www.google.com/search?sca_esv=d237f51df001ed9b&sxsrf=ANbL-n7wCh1qkjDhZif_gdNJiTEWSTYmqw:1769161897995&si=AL3DRZHrmvnFAVQPOO2Bzhf8AX9KZZ6raUI_dT7DG_z0kV2_x4QlQY-mut2sV68S_F_ltiARfVzor71oGTCSB91RonIrmsIPJj3Vv3OcsI38v6f0fVxW-n5RmTHzaqfntvkU-sPqXEpn&q=DJ+Mr.+Fox+Rezensionen&sa=X&ved=2ahUKEwibsuvTsaGSAxUn8rsIHSmsAMwQ0bkNegQINxAH&biw=1728&bih=889&dpr=2&aic=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-6 py-4 mb-8 shadow-lg hover:shadow-xl transition-all"
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8 flex-shrink-0">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-gray-900">{averageRating.toFixed(1)}</div>
                <div className="text-xs text-gray-600">{totalReviews} Bewertungen</div>
              </div>
            </div>
          </a>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Google Bewertungen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Echte Erfahrungen von echten Events
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {review.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{review.author}</div>
                    <div className="text-xs text-gray-500">{review.date}</div>
                  </div>
                </div>
                <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>

              <div className="flex gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed text-sm">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-cyan-200">
          <div className="grid md:grid-cols-4 gap-8 text-center mb-8">
            <div>
              <div className="text-5xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Events</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gray-900 mb-2">20+</div>
              <div className="text-gray-600 font-medium">Jahre Erfahrung</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Zufriedene Kunden</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gray-900 mb-2">{averageRating}</div>
              <div className="text-gray-600 font-medium">Google Bewertung</div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={onCTAClick}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/30 transition-all"
            >
              Jetzt unverbindlich anfragen
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
