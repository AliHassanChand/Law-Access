import { motion } from 'motion/react';
import { Search, BookOpen, Gavel, FileText, Shield, Users, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-legal-dark text-white pt-24 pb-32">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://picsum.photos/seed/legal/1920/1080?blur=10')] bg-cover bg-center"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-legal-gold/20 text-legal-gold border border-legal-gold/30 rounded-full">
                Pakistan's Digital Legal Knowledge Platform
              </span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
                Empowering Justice Through <span className="text-legal-gold italic">Digital Access</span>
              </h1>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light">
                Instant access to digitized law books, landmark judgments, and legal resources for lawyers, students, and researchers across Pakistan.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative max-w-2xl mx-auto"
            >
              <div className="flex items-center bg-white rounded-xl shadow-2xl p-2">
                <div className="flex-grow flex items-center px-4">
                  <Search className="text-slate-400 mr-3" size={20} />
                  <input
                    type="text"
                    placeholder="Search by Section, Keyword, or Case Number..."
                    className="w-full py-4 text-slate-800 focus:outline-none text-lg"
                  />
                </div>
                <button className="bg-legal-dark text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-all">
                  Search
                </button>
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-slate-400">
                <span>Trending:</span>
                <a href="#" className="hover:text-legal-gold underline decoration-legal-gold/30 underline-offset-4">PPC Section 302</a>
                <a href="#" className="hover:text-legal-gold underline decoration-legal-gold/30 underline-offset-4">Recent SC Judgments</a>
                <a href="#" className="hover:text-legal-gold underline decoration-legal-gold/30 underline-offset-4">Civil Procedure</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Digitized Books', value: '5,000+' },
              { label: 'Case Judgments', value: '50,000+' },
              { label: 'Legal Templates', value: '1,200+' },
              { label: 'Active Users', value: '25,000+' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-serif font-bold text-legal-dark mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-legal-dark mb-4">Comprehensive Legal Resources</h2>
            <div className="w-24 h-1 bg-legal-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Law Library',
                desc: 'Access fully digitized versions of PPC, CrPC, Civil Laws, and more with advanced search.',
                icon: BookOpen,
                link: '/library'
              },
              {
                title: 'Case Laws',
                desc: 'Search through Supreme Court and High Court judgments with landmark case summaries.',
                icon: Gavel,
                link: '/case-laws'
              },
              {
                title: 'Drafting & Trial',
                desc: 'Download professional legal templates, draft petitions, and affidavits for your practice.',
                icon: FileText,
                link: '#'
              },
              {
                title: 'Bar Resources',
                desc: 'Stay updated with provincial bar council notifications, forms, and licensing procedures.',
                icon: Users,
                link: '#'
              },
              {
                title: 'Student Corner',
                desc: 'Study notes, past papers, and research material tailored for LLB and competitive exams.',
                icon: Star,
                link: '#'
              },
              {
                title: 'Discussion Forum',
                desc: 'Engage with a community of legal experts to discuss cases and share knowledge.',
                icon: Users,
                link: '#'
              }
            ].map((module, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="legal-card p-8 group"
              >
                <div className="bg-slate-100 p-4 rounded-xl inline-block mb-6 group-hover:bg-legal-gold transition-colors">
                  <module.icon className="h-8 w-8 text-legal-dark" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4">{module.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{module.desc}</p>
                <Link to={module.link} className="text-legal-dark font-bold text-sm flex items-center group-hover:text-legal-gold transition-colors">
                  Explore Module <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-legal-dark text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-8 leading-tight">Trusted by Legal Professionals Across Pakistan</h2>
              <p className="text-slate-400 mb-10 leading-relaxed">
                Our platform is designed to meet the rigorous standards of the legal industry. We provide verified, up-to-date legal information that you can rely on in court.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Verified Content', desc: 'All books and cases are cross-referenced with official gazettes.' },
                  { title: 'Secure & Private', desc: 'Enterprise-grade encryption for your notes and bookmarks.' },
                  { title: 'Offline Access', desc: 'Download resources for access even without an internet connection.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="bg-legal-gold/20 p-2 rounded-lg mt-1">
                      <Shield className="h-5 w-5 text-legal-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-legal-gold/10 rounded-3xl p-8 border border-legal-gold/20">
                <img
                  src="https://picsum.photos/seed/lawyer/800/600"
                  alt="Professional Lawyer"
                  className="rounded-2xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl text-legal-dark max-w-xs">
                  <div className="flex text-legal-gold mb-2">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-sm italic mb-4">"Law Access has revolutionized how I research cases. It's fast, reliable, and the search is incredibly accurate."</p>
                  <div className="font-bold text-sm">— Adv. Ahmed Khan, Supreme Court</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-legal-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-legal-dark mb-6">Ready to Modernize Your Legal Practice?</h2>
          <p className="text-legal-dark/80 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of lawyers and students who are already using Law Access to stay ahead in the legal field.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-legal-dark text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl">
              Start Free Trial
            </button>
            <button className="bg-transparent border-2 border-legal-dark text-legal-dark px-10 py-4 rounded-xl font-bold text-lg hover:bg-legal-dark hover:text-white transition-all">
              View Pricing Plans
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
