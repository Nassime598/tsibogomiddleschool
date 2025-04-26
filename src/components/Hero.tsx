import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative pt-24 pb-16 md:pb-24 md:pt-32 lg:pt-48 lg:pb-32 bg-gradient-to-r from-navy-900 to-navy-800"
    >
      <div className="absolute inset-0 bg-[url('https://cdn4.creativecirclemedia.com/mckenzie/original/20230228-105400-web-mmsh_african_american_IMG_1078.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Welcome to Tsibogo Middle School
          </h1>
          <p className="text-lg md:text-xl text-green-300 mb-8 leading-relaxed">
            Empowering Young Minds for a Brighter Future
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#about" 
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-navy-900 font-semibold rounded-lg transition-colors shadow-lg"
            >
              Learn More
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;