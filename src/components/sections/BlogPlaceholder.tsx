import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

const placeholderCards = [
  { id: 1, featured: true },
  { id: 2, featured: false },
  { id: 3, featured: false },
  { id: 4, featured: false },
];

export function BlogPlaceholder() {
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
          'text-center mb-12 transition-all duration-700',
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}>
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Insights</span>
          <h2 id="blogs-heading" className="text-display-md md:text-display-lg mt-4 mb-6">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our blog is launching soon. Stay tuned for expert insights on web development, 
            digital marketing, and the latest tech trends.
          </p>
        </div>

        {/* Coming Soon Badge */}
        <div className={cn(
          'flex justify-center mb-10 transition-all duration-700 delay-100',
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}>
          <span className="inline-flex items-center gap-2 glass-panel px-5 py-2 rounded-full badge-pulse">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-foreground">Blog Launching Soon</span>
          </span>
        </div>

        {/* Placeholder Cards Grid */}
        <div className={cn(
          'grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children',
          sectionVisible && 'visible'
        )}>
          {placeholderCards.map((card, index) => (
            <article
              key={card.id}
              className={cn(
                'glass-panel rounded-2xl overflow-hidden card-depth group skeleton-shimmer',
                card.featured && 'md:col-span-2'
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={cn(
                'p-6 md:p-8',
                card.featured && 'md:flex md:items-center md:gap-8'
              )}>
                {/* Skeleton Thumbnail */}
                <div className={cn(
                  'skeleton-box rounded-xl mb-6 flex items-center justify-center relative overflow-hidden',
                  card.featured ? 'md:w-1/2 md:mb-0 aspect-video md:aspect-[4/3]' : 'aspect-video'
                )}>
                  <div className="w-16 h-16 rounded-full bg-muted/50 animate-pulse" />
                </div>

                {/* Skeleton Content */}
                <div className={card.featured ? 'md:w-1/2' : ''}>
                  {/* Skeleton Meta */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-5 w-20 skeleton-box rounded-full" />
                    <div className="h-4 w-16 skeleton-box rounded" />
                  </div>

                  {/* Skeleton Title */}
                  <div className={cn(
                    'space-y-2 mb-3',
                    card.featured ? 'max-w-md' : ''
                  )}>
                    <div className="h-6 skeleton-box rounded w-full" />
                    <div className="h-6 skeleton-box rounded w-3/4" />
                  </div>

                  {/* Skeleton Excerpt */}
                  <div className="space-y-2 mb-4">
                    <div className="h-4 skeleton-box rounded w-full" />
                    <div className="h-4 skeleton-box rounded w-5/6" />
                  </div>

                  {/* Skeleton Footer */}
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-24 skeleton-box rounded" />
                    <div className="h-4 w-20 skeleton-box rounded" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Subscribe CTA */}
        <div className={cn(
          'text-center mt-12 transition-all duration-700 delay-500',
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}>
          <p className="text-muted-foreground mb-4">
            Want to be notified when we launch?
          </p>
          <a 
            href="#contact" 
            className="animated-underline text-lg font-semibold text-primary"
          >
            Subscribe to updates →
          </a>
        </div>
      </div>
    </section>
  );
}
