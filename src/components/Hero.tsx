import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import img2 from "@/assets/6385dce5-4463-4b39-940f-1d64cff05eb5.png";

const Hero = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cidade: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const numero = "5516991974141";
  const mensagem = 
`🩵 *Solicitação de Visita - Residencial Village* 🩵\n\n` +
`👤 *Nome:* ${formData.nome}\n` +
`📧 *Email:* ${formData.email}\n` +
`📞 *Telefone:* ${formData.telefone}\n` +
`🏙️ *Cidade:* ${formData.cidade}\n\n` +
`Desejo agendar uma visita e saber mais sobre o Residencial Village.`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
};

  return (
    <section className="hero-section relative min-h-[600px] lg:min-h-[700px] flex items-center pt-20 hero-section">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.2) 0%, 
            rgba(0, 0, 0, 0.4) 100%
          ), url(${img2})`,
        }}
      />

      <div className="hero-content relative z-10 container mx-auto px-4 lg:px-10 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto principal */}
          <div className="text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6 section-title">
              Bem-vindo ao Residencial Village
            </h1>
            <p className="text-base md:text-lg text-white/95 leading-relaxed max-w-2xl">
              Somos um lar repleto de histórias, onde cada detalhe é pensado
              para oferecer conforto, segurança e bem-estar. Preencha o
              formulário e agende uma visita — estamos ansiosos para recebê-lo!
            </p>
          </div>

          {/* Formulário */}
          <div className="bg-white rounded-xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Agende sua visita
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="nome" className="sr-only">
                  Nome
                </Label>
                <Input
                  id="nome"
                  placeholder="Nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className="bg-input border-border"
                />
              </div>

              <div>
                <Label htmlFor="email" className="sr-only">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-input border-border"
                />
              </div>

              <div>
                <Label htmlFor="telefone" className="sr-only">
                  Telefone
                </Label>
                <Input
                  id="telefone"
                  type="tel"
                  placeholder="Telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="bg-input border-border"
                />
              </div>

              <div>
                <Label htmlFor="cidade" className="sr-only">
                  Cidade
                </Label>
                <Input
                  id="cidade"
                  placeholder="Cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                  className="bg-input border-border"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-white h-12 text-base font-semibold"
              >
                ENVIAR PELO WHATSAPP
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
