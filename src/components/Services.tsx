
import { Video, Scissors, Music, Palette, Zap, Camera } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing with attention to pacing, storytelling, and visual flow.',
      features: ['Color Correction', 'Audio Sync', 'Transitions', 'Effects']
    },
    {
      icon: Scissors,
      title: 'Post Production',
      description: 'Complete post-production services from rough cut to final delivery.',
      features: ['Sound Design', 'Visual Effects', 'Rendering', 'Formats']
    },
    {
      icon: Music,
      title: 'Audio Enhancement',
      description: 'Crystal clear audio mixing and mastering for professional results.',
      features: ['Noise Reduction', 'Music Sync', 'Voice Over', 'Sound Effects']
    },
    {
      icon: Palette,
      title: 'Color Grading',
      description: 'Cinematic color grading to enhance mood and visual appeal.',
      features: ['Color Correction', 'LUT Application', 'Mood Setting', 'Brand Colors']
    },
    {
      icon: Zap,
      title: 'Motion Graphics',
      description: 'Eye-catching motion graphics and animations to elevate your content.',
      features: ['Titles & Credits', 'Lower Thirds', 'Transitions', 'Animations']
    },
    {
      icon: Camera,
      title: 'Content Strategy',
      description: 'Strategic guidance on content creation and video marketing.',
      features: ['Content Planning', 'Format Optimization', 'Platform Strategy', 'Analytics']
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive video editing services tailored to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title} 
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
