import { Button } from "@/components/ui/button";
import { Phone, Calendar, MessageCircle } from "lucide-react";

export const CTABanner = () => {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-primary via-primary to-primary-hover">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            ¿Listo para tomar el control de tu pensión?
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Agenda una asesoría sin costo y descubre cómo optimizar tu jubilación con claridad y confianza.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-lg text-base sm:text-lg px-8 py-6"
            >
              <Phone className="mr-2 h-5 w-5" />
              Agendar asesoría gratuita
            </Button>
            <a
              href="https://wa.me/56993943783"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-primary hover:bg-white/90 shadow-lg text-base sm:text-lg px-8 py-6 h-11 rounded-md no-underline"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Consultar por WhatsApp
            </a>
          </div>

          <p className="text-sm text-white/80 mt-6">
            Sin compromiso · Primera consulta gratuita · Respuesta en 24 horas
          </p>
        </div>
      </div>
    </section>
  );
};
