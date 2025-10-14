const Testimonials = () => {
  const testimonials = [
    {
      text: "Desde que minha mãe veio para a Aconchego, ela está mais feliz e participativa. A equipe é incrivelmente atenciosa e o ambiente é maravilhoso. Sinto que ela está em casa.",
      name: "Maria S.",
      role: "Filha de Residente",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070",
    },
    {
      text: "Encontrei na Casa Aconchego a segurança e o cuidado que meu pai precisava. As instalações são impecáveis e as atividades diárias mantêm ele ativo e engajado.",
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

  return (
    <section id="depoimentos" className="fade-in-section px-4 lg:px-10 py-20 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Depoimentos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A satisfação de nossos residentes e suas famílias é a nossa maior recompensa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[hsl(var(--section-bg))] p-8 rounded-lg shadow-sm border border-border"
            >
              <p className="text-foreground/80 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${testimonial.image})` }}
                />
                <div>
                  <h4 className="font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
