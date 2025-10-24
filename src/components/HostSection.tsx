import React from 'react';

const HostSection = () => {
  return (
    // Seção com o mesmo fundo bege/cinza-claro das outras
    <section id="anfitrioes" className="fade-in-section px-4 lg:px-10 py-20 bg-[#f4f0e8]">
      <div className="container mx-auto max-w-7xl">
        
        {/* Grid principal: 2 colunas, alinhadas ao centro */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Coluna 1: Conteúdo de Texto */}
          {/* --- CLASSE ADICIONADA AQUI --- */}
          <div className="host-text">
            <div className="mb-8">
              <p className="text-accent text-sm font-semibold uppercase tracking-wide mb-3 section-title">
                Nossa Equipe
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 section-title">
                Conheça quem está a frente do residencial
              </h2>
            </div>
            
            {/* -------------------------------------------------
              IMPORTANTE: Troque este texto pelo real!
              -------------------------------------------------
            */}
            <div className="space-y-4 text-foreground/80 leading-relaxed text-lg">
              <p>
                Sou <strong>Dra. Helena Moreira</strong>, médica geriatra e diretora 
                do Residencial Village. Com mais de 15 anos de experiência 
                em Instituições de Longa Permanência para Idosos (ILPIs), 
                fundei o Village com uma missão clara: criar um ambiente 
                que eu confiaria para minha própria família.
              </p>
              <p>
                Percebi que o verdadeiro cuidado vai além da medicina; 
                ele está no carinho, na dedicação e no vínculo que criamos. 
                Desde nossa inauguração, nosso principal diferencial é o 
                cuidado humanizado e próximo que cultivamos com cada 
                residente e seus familiares.
              </p>
            </div>
          </div>

          {/* Coluna 2: Imagem */}
          {/* --- CLASSE ADICIONADA AQUI --- */}
          <div className="host-image">
            {/* -------------------------------------------------
              IMPORTANTE: Troque esta imagem pela real!
              -------------------------------------------------
            */}
            {/* O overflow-hidden aqui ajuda a "cortar" a imagem no parallax */}
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2" // Imagem de exemplo
              alt="Dra. Helena Moreira, diretora do Residencial Village" // Atualize o Alt Text
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