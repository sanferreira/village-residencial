import React from 'react';
import image from "@/assets/d052dbc0-17f1-4fe8-a019-b95459b57da5.png"
const HostSection = () => {
  return (
    <section id="anfitrioes" className="fade-in-section px-4 lg:px-10 py-20 bg-[#f4f0e8]">
      <div className="container mx-auto max-w-7xl">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="host-text">
            <div className="mb-8">
              <p className="text-accent text-sm font-semibold uppercase tracking-wide mb-3 section-title">
                VILLAGE RESIDENCIAL              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 section-title">
                Onde o carinho encontra o cuidado
              </h2>
            </div>

            <div className="space-y-4 text-foreground/80 leading-relaxed text-lg">
              <p>
                O Village Residencial nasceu do cuidado com a vida e do respeito à história de cada idoso.
                Acreditamos que envelhecer é uma fase que merece atenção, carinho, dignidade e um lugar onde
                seja possível se sentir verdadeiramente em casa.
              </p>
              <p>
                Aqui, cada residente é acolhido de forma única, com respeito à sua individualidade, rotina e
                necessidades. Nosso propósito é oferecer mais do que assistência: é proporcionar segurança,
                conforto, afeto e qualidade de vida, em um ambiente calmo, familiar e acolhedor.
              </p>
              <p>
                Cuidamos com presença, empatia e dedicação, valorizando os pequenos gestos, a escuta atenta e os
                vínculos criados no dia a dia. Nossa equipe atua com amor e responsabilidade, entendendo que o
                cuidado verdadeiro vai muito além da técnica.
              </p>
              <p>
                O Village Residencial é mais do que uma casa de repouso.
                <br />
                É um lar onde cada história importa e cada vida é cuidada com carinho.
              </p>
            </div>

          </div>


          <div className="host-image">
            {/* O overflow-hidden aqui ajuda a "cortar" a imagem no parallax */}
            <img
              src={image} // Imagem de exemplo
              alt=""
              loading="lazy"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HostSection;