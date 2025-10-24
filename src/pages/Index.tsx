import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type'; // 1. Importar o SplitType

// Imports dos teus componentes
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import HostSection from "@/components/HostSection";
import Footer from "@/components/Footer";

// 2. Registar o plugin (como já tinhas)
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  // 3. Usar a ref principal para o 'context'
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
   
    const ctx = gsap.context(() => {

    
      gsap.to(".hero-content", {
        y: 150, // Mover mais para baixo
        opacity: 0, // Desaparecer completamente
        ease: "power1.in", // Suavizar a saída
        scrollTrigger: {
          trigger: ".hero-section", // O trigger
          start: "top top",
          end: "bottom top",
          scrub: 1, // Um scrub de 1s dá uma sensação mais suave
        },
      });

      // Efeito de parallax na imagem de fundo (se houver)
      gsap.to(".hero-image", {
        y: 50, // Mover mais devagar que o conteúdo para dar profundidade
        scale: 1.1, // Ligeiro zoom 
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });


      // --- 2. Animação das Seções (Otimizada com Batch) ---
      // Isto substitui o teu loop forEach
      ScrollTrigger.batch(".fade-in-section", {
        start: "top 85%", // Aciona quando 85% da seção estiver visível
        onEnter: batch => {
          // Animamos o 'batch' (lote) de elementos
          gsap.fromTo(batch, 
            { opacity: 0, y: 100 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 1,
              ease: "power3.out",
              stagger: 0.2 
            }
          );
        },
        onLeaveBack: batch => {
          gsap.to(batch, { opacity: 0, y: 100, duration: 0.8, ease: "power2.in" });
        },
      });


      const titles = gsap.utils.toArray<HTMLElement>('.section-title');
      
      titles.forEach(title => {
        const split = new SplitType(title, { types: 'chars, words' });

        // Anima cada caractere
        gsap.from(split.chars, {
          opacity: 0,
          y: 60,
          rotateX: -90, // Um efeito 3D subtil
          stagger: 0.03, // Cada letra 0.03s depois da outra
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: title,
            start: "top 90%", // Começa quando o título entra
            toggleActions: "play none none reverse", // Repete ao subir/descer
          }
        });
      });



      gsap.from(".service-card", {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2, 
        scrollTrigger: {
          trigger: ".services-section", // O 'pai' que contém os cards
          start: "top 70%",
          toggleActions: "play none none reverse",
        }
      });
      

    }, mainRef); // Fim do gsap.context()

    return () => ctx.revert(); 
    
  }, []); 


  return (
    <div 
      className="min-h-screen bg-[#f4f0e8]"
      ref={mainRef} // A ref principal que dá o escopo
    >
      <Header />
      

      <main>
        <Hero /> 
        
        <section className="fade-in-section">
          <About /> 
        </section>
        
        <section className="fade-in-section services-section">
          <Services /> 
        </section>
        
        <section className="fade-in-section">
          <Testimonials />
        </section>
        
        <section className="fade-in-section">
          <HostSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;