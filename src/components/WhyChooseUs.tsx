import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MessageSquare, Heart, Clock, UserCheck } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "Transparencia y ética",
    description: "Asesoría independiente sin conflictos de interés. Tu mejor opción es nuestra prioridad.",
  },
  {
    icon: MessageSquare,
    title: "Lenguaje claro",
    description: "Sin tecnicismos innecesarios. Te explicamos todo de forma simple y comprensible.",
  },
  {
    icon: Heart,
    title: "Acompañamiento integral",
    description: "Desde el diagnóstico hasta después de obtener tu pensión. Siempre a tu lado.",
  },
  {
    icon: Clock,
    title: "Respuesta rápida",
    description: "Atención ágil y eficiente. Valoramos tu tiempo y respondemos con prontitud.",
  },
  {
    icon: UserCheck,
    title: "Enfoque 100% cliente",
    description: "Cada caso es único. Creamos soluciones personalizadas para tu situación específica.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nuestro compromiso es entregar un servicio de excelencia, con total transparencia y enfocado en tus necesidades.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right side - Featured card */}
          <div className="animate-fade-in">
            <Card className="relative overflow-hidden border-0 shadow-strong">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/80" />
              <CardContent className="relative p-8 lg:p-12">
                <div className="text-white">
                  <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    Decisiones informadas, sin letra chica.
                  </h3>
                  <p className="text-white/90 text-lg mb-6">
                    Entendemos que el sistema previsional puede ser confuso. Por eso nos dedicamos a traducir toda la complejidad en información clara y accionable.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-white/80 flex-shrink-0" />
                      <span className="text-white/90">Sin costos ocultos</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-white/80 flex-shrink-0" />
                      <span className="text-white/90">Diagnóstico inicial sin costo</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-white/80 flex-shrink-0" />
                      <span className="text-white/90">Compromisos por escrito</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
