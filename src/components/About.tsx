import React from 'react';
import { Building, Users, BookOpen, Award } from 'lucide-react';

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start">
        <div className="p-3 bg-navy-50 rounded-full mr-4 text-navy-700">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-lg text-navy-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">About Our School</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Tsibogo Middle School is a public intermediate school located in Mabopane, 
            dedicated to providing quality education and fostering academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard
            icon={<Building size={24} />}
            title="Public Institution"
            description="Established as a public school serving the local community in Mabopane"
          />
          <InfoCard
            icon={<Users size={24} />}
            title="Comprehensive"
            description="Offering a comprehensive curriculum to develop well-rounded students"
          />
          <InfoCard
            icon={<BookOpen size={24} />}
            title="Quality Education"
            description="Committed to providing accessible, quality education to all learners"
          />
          <InfoCard
            icon={<Award size={24} />}
            title="Section 21 School"
            description="Empowered by Section 21 status to manage allocated funds effectively"
          />
        </div>

        <div className="mt-16 bg-navy-800 text-white p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="mb-4">
                To provide a nurturing educational environment that empowers students 
                to achieve academic excellence, develop critical thinking skills, and 
                become responsible citizens who contribute positively to society.
              </p>
              <p>
                We strive to create a supportive community where diversity is celebrated 
                and every student is given the opportunity to reach their full potential.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="mb-4">
                To be recognized as a leading educational institution that produces 
                confident, innovative, and socially responsible learners prepared for 
                future academic success and meaningful contributions to their communities.
              </p>
              <p>
                We envision graduates who are academically proficient, emotionally intelligent, 
                and equipped with the skills needed for lifelong learning in a rapidly changing world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;