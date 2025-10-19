import { MessageCircle, Instagram, Send, Mail } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    {
      icon: MessageCircle,
      name: "WhatsApp",
      href: "https://wa.me/seunumerodetelefone",
      color: "text-green-500"
    },
    {
      icon: Instagram,
      name: "Instagram",
      href: "https://instagram.com/automa",
      color: "text-pink-500"
    },
    {
      icon: Send,
      name: "Telegram",
      href: "https://t.me/automa",
      color: "text-blue-400"
    },
    {
      icon: Mail,
      name: "E-mail",
      href: "mailto:contato@automa.com",
      color: "text-accent"
    }
  ];

  return (
    <section id="contato" className="section-container bg-card/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Vamos <span className="gradient-text">conversar?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12">
            Quer conversar sobre um projeto, parceria ou ideia?
            <br />
            Escolha seu canal preferido e vamos começar!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-slide-up">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-automa flex flex-col items-center justify-center gap-3 py-8 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <link.icon className={`w-8 h-8 ${link.color} group-hover:scale-110 transition-transform`} />
              <span className="font-medium text-foreground">{link.name}</span>
            </a>
          ))}
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-muted-foreground text-sm">
            © 2025 Automa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
