import { Ship, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Ship className="w-8 h-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold">A F GONÇALVES</h3>
                <p className="text-sm text-gray-400">Assessoria em Comércio Exterior</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Especialistas em comércio exterior com atuação estratégica
              em Paranaguá, facilitando o acesso de empresas aos mercados internacionais.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-400 hover:text-white transition"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('servicos')}
                  className="text-gray-400 hover:text-white transition"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('depoimentos')}
                  className="text-gray-400 hover:text-white transition"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('blog')}
                  className="text-gray-400 hover:text-white transition"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('localizacao')}
                  className="text-gray-400 hover:text-white transition"
                >
                  Localização
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  Rua Rodolpho Schwarzabach, 811<br />
                  Parque São João<br />
                  Paranaguá - PR, 83212-230
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:contato@afgoncalves.com.br"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  contato@afgoncalves.com.br
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href="tel:+554133420000"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  (41) 3342-0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} A F Gonçalves Assessoria em Comércio Exterior. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm">
              CNPJ: 63.642.696/0001-70
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
