import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Location() {
  const address = 'RUA RODOLPHO SCHWARZABACH 811, PARQUE SÃO JOÃO, PARANAGUA PR 83212-230';
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(address)}`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Como Chegar</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visite nosso escritório em Paranaguá
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Informações de Contato
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Endereço</p>
                      <p className="text-gray-600 leading-relaxed">
                        Rua Rodolpho Schwarzabach, 811<br />
                        Parque São João<br />
                        Paranaguá - PR<br />
                        CEP: 83212-230
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Horário de Atendimento</p>
                      <p className="text-gray-600">
                        Segunda a Sexta: 8h às 18h<br />
                        Sábado e Domingo: Fechado
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">E-mail</p>
                      <a
                        href="mailto:contato@afgoncalves.com.br"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        contato@afgoncalves.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Telefone</p>
                      <a
                        href="tel:+554133420000"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        (41) 3342-0000
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-center"
                  >
                    Abrir no Google Maps
                  </a>
                </div>
              </div>
            </div>

            <div className="h-[600px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização A F Gonçalves"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
