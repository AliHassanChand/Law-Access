import { useState } from 'react';
import { ChevronLeft, ChevronRight, Bookmark, Highlighter, StickyNote, Search, ZoomIn, ZoomOut, Download } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const BookViewer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 450;

  return (
    <div className="h-screen flex flex-col bg-slate-900 text-white overflow-hidden">
      {/* Top Toolbar */}
      <div className="h-16 bg-legal-dark border-b border-slate-800 flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center space-x-4">
          <Link to="/library" className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
            <ChevronLeft size={20} />
          </Link>
          <div>
            <h2 className="text-sm font-bold truncate max-w-[200px]">Pakistan Penal Code (PPC)</h2>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest">Section 302: Punishment for Qatl-i-Amd</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white">
            <Search size={18} />
          </button>
          <div className="h-6 w-px bg-slate-700 mx-2"></div>
          <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white">
            <ZoomOut size={18} />
          </button>
          <span className="text-xs font-mono px-2">125%</span>
          <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white">
            <ZoomIn size={18} />
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-slate-800 rounded-lg px-3 py-1.5">
            <input
              type="number"
              value={currentPage}
              onChange={(e) => setCurrentPage(parseInt(e.target.value) || 1)}
              className="bg-transparent w-10 text-center text-sm focus:outline-none"
            />
            <span className="text-slate-500 text-xs mx-1">/</span>
            <span className="text-slate-500 text-xs">{totalPages}</span>
          </div>
          <div className="flex space-x-1">
            <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-legal-gold">
              <Bookmark size={18} />
            </button>
            <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white">
              <Highlighter size={18} />
            </button>
            <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white">
              <StickyNote size={18} />
            </button>
          </div>
          <button className="bg-legal-gold text-legal-dark px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-opacity-90 transition-all">
            <Download size={14} className="inline mr-2" /> Download PDF
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow flex overflow-hidden">
        {/* Sidebar - Table of Contents */}
        <div className="w-64 bg-legal-dark border-r border-slate-800 overflow-y-auto hidden md:block">
          <div className="p-6">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Table of Contents</h3>
            <div className="space-y-4">
              {[
                { title: 'Chapter I: Introduction', sections: '1-5' },
                { title: 'Chapter II: General Explanations', sections: '6-52A' },
                { title: 'Chapter III: Punishments', sections: '53-75' },
                { title: 'Chapter IV: General Exceptions', sections: '76-106', active: true },
                { title: 'Chapter V: Abetment', sections: '107-120' },
                { title: 'Chapter VI: Offences Against State', sections: '121-130' },
              ].map((item, i) => (
                <div key={i} className={`cursor-pointer group ${item.active ? 'text-legal-gold' : 'text-slate-400'}`}>
                  <div className="text-sm font-bold group-hover:text-white transition-colors">{item.title}</div>
                  <div className="text-[10px] opacity-60">Sections {item.sections}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Document Viewer */}
        <div className="flex-grow bg-slate-800 overflow-y-auto p-8 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white text-slate-900 w-full max-w-4xl shadow-2xl p-16 min-h-[1200px] relative"
          >
            <div className="absolute top-8 right-8 text-[10px] text-slate-300 font-mono">LAW ACCESS DIGITAL ARCHIVE</div>
            
            <div className="max-w-2xl mx-auto">
              <h1 className="text-3xl font-serif font-bold text-center mb-12 border-b-2 border-slate-100 pb-8">
                CHAPTER XVI<br />
                <span className="text-lg font-normal italic">Of Offences Affecting the Human Body</span>
              </h1>

              <div className="space-y-12">
                <section>
                  <h3 className="text-xl font-serif font-bold mb-4">300. Qatl-i-Amd:</h3>
                  <p className="leading-relaxed text-justify mb-4">
                    Whoever, with the intention of causing death or with the intention of causing bodily injury to a person and the injury intended to be caused is sufficient in the ordinary course of nature to cause death, or knowing that his act is so imminently dangerous that it must in all probability cause death, causes the death of such person, is said to commit qatl-i-amd.
                  </p>
                </section>

                <section className="bg-slate-50 p-6 rounded-lg border-l-4 border-legal-gold">
                  <h3 className="text-xl font-serif font-bold mb-4">302. Punishment for Qatl-i-Amd:</h3>
                  <p className="leading-relaxed text-justify mb-4">
                    Whoever commits qatl-i-amd shall, subject to the provisions of this Chapter, be:
                  </p>
                  <ul className="list-decimal pl-6 space-y-3">
                    <li>Punished with death as qisas;</li>
                    <li>Punished with death or imprisonment for life as ta'zir having regard to the facts and circumstances of the case, if the proof in either of the forms specified in Section 304 is not available; or</li>
                    <li>Punished with imprisonment of either description for a term which may extend to twenty-five years, where according to the Injunctions of Islam the punishment of qisas is not applicable.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-serif font-bold mb-4">303. Qatl committed under Ikrah-i-Tam:</h3>
                  <p className="leading-relaxed text-justify">
                    Whoever commits qatl-i-amd or qatl-i-shibh-i-amd under ikrah-i-tam shall be punished with imprisonment for a term which may extend to twenty-five years but not less than ten years and the person causing ikrah-i-tam shall be punished for the kind of qatl committed as a result thereof.
                  </p>
                </section>
              </div>
            </div>

            <div className="mt-24 pt-8 border-t border-slate-100 flex justify-between text-[10px] text-slate-400 uppercase tracking-widest">
              <span>Pakistan Penal Code (XLV of 1860)</span>
              <span>Page {currentPage}</span>
            </div>
          </motion.div>
        </div>

        {/* Right Sidebar - Notes/Annotations */}
        <div className="w-80 bg-legal-dark border-l border-slate-800 overflow-y-auto hidden lg:block">
          <div className="p-6">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Notes & Annotations</h3>
            <div className="space-y-4">
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-bold text-legal-gold">SEC 302 • PAGE 142</span>
                  <span className="text-[10px] text-slate-500">2 mins ago</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">Check recent Supreme Court interpretation regarding Ta'zir punishment in cases of compromise.</p>
              </div>
              <button className="w-full py-3 border border-dashed border-slate-700 rounded-lg text-xs text-slate-500 hover:text-white hover:border-slate-500 transition-all">
                + Add New Note
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="h-12 bg-legal-dark border-t border-slate-800 flex items-center justify-center space-x-8 shrink-0">
        <button className="text-slate-400 hover:text-white flex items-center text-xs font-bold">
          <ChevronLeft size={16} className="mr-1" /> Previous Section
        </button>
        <div className="h-4 w-px bg-slate-700"></div>
        <button className="text-slate-400 hover:text-white flex items-center text-xs font-bold">
          Next Section <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default BookViewer;
