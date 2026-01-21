import { useState } from 'react';
import { X, ZoomIn, Play } from 'lucide-react';

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  type: 'image' | 'video';
}

const galleryItems: GalleryItem[] = [
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
    src: 'https://i.imgur.com/ARjfNZC.mp4',
    alt: 'DJ Performance',
    category: 'Video',
    type: 'video'
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
    src: 'https://i.imgur.com/nISr7rf.jpeg',
    alt: 'Live Show',
    category: 'Live',
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
    src: 'https://i.imgur.com/lYwzPd6.jpeg',
    alt: 'Party Energy',
    category: 'Party',
    type: 'image'
  },
  {
    src: 'https://i.imgur.com/f67oWfe.jpeg',
    alt: 'Event Highlights',
    category: 'Event',
    type: 'image'
  },
  {
    src: 'https://i.imgur.com/vJBPpbe.jpeg',
    alt: 'Live Performance',
    category: 'Live',
    type: 'image'
  },
  {
    src: 'https://i.imgur.com/7e8IUh2.jpeg',
    alt: 'Party Scene',
    category: 'Party',
    type: 'image'
  },
  {
    src: 'https://i.imgur.com/3zDqrc5.jpeg',
    alt: 'Event Memory',
    category: 'Event',
    type: 'image'
  }
];

const GallerySection = () => {
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
    setActiveImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <>
      <section className="py-28 px-4 bg-white/[0.15] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-cyan-50 backdrop-blur-sm border border-cyan-200 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <span className="text-cyan-600 text-sm font-semibold uppercase tracking-wider">Impressionen</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Einblicke in meine Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Momente, die unvergessen bleiben
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer border border-gray-200 shadow-lg"
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
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    {item.type === 'video' ? (
                      <Play className="w-6 h-6 text-white" />
                    ) : (
                      <ZoomIn className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <span className="text-white font-medium">{item.category}</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-block px-3 py-1 bg-cyan-500/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            {galleryItems[activeImage].type === 'video' ? (
              <video
                src={galleryItems[activeImage].src}
                controls
                autoPlay
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />
            ) : (
              <img
                src={galleryItems[activeImage].src}
                alt={galleryItems[activeImage].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />
            )}
            <div className="text-center mt-4">
              <span className="text-white font-medium">{galleryItems[activeImage].alt}</span>
              <span className="text-gray-500 mx-3">|</span>
              <span className="text-cyan-400">{galleryItems[activeImage].category}</span>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={(e) => { e.stopPropagation(); setActiveImage(index); }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeImage
                    ? 'bg-cyan-400 w-6'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;
