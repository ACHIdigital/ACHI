import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { Target, Lightbulb, Users, Rocket } from 'lucide-react';

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '50+', label: 'Happy Clients' },
  { value: '8+', label: 'Years Experience' },
  { value: '99%', label: 'Client Satisfaction' },
];

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We focus on delivering measurable results that align with your business goals.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'Leveraging cutting-edge technologies to keep you ahead of the competition.',
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Your success is our success. We build lasting partnerships, not just projects.',
  },
  {
    icon: Rocket,
    title: 'Growth Focused',
    description: 'Every solution is designed to scale and grow with your business.',
  },
];

export function About() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px section-separator" />
      <div className="absolute -right-40 top-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={cn('text-center mb-16 transition-all duration-700', sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Us</span>
          <h2 id="about-heading" className="text-display-md md:text-display-lg mt-4 mb-6">
            Crafting <span className="gradient-text">Digital Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're a team of passionate innovators dedicated to transforming businesses 
            through strategic digital solutions and cutting-edge technology.
          </p>
        </div>

        {/* Main Glass Card */}
        <div className={cn(
          'glass-panel rounded-3xl p-8 md:p-12 mb-16 transition-all duration-700 delay-200',
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-display-sm mb-6">Our Story</h3>
              <p className="text-muted-foreground mb-4">
                Founded with a vision to bridge the gap between innovative technology and business growth, 
                AchiDigital has evolved into a full-service digital agency trusted by startups and enterprises alike.
              </p>
              <p className="text-muted-foreground mb-6">
                Our multidisciplinary team combines expertise in design, development, and digital strategy 
                to deliver solutions that not only look stunning but drive real business results.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">AD</span>
                </div>
                <div>
                  <p className="font-semibold">AchiDigital Team</p>
                  <p className="text-sm text-muted-foreground">Digital Innovation Leaders</p>
                </div>
              </div>
            </div>
            
            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="glass-panel rounded-2xl p-5 card-depth"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <value.icon className="w-8 h-8 text-primary mb-3" aria-hidden="true" />
                  <h4 className="font-semibold mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div 
          ref={statsRef}
          className={cn(
            'grid grid-cols-2 md:grid-cols-4 gap-6 stagger-children',
            statsVisible && 'visible'
          )}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center glass-panel rounded-2xl p-6 card-depth">
              <p className="text-display-sm md:text-display-md gradient-text stat-number">{stat.value}</p>
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
