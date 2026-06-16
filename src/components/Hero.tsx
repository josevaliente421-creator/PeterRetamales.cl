import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Award, Users, Star } from "lucide-react";
import { useState, useEffect } from "react";

const images = [
  "/images/peter.png",
  "/images/peter2.png",
  "/images/peter3.png"
];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleWhatsApp = () => {
    window.open("https://wa.me/56993943783", "_blank");
  };

  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background image with improved sliding animation */}
      <div className="absolute inset-0 -z-10">
        <div className="relative w-full h-full overflow-hidden">
          <div 
            className="flex h-full transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="w-full h-full flex-shrink-0"
              >
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-black/25"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Left content */}
          <div className="animate-fade-in-up p-8 rounded-xl max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-6 justify-center">
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-primary/30 text-white border border-primary/50 font-medium hover:bg-primary/40">
                <Award className="w-4 h-4 mr-2 inline text-primary" />
                +35 años de experiencia
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-secondary/30 text-white border border-secondary/50 font-medium hover:bg-secondary/40">
                <Users className="w-4 h-4 mr-2 inline text-secondary" />
                Atención 1:1
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-accent/30 text-white border border-accent/50 font-medium hover:bg-accent/40">
                <Star className="w-4 h-4 mr-2 inline text-accent" />
                4.8/5 en reseñas
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance leading-tight drop-shadow-md">
              Tu pensión, clara y a tu{" "}
              <span className="text-primary">alcance.</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-balance drop-shadow-md">
              Peter Retamales, {" "}
              <span className="font-bold">Asesor Previsional Numero #1 de todo Chile</span>, Conseguimos la mejor opción.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-xl text-base sm:text-lg px-8 py-6"
              >
                <Phone className="mr-2 h-5 w-5" />
                Agendar asesoría
              </Button>
              <Button
                onClick={handleWhatsApp}
                size="lg"
                variant="outline"
                className="border-2 border-primary bg-primary/10 backdrop-blur-sm text-primary-foreground hover:bg-primary hover:text-primary-foreground shadow-xl text-base sm:text-lg px-8 py-6"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Escríbenos por WhatsApp
              </Button>
            </div>

            {/* Trust indicators section moved to a separate component */}
          </div>
        </div>
      </div>
    </section>
  );
};
