import { Facebook, Instagram, Linkedin, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const navigation = {
  servicios: [
    { name: "Diagnóstico previsional", href: "#servicios" },
    { name: "Cálculo de pensión", href: "#servicios" },
    { name: "Revisión de cotizaciones", href: "#servicios" },
    { name: "APV y ahorro", href: "#servicios" },
  ],
  recursos: [
    { name: "Blog", href: "#recursos" },
    { name: "Guías prácticas", href: "#recursos" },
    { name: "Preguntas frecuentes", href: "#faq" },
    { name: "Casos de éxito", href: "#testimonios" },
  ],
  empresa: [
    { name: "Sobre nosotros", href: "#inicio" },
    { name: "Cómo trabajamos", href: "#proceso" },
    { name: "Contacto", href: "#contacto" },
    { name: "Aviso de fraude", href: "#inicio" },
  ],
};

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const sectionId = href.replace("#", "");
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="mb-8">
                <img 
                  src="/logo.png" 
                  alt="Peter Retamales Logo" 
                  className="h-52 object-contain" 
                />
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Asesoría previsional independiente con más de 35 años de experiencia ayudando a personas a optimizar su pensión.
              </p>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://wa.me/56993943783"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://www.facebook.com/Peterretamalesasesorias/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://www.instagram.com/peterretamales.cl/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-3">
              {navigation.servicios.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-3">
              {navigation.recursos.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="tel:+56912345678"
                  className="flex items-start space-x-3 text-white/80 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>+56 9 1234 5678</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@peterretamales.cl"
                  className="flex items-start space-x-3 text-white/80 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="break-all">contacto@peterretamales.cl</span>
                </a>
              </li>
              <li className="flex items-start space-x-3 text-white/80">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Santiago Centro Moneda 1137, Oficina 71, Chile</span>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm font-semibold mb-2">Horarios de atención</p>
              <p className="text-sm text-white/80">Lunes–Viernes: 09:00–18:00</p>
              <p className="text-sm text-white/80">Sábado: 09:00–13:00</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} Peter Retamales - Pensión a su alcance. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-white/70">
              <Link to="/" className="hover:text-white transition-colors">
                Política de privacidad
              </Link>
              <Link to="/" className="hover:text-white transition-colors">
                Términos de servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
