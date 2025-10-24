import {
  MessageSquare, // Para "Espaço de Convivência"
  Activity,
  Sprout,        // Para "Jardim"
  Video,         // Para "Monitoramento"
  Tv,            // Para "Salas de televisão"
  Users,         // Para "Terapia Ocupacional"
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";

// --- MELHORIA: Conteúdo 100% baseado na referência E NOVAS IMAGENS ---
const services = [
  {
    icon: MessageSquare,
    title: "Espaço de convivência",
    description: "Espaço de convivência para socialização de idosos",
    // --- Imagem Corrigida ---
    imageSrc: "https://doisvizinhos.pr.gov.br/uploads/5378/CENTRO%20DE%20CONVIV%C3%8ANCIA%20DO%20IDOSO.jpeg"
  },
  {
    icon: Activity,
    title: "Fisioterapia",
    description: "Sessão de fisioterapia para idosos",
    // --- Imagem Corrigida ---
    imageSrc: "https://clinicaportal.com.br/wp-content/uploads/2021/02/Fisioterapia-para-idosos-como-a-pratica-ajuda-na-reabilitacao-e-autonomia-1024x683.jpg"
  },
  {
    icon: Sprout,
    title: "Jardim",
    description: "Jardim e horta para residentes",
    // --- Imagem Corrigida ---
    imageSrc: "https://media.istockphoto.com/id/186910071/pt/foto/sorridente-casal-idoso-no-jardim.jpg?s=612x612&w=0&k=20&c=Qc7tAo6X0n-OIWh2s5cLftat2s85JdrqtS6-SisXAg8="
  },
  {
    icon: Video,
    title: "Monitoramento 24h",
    description: "Profissional de saúde monitorando residente",
    // --- Imagem Corrigida ---
    imageSrc: "https://www.vivamelhorcuidadores.com/imagens/categorias/monitoramento-remoto-idosos-01.webp"
  },
  {
    icon: Tv,
    title: "Salas de televisão",
    description: "Sala de televisão confortável para residentes",
    // --- Imagem Corrigida ---
    imageSrc: "https://img.freepik.com/fotos-premium/grupo-de-idosos-descansando-no-sofa-da-sala-de-estar-e-assistindo-noticias-na-tv-juntos_274679-30090.jpg"
  },
  {
    icon: Users,
    title: "Terapia ocupacional",
    description: "Atividade de terapia ocupacional, como pintura",
    // --- Imagem Corrigida ---
    imageSrc: "https://clinicaintelecta.com.br/wp-content/uploads/2022/05/Terapia-ocupacional-e-idosos-e1652808186601.png"
  },
];

const Services = () => {
  return (
    // Fundo bege/cinza-claro da seção
    <section id="servicos" className="fade-in-section px-4 lg:px-10 py-20 bg-[#f4f0e8]">
      <div className="container mx-auto max-w-7xl">

        {/* Título no estilo da referência */}
        {/* --- CLASSE ADICIONADA AQUI --- */}
        <div className="text-center mb-16 services-header ">
          <p className="text-accent text-sm font-semibold uppercase tracking-wide mb-3 section-title">
            Serviços
          </p>
          <h2 className="text-4xl md:text-4xl font-bold text-primary mb-6 section-title">
            Serviços na Unidade
          </h2>
        </div>

        {/* Grid com layout de "barra" */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0">
          {services.map((service) => (
            <li
              key={service.title}
              // --- CLASSE ADICIONADA AQUI ---
              className="bg-white service-card rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-border overflow-hidden flex items-center service-card"
            >
              {/* 1. Imagem */}
              <img
                src={service.imageSrc}
                alt={service.description}
                className="w-28 h-24 object-cover "
              />

              {/* 2. Ícone */}
              <div className="px-5">
                <service.icon
                  className="w-8 h-8 text-accent flex-shrink-0"
                  aria-hidden="true"
                />
              </div>

              {/* 3. Título */}
              <h3 className="text-lg font-bold text-primary flex-1 pr-5">
                {service.title}
              </h3>
            </li>
          ))}
        </ul>

        {/* Botão "Fale Conosco" da referência */}
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

export default Services;