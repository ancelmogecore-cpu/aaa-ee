import { Award, Target, Heart } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre Nós</h2>
            <p className="text-xl text-gray-600">
              Especialistas em comércio exterior com atuação estratégica em Paranaguá
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A <strong>A F Gonçalves Assessoria em Comércio Exterior</strong> atua como parceira
              estratégica de empresas que buscam excelência e eficiência em suas operações
              internacionais. Sediados em Paranaguá, no coração do maior corredor de exportação
              do Sul do Brasil, oferecemos conhecimento técnico e relacionamento diferenciado
              para otimizar seus processos.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nossa equipe combina expertise técnica com profundo conhecimento das particularidades
              dos portos paranaenses, proporcionando soluções ágeis e eficazes que transformam
              desafios logísticos em vantagens competitivas para nossos clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Experiência</h3>
              <p className="text-gray-600">
                Anos de atuação no mercado de comércio exterior
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Precisão</h3>
              <p className="text-gray-600">
                Processos executados com máxima atenção aos detalhes
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Compromisso</h3>
              <p className="text-gray-600">
                Dedicação total ao sucesso dos nossos clientes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
