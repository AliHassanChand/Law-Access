import { Link, useLocation } from 'react-router-dom';
import { Scale, BookOpen, Gavel, FileText, Users, Search, Menu, X, LogIn, LogOut, User } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import { signInWithGoogle, logout } from '../firebase';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, profile } = useAuth();

  const navLinks = [
    { name: 'Library', path: '/library', icon: BookOpen },
    { name: 'Case Laws', path: '/case-laws', icon: Gavel },
    { name: 'Law Books', path: '/law-books', icon: FileText },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-legal-dark text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-legal-gold p-2 rounded-lg group-hover:scale-110 transition-transform">
                <Scale className="h-6 w-6 text-legal-dark" />
              </div>
              <div>
                <span className="text-xl font-serif font-bold tracking-tight block leading-none">LAW ACCESS</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-legal-gold font-medium">Pakistan's Legal Portal</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-2 ${
                    isActive(link.path)
                      ? 'text-legal-gold border-b-2 border-legal-gold rounded-none'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <link.icon className="h-4 w-4" />
                  <span>{link.name}</span>
                </Link>
              ))}
              
              {user ? (
                <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-slate-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-legal-gold flex items-center justify-center text-legal-dark font-bold text-xs overflow-hidden">
                      {user.photoURL ? (
                        <img src={user.photoURL} alt={user.displayName || ''} referrerPolicy="no-referrer" />
                      ) : (
                        <User size={14} />
                      )}
                    </div>
                    <div className="text-xs">
                      <div className="font-bold text-white truncate max-w-[100px]">{user.displayName}</div>
                      <div className="text-legal-gold uppercase tracking-tighter font-bold">{profile?.role || 'User'}</div>
                    </div>
                  </div>
                  <button 
                    onClick={logout}
                    className="text-slate-400 hover:text-white transition-colors"
                    title="Logout"
                  >
                    <LogOut size={18} />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={signInWithGoogle}
                  className="bg-legal-gold text-legal-dark px-5 py-2 rounded-md text-sm font-bold hover:bg-opacity-90 transition-all shadow-md flex items-center space-x-2"
                >
                  <LogIn size={16} />
                  <span>Login</span>
                </button>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-legal-accent border-t border-slate-700"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.path) ? 'text-legal-gold bg-slate-800' : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <link.icon className="h-5 w-5" />
                    <span>{link.name}</span>
                  </div>
                </Link>
              ))}
              
              {user ? (
                <div className="pt-4 mt-4 border-t border-slate-700">
                  <div className="flex items-center space-x-3 px-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-legal-gold flex items-center justify-center text-legal-dark font-bold overflow-hidden">
                      {user.photoURL ? (
                        <img src={user.photoURL} alt={user.displayName || ''} referrerPolicy="no-referrer" />
                      ) : (
                        <User size={20} />
                      )}
                    </div>
                    <div>
                      <div className="font-bold text-white">{user.displayName}</div>
                      <div className="text-xs text-legal-gold uppercase tracking-widest font-bold">{profile?.role || 'User'}</div>
                    </div>
                  </div>
                  <button 
                    onClick={() => { logout(); setIsOpen(false); }}
                    className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 flex items-center space-x-3"
                  >
                    <LogOut size={20} />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => { signInWithGoogle(); setIsOpen(false); }}
                  className="w-full mt-4 bg-legal-gold text-legal-dark px-5 py-3 rounded-md text-base font-bold flex items-center justify-center space-x-2"
                >
                  <LogIn size={20} />
                  <span>Login with Google</span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
