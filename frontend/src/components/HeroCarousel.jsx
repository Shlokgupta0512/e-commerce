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

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [current]);

    return (
        <div className="relative w-full overflow-hidden bg-gray-100 mb-4">
            <div className="relative h-[200px] sm:h-[280px] lg:h-[320px] w-full">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.alt}
                            className="w-full h-full object-cover sm:object-fill"
                        />
                    </div>
                ))}
            </div>

            {/* Left Arrow */}
            <button
                title="Previous Slide"
                onClick={prevSlide}
                className="absolute top-1/2 left-2 sm:left-4 z-30 -translate-y-1/2 bg-white/40 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-l-md shadow-md transition-all"
            >
                <ChevronLeft size={24} />
            </button>

            {/* Right Arrow */}
            <button
                title="Next Slide"
                onClick={nextSlide}
                className="absolute top-1/2 right-2 sm:right-4 z-30 -translate-y-1/2 bg-white/40 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-r-md shadow-md transition-all"
            >
                <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        title={`Go to slide ${index + 1}`}
                        onClick={() => setCurrent(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${index === current ? "bg-white" : "bg-white/50 hover:bg-white/80"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;
