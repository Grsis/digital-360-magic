import { Target, Users, TrendingUp, Zap } from "lucide-react";
import icon360 from "@/assets/360-icon.png";

const Marketing360 = () => {
  const benefits = [
    {
      icon: Target,
      title: "Estratégia Integrada",
      description: "Todos os canais trabalhando juntos para maximizar seus resultados"
    },
    {
      icon: Users,
      title: "Alcance Completo",
      description: "Chegue ao seu público onde quer que ele esteja"
    },
    {
      icon: TrendingUp,
      title: "Crescimento Sustentável",
      description: "Resultados consistentes e mensuráveis em todas as frentes"
    },
    {
      icon: Zap,
      title: "Agilidade & Inovação",
      description: "Adaptamos rapidamente às mudanças do mercado digital"
    }
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center mb-6">
              <img src={icon360} alt="Marketing 360º" className="w-24 h-24" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-foreground md:text-5xl">
              O Que é Marketing <span className="text-accent">360º</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Uma abordagem completa e integrada que conecta todas as suas estratégias digitais. 
              Do planejamento à execução, garantimos que cada ponto de contato com seu cliente 
              esteja alinhado para gerar resultados máximos.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-6 bg-card rounded-lg shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-4 inline-flex p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <benefit.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-card-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketing360;
