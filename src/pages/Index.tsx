import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LogoCarousel } from "@/components/LogoCarousel";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { OurValues } from "@/components/OurValues";
import { Testimonials } from "@/components/Testimonials";
import { Authority } from "@/components/Authority";
import { Process } from "@/components/Process";
import { Resources } from "@/components/Resources";
import { FAQ } from "@/components/FAQ";
import { CTABanner } from "@/components/CTABanner";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Peter Retamales - Pensión a su alcance | Asesoría Previsional en Chile</title>
        <meta
          name="description"
          content="Asesoría previsional independiente en Chile. Optimiza tu pensión con claridad: cálculo, modalidades, AFP, IPS. +20 años de experiencia. Primera consulta gratis."
        />
        <meta
          name="keywords"
          content="asesoría previsional, pensión Chile, AFP, IPS, retiro programado, renta vitalicia, cálculo pensión, jubilación Chile"
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Peter Retamales - Pensión a su alcance" />
        <meta
          property="og:description"
          content="Asesoría previsional independiente para optimizar tu jubilación en Chile. Primera consulta gratis."
        />
        <meta property="og:type" content="website" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Peter Retamales - Pensión a su alcance",
            "description": "Asesoría previsional independiente para optimizar la jubilación",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Santiago",
              "addressCountry": "CL"
            },
            "telephone": "+56912345678",
            "email": "contacto@pensionasualcance.cl",
            "openingHours": "Mo-Fr 09:00-18:00, Sa 09:00-13:00",
            "priceRange": "$$",
            "areaServed": "Chile"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <LogoCarousel />
          <Services />
          <WhyChooseUs />
          <OurValues />
          <Testimonials />
          <Authority />
          <Process />
          <Resources />
          <FAQ />
          <CTABanner />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
