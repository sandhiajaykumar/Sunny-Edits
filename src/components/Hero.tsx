
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="text-primary text-sm font-medium mb-4 tracking-wider uppercase font-rajdhani">SUNNY RX100</div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight font-rajdhani tracking-wider">
              <span className="text-white">PROFESSIONAL</span><br />
              <span className="text-white">VIDEO EDITOR</span>
            </h1>
            
            <p className="text-gray-400 mb-8 text-xl max-w-md font-rajdhani">
              Making Your Videos Look More Cool.
            </p>

            <Button size="lg" className="bg-primary hover:bg-primary/80 text-white px-8 py-4 text-lg font-medium tracking-wider font-rajdhani">
              LETS TALK
            </Button>
          </div>

          {/* Right Content - Image/Graphics */}
          <div className="relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-lg overflow-hidden">
              <img src="https://i.postimg.cc/Ss7zRPdT/Whats-App-Image-2025-06-09-at-11-47-21-AM.jpg" alt="Video Editor" className="w-full h-full object-cover" />
              
              {/* Floating Elements */}
              <div className="absolute top-10 right-10 w-16 h-16 bg-primary rounded-lg flex items-center justify-center animate-float">
                <Play className="w-8 h-8 text-white" />
              </div>
              
              {/* Premiere Pro Logo */}
              <div className="absolute bottom-10 left-10 w-20 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center animate-float shadow-lg" style={{
                animationDelay: '2s'
              }}>
                <div className="text-white text-lg font-bold font-rajdhani">Pr</div>
              </div>

              {/* After Effects Logo */}
              <div className="absolute top-1/2 right-5 w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg animate-float shadow-lg" style={{
                animationDelay: '4s'
              }}>
                <div className="w-full h-full rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg font-bold font-rajdhani">Ae</span>
                </div>
              </div>

              {/* Lightning Effects */}
              <div className="absolute bottom-1/4 right-1/3 w-8 h-8 text-primary animate-float" style={{
                animationDelay: '1s'
              }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M13 0L11 10H3L10 24L12 14H21L13 0Z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
