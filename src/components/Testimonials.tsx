import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Verónica González",
    location: "Santiago, Región Metropolitana",
    quote: "Estoy muy agradecida por toda la ayuda, si alguien me pregunta a ojos cerrados los recomiendo, Peter Retamales le doy un siete.",
    image: "/images/testimonio-1.png",
  },
  {
    name: "Mario Arce",
    location: "Valparaíso",
    quote: "Es muy buen profesional, serio responsable y buena persona, buen tipo, lo recomiendo totalmente a él y a su equipo.",
    image: "/images/testimonio-2.png",
  },
  {
    name: "Raúl Bernal",
    location: "Concepción",
    quote: "Me sentí super acompañado y orientado cuando cumpli mis 65 años, me ayudaron a tomar la mejor decisión para mi jublilación .",
    image: "/images/Raul.jpg",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonios" className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Clientes que ya están tranquilos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Historias reales de personas que tomaron el control de su pensión con nuestro apoyo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="card-hover border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="pt-8 pb-8 px-6">
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-primary/30" />
                </div>
                
                <p className="text-foreground text-base mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
