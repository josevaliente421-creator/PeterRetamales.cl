import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, Handshake, Target, BarChart3 } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excelencia",
    description: "Buscamos la excelencia en cada asesoría, ofreciendo soluciones de la más alta calidad.",
  },
  {
    icon: Shield,
    title: "Integridad",
    description: "Actuamos con honestidad y transparencia en cada una de nuestras acciones.",
  },
  {
    icon: Handshake,
    title: "Compromiso",
    description: "Nos comprometemos con el éxito de tu futuro previsional.",
  },
  {
    icon: Target,
    title: "Enfoque en resultados",
    description: "Trabajamos con objetivos claros para ofrecerte los mejores resultados.",
  },
  {
    icon: BarChart3,
    title: "Mejora continua",
    description: "Nos actualizamos constantemente para ofrecerte el mejor servicio posible.",
  },
];

export const OurValues = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Values list */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              En el corazón de nuestro servicio están los valores que guían cada decisión y asesoría que brindamos.
            </p>

            <div className="space-y-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Featured card */}
          <div className="animate-fade-in">
            <Card className="relative overflow-hidden border-0 shadow-strong">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
              <CardContent className="relative p-8 lg:p-12">
                <div className="text-white">
                  <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    Nuestra Filosofía
                  </h3>
                  <p className="text-white/90 text-lg mb-6">
                    Creemos en construir relaciones basadas en la confianza y el respeto mutuo. Nuestro compromiso es guiarte en cada paso del proceso previsional con claridad y profesionalismo.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-white/80 flex-shrink-0" />
                      <span className="text-white/90">Más de 35 años de experiencia</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-white/80 flex-shrink-0" />
                      <span className="text-white/90">Miles de clientes satisfechos</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-white/80 flex-shrink-0" />
                      <span className="text-white/90">Asesoría personalizada</span>
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
