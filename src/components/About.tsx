import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="sobre" className="fade-in-section px-4 lg:px-10 py-20 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mb-8">
              <p className="text-accent text-sm font-semibold uppercase tracking-wide mb-3">
                SOBRE NÓS
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Casa de Repouso Aconchego
              </h2>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Unidade Principal
              </h3>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:contato@casarepousoaconchego.com.br" className="text-foreground hover:text-primary transition-colors">
                    contato@casarepousoaconchego.com.br
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground">Av. Bem-Estar, 123, Bairro Aconchego</p>
                  <p className="text-foreground">Cidade Feliz, UF</p>
                </div>
              </div>
            </div>

            <Button className="bg-accent hover:bg-accent/90 text-white">
              <Phone className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </div>

          <div>
            <p className="text-foreground/80 leading-relaxed text-lg">
              A <strong>Casa de Repouso Aconchego</strong> é acolhedora em sua essência. Localizada em um tranquilo bairro da cidade, conta com um amplo espaço externo construído para preservar a natureza. Temos também deliciosas áreas de convívio como a sala de televisão, sala de jantar e sala de estar. Oferecemos quartos individuais, duplos ou triplos, prontos para atender a necessidade de cada família.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2">
            <div
              className="w-full h-full min-h-[400px] bg-cover bg-center rounded-lg shadow-md"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2070')",
              }}
            />
          </div>
          <div className="col-span-1">
            <div
              className="w-full h-[200px] bg-cover bg-center rounded-lg shadow-md"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?q=80&w=2070')",
              }}
            />
          </div>
          <div className="col-span-1">
            <div
              className="w-full h-[200px] bg-cover bg-center rounded-lg shadow-md"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=2070')",
              }}
            />
          </div>
          <div className="col-span-1">
            <div
              className="w-full h-[200px] bg-cover bg-center rounded-lg shadow-md"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=2069')",
              }}
            />
          </div>
          <div className="col-span-1">
            <div
              className="w-full h-[200px] bg-cover bg-center rounded-lg shadow-md"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1581579186913-45ac3e648364?q=80&w=2070')",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
