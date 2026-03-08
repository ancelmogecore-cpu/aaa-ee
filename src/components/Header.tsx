import { useState } from 'react';
import { Menu, X, Ship } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Ship className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">A F GONÇALVES</h1>
              <p className="text-xs text-gray-600">Assessoria em Comércio Exterior</p>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-blue-600 transition">
              Início
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-blue-600 transition">
              Serviços
            </button>
            <button onClick={() => scrollToSection('depoimentos')} className="text-gray-700 hover:text-blue-600 transition">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-blue-600 transition">
              Blog
            </button>
            <button onClick={() => scrollToSection('localizacao')} className="text-gray-700 hover:text-blue-600 transition">
              Localização
            </button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <button onClick={() => scrollToSection('inicio')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition py-2">
              Início
            </button>
            <button onClick={() => scrollToSection('servicos')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition py-2">
              Serviços
            </button>
            <button onClick={() => scrollToSection('depoimentos')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition py-2">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('blog')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition py-2">
              Blog
            </button>
            <button onClick={() => scrollToSection('localizacao')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition py-2">
              Localização
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
