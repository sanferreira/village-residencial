import { Home, Activity, Utensils, PartyPopper, Stethoscope, Heart } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Moradia Permanente",
      description:
        "Um lar definitivo com todo o suporte necessário para uma vida tranquila e segura.",
    },
    {
      icon: Heart,
      title: "Enfermagem 24h",
      description:
        "Equipe de enfermagem qualificada e disponível a qualquer hora do dia ou da noite.",
    },
    {
      icon: Activity,
      title: "Fisioterapia",
      description:
        "Programas de fisioterapia individuais e em grupo para manter a mobilidade e a saúde.",
    },
    {
      icon: Utensils,
      title: "Nutrição Balanceada",
      description:
        "Cardápios elaborados por nutricionistas, com refeições deliciosas e saudáveis.",
    },
    {
      icon: PartyPopper,
      title: "Atividades de Lazer",
      description:
        "Uma agenda completa com atividades recreativas, culturais e de socialização.",
    },
    {
      icon: Stethoscope,
      title: "Acompanhamento Médico",
      description:
        "Consultas e acompanhamento médico regular para garantir a saúde preventiva.",
    },
  ];

  return (
    <section id="servicos" className="fade-in-section px-4 lg:px-10 py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Cuidado Profissional
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços para garantir a saúde, o conforto e
            a felicidade de nossos residentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-border"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-5">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
