import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string | React.ReactNode;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, content }) => {
  return (
    <div className="flex items-start mb-6">
      <div className="p-3 bg-navy-50 rounded-full mr-4 text-navy-700">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-navy-900 mb-1">{title}</h3>
        <div className="text-gray-600">{content}</div>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, you would send this data to your server
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out to us with any questions or inquiries
            about our school and programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold text-navy-900 mb-6">Contact Information</h3>
              
              <ContactInfo
                icon={<Phone size={24} />}
                title="Phone"
                content={
                  <div>
                    <p>Tel: 012 702 2301</p>
                    <p>Fax: 012 701 1644</p>
                    <p>Cell: 083 656 5275</p>
                  </div>
                }
              />
              
              <ContactInfo
                icon={<Mail size={24} />}
                title="Email"
                content="lebomokoenas101@gmail.com"
              />
              
              <ContactInfo
                icon={<MapPin size={24} />}
                title="Address"
                content={
                  <div>
                    <p>748 U BLOCK, MABOPANE</p>
                    <p>WINTERVELDT, 0190</p>
                  </div>
                }
              />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-navy-900 mb-6">School Hours</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-navy-700 mb-2">Weekdays</h4>
                  <p className="text-gray-600">7:30 AM - 2:30 PM</p>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-700 mb-2">Weekends</h4>
                  <p className="text-gray-600">Closed</p>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-700 mb-2">Admin Office</h4>
                  <p className="text-gray-600">7:00 AM - 3:30 PM</p>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-700 mb-2">Holidays</h4>
                  <p className="text-gray-600">Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-navy-900 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-navy-700 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-navy-700 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-navy-700 mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-navy-700 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-navy-700 hover:bg-navy-800 text-white font-semibold rounded-lg transition-all flex items-center justify-center w-full"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.8806975726023!2d28.03739200000001!3d-25.497918000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebfce88e3a3f7a5%3A0x5cc42becc39f9ccd!2sMabopane%2C%20Pretoria%2C%200190%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1718302341896!5m2!1sen!2sus"
                className="w-full h-80 rounded-md" 
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;