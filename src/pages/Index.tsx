import Hero from "@/components/Hero";
import Marketing360 from "@/components/Marketing360";
import Services from "@/components/Services";
import Cases from "@/components/Cases";
import Results from "@/components/Results";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Marketing360 />
      <Services />
      <Cases />
      <Results />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
