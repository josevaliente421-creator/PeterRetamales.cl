import { AlertTriangle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FraudAlert = () => {
  return (
    <section className="py-16 bg-destructive/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 animate-fade-in">
          <div className="flex items-start lg:items-center space-x-4 flex-1">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-destructive/20 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-destructive" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                ⚠️ Alerta de fraude
              </h3>
              <p className="text-muted-foreground">
                ¿Recibiste un llamado o correo sospechoso sobre tu pensión? Verifica aquí antes de entregar tus datos personales o bancarios.
              </p>
            </div>
          </div>
          
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground flex-shrink-0"
          >
            Más información
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
