import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  {
    id: 1,
    image: heroSlide1,
    title: "Premium Fashion Collection",
    subtitle: "Discover elegance in every thread",
    description: "From classic t-shirts to luxury accessories, find your perfect style with our curated fashion collection.",
    cta: "Shop Fashion",
    category: "clothing"
  },
  {
    id: 2,
    image: heroSlide2,
    title: "Luxury Timepieces & Tech",
    subtitle: "Time meets innovation",
    description: "Explore our premium collection of watches and cutting-edge electronics that define modern lifestyle.",
    cta: "Shop Watches",
    category: "watches"
  },
  {
    id: 3,
    image: heroSlide3,
    title: "Lifestyle Accessories",
    subtitle: "Complete your look",
    description: "Elevate your everyday with our handpicked selection of premium accessories and lifestyle essentials.",
    cta: "Shop Accessories",
    category: "accessories"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[70vh] md:h-[80vh] overflow-hidden bg-gradient-hero">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div
            className="h-full w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/30 to-transparent" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-background"
              >
                <motion.p
                  className="text-accent-gold font-medium text-lg mb-2"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                
                <motion.h1
                  className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {slides[currentSlide].title}
                </motion.h1>
                
                <motion.p
                  className="text-xl md:text-2xl text-background/90 mb-8 leading-relaxed"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {slides[currentSlide].description}
                </motion.p>
                
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <Button
                    variant="gold"
                    size="xl"
                    onClick={() => navigate(`/shop?category=${slides[currentSlide].category}`)}
                    className="group"
                  >
                    <ShoppingBag className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    {slides[currentSlide].cta}
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="xl"
                    className="border-background/30 text-background hover:bg-background hover:text-foreground"
                    onClick={() => navigate('/shop')}
                  >
                    View All Products
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-4 flex items-center">
        <motion.button
          onClick={prevSlide}
          className="bg-background/20 hover:bg-background/40 text-background p-3 rounded-full backdrop-blur-sm transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="h-6 w-6" />
        </motion.button>
      </div>
      
      <div className="absolute inset-y-0 right-4 flex items-center">
        <motion.button
          onClick={nextSlide}
          className="bg-background/20 hover:bg-background/40 text-background p-3 rounded-full backdrop-blur-sm transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="h-6 w-6" />
        </motion.button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-accent-gold w-8' 
                : 'bg-background/40 hover:bg-background/60'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </div>
    </div>
  );
}