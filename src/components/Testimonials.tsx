import { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Testimonial } from '../types/database';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="depoimentos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Confiança construída através de resultados consistentes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <Quote className="w-10 h-10 text-blue-600 opacity-50" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900 text-lg">
                  {testimonial.client_name}
                </p>
                <p className="text-gray-600">{testimonial.position}</p>
                <p className="text-blue-600 font-medium">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
