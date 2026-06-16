import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileSearch,
  Calculator,
  ClipboardCheck,
  TrendingUp,
  Shield,
  PiggyBank,
  Users,
  Scale,
} from "lucide-react";

const services = [
  {
    icon: FileSearch,
    title: "Diagnóstico previsional",
    description: "Evaluación completa de tu situación actual: cotizaciones y proyección de pensión.",
  },
  {
    icon: Calculator,
    title: "Cálculo y simulación de pensión",
    description: "Proyecciones detalladas según diferentes escenarios y modalidades de pensión disponibles.",
  },
  {
    icon: ClipboardCheck,
    title: "Revisión de cotizaciones",
    description: "Verificamos tu historial previsional y gestionamos la regularización de periodos.",
  },
  {
    icon: TrendingUp,
    title: "Modalidad de pensión",
    description: "Te ayudamos a elegir entre retiro programado y renta vitalicia según tu situación particular.",
  },
  {
    icon: Shield,
    title: "Pensiones especiales",
    description: "Gestión de pensión de vejez, invalidez y sobrevivencia ante AFP y compañías de seguros.",
  },
  {
    icon: PiggyBank,
    title: "APV y estrategia de ahorro",
    description: "Asesoría en Ahorro Previsional Voluntario para mejorar tu pensión futura y beneficios tributarios.",
  },
  {
    icon: Users,
    title: "Herencias y beneficiarios",
    description: "Orientación sobre herencia de fondos previsionales y designación correcta de beneficiarios.",
  },
  {
    icon: Scale,
    title: "Apelaciones y defensa",
    description: "Apoyo en apelaciones ante decisiones desfavorables y defensa de tus derechos previsionales.",
  },
];

export const Services = () => {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="servicios" className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Images above the title */}
        <div className="w-full flex justify-center mb-12">
          <div className="flex items-center justify-center gap-16 max-w-max mx-auto px-4">
            <div className="flex-shrink-0">
              <img 
                src="/images/Internacional-Peter_Logo.png" 
                alt="Logo Internacional Peter Retamales" 
                className="h-48 w-auto max-w-[300px] object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-shrink-0">
              <img 
                src="/images/sello.png" 
                alt="Sello de garantía y confianza" 
                className="h-48 w-auto max-w-[300px] object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
        
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Servicios de asesoría previsional
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones completas para optimizar tu pensión y tomar las mejores decisiones para tu futuro
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="card-hover border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-md"
          >
            Solicitar evaluación
          </Button>
          <Button
            onClick={scrollToContact}
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Ver todos los servicios
          </Button>
        </div>
      </div>
    </section>
  );
};
