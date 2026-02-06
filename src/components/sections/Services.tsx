import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { 
  Globe, 
  Palette, 
  Search, 
  Megaphone, 
  Smartphone, 
  Bot, 
  LineChart, 
  Shield 
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies for optimal performance and scalability.',
    badge: 'Popular',
    featured: true,
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Human-centered design that delights users and drives conversions through intuitive experiences.',
    badge: null,
    featured: false,
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Data-driven strategies to boost your visibility and dominate search engine rankings.',
    badge: null,
    featured: false,
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Comprehensive campaigns across channels to maximize reach and ROI.',
    badge: null,
    featured: false,
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform applications that deliver seamless mobile experiences.',
    badge: 'New',
    featured: false,
  },
  {
    icon: Bot,
    title: 'AI Solutions',
    description: 'Intelligent automation and AI-powered tools to streamline operations and enhance productivity.',
    badge: 'Beta',
    featured: true,
  },
  {
    icon: LineChart,
    title: 'Analytics & Insights',
    description: 'Actionable data analytics to inform decisions and measure success.',
    badge: null,
    featured: false,
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Robust security solutions to protect your digital assets and customer data.',
    badge: null,
    featured: false,
  },
];

export function Services() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px section-separator" />
      <div className="absolute -left-40 bottom-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={cn(
          'text-center mb-16 transition-all duration-700',
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}>
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Services</span>
          <h2 id="services-heading" className="text-display-md md:text-display-lg mt-4 mb-6">
            Solutions That <span className="gradient-text">Scale</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to launch and beyond, we offer comprehensive digital services 
            tailored to your unique business needs.
          </p>
        </div>

        {/* Bento Grid */}
        <div className={cn(
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children',
          sectionVisible && 'visible'
        )}>
          {services.map((service, index) => (
            <article
              key={service.title}
              className={cn(
                'glass-panel rounded-2xl p-6 card-depth group relative overflow-hidden',
                service.featured && 'lg:col-span-2 lg:row-span-1'
              )}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Badge */}
              {service.badge && (
                <span className={cn(
                  'absolute top-4 right-4 text-xs font-semibold px-2 py-1 rounded-full',
                  service.badge === 'Popular' && 'bg-primary text-primary-foreground',
                  service.badge === 'New' && 'bg-accent text-accent-foreground badge-pulse',
                  service.badge === 'Beta' && 'bg-neon-purple text-white'
                )}>
                  {service.badge}
                </span>
              )}

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" aria-hidden="true" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>

              {/* Learn more link */}
              <a 
                href="#contact" 
                className="animated-underline text-sm font-medium text-primary inline-flex items-center gap-1"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn More
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className={cn(
          'text-center mt-12 transition-all duration-700 delay-500',
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}>
          <p className="text-muted-foreground mb-4">
            Need something custom? We love unique challenges.
          </p>
          <a 
            href="#contact" 
            className="animated-underline text-lg font-semibold text-primary"
          >
            Let's discuss your project →
          </a>
        </div>
      </div>
    </section>
  );
}
