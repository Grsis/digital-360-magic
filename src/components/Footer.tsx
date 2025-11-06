import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0a0a18] via-[#12122a] to-[#0f0f20] text-foreground py-12 border-t border-border">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-4 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                Adventure <span className="text-accent">Marketing</span>
              </h3>
              <p className="text-muted-foreground mb-4">
                Transformamos desafios digitais em oportunidades de crescimento. 
                Marketing completo, resultados reais.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/adventuremktg" target="_blank" rel="noopener noreferrer" className="p-2 bg-card rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="mailto:team@adventure.mktg.com" className="p-2 bg-card rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="tel:+351910597607" className="p-2 bg-card rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Serviços</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#services" className="hover:text-accent transition-colors">SEO & Conteúdo</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Social Media</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Mídia Paga</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Branding</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Cases</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2025 Adventure Marketing. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
