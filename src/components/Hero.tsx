import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/85" />
      </div>
      
      <div className="container relative z-10 px-4 py-20 mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl font-bold tracking-tight text-primary-foreground md:text-6xl lg:text-7xl">
            Transforme Seu Negócio com{" "}
            <span className="text-accent">Marketing 360º</span>
          </h1>
          
          <p className="text-xl text-primary-foreground/90 md:text-2xl max-w-2xl mx-auto">
            Somos a agência ideal para resolver todos os seus desafios digitais. 
            Uma visão completa do mercado para resultados extraordinários.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row justify-center items-center pt-4">
            <Button 
              size="lg" 
              variant="default"
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent-glow text-accent-foreground text-lg px-8 py-6 shadow-glow transition-all duration-300 hover:scale-105"
            >
              Comece Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 backdrop-blur-sm"
            >
              Nossos Serviços
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
