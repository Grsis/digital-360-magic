import { TrendingUp, Users, DollarSign, Target } from "lucide-react";

const Cases = () => {
  const cases = [
    {
      client: "E-commerce de Moda",
      industry: "Retalho Online",
      challenge: "Baixa taxa de conversão e tráfego estagnado",
      solution: "Estratégia integrada de SEO, Social Media e Google Ads",
      results: [
        { icon: TrendingUp, label: "Tráfego Orgânico", value: "+320%" },
        { icon: Users, label: "Engagement Social", value: "+180%" },
        { icon: DollarSign, label: "Vendas Online", value: "+250%" },
      ],
      color: "from-accent/20 to-accent/5"
    },
    {
      client: "Clínica Dentária",
      industry: "Saúde",
      challenge: "Falta de visibilidade local e agendamentos baixos",
      solution: "SEO Local, Google Ads e Social Media com conteúdo educativo",
      results: [
        { icon: Target, label: "Leads Qualificados", value: "+400%" },
        { icon: Users, label: "Alcance Local", value: "+280%" },
        { icon: TrendingUp, label: "Agendamentos", value: "+350%" },
      ],
      color: "from-primary/20 to-primary/5"
    },
    {
      client: "Software B2B",
      industry: "Tecnologia",
      challenge: "Dificuldade em gerar leads qualificados",
      solution: "Content Marketing, LinkedIn Ads e Email Automation",
      results: [
        { icon: Users, label: "Leads B2B", value: "+190%" },
        { icon: TrendingUp, label: "Conversão", value: "+85%" },
        { icon: DollarSign, label: "ROI", value: "5.2x" },
      ],
      color: "from-accent-glow/20 to-accent-glow/5"
    }
  ];

  return (
    <section id="cases" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground md:text-5xl">
              Cases de <span className="text-accent">Sucesso</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Resultados reais de clientes que confiaram na Adventure Marketing
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {cases.map((caseStudy, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:border-accent transition-all duration-300 hover:-translate-y-2 hover:shadow-glow"
              >
                <div className={`p-6 bg-gradient-to-br ${caseStudy.color}`}>
                  <div className="text-sm font-semibold text-accent mb-2">
                    {caseStudy.industry}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {caseStudy.client}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-semibold text-foreground mb-1">
                        Desafio
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {caseStudy.challenge}
                      </p>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground mb-1">
                        Solução
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {caseStudy.solution}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-card/50 backdrop-blur-sm">
                  <div className="text-sm font-semibold text-foreground mb-4">
                    Resultados
                  </div>
                  <div className="space-y-3">
                    {caseStudy.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="flex items-center justify-between p-3 bg-background/50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-accent/10 rounded-lg">
                            <result.icon className="w-4 h-4 text-accent" />
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {result.label}
                          </span>
                        </div>
                        <span className="text-lg font-bold text-accent">
                          {result.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Quer resultados como estes para o seu negócio?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-glow text-accent-foreground rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-glow"
            >
              Fale Connosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;
