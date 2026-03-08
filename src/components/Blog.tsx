import { useEffect, useState } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { BlogPost } from '../types/database';

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('published_date', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <section id="blog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </section>
    );
  }

  if (selectedPost) {
    return (
      <section id="blog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedPost(null)}
              className="text-blue-600 hover:text-blue-700 font-semibold mb-6 flex items-center gap-2"
            >
              ← Voltar para o Blog
            </button>

            <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {selectedPost.title}
              </h1>

              <div className="flex flex-wrap gap-4 text-gray-600 mb-8 pb-8 border-b">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{formatDate(selectedPost.published_date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{selectedPost.author}</span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedPost.content}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Blog</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights e atualizações sobre comércio exterior
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.published_date)}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {post.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4 flex-1">
                  {post.excerpt}
                </p>

                <button
                  onClick={() => setSelectedPost(post)}
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 group"
                >
                  Ler mais
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
