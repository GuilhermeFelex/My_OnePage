'use client';

import * as React from "react";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Zap, Link2, Bot, CheckCircle, TrendingUp, Clock, Smile, Percent, ArrowRightCircle, Mail, Phone, ExternalLink } from 'lucide-react';
import { ServiceCard } from '@/components/service-card'; // Assuming ServiceCard component exists

export default function Home() {
  // Use useEffect to get the current year only on the client-side
  const [currentYear, setCurrentYear] = React.useState<number | null>(null);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);


  const services = [
    {
      icon: Link2,
      title: "Integração Perfeita de Sistemas",
      description: "Conectamos suas ferramentas e plataformas para eliminar silos de dados e otimizar fluxos de trabalho.",
      dataPoints: [
        { text: "Redução de 30% no tempo de processamento manual.", icon: Clock },
        { text: "Aumento de 40% na consistência dos dados entre plataformas.", icon: TrendingUp },
        { text: "Ganhos de até 15 horas/semana em produtividade da equipe.", icon: Percent },
      ],
    },
    {
      icon: Zap,
      title: "Automatize Tarefas Repetitivas com RPA",
      description: "Nossos robôs de software executam tarefas manuais e repetitivas, liberando sua equipe para atividades estratégicas.",
      dataPoints: [
        { text: "Redução de custos operacionais em até 25%.", icon: Percent },
        { text: "Aceleração de processos em 3 vezes.", icon: Zap },
        { text: "Diminuição de erros humanos para próximo de 0% em tarefas automatizadas.", icon: CheckCircle },
      ],
    },
    {
      icon: Bot,
      title: "Atendimento Inteligente 24/7 com Chatbots",
      description: "Chatbots que resolvem dúvidas comuns, qualificam leads e oferecem suporte instantâneo aos seus clientes.",
      dataPoints: [
        { text: "Aumento de 50% na taxa de resolução no primeiro contato.", icon: TrendingUp },
        { text: "Redução do custo por atendimento em 35%.", icon: Percent },
        { text: "Melhora na satisfação do cliente (CSAT) em 10 pontos.", icon: Smile },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/80 to-primary/60 text-primary-foreground text-center overflow-hidden">
           {/* Optional Background Image - using picsum for placeholder */}
           <Image
                src="https://picsum.photos/1920/1080"
                alt="Abstract background representing technology and integration"
                fill={true} // Use fill instead of layout="fill"
                style={{ objectFit: 'cover' }} // Use style instead of objectFit
                quality={80}
                className="absolute inset-0 z-0 opacity-20"
                data-ai-hint="abstract technology integration"
                priority // Add priority for LCP element
           />
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Automatize, Integre e Otimize seu Atendimento
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Soluções de Integração de Sistemas, Automação de Processos (RPA) e Chatbots Inteligentes para impulsionar a eficiência do seu negócio.
            </p>
            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              <a href="#contact">
                Fale com um Especialista <ArrowRightCircle className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary-foreground">Nossas Soluções</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  dataPoints={service.dataPoints}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="contact" className="py-16 md:py-24 bg-background text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Pronto para Transformar seu Negócio?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Descubra como nossas soluções podem ser aplicadas à sua realidade. Entre em contato para uma conversa sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* Option 1: Mailto Link */}
               {/* Temporarily commented out as it might trigger warnings if no mail client is configured */}
               {/*
               <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                 <a href="mailto:contato@synergyflow.com?subject=Interesse em Soluções de Automação">
                   <Mail className="mr-2 h-4 w-4" /> Enviar Email
                </a>
               </Button>
               */}
              {/* Option 2: Link to phone */}
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="tel:+550000000000">
                  <Phone className="mr-2 h-4 w-4" /> Ligar Agora
                </a>
              </Button>
              {/* Option 3: Link to External Form */}
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="https://forms.gle/your-form-id" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Formulário Online
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-secondary text-secondary-foreground py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">SynergyFlow Solutions</p>
          <p className="mb-2">
            Contato: <a href="mailto:contato@synergyflow.com" className="underline">contato@synergyflow.com</a> | Tel: +55 (00) 00000-0000
          </p>
          <p className="text-sm">&copy; {currentYear !== null ? currentYear : ''} SynergyFlow Solutions. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
