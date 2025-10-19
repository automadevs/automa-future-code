import { Zap, Code, Layers, Link as LinkIcon, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Automação de processos",
      description: "Automatizamos tarefas repetitivas para você focar no que realmente importa."
    },
    {
      icon: Code,
      title: "Criação de sistemas, apps e plataformas",
      description: "Desenvolvemos soluções completas, do conceito ao lançamento."
    },
    {
      icon: Layers,
      title: "Estruturação de produtos digitais",
      description: "Transformamos ideias em produtos digitais escaláveis e lucrativos."
    },
    {
      icon: LinkIcon,
      title: "Integrações e otimização de funis",
      description: "Conectamos suas ferramentas e otimizamos seus processos de vendas."
    },
    {
      icon: Users,
      title: "Coprodução com criadores de conteúdo",
      description: "Parceria estratégica para lançar e escalar produtos digitais."
    }
  ];

  return (
    <section id="servicos" className="section-container">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          O que <span className="gradient-text">fazemos</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Na Automa, desenvolvemos soluções que unem tecnologia e estratégia para acelerar ideias.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
        {services.map((service, index) => (
          <div
            key={index}
            className="card-automa group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <service.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">
              {service.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
