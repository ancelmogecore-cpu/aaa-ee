export interface Database {
  public: {
    Tables: {
      blog_posts: {
        Row: {
          id: string;
          title: string;
          content: string;
          excerpt: string;
          author: string;
          published_date: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          content: string;
          excerpt: string;
          author?: string;
          published_date?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          content?: string;
          excerpt?: string;
          author?: string;
          published_date?: string;
          created_at?: string;
        };
      };
      testimonials: {
        Row: {
          id: string;
          client_name: string;
          company: string;
          position: string;
          content: string;
          rating: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          client_name: string;
          company: string;
          position: string;
          content: string;
          rating?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          client_name?: string;
          company?: string;
          position?: string;
          content?: string;
          rating?: number;
          created_at?: string;
        };
      };
    };
  };
}

export type BlogPost = Database['public']['Tables']['blog_posts']['Row'];
export type Testimonial = Database['public']['Tables']['testimonials']['Row'];
