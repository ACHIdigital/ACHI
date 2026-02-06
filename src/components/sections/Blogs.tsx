import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { Clock, ArrowUpRight } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: 'The Future of AI in Web Development: Trends to Watch in 2024',
    excerpt: 'Explore how artificial intelligence is revolutionizing the way we build and interact with websites.',
    category: 'AI & Technology',
    readTime: '5 min read',
    date: 'Jan 15, 2024',
    featured: true,
  },
  {
    id: 2,
    title: 'Maximizing ROI with Strategic Digital Marketing',
    excerpt: 'Learn proven strategies to optimize your marketing spend and drive measurable business growth.',
    category: 'Marketing',
    readTime: '4 min read',
    date: 'Jan 10, 2024',
    featured: false,
  },
  {
    id: 3,
    title: 'Building Accessible Websites: A Complete Guide',
    excerpt: 'Why accessibility matters and how to implement it effectively in your web projects.',
    category: 'Development',
    readTime: '6 min read',
    date: 'Jan 5, 2024',
    featured: false,
  },
  {
    id: 4,
    title: 'Design Systems: Creating Consistent Brand Experiences',
    excerpt: 'How design systems improve efficiency and ensure brand consistency across all touchpoints.',
    category: 'Design',
    readTime: '4 min read',
    date: 'Dec 28, 2023',
    featured: false,
  },
];

export function Blogs() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="blogs"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-labelledby="blogs-heading"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px section-separator" />
      <div className="absolute -right-40 top-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={cn(
          'flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6 transition-all duration-700',
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}>
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Insights</span>
            <h2 id="blogs-heading" className="text-display-md md:text-display-lg mt-4">
              Latest <span className="gradient-text">Insights</span>
            </h2>
          </div>
          <a 
            href="#" 
            className="animated-underline text-lg font-semibold text-primary self-start md:self-auto"
          >
            View All Articles →
          </a>
        </div>

        {/* Blog Grid */}
        <div className={cn(
          'grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children',
          sectionVisible && 'visible'
        )}>
          {blogs.map((blog, index) => (
            <article
              key={blog.id}
              className={cn(
                'glass-panel rounded-2xl overflow-hidden card-depth group',
                blog.featured && 'md:col-span-2'
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={cn(
                'p-6 md:p-8',
                blog.featured && 'md:flex md:items-center md:gap-8'
              )}>
                {/* Thumbnail placeholder */}
                <div className={cn(
                  'bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden',
                  blog.featured ? 'md:w-1/2 md:mb-0 aspect-video md:aspect-[4/3]' : 'aspect-video'
                )}>
                  <div className="text-4xl font-bold gradient-text opacity-30">
                    {blog.category.charAt(0)}
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="glass-panel rounded-full px-4 py-2 text-sm font-medium">
                      Read Article
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={blog.featured ? 'md:w-1/2' : ''}>
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold text-primary px-2 py-1 rounded-full bg-primary/10">
                      {blog.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" aria-hidden="true" />
                      {blog.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={cn(
                    'font-semibold mb-3 group-hover:text-primary transition-colors',
                    blog.featured ? 'text-2xl' : 'text-xl'
                  )}>
                    <a href="#" className="focus:outline-none focus:ring-2 focus:ring-primary rounded">
                      {blog.title}
                    </a>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground mb-4">
                    {blog.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{blog.date}</span>
                    <a 
                      href="#" 
                      className="flex items-center gap-1 text-sm font-medium text-primary group/link"
                      aria-label={`Read more about ${blog.title}`}
                    >
                      Read More
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
