import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const resources = [
  {
    category: "Guía Práctica",
    title: "¿Retiro programado o renta vitalicia? Claves para decidir",
    excerpt: "Conoce las ventajas y desventajas de cada modalidad y cuál se adapta mejor a tu perfil.",
    date: "15 Marzo 2025",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop",
  },
  {
    category: "Blog",
    title: "Cómo regularizar lagunas previsionales y aumentar tu pensión",
    excerpt: "Pasos concretos para revisar tu historial y gestionar periodos sin cotización.",
    date: "8 Marzo 2025",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
  },
  {
    category: "Ficha Práctica",
    title: "Checklist: Documentos necesarios para solicitar pensión de vejez",
    excerpt: "Lista completa de documentación requerida para agilizar tu trámite de pensión.",
    date: "1 Marzo 2025",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
  },
];

export const Resources = () => {
  return (
    <section id="recursos" className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Entiende tu pensión
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Recursos educativos para tomar mejores decisiones sobre tu futuro previsional
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="group card-hover border-border/50 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/95 text-foreground hover:bg-white">
                    {resource.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {resource.date}
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {resource.excerpt}
                </p>
                <button className="flex items-center text-primary font-semibold hover:gap-2 transition-all duration-300 group">
                  Leer más
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Ver todas las guías
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
