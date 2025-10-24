import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contato" className="fade-in-section px-4 lg:px-10 py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold text-primary mb-6">
            Trabalhe Conosco
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos aqui para tirar suas dúvidas e ajudar você a encontrar a melhor solução.
            Agende uma visita e venha nos conhecer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome
                </label>
                <Input id="name" placeholder="Seu nome completo" className="bg-input" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="seu@email.com" className="bg-input" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Telefone
                </label>
                <Input id="phone" type="tel" placeholder="(00) 00000-0000" className="bg-input" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Como podemos ajudar?"
                  className="min-h-[120px] bg-input"
                />
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90 text-white h-12 text-base font-semibold">
                ENVIAR MENSAGEM
              </Button>
            </form>
          </div>

          <div>
            <div className="rounded-lg overflow-hidden mb-6 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197992984918!2d-46.65653138448259!3d-23.56133906744033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0x202157e0c76ab3e1!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1678886985012!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-primary mb-1">Endereço</h4>
                  <p className="text-muted-foreground">
                    Av. Bem-Estar, 123, Bairro Aconchego
                    <br />
                    Cidade Feliz, UF, 12345-678
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-primary h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-primary mb-1">Telefone</h4>
                  <p className="text-muted-foreground">(11) 98765-4321</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-primary h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-primary mb-1">Email</h4>
                  <p className="text-muted-foreground">
                    contato@casarepousoaconchego.com.br
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
