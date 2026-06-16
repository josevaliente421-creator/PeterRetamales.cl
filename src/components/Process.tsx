import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileSearch, Lightbulb, FileCheck, UserCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileSearch,
    title: "Diagnóstico (sin costo)",
    description: "Revisamos tu situación previsional completa: cotizaciones, proyección de pensión y documentos necesarios.",
    features: ["Análisis de historial", "Proyección inicial"],
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Plan y estrategia",
    description: "Diseñamos un plan personalizado con recomendaciones claras sobre la mejor modalidad de pensión y acciones a seguir.",
    features: ["Plan personalizado", "Análisis de opciones", "Recomendaciones claras"],
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Trámite y gestión",
    description: "Nos encargamos de toda la gestión ante AFP, IPS o compañías de seguros. Preparamos y presentamos tu documentación.",
    features: ["Gestión completa", "Presentación de documentos", "Seguimiento constante"],
    imageUrl: "/images/lol.png",
  },
  {
    number: "04",
    icon: UserCheck,
    title: "Acompañamiento post-pensión",
    description: "No terminamos cuando obtienes tu pensión. Te seguimos apoyando con dudas, cambios o nuevos trámites necesarios.",
    features: ["Soporte continuo", "Asesoría permanente", "Actualizaciones"],
    imageUrl: "/images/lol2.png",
  },
];

export const Process = () => {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="proceso" className="py-20 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Cómo trabajamos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Un proceso simple y transparente en 4 pasos
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div
                className={`animate-fade-in-up ${index % 2 === 1 ? "lg:order-2" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-5xl font-bold text-primary/20">{step.number}</div>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>

                <p className="text-lg text-muted-foreground mb-6">
                  {step.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {index === 0 && (
                  <Button
                    onClick={scrollToContact}
                    size="lg"
                    className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-md"
                  >
                    Agenda tu diagnóstico
                  </Button>
                )}
              </div>

              {/* Image */}
              <div
                className={`animate-fade-in ${index % 2 === 1 ? "lg:order-1" : ""}`}
                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
              >
                <Card className="overflow-hidden border-0 shadow-strong">
                  <img
                    src={step.imageUrl}
                    alt={step.title}
                    className="w-full h-64 lg:h-96 object-cover"
                    loading="lazy"
                  />
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
