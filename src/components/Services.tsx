import { Search, Share2, Megaphone, Palette, BarChart3, Mail } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "SEO & Conteúdo",
      description: "Posicione sua marca no topo dos resultados de busca com estratégias comprovadas"
    },
    {
      icon: Share2,
      title: "Social Media",
      description: "Construa uma presença marcante nas redes sociais que engaja e converte"
    },
    {
      icon: Megaphone,
      title: "Mídia Paga",
      description: "Campanhas otimizadas no Google Ads, Meta Ads e outras plataformas"
    },
    {
      icon: Palette,
      title: "Branding & Design",
      description: "Identidade visual impactante que diferencia sua marca no mercado"
    },
    {
      icon: BarChart3,
      title: "Analytics & BI",
      description: "Dados e insights que transformam decisões em resultados concretos"
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Automações inteligentes que nutrem leads e aumentam vendas"
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground md:text-5xl">
              Soluções Completas Para Seu <span className="text-accent">Sucesso Digital</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Integramos todas as ferramentas e estratégias necessárias para impulsionar seu negócio
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-card rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex p-4 bg-accent/10 rounded-lg group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                  <service.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
