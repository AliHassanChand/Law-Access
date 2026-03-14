import { Scale, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-legal-dark text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-legal-gold p-2 rounded-lg">
                <Scale className="h-6 w-6 text-legal-dark" />
              </div>
              <span className="text-xl font-serif font-bold tracking-tight">LAW ACCESS</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Pakistan's premier digital legal knowledge platform. Empowering legal professionals with instant access to digitized law books and case laws.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-legal-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-legal-gold transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-legal-gold transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-legal-gold font-serif font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/library" className="hover:text-white transition-colors">Law Library</Link></li>
              <li><Link to="/case-laws" className="hover:text-white transition-colors">Case Laws</Link></li>
              <li><Link to="/law-books" className="hover:text-white transition-colors">Law Books</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Bar Council Resources</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Student's Corner</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-legal-gold font-serif font-bold text-lg mb-6">Categories</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Criminal Laws (PPC)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Civil Procedure (CPC)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Central Acts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sharia Laws</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Constitutional Law</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-legal-gold font-serif font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-legal-gold shrink-0" />
                <span>Legal Plaza, Blue Area, Islamabad, Pakistan</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-legal-gold shrink-0" />
                <span>+92 (51) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-legal-gold shrink-0" />
                <span>contact@lawaccess.pk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2026 Law Access. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
