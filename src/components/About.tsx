import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import img1 from "@/assets/55260982-1825-43b9-85c4-6b99062dc0ff.png"
import img2 from "@/assets/6385dce5-4463-4b39-940f-1d64cff05eb5.png"
import img3 from "@/assets/d9c8a05a-dd87-4b47-bf45-b7bb95be8256.png"
import img4 from "@/assets/e53ba0aa-56f5-4628-b8eb-16bfbf35f77b.png"
import img5 from "@/assets/fce94d6d-9082-445b-9362-8f941883fb71.png"
const About = () => {
  return (
    <section id="sobre" className="fade-in-section px-4 lg:px-10 py-20 bg-[#f4f0e8]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* --- CLASSE ADICIONADA AQUI --- */}
          <div className="about-col-1">
            <div className="mb-8">
              <p className="text-accent text-sm font-semibold uppercase tracking-wide mb-3 section-title">
                SOBRE NÓS
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 section-title">
                Village Residencial Sênior
              </h2>
              <h3 className="text-2xl font-semibold text-foreground mb-6 section-title">
                Um lar feito de carinho e cuidado
              </h3>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:contato@residencialvillage.com.br" className="text-foreground hover:text-primary transition-colors">
                    contato@residencialvillage.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="text-foreground font-semibold">
                    Rua Amador Bueno, 1000 — Centro
                  </p>
                  <p className="text-foreground">
                    Ribeirão Preto — SP • CEP 14010-070
                  </p>
                </div>

              </li>
            </ul>

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


          <div className="space-y-4 about-col-2">
            <p className="text-foreground/80 leading-relaxed text-lg ">
              No <strong>Village Residencial Sênior</strong>, nossa essência é o
              acolhimento. Mais do que um espaço, construímos um verdadeiro
              lar onde o carinho e o respeito são a base de tudo. Estamos
              localizados em um bairro tranquilo, com um amplo espaço externo
              cercado pela natureza, perfeito para momentos de paz e bem-estar.
            </p>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Nossas áreas de convivência, como a sala de estar, televisão e
              sala de jantar, são projetadas para incentivar a socialização e
              criar laços. Entendendo a necessidade de cada família, oferecemos
              quartos confortáveis nas opções individual, dupla ou tripla,
              garantindo sempre um ambiente seguro e adaptado.
            </p>
          </div>
        </div>

        {/* Galeria */}
        {/* --- CLASSE ADICIONADA AQUI --- */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 about-gallery">

          <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 rounded-lg shadow-md overflow-hidden group">
            <img
              src={img2}
              alt="Área de convivência ampla e iluminada do Village Residencial Sênior"
              loading="lazy"
              className="w-full h-full min-h-[250px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="col-span-1  rounded-lg shadow-md overflow-hidden group">
            <img
              src={img1}
              alt="Profissional de saúde cuidando de residente com zelo no Village Residencial Sênior"
              loading="lazy"
              className="w-full h-[200px]   object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="col-span-1 rounded-lg shadow-md overflow-hidden group">
            <img
              src={img3}
              alt="Jardim e área externa do Village Residencial Sênior para banho de sol e relaxamento"
              loading="lazy"
              className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="col-span-1 rounded-lg shadow-md overflow-hidden group">
            <img
              src={img5}
              alt="Quarto privativo confortável e bem iluminado no Village Residencial Sênior"
              loading="lazy"
              className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="col-span-1 rounded-lg shadow-md overflow-hidden group">
            <img
              src={img4}
              alt="Residente do Village Residencial Sênior sorrindo durante atividade de socialização"
              loading="lazy"
              className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;