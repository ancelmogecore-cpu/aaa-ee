import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('localizacao');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Sua Parceira em<br />
            <span className="text-blue-600">Comércio Exterior</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Assessoria especializada para empresas que buscam excelência em operações
            de importação e exportação. Atuando estrategicamente em Paranaguá, facilitamos
            seu acesso aos mercados internacionais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              Entre em Contato
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="text-sm text-gray-600">
              <p className="font-semibold">CNPJ: 63.642.696/0001-70</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
