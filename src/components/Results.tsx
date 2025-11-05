import { CheckCircle2 } from "lucide-react";

const Results = () => {
  const stats = [
    { number: "200+", label: "Projetos Entregues" },
    { number: "95%", label: "Taxa de Satisfação" },
    { number: "3x", label: "ROI Médio" },
    { number: "24/7", label: "Suporte Dedicado" }
  ];

  const achievements = [
    "Aumento médio de 250% em tráfego orgânico",
    "Redução de 40% no custo por aquisição",
    "Crescimento de 180% em engajamento social",
    "Melhoria de 65% em taxa de conversão"
  ];

  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-glow rounded-full blur-3xl" />
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 md:text-5xl">
              Resultados Que <span className="text-accent">Falam Por Si</span>
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Transformamos estratégias em resultados mensuráveis e crescimento real
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-primary-foreground/5 rounded-lg backdrop-blur-sm border border-primary-foreground/10"
              >
                <div className="text-5xl font-bold mb-2 text-accent">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-primary-foreground/5 rounded-lg backdrop-blur-sm"
              >
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-primary-foreground/90">
                  {achievement}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
