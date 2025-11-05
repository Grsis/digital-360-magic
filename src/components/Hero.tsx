import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Target, Star } from "lucide-react";
import professionalHero from "@/assets/professional-hero.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0f0f23] via-[#1a1a35] to-[#151526]">
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-semibold mb-4">
              ✨ Especialistas em Marketing Digital
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl leading-tight">
              Cansado de gastar em marketing{" "}
              <span className="text-accent">sem resultados</span>?
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Não arrisque seu faturamento com tentativas e erros. Contrate uma agência 360º e comece a ver crescimento real ainda este mês. Nossa estratégia já entregou resultados comprovados.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-accent hover:bg-accent-glow text-accent-foreground text-lg px-8 py-7 shadow-glow-strong transition-all duration-300 hover:scale-105 font-bold"
              >
                Quero Aumentar Minhas Vendas Agora! 
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 border-2 border-background flex items-center justify-center text-accent font-bold"
                  >
                    {i === 4 ? "+50" : ""}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-bold text-foreground">+50 clientes</span> satisfeitos
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Image with Floating Cards */}
          <div className="relative lg:block hidden">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={professionalHero} 
                alt="Profissional de Marketing Digital" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Floating Metric Cards */}
            <div className="absolute top-8 right-8 bg-card/95 backdrop-blur-lg rounded-xl p-6 shadow-elegant border border-border animate-fade-in animation-delay-200">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Crescimento médio</p>
                  <p className="text-3xl font-bold text-accent">250%</p>
                  <p className="text-xs text-muted-foreground mt-1">em tráfego orgânico</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-32 right-8 bg-card/95 backdrop-blur-lg rounded-xl p-6 shadow-elegant border border-border animate-fade-in animation-delay-400">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Taxa de conversão</p>
                  <p className="text-3xl font-bold text-accent">+65%</p>
                  <p className="text-xs text-muted-foreground mt-1">melhoria média</p>
                </div>
              </div>
            </div>

            <div className="absolute top-48 -left-8 bg-card/95 backdrop-blur-lg rounded-xl p-6 shadow-elegant border border-border animate-fade-in animation-delay-600">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Projetos realizados</p>
                  <p className="text-3xl font-bold text-foreground">200+</p>
                  <p className="text-xs text-muted-foreground mt-1">clientes satisfeitos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
