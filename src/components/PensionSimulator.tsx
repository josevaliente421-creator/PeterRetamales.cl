export const PensionSimulator = () => {
  return (
    <section id="simulador" className="py-20 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simulador de pensión
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados referenciales (no exactos), pero cercanos a lo que podría ser.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden border border-border/50 shadow-md bg-background">
          <iframe
            src="/simulador-pensiones.html"
            title="Simulador de pensiones"
            className="w-full h-[1100px]"
          />
        </div>
      </div>
    </section>
  );
};
