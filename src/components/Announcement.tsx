import React from 'react';
import { BellRing, Calendar, ArrowRight } from 'lucide-react';

interface AnnouncementProps {
  title: string;
  date: string;
  content: string;
}

const AnnouncementCard: React.FC<AnnouncementProps> = ({ title, date, content }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <BellRing className="w-5 h-5 text-yellow-500 mr-2" />
        <h3 className="font-semibold text-navy-900">{title}</h3>
      </div>
      <div className="flex items-center text-sm text-gray-500 mb-3">
        <Calendar className="w-4 h-4 mr-1" />
        <span>{date}</span>
      </div>
      <p className="text-gray-600 mb-4">{content}</p>
      <a 
        href="#" 
        className="inline-flex items-center text-navy-600 font-medium hover:text-navy-800 transition-colors"
      >
        Read more <ArrowRight className="w-4 h-4 ml-1" />
      </a>
    </div>
  );
};

const Announcement: React.FC = () => {
  const announcements = [
    {
      title: "Parent-Teacher Meeting",
      date: "June 15, 2025",
      content: "We invite all parents to attend our quarterly parent-teacher meeting to discuss student progress and school initiatives."
    },
    {
      title: "Annual Sports Day",
      date: "July 22, 2025",
      content: "Join us for our annual sports day event where students will showcase their athletic abilities in various competitions."
    },
    {
      title: "Registration for 2026",
      date: "August 10, 2025",
      content: "Registration for the 2026 academic year will open on August 10. Please prepare all necessary documentation."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">News & Announcements</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest announcements, events, and news from Tsibogo Middle School.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {announcements.map((announcement, index) => (
            <AnnouncementCard
              key={index}
              title={announcement.title}
              date={announcement.date}
              content={announcement.content}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-navy-700 hover:bg-navy-800 text-white font-semibold rounded-lg transition-colors"
          >
            View All Announcements <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Announcement;