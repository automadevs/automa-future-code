import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-50" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="section-container relative z-10 text-center">
        <div className="animate-fade-in">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-accent border border-accent/30 px-4 py-2 rounded-full bg-accent/5">
              A automação que se encaixa no seu dia a dia
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Automação e desenvolvimento
            <br />
            <span className="gradient-text">para criadores e negócios</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Criamos sistemas, automações e produtos digitais personalizados para impulsionar 
            projetos, escalar resultados e conectar comunidades.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/seunumerodetelefone"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 group"
            >
              Falar com a Automa
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-secondary"
            >
              Ver o que fazemos
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-slide-up">
          <div className="card-automa text-center">
            <div className="text-4xl font-bold gradient-text mb-2">500+</div>
            <div className="text-muted-foreground">Automações criadas</div>
          </div>
          <div className="card-automa text-center">
            <div className="text-4xl font-bold gradient-text mb-2">98%</div>
            <div className="text-muted-foreground">Taxa de satisfação</div>
          </div>
          <div className="card-automa text-center">
            <div className="text-4xl font-bold gradient-text mb-2">70%</div>
            <div className="text-muted-foreground">Redução de tempo</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
