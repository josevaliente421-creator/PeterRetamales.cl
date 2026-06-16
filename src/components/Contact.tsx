import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("¡Mensaje enviado! Nos contactaremos contigo pronto.");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 1500);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/56993943783?text=Hola,%20necesito%20asesoría%20previsional", "_blank");
  };

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Contáctanos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Agenda tu consulta o escríbenos. Estamos listos para ayudarte
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-border/50 animate-fade-in-up">
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-4">Información de contacto</h3>
                  
                  <div className="space-y-4">
                    <a
                      href="tel:+56993943783"
                      className="flex items-start space-x-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Teléfono</p>
                        <p>+56 9 9394 3783</p>
                      </div>
                    </a>

                    <button
                      onClick={handleWhatsApp}
                      className="flex items-start space-x-3 text-muted-foreground hover:text-primary transition-colors w-full text-left"
                    >
                      <MessageCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">WhatsApp</p>
                        <p>+56 9 9394 3783</p>
                      </div>
                    </button>

                    <a
                      href="mailto:contacto@peterretamales.cl"
                      className="flex items-start space-x-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Email</p>
                        <p className="break-all">contacto@peterretamales.cl</p>
                      </div>
                    </a>

                    <div className="flex items-start space-x-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Dirección</p>
                        <p>Moneda 1137, piso 7, Santiago</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 text-muted-foreground">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Horario de atención</p>
                        <p>Lunes a jueves de 09:00 a 17:00 hrs.</p>
                        <p>Viernes de 09:00 a 15:00 hrs.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <Button
                    onClick={handleWhatsApp}
                    className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-md"
                    size="lg"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Escríbenos por WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="border-border/50 overflow-hidden animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-full h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.5437!2d-70.6506!3d-33.4489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a1d9c3f9b5%3A0x4a8b4e0f4d8b0b0b!2sMoneda%201137%2C%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1634567890123!5m2!1ses-419!2scl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Oficina Moneda 1137, Santiago"
                />
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-2"
                        placeholder="Juan Pérez"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Correo electrónico *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-2"
                        placeholder="juan@ejemplo.cl"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Teléfono *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-2"
                        placeholder="+56 9 1234 5678"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Tema de consulta *</Label>
                      <Input
                        id="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="mt-2"
                        placeholder="Ej: Cálculo de pensión"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-2 min-h-[150px]"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-hover text-primary-foreground shadow-md"
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Enviar mensaje
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Al enviar este formulario, aceptas nuestra política de privacidad y tratamiento de datos.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
