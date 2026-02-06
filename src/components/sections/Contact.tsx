import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Shield, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@achidigital.com',
    href: 'mailto:hello@achidigital.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
    href: '#',
  },
];

export function Contact() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: 'Message sent!',
      description: 'We will get back to you within 24 hours.',
    });
    
    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px section-separator" />
      <div className="absolute -left-40 top-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute -right-40 bottom-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={cn(
          'text-center mb-16 transition-all duration-700',
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}>
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Get In Touch</span>
          <h2 id="contact-heading" className="text-display-md md:text-display-lg mt-4 mb-6">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your digital presence? Get in touch with our team 
            and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className={cn(
            'lg:col-span-3 glass-panel rounded-3xl p-8 md:p-10 transition-all duration-700 delay-200',
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company (Optional)
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>

              {/* Trust Signal */}
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" aria-hidden="true" />
                <span>Your information is secure and never shared with third parties.</span>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className={cn(
            'lg:col-span-2 space-y-6 transition-all duration-700 delay-300',
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}>
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="glass-panel rounded-2xl p-6 flex items-center gap-4 card-depth block"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-semibold">{item.value}</p>
                </div>
              </a>
            ))}

            {/* Working Hours */}
            <div className="glass-panel rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Working Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="glass-panel rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">24h</div>
              <p className="text-sm text-muted-foreground">Average Response Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
