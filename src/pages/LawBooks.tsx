import { motion } from 'motion/react';
import { Book, Search, Filter, ChevronRight, Bookmark, Download, Info, Library as LibraryIcon, Scale, ShieldCheck, Gavel } from 'lucide-react';
import { Link } from 'react-router-dom';

const LawBooks = () => {
  const categories = [
    {
      id: 'constitutional',
      title: 'Constitutional Law',
      icon: <Scale className="text-legal-gold" />,
      description: 'The supreme law of Pakistan, defining the structure of the state and fundamental rights.',
      books: [
        { title: 'The Constitution of Pakistan, 1973', author: 'Justice (R) Zafar Hussain', year: '2023 Edition' },
        { title: 'Constitutional History of Pakistan', author: 'Hamid Khan', year: '2022 Edition' },
        { title: 'Fundamental Rights and Civil Liberties', author: 'Dr. Faqir Hussain', year: '2021 Edition' }
      ]
    },
    {
      id: 'criminal',
      title: 'Criminal Law',
      icon: <Gavel className="text-legal-gold" />,
      description: 'Substantive and procedural laws governing crimes and punishments in Pakistan.',
      books: [
        { title: 'Pakistan Penal Code (PPC)', author: 'M. Mahmood', year: '2024 Edition' },
        { title: 'Code of Criminal Procedure (CrPC)', author: 'Shaukat Mahmood', year: '2023 Edition' },
        { title: 'Qanun-e-Shahadat Order, 1984', author: 'Justice Khalil-ur-Rehman Khan', year: '2022 Edition' }
      ]
    },
    {
      id: 'civil',
      title: 'Civil & Property Law',
      icon: <LibraryIcon className="text-legal-gold" />,
      description: 'Laws relating to civil disputes, contracts, and property rights.',
      books: [
        { title: 'Code of Civil Procedure (CPC)', author: 'Aamer Raza A. Khan', year: '2024 Edition' },
        { title: 'The Contract Act, 1872', author: 'M.A. Mannan', year: '2023 Edition' },
        { title: 'Transfer of Property Act', author: 'Justice (R) Fazal Karim', year: '2022 Edition' }
      ]
    },
    {
      id: 'corporate',
      title: 'Corporate & Tax Law',
      icon: <ShieldCheck className="text-legal-gold" />,
      description: 'Regulatory framework for businesses, companies, and taxation in Pakistan.',
      books: [
        { title: 'The Companies Act, 2017', author: 'S.A. Salam', year: '2023 Edition' },
        { title: 'Income Tax Ordinance, 2001', author: 'Huzaima & Ikram', year: '2024 Edition' },
        { title: 'Banking Laws in Pakistan', author: 'Dr. Tariq Hassan', year: '2021 Edition' }
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-legal-dark text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-legal-gold/5 -skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-legal-gold p-3 rounded-xl shadow-lg shadow-legal-gold/20">
                <Book className="h-8 w-8 text-legal-dark" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">Pakistan Law Books</h1>
            </div>
            <p className="text-slate-400 max-w-3xl text-lg leading-relaxed font-medium">
              Explore the comprehensive digital repository of Pakistani legal literature. From historical constitutional texts to the latest criminal and civil law commentaries.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sticky top-28">
              <h3 className="font-serif font-bold text-xl mb-6 text-legal-dark border-b pb-4">Categories</h3>
              <nav className="space-y-2">
                {categories.map((cat) => (
                  <a
                    key={cat.id}
                    href={`#${cat.id}`}
                    className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200"
                  >
                    <span className="text-slate-600 group-hover:text-legal-dark font-bold text-sm">{cat.title}</span>
                    <ChevronRight size={16} className="text-slate-300 group-hover:text-legal-gold" />
                  </a>
                ))}
              </nav>
              
              <div className="mt-8 p-4 bg-legal-dark rounded-xl text-white">
                <div className="flex items-center space-x-2 mb-2 text-legal-gold">
                  <Info size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">Note</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  All books are digitized with high-precision OCR and are available for premium subscribers.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-12">
            {categories.map((category, idx) => (
              <motion.section
                key={category.id}
                id={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                        {category.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-legal-dark">{category.title}</h2>
                        <p className="text-slate-500 text-sm mt-1">{category.description}</p>
                      </div>
                    </div>
                    <Link 
                      to="/library" 
                      className="text-xs font-bold text-legal-gold uppercase tracking-widest flex items-center hover:translate-x-1 transition-transform"
                    >
                      View Full Category <ChevronRight size={14} className="ml-1" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.books.map((book, bIdx) => (
                      <div 
                        key={bIdx} 
                        className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-legal-gold/30 hover:bg-white hover:shadow-lg transition-all"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div className="bg-white p-2 rounded-lg shadow-sm">
                            <Book size={20} className="text-legal-dark" />
                          </div>
                          <div className="flex space-x-2">
                            <button className="p-2 text-slate-400 hover:text-legal-gold transition-colors">
                              <Bookmark size={16} />
                            </button>
                            <button className="p-2 text-slate-400 hover:text-legal-gold transition-colors">
                              <Download size={16} />
                            </button>
                          </div>
                        </div>
                        <h4 className="font-serif font-bold text-lg text-legal-dark mb-2 group-hover:text-legal-gold transition-colors">
                          {book.title}
                        </h4>
                        <div className="flex items-center text-xs text-slate-500 space-x-4">
                          <span className="font-bold uppercase tracking-tighter text-slate-400">Author</span>
                          <span className="text-slate-700">{book.author}</span>
                        </div>
                        <div className="flex items-center text-xs text-slate-500 space-x-4 mt-2">
                          <span className="font-bold uppercase tracking-tighter text-slate-400">Edition</span>
                          <span className="text-slate-700">{book.year}</span>
                        </div>
                        
                        <Link 
                          to="/viewer" 
                          className="mt-6 w-full py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold text-legal-dark flex items-center justify-center group-hover:bg-legal-dark group-hover:text-white group-hover:border-legal-dark transition-all"
                        >
                          Read Digital Version
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-slate-50 px-8 py-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Verified Digital Edition
                  </span>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img src={`https://picsum.photos/seed/law${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-legal-gold flex items-center justify-center text-[8px] font-bold text-legal-dark">
                      +12
                    </div>
                  </div>
                </div>
              </motion.section>
            ))}

            {/* Premium Call to Action */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-legal-dark rounded-3xl p-10 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-legal-gold via-transparent to-transparent"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 relative z-10">Access All Premium Law Books</h2>
              <p className="text-slate-400 max-w-2xl mx-auto mb-8 relative z-10">
                Get unlimited access to the entire Law Access library, including the latest commentaries, case law references, and legal drafting templates.
              </p>
              <button className="bg-legal-gold text-legal-dark px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-legal-gold/20 relative z-10">
                Upgrade to Premium
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawBooks;
