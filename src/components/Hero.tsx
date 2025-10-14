import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
  return (
    <section className="hero-section relative min-h-[600px] lg:min-h-[700px] flex items-center pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.45) 100%), url('https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=2070')",
        }}
      />
      
      <div className="hero-content relative z-10 container mx-auto px-4 lg:px-10 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Residencial Sênior | Casa de Repouso Aconchego
            </h1>
            <p className="text-base md:text-lg text-white/95 leading-relaxed max-w-2xl">
              A Casa de Repouso Aconchego oferece o melhor em cuidado sênior no Brasil. Somos um lugar repleto de histórias, onde cada detalhe é pensado para oferecer conforto, segurança e bem-estar aos nossos residentes. Preencha o formulário e descubra como podemos construir histórias juntos.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Fale conosco e faça uma visita
            </h2>
            <form className="space-y-4">
              <Input placeholder="Nome" className="bg-input border-border" />
              <Input type="email" placeholder="Email" className="bg-input border-border" />
              <Input type="tel" placeholder="Telefone" className="bg-input border-border" />
              <Input placeholder="Cidade" className="bg-input border-border" />
              <Button className="w-full bg-accent hover:bg-accent/90 text-white h-12 text-base font-semibold">
                ENVIAR
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
