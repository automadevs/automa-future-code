import { BarChart3, Workflow, Globe } from "lucide-react";

const ForBusinesses = () => {
  const solutions = [
    {
      icon: BarChart3,
      title: "Dashboards e relatórios automatizados",
      description: "Visualize seus dados em tempo real com dashboards inteligentes e relatórios que se atualizam sozinhos."
    },
    {
      icon: Workflow,
      title: "Integração entre ferramentas",
      description: "Conectamos CRM, WhatsApp, e-mail, planilhas e outras ferramentas para trabalhar em harmonia."
    },
    {
      icon: Globe,
      title: "Desenvolvimento sob medida",
      description: "Landing pages, sites institucionais e sistemas completos desenvolvidos do zero."
    }
  ];

  return (
    <section id="empresas" className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 animate-slide-up">
          <div className="space-y-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="card-automa"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-lg">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2 animate-fade-in">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-accent border border-accent/30 px-4 py-2 rounded-full bg-accent/5">
              Para Empresas
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Tecnologia que <span className="gradient-text">impulsiona negócios</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Ajudamos marcas e negócios a implementar automações, melhorar a performance 
            digital e criar sistemas personalizados — de sites a plataformas completas.
          </p>
          
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-xl p-6">
            <p className="text-foreground/90 leading-relaxed">
              Transformamos processos complexos em soluções simples e eficientes, 
              permitindo que seu time foque no crescimento do negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForBusinesses;
