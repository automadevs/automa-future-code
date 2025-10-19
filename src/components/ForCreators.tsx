import { ArrowDown } from "lucide-react";

const ForCreators = () => {
  return (
    <section id="criadores" className="section-container bg-card/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-primary border border-primary/30 px-4 py-2 rounded-full bg-primary/5">
              Para Criadores
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Criadores que querem <span className="gradient-text">ir além</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Trabalhamos em parceria com criadores que desejam lançar produtos próprios, 
            automatizar a rotina e profissionalizar seus projetos.
          </p>
          
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6 mb-8">
            <p className="text-xl font-semibold text-foreground">
              "A gente cuida da parte técnica pra você focar no que importa."
            </p>
          </div>
          
          <button
            onClick={() => document.getElementById("empresas")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-secondary inline-flex items-center gap-2 group"
          >
            Ver como funciona
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="animate-slide-up">
          <div className="card-automa space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-primary rounded-full" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Produtos digitais sob medida</h3>
                <p className="text-muted-foreground">Cursos, comunidades, apps e plataformas personalizadas para sua audiência.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-accent rounded-full" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Automação da rotina</h3>
                <p className="text-muted-foreground">Liberamos seu tempo automatizando processos repetitivos e operacionais.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-primary rounded-full" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Coprodução estratégica</h3>
                <p className="text-muted-foreground">Participamos como parceiros técnicos no desenvolvimento e lançamento.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForCreators;
