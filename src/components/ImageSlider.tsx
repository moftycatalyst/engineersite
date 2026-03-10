import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const slides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Advanced Engineering',
      description: 'Cutting-edge solutions for modern challenges'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Innovative Design',
      description: 'Beautiful and functional systems'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Digital Transformation',
      description: 'Leading your business into the future'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Collaborative Development',
      description: 'Building together with precision'
    }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  return (
    <div
      className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden group"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {slide.title}
            </h3>
            <p className="text-lg text-gray-100">
              {slide.description}
            </p>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-md hover:bg-white/40 transition-all text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-md hover:bg-white/40 transition-all text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-3 bg-white/20 backdrop-blur-md px-4 py-3 rounded-full">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentIndex
                ? 'bg-white w-8 h-2 rounded-full'
                : 'bg-white/50 hover:bg-white/75 w-2 h-2 rounded-full'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
