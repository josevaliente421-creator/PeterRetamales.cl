export const LogoCarousel = () => {
  return (
    <section className="py-16 md:py-20 bg-background border-t border-b border-border/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trabajamos con
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 mt-4 font-medium max-w-2xl mx-auto leading-relaxed">
            Instituciones financieras y aseguradoras de <span className="text-primary font-semibold">confianza</span>
          </p>
        </div>
        
        <div className="relative w-full overflow-hidden py-4">
          <div className="logos-slide flex items-center gap-16" style={{ animation: 'slide 30s linear infinite' }}>
            <div className="h-16 w-36 flex items-center justify-center flex-shrink-0">
              <img src="/logos/AFP_Capital_logotipo.jpg" alt="AFP Capital" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="h-16 w-36 flex items-center justify-center flex-shrink-0">
              <img src="/logos/metlife_logo.png" alt="MetLife" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="h-16 w-36 flex items-center justify-center flex-shrink-0">
              <img src="/logos/Logo_EA_Mesa-de-trabajo-1-300x169.png" alt="EA" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="h-16 w-36 flex items-center justify-center flex-shrink-0">
              <img src="/logos/principal.png" alt="Principal" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="h-16 w-36 flex items-center justify-center flex-shrink-0">
              <img src="/logos/renta-nacional.png" alt="Renta Nacional" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="h-16 w-36 flex items-center justify-center flex-shrink-0">
              <img src="/logos/pentavida.png" alt="Pentavida" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="h-16 w-36 flex items-center justify-center flex-shrink-0">
              <img src="/logos/Isologo‐4Life‐Seguros.png" alt="4Life Seguros" className="max-h-full max-w-full object-contain" />
            </div>
            {/* Duplicated logos for seamless loop */}
            <div className="h-16 w-36 flex items-center justify-center flex-shrink-0">
              <img src="/logos/AFP_Capital_logotipo.jpg" alt="AFP Capital" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="h-16 w-36 flex items-center justify-center flex-shrink-0">
              <img src="/logos/metlife_logo.png" alt="MetLife" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="h-16 w-36 flex items-center justify-center flex-shrink-0">
              <img src="/logos/Logo_EA_Mesa-de-trabajo-1-300x169.png" alt="EA" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="h-16 w-36 flex items-center justify-center flex-shrink-0">
              <img src="/logos/principal.png" alt="Principal" className="max-h-full max-w-full object-contain" />
            </div>
          </div>
          {/* Animation is defined in global.css */}
        </div>
      </div>
    </section>
  );
};
