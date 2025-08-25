
import { Play, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Promotional Short Video',
      type: 'YouTube',
      url: 'https://youtube.com/shorts/bmB2FeRlzw4?feature=share',
      embedUrl: 'https://www.youtube.com/embed/bmB2FeRlzw4',
      thumbnail: 'https://img.youtube.com/vi/bmB2FeRlzw4/maxresdefault.jpg'
    },
    {
      title: 'Melody Wedding Highlight Edit',
      type: 'YouTube',
      url: 'https://www.youtube.com/watch?v=EFSDQJuQ3bo',
      embedUrl: 'https://www.youtube.com/embed/EFSDQJuQ3bo',
      thumbnail: 'https://img.youtube.com/vi/EFSDQJuQ3bo/maxresdefault.jpg'
    },
    {
      title: 'Ee Veduka Cover Song Edit',
      type: 'YouTube',
      url: 'https://www.youtube.com/watch?v=_2hBcm3tk6g',
      embedUrl: 'https://www.youtube.com/embed/_2hBcm3tk6g',
      thumbnail: 'https://img.youtube.com/vi/_2hBcm3tk6g/maxresdefault.jpg'
    },
    {
      title: 'Aarojulu Malli Ravvu Cover Song',
      type: 'YouTube',
      url: 'https://www.youtube.com/watch?v=ENTiexLtmT8',
      embedUrl: 'https://www.youtube.com/embed/ENTiexLtmT8',
      thumbnail: 'https://img.youtube.com/vi/ENTiexLtmT8/maxresdefault.jpg'
    },
    {
      title: 'Village Jathara Edit',
      type: 'Instagram',
      url: 'https://www.instagram.com/reel/DKFP8jHTgn2/?igsh=OG1xcHFtdjVzYTh2',
      thumbnail: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=600&fit=crop'
    },
    {
      title: 'SRH DJ Ravish Collaboration Edit',
      type: 'Instagram',
      url: 'https://www.instagram.com/reel/DJY5C2tT4WP/?igsh=MTVjZW12N25nenkyYQ%3D%3D',
      thumbnail: 'https://images.unsplash.com/photo-1571266028243-d220c2b25e5b?w=400&h=600&fit=crop'
    },
    {
      title: 'College Farewell Edit',
      type: 'Instagram',
      url: 'https://www.instagram.com/reel/DHYupK3T4HW/?igsh=MWl0NG11dnJvdTJtNA%3D%3D',
      thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=600&fit=crop'
    },
    {
      title: 'Bhimavaram Sankranthi Vibes Edit',
      type: 'Instagram',
      url: 'https://www.instagram.com/reel/DE1xvcczEzR/?igsh=N3VrOTgwemUxMzMw',
      thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop'
    }
  ];
  

  const handleProjectClick = (project) => {
    window.open(project.url, '_blank');
  };

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white text-center">
          MY BEST EDITS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="relative group cursor-pointer" onClick={() => handleProjectClick(project)}>
              <div className="relative overflow-hidden rounded-lg bg-gray-800 aspect-video">
                {project.type === 'YouTube' ? (
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
                
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
                
                {/* Platform Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.type === 'YouTube' 
                      ? 'bg-red-600 text-white' 
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  }`}>
                    {project.type}
                  </span>
                </div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform group-hover:bg-white">
                    <Play className="w-8 h-8 text-black ml-1" fill="black" />
                  </div>
                </div>

                {/* External Link Icon */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-white font-bold text-lg mt-4 text-center group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
