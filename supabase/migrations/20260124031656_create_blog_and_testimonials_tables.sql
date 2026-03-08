/*
  # Create Blog and Testimonials Tables

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text) - Blog post title
      - `content` (text) - Blog post content
      - `excerpt` (text) - Short description for preview
      - `author` (text) - Author name
      - `published_date` (timestamptz) - Publication date
      - `created_at` (timestamptz) - Record creation timestamp
    
    - `testimonials`
      - `id` (uuid, primary key)
      - `client_name` (text) - Client full name
      - `company` (text) - Client's company name
      - `position` (text) - Client's position/role
      - `content` (text) - Testimonial text
      - `rating` (integer) - Rating from 1-5
      - `created_at` (timestamptz) - Record creation timestamp
  
  2. Security
    - Enable RLS on both tables
    - Add public read policies (anyone can view)
    - Only authenticated users can insert/update/delete
  
  3. Initial Data
    - Insert sample blog posts
    - Insert sample testimonials
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  excerpt text NOT NULL,
  author text NOT NULL DEFAULT 'A F Gonçalves',
  published_date timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  company text NOT NULL,
  position text NOT NULL,
  content text NOT NULL,
  rating integer NOT NULL DEFAULT 5,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view blog posts"
  ON blog_posts FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert blog posts"
  ON blog_posts FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update blog posts"
  ON blog_posts FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete blog posts"
  ON blog_posts FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can view testimonials"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert testimonials"
  ON testimonials FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update testimonials"
  ON testimonials FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete testimonials"
  ON testimonials FOR DELETE
  TO authenticated
  USING (true);

INSERT INTO blog_posts (title, excerpt, content) VALUES
(
  'Novidades na Legislação de Comércio Exterior 2024',
  'Conheça as principais mudanças nas normas de importação e exportação que entram em vigor este ano.',
  'A legislação de comércio exterior passou por importantes atualizações em 2024. Nosso time de especialistas analisou todas as mudanças e preparou este guia completo para ajudar sua empresa a se adaptar às novas regras. Entre as principais alterações estão a simplificação de processos aduaneiros, novas categorias de produtos com tratamento diferenciado e atualizações nos acordos comerciais internacionais. É fundamental que empresas que atuam com importação e exportação estejam atentas a essas mudanças para evitar problemas com a fiscalização e aproveitar as novas oportunidades de negócio.'
),
(
  'Como Reduzir Custos com Importação',
  'Estratégias comprovadas para otimizar seus processos de importação e reduzir despesas operacionais.',
  'Reduzir custos na importação é uma prioridade para qualquer empresa que deseja se manter competitiva no mercado. Neste artigo, compartilhamos estratégias práticas que podem gerar economia significativa: escolha adequada da modalidade de transporte, otimização da classificação fiscal, aproveitamento de regimes aduaneiros especiais, negociação com fornecedores e transportadores, e planejamento tributário eficiente. Também abordamos a importância de contar com uma assessoria especializada que conhece profundamente os processos e pode identificar oportunidades de economia que passariam despercebidas.'
),
(
  'Portos do Paraná: Vantagens Logísticas',
  'Descubra por que os portos paranaenses são estratégicos para o comércio exterior brasileiro.',
  'Os portos do Paraná, especialmente Paranaguá e Antonina, desempenham papel fundamental no comércio exterior brasileiro. Localizados estrategicamente, oferecem acesso facilitado aos principais centros produtivos do Sul e Sudeste do país. Neste artigo, exploramos as vantagens competitivas desses portos: infraestrutura moderna, menor tempo de espera, custos competitivos, e proximidade com importantes corredores de exportação. Para empresas da região, aproveitar essa vantagem logística pode ser um diferencial decisivo na competitividade internacional.'
);

INSERT INTO testimonials (client_name, company, position, content, rating) VALUES
(
  'Roberto Silva',
  'Silva Importação e Exportação Ltda',
  'Diretor Comercial',
  'A assessoria da A F Gonçalves foi fundamental para estruturarmos nossos processos de importação. A expertise da equipe nos ajudou a reduzir custos em 30% e eliminar problemas com documentação.',
  5
),
(
  'Maria Fernandes',
  'TechExport Solutions',
  'CEO',
  'Profissionalismo e conhecimento técnico impecáveis. A equipe sempre disponível para esclarecer dúvidas e resolver questões complexas de comércio exterior. Recomendo fortemente!',
  5
),
(
  'João Almeida',
  'Almeida & Filhos Comércio',
  'Gerente de Operações',
  'Trabalhar com a A F Gonçalves transformou nossa operação de exportação. Processos que antes levavam semanas agora são resolvidos em dias. Excelente custo-benefício.',
  5
),
(
  'Patricia Costa',
  'Costa Marine Supplies',
  'Diretora',
  'Parceria de confiança há mais de 3 anos. A A F Gonçalves entende profundamente as particularidades do porto de Paranaguá e isso faz toda a diferença na agilidade dos nossos processos.',
  5
);
