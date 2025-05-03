
'use client';

import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/service-card";
import { Briefcase, Bot, Mail, Phone, Link as LinkIcon, Linkedin, Rocket, CheckCircle, BarChartHorizontal, MessageSquareText } from 'lucide-react';

// Define experience data directly in the component
const experiences = [
  {
    title: "Analista de Projetos e Processos Pleno",
    company: "Grupo NewWay",
    duration: "mai de 2022 - o momento · 2 anos 3 meses",
    location: "Campinas, São Paulo, Brasil · Híbrido",
    description: [
      "Gerenciamento de portfólio de projetos utilizando metodologia ágil e PMBOK, priorizando demandas através do método MoSCoW e alcançando 90% de entregas no prazo.",
      "Mapeamento e otimização de processos com BPMN, resultando em uma redução de 20% no tempo de execução de tarefas-chave.",
      "Liderança de equipes multidisciplinares, garantindo a comunicação eficaz e o alinhamento estratégico.",
      "Desenvolvimento de dashboards em Power BI para monitoramento de KPIs, fornecendo insights para a tomada de decisões.",
      "Análise de dados e suporte à gestão na implementação de melhorias contínuas.",
      "Experiência com Jira, Azure DevOps e outras ferramentas de gestão."
    ]
  },
  {
    title: "Assistente de Desenvolvimento de Sistemas",
    company: "CPFL Energia",
    duration: "ago de 2021 - mai de 2022 · 10 meses",
    location: "Campinas, São Paulo, Brasil",
    description: [
      "Desenvolvimento de sistemas utilizando Node.js e React.",
      "Criação e manutenção de APIs REST.",
      "Implementação de testes unitários e de integração.",
      "Colaboração em projetos de desenvolvimento ágil."
    ]
  },
  {
    title: "Estagiário em Análise de Dados",
    company: "CPFL Energia",
    duration: "jan de 2021 - jul de 2021 · 7 meses",
    location: "Campinas, São Paulo, Brasil",
    description: [
        "Análise de dados e criação de relatórios.",
        "Automação de tarefas utilizando Python e SQL.",
        "Suporte à equipe na interpretação de dados e geração de insights."
    ]
  },
   {
      title: "Analista de Projetos e Processos",
      company: "Datainfo",
      duration: "jun de 2023 - o momento · 1 ano 2 meses",
      location: "Campinas, São Paulo, Brasil · Híbrido",
      description: [
        "Atuo como Analista de Projetos e Processos na Datainfo, alocado em um cliente do setor elétrico.",
        "Minhas responsabilidades incluem o gerenciamento de projetos utilizando metodologias ágeis e tradicionais, mapeamento e otimização de processos (BPMN), e análise de dados para suporte à tomada de decisão.",
        "Tenho experiência em ferramentas como Jira e Power BI."
      ]
    }
  // Add more experiences if needed
];


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12 bg-background text-foreground">
      {/* Hero Section */}
      <section className="w-full max-w-4xl text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">
          SynergyFlow Solutions
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-muted-foreground">
          Automatize, Integre e Otimize seu Atendimento ao Cliente.
        </p>
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => {
          const contactSection = document.getElementById('contact-section');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}>
          Fale Conosco Agora
        </Button>
      </section>

      {/* Services Section */}
      <section className="w-full max-w-4xl mb-16">
        <h2 className="text-3xl font-semibold text-center mb-10">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 place-items-center">
          {/* Service 1: System Integration */}
          <ServiceCard
            icon={Rocket}
            title="Integração de Sistemas"
            description="Conectamos suas ferramentas e plataformas (CRMs, ERPs, etc.) para um fluxo de trabalho unificado e eficiente, eliminando silos de informação."
            dataPoints={[
              { text: "Redução de 30% em tarefas manuais.", icon: CheckCircle },
              { text: "Aumento de 25% na eficiência operacional.", icon: BarChartHorizontal },
            ]}
          />

          {/* Service 2: RPA */}
          <ServiceCard
            icon={Briefcase}
            title="Automação Robótica de Processos (RPA)"
            description="Automatizamos tarefas repetitivas e baseadas em regras, liberando sua equipe para focar em atividades estratégicas e de maior valor."
            dataPoints={[
              { text: "Economia de até 40% nos custos de processos.", icon: CheckCircle },
              { text: "Melhora de 50% na precisão e redução de erros.", icon: BarChartHorizontal },
            ]}
          />

          {/* Service 3: Chatbots */}
          <ServiceCard
            icon={Bot}
            title="Chatbots Inteligentes"
            description="Implementamos chatbots personalizados para atendimento ao cliente 24/7, triagem de leads e suporte interno, melhorando a experiência e a agilidade."
            dataPoints={[
              { text: "Aumento de 60% na capacidade de atendimento.", icon: CheckCircle },
              { text: "Resolução de 70% das dúvidas comuns instantaneamente.", icon: BarChartHorizontal },
            ]}
          />
        </div>
      </section>

      {/* Experience Section */}
      <section className="w-full max-w-4xl mb-16">
        <h2 className="text-3xl font-semibold text-center mb-10">Experiência Profissional</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
              <p className="text-md font-medium text-muted-foreground">{exp.company}</p>
              <p className="text-sm text-muted-foreground">{exp.duration}</p>
              <p className="text-sm text-muted-foreground mb-3">{exp.location}</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className="text-center mt-6">
             <a href="https://www.linkedin.com/in/guilhermefelex/" target="_blank" rel="noopener noreferrer" className="inline-block">
                 <Button variant="link" className="text-primary hover:underline">
                   <Linkedin className="mr-2 h-4 w-4" /> Ver Perfil Completo no LinkedIn
                 </Button>
             </a>
           </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="w-full max-w-4xl text-center border-t pt-12">
         <h2 className="text-3xl font-semibold mb-6">Pronto para Transformar Seu Negócio?</h2>
          <p className="text-lg mb-8 text-muted-foreground">
           Descubra como nossas soluções podem ser aplicadas à sua realidade. Entre em contato para uma conversa sem compromisso.
         </p>
         <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Option 1: Mailto Link */}
            <a href="mailto:contato@synergyflow.com?subject=Interesse em Soluções de Automação" className="inline-block">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Mail className="mr-2 h-4 w-4" /> Enviar Email
                </Button>
            </a>
           {/* Option 2: Link to phone */}
           <a href="tel:+550000000000" className="inline-block">
             <Button className="bg-primary text-primary-foreground hover:bg-primary/90"> {/* Using primary color */}
               <Phone className="mr-2 h-4 w-4" /> Ligar Agora
             </Button>
           </a>
            {/* Option 3: Link to WhatsApp */}
           <a href="https://wa.me/550000000000?text=Olá! Tenho interesse nas soluções da SynergyFlow." target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button variant="outline">
                <MessageSquareText className="mr-2 h-4 w-4" /> {/* Use Lucide icon */}
                WhatsApp
              </Button>
           </a>
           {/* Option 4: Link to external form */}
           <a href="https://forms.gle/your-google-form-link" target="_blank" rel="noopener noreferrer" className="inline-block"> {/* Replace with your actual form link */}
             <Button variant="outline">
               <LinkIcon className="mr-2 h-4 w-4" /> Formulário de Contato
             </Button>
           </a>
         </div>
       </section>
     </main>
   );
 }
