
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sai',
      text: 'Perfect Communication And Exceptional Skills In the key thing',
      color: 'bg-primary'
    },
    {
      name: 'Ajay',
      text: 'Did a Great Job, Delivered video fast and good experience',
      color: 'bg-primary'
    },
    {
      name: 'Archin',
      text: 'Sunny Was Wonderful to Work With. We Will Work with him again',
      color: 'bg-primary'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white text-center">
          TESTIMONIALS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className={`${testimonial.color} border-none`}>
              <CardContent className="p-8 text-center">
                <h3 className="text-white font-bold text-xl mb-4">
                  {testimonial.name}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {testimonial.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
