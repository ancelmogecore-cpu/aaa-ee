import { Ship, FileText, TrendingUp, Users, Shield, Zap } from 'lucide-react';

const services = [
  {
    icon: Ship,
    title: 'Operações Portuárias',
    description: 'Assessoria completa em processos portuários, com conhecimento profundo dos portos de Paranaguá e Antonina.'
  },
  {
    icon: FileText,
    title: 'Documentação Aduaneira',
    description: 'Elaboração e conferência de toda documentação necessária para importação e exportação, evitando erros e atrasos.'
  },
  {
    icon: TrendingUp,
    title: 'Classificação Fiscal',
    description: 'Análise técnica para classificação correta de mercadorias, otimizando custos tributários e evitando problemas fiscais.'
  },
  {
    icon: Users,
    title: 'Consultoria Estratégica',
    description: 'Orientação especializada para estruturação e otimização de processos de comércio exterior da sua empresa.'
  },
  {
    icon: Shield,
    title: 'Compliance Internacional',
    description: 'Garantia de conformidade com normas e regulamentos nacionais e internacionais de comércio exterior.'
  },
  {
    icon: Zap,
    title: 'Agilidade em Processos',
    description: 'Conhecimento e relacionamento que aceleram seus processos, reduzindo tempo de espera e custos operacionais.'
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluções completas para todas as suas necessidades em comércio exterior
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
