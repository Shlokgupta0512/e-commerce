import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop", // Cyber Monday / Sale
        alt: "Big Sale",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop", // Fashion
        alt: "Fashion Sale",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2000&auto=format&fit=crop", // Electronics
        alt: "Electronics Sale",
    },
];

const HeroCarousel = () => {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [current, isPaused]);

    return (
        <div
            className="relative w-full overflow-hidden bg-gray-900 mb-6 group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Main Carousel Area - Responsive Heights */}
            <div className="relative h-[250px] sm:h-[400px] lg:h-[500px] w-full">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
                            }`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                        <img
                            src={slide.image}
                            alt={slide.alt}
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Controls - Hidden on mobile, shown on hover/desktop */}
            <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none z-20">
                <button
                    title="Previous Slide"
                    onClick={prevSlide}
                    className="pointer-events-auto p-3 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    title="Next Slide"
                    onClick={nextSlide}
                    className="pointer-events-auto p-3 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${index === current
                                ? "w-8 bg-white"
                                : "w-2 bg-white/50 hover:bg-white/80"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;
