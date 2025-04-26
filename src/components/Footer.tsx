import React from 'react';
import { BookOpen, Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-yellow-500 mr-2" />
              <div>
                <h2 className="font-bold text-lg">TSIBOGO</h2>
                <p className="text-green-400 text-xs">MIDDLE SCHOOL</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              A public intermediate school dedicated to providing quality education and 
              fostering academic excellence since its establishment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#statistics" className="text-gray-300 hover:text-white transition-colors">School Statistics</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Admissions</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">News & Events</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-yellow-400">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-green-400 mr-2 mt-1" />
                <span className="text-gray-300">info@tsibogomiddleschool.co.za</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-green-400 mr-2 mt-1" />
                <div>
                  <p className="text-gray-300">Tel: 012 702 2301</p>
                  <p className="text-gray-300">Fax: 012 701 1644</p>
                  <p className="text-gray-300">Cell: 083 656 5275</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-yellow-400">School Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-300">Monday - Friday:</span>
                <span className="text-white">7:30 AM - 2:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Weekend:</span>
                <span className="text-white">Closed</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Admin Office:</span>
                <span className="text-white">7:00 AM - 3:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tsibogo Middle School. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> | 
            <a href="#" className="hover:text-white transition-colors ml-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;