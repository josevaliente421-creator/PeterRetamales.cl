import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/56993943783?text=Hola,%20quiero%20agendar%20una%20asesor%C3%ADa%20previsional";

type WhatsAppPopupProps = {
  delay?: number;
};

export const WhatsAppPopup = ({ delay = 20000 }: WhatsAppPopupProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("whatsapp_popup_dismissed") === "1";
    if (dismissed) return;

    const id = window.setTimeout(() => {
      setOpen(true);
    }, delay);

    return () => {
      window.clearTimeout(id);
    };
  }, [delay]);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem("whatsapp_popup_dismissed", "1");
  };

  const handleWhatsApp = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[calc(100%-2rem)] sm:w-auto animate-[fade-in-up_1.2s_ease-out] motion-reduce:animate-none">
      <Card className="border-border/50 shadow-xl bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="p-4 pr-12 relative">
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-2 right-2 inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Cerrar"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
              <MessageCircle className="h-5 w-5" />
            </div>

            <div className="min-w-0">
              <p className="font-semibold text-foreground leading-tight">
                ¿Agendamos tu asesoría?
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Escríbenos por WhatsApp y te ayudamos a optimizar tu jubilación.
              </p>

              <div className="mt-3">
                <Button
                  onClick={handleWhatsApp}
                  className="bg-[#25D366] hover:bg-[#20BD5A] text-white"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Ir a WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
