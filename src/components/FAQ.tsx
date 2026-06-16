import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto cuesta la asesoría previsional?",
    answer: "La primera consulta y diagnóstico es completamente gratuita. Luego, los honorarios varían según la complejidad de tu caso. Te entregamos un presupuesto claro antes de comenzar cualquier gestión.",
  },
  {
    question: "¿Cuál es la diferencia entre retiro programado y renta vitalicia?",
    answer: "El retiro programado mantiene tus fondos en tu AFP y recibes un monto calculado anualmente que puede variar. La renta vitalicia transfiere tus fondos a una compañía de seguros que te paga un monto fijo mensual de por vida. Cada opción tiene ventajas según tu perfil.",
  },
  {
    question: "¿Cuánto tiempo demora el trámite de pensión?",
    answer: "El tiempo varía según el tipo de pensión y tu situación. Una pensión de vejez con documentación completa puede tardar 1-2 meses. Casos más complejos o con regularización de lagunas pueden tomar 3-6 meses. Te mantenemos informado en cada etapa.",
  },
  {
    question: "¿Qué son las lagunas previsionales y cómo afectan mi pensión?",
    answer: "Las lagunas son periodos en los que no se registraron cotizaciones, aunque hayas trabajado. Reducen el monto de tu pensión. Podemos ayudarte a identificarlas y gestionar su regularización cuando corresponda.",
  },
  {
    question: "¿Puedo solicitar pensión anticipada?",
    answer: "Sí, es posible bajo ciertas condiciones. Para hombres desde los 65 años y mujeres desde los 60, si tu pensión calculada supera ciertos requisitos mínimos. Evaluamos tu caso para determinar si calificas.",
  },
  {
    question: "¿Trabajan con todas las AFP y compañías de seguros?",
    answer: "Sí, somos asesores independientes y trabajamos con todas las AFP de Chile y las principales compañías de seguros. Esto nos permite buscar la mejor opción para ti sin conflictos de interés.",
  },
  {
    question: "¿Qué documentos necesito para empezar?",
    answer: "Para el diagnóstico inicial: cédula de identidad, certificado de AFP (últimas cotizaciones) y certificado de nacimiento. Según tu caso, pueden requerirse documentos adicionales que te indicaremos oportunamente.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Respuestas a las dudas más comunes sobre pensiones y nuestros servicios
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border/50 rounded-lg px-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="text-left hover:text-primary transition-colors">
                <span className="font-semibold text-base">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            ¿No encuentras la respuesta que buscas?
          </p>
          <button
            onClick={() => {
              document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-primary font-semibold hover:underline"
          >
            Contáctanos directamente →
          </button>
        </div>
      </div>
    </section>
  );
};
