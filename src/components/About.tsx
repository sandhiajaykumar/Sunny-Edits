
const About = () => {
  const skills = [
    'Client Case Editing',
    'Direct Editing', 
    'Logo Animations',
    'Podcast Edit'
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          ABOUT ME
        </h2>
        
        <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
          Welcome to The Generalist, Home Of Perfect Motion Graphics and Visual Storytelling techniques very 
          important for Connecting Video & Client. To journey In Transform content message.
          Extraordinary Real Experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={skill} className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <div className="text-white font-medium">{skill}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
