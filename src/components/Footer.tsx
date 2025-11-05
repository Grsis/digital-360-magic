import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-4 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                Agência <span className="text-accent">360º</span>
              </h3>
              <p className="text-primary-foreground/70 mb-4">
                Transformamos desafios digitais em oportunidades de crescimento. 
                Marketing completo, resultados reais.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Serviços</h4>
              <ul className="space-y-2 text-primary-foreground/70">
                <li><a href="#services" className="hover:text-accent transition-colors">SEO & Conteúdo</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Social Media</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Mídia Paga</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Branding</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-primary-foreground/70">
                <li><a href="#" className="hover:text-accent transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Cases</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/60">
            <p>&copy; 2025 Agência 360º. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
