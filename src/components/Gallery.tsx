// --- Array de imagens (4 fotos com proporção vertical) ---
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?q=80&w=2070",
    alt: "Profissional de saúde cuidando de residente com zelo",
  },
  {
    src: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=2070",
    alt: "Jardim e área externa para banho de sol",
  },
  {
    src: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=2069",
    alt: "Quarto privativo confortável e bem iluminado",
  },
  {
    src: "https://images.unsplash.com/photo-1581579186913-45ac3e648364?q=80&w=2070",
    alt: "Residente sorrindo durante atividade de socialização",
  },
];

const Gallery = () => {
  return (
    // Fundo cinza/bege na seção inteira
    <section id="galeria" className="px-4 lg:px-10 py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossos Ambientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cada espaço do Village Residencial Sênior é planejado para o conforto,
            segurança e a interação dos nossos residentes.
          </p>
        </div>

        {/* --- MELHORIA: Layout de 4 colunas uniformes --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="col-span-1 rounded-lg shadow-md overflow-hidden group"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="
                  w-full h-full object-cover 
                  transition-transform duration-500 ease-in-out 
                  group-hover:scale-105
                  aspect-[3/4]  /* --- Força a proporção vertical 3:4 --- */
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;