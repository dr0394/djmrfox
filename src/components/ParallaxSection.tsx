import { ReactNode } from 'react';

interface ParallaxSectionProps {
  imageUrl: string;
  children: ReactNode;
  overlayOpacity?: number;
  height?: 'small' | 'medium' | 'large';
}

const ParallaxSection = ({
  imageUrl,
  children,
  overlayOpacity = 0.7,
  height = 'medium'
}: ParallaxSectionProps) => {
  const heightClasses = {
    small: 'min-h-[400px] md:min-h-[500px]',
    medium: 'min-h-[500px] md:min-h-[600px]',
    large: 'min-h-[600px] md:min-h-[700px]'
  };

  return (
    <section className={`relative ${heightClasses[height]} flex items-center overflow-hidden`}>
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundAttachment: 'fixed'
        }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/80"
        style={{ opacity: overlayOpacity }}
      />
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;
