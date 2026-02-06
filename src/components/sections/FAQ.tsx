import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What services does AchiDigital offer?',
    answer: 'We offer a comprehensive suite of digital services including web development, UI/UX design, SEO optimization, digital marketing, mobile app development, AI solutions, analytics, and cybersecurity. Our team tailors each solution to meet your specific business needs and goals.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex web application or mobile app could take 3-6 months. During our initial consultation, we provide a detailed timeline based on your specific requirements.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'We offer flexible pricing models including fixed-price projects, hourly rates, and retainer arrangements. Our pricing is transparent and competitive, with no hidden fees. Contact us for a free consultation and customized quote.',
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Absolutely! We offer various support packages to ensure your digital assets remain secure, up-to-date, and performing optimally. This includes regular updates, security patches, performance monitoring, and technical support.',
  },
  {
    question: 'Can you work with existing systems and platforms?',
    answer: 'Yes, we have extensive experience integrating with existing systems, APIs, and platforms. Whether you need to enhance your current website, integrate new tools, or migrate to a new platform, we can help ensure a smooth transition.',
  },
  {
    question: 'What makes AchiDigital different from other agencies?',
    answer: 'We combine technical excellence with strategic thinking. Our team stays ahead of industry trends, we prioritize measurable results, and we build lasting partnerships with our clients. We are not just service providers—we are your dedicated digital growth partners.',
  },
];

export function FAQ() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px section-separator" />

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className={cn(
            'text-center mb-12 transition-all duration-700',
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
            <h2 id="faq-heading" className="text-display-md md:text-display-lg mt-4 mb-6">
              Common <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to frequently asked questions about our services and process.
            </p>
          </div>

          {/* Accordion */}
          <div className={cn(
            'transition-all duration-700 delay-200',
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-panel rounded-2xl px-6 border-none"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-primary py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA */}
          <div className={cn(
            'text-center mt-12 transition-all duration-700 delay-300',
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}>
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help.
            </p>
            <a 
              href="#contact" 
              className="animated-underline text-lg font-semibold text-primary"
            >
              Contact our team →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
