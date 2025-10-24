import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- MELHORIA (REACT): Movido para fora do componente ---
const testimonials = [
  {
    // --- MELHORIA (COPY): Nome corrigido ---
    text: "Desde que minha mãe veio para o Residencial Village, ela está mais feliz e participativa. A equipe é incrivelmente atenciosa e o ambiente é maravilhoso. Sinto que ela está em casa.",
    name: "Maria S.",
    role: "Filha de Residente",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070",
  },
  {
    // --- MELHORIA (COPY): Nome corrigido ---
    text: "Encontrei no Residencial Village a segurança e o cuidado que meu pai precisava. As instalações são impecáveis e as atividades diárias mantêm ele ativo e engajado.",
    name: "João P.",
    role: "Filho de Residente",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070",
  },
  {
    text: "A equipe é simplesmente fantástica. Eles tratam todos com muito respeito e carinho. Recomendo de olhos fechados para quem busca um lugar de confiança.",
    name: "Ana L.",
    role: "Familiar",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070",
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="fade-in-section px-4 lg:px-10 py-20 bg-white">
      <div className="container mx-auto max-w-7xl">
        
        {/* --- CLASSE ADICIONADA AQUI --- */}
        <div className="text-center mb-16 testimonials-header">
          <h2 className="text-4xl md:text-4xl font-bold text-primary mb-6 section-title">
            Depoimentos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto section-title">
            A satisfação de nossos residentes e suas famílias é a nossa maior
            recompensa.
          </p>
        </div>

        {/* --- MELHORIA (SEMÂNTICA): <ul> e <li> --- */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 ">
          {testimonials.map((testimonial) => (
            <li 
              key={testimonial.name} 
              className="flex flex-col testimonial-card service-card" 
            >
              <figure className="bg-[hsl(var(--section-bg))] p-8 rounded-lg shadow-sm border border-border flex flex-col flex-1"> {/* flex-1 para ocupar o espaço */}
                
                {/* --- MELHORIA (SEMÂNTICA): <blockquote> para a citação --- */}
                <blockquote className="text-foreground/80 mb-6 italic leading-relaxed flex-1">
                  "{testimonial.text}"
                </blockquote>
                
                {/* --- MELHORIA (SEMÂNTICA): <figcaption> para o autor --- */}
                <figcaption className="flex items-center gap-4">
                  
                  {/* --- MELHORIA (A11Y): <img> em vez de div --- */}
                  <img
                    src={testimonial.image}
                    alt={`Foto de ${testimonial.name}`}
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        {/* --- MELHORIA (LAYOUT): Botão movido para fora do grid --- */}
        <div className="text-center mt-16">
          <a
              href="https://wa.me/5516991974141?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-accent hover:bg-accent/90 text-white">
                <Phone className="mr-2 h-4 w-4" />
                Fale conosco pelo WhatsApp
              </Button>
            </a>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;