import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Radio, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

export const Authority = () => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Columna Izquierda - Texto */}
          <div className="lg:col-span-7 animate-fade-in-up">
            <Badge className="mb-6 bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20">
              <Radio className="w-4 h-4 mr-2" />
              SINTONIZA NUESTRA ASESORÍA
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Escúchanos en{" "}
              <span className="text-primary">Radio Agricultura</span>
              {" "}junto a Checho Hirane
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Llevamos claridad previsional a todo Chile a través de la señal de Radio Agricultura. 
              Acompañamos los espacios de Checho Hirane con información clave para tu futura pensión.
            </p>
            
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-md text-base sm:text-lg px-8 py-6"
            >
              Escuchar programas anteriores
            </Button>
          </div>
          
          {/* Columna Derecha - Video */}
          <div className="lg:col-span-5 animate-fade-in">
            <div className="relative rounded-[20px] overflow-hidden shadow-strong group">
              <video
                src="/images/checho.mp4"
                autoPlay
                muted={isMuted}
                loop
                playsInline
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              
              {/* Botón de control de audio */}
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm group-hover:scale-110"
                aria-label={isMuted ? "Activar audio" : "Silenciar audio"}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
              
              {/* Overlay opcional para mejor legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
