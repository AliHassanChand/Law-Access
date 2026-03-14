import { Search, Gavel, Calendar, MapPin, ChevronRight, Scale } from 'lucide-react';
import { motion } from 'motion/react';

const CaseLaws = () => {
  const cases = [
    {
      title: 'State vs. Zulfikar Ali Bhutto',
      caseNo: 'PLD 1979 SC 53',
      court: 'Supreme Court of Pakistan',
      date: 'March 24, 1979',
      judges: 'Justice Anwar-ul-Haq, et al.',
      summary: 'A landmark case in the judicial history of Pakistan regarding the trial of a former Prime Minister.',
      type: 'Landmark'
    },
    {
      title: 'Al-Jehad Trust vs. Federation of Pakistan',
      caseNo: 'PLD 1996 SC 324',
      court: 'Supreme Court of Pakistan',
      date: 'March 20, 1996',
      judges: 'Justice Sajjad Ali Shah, et al.',
      summary: 'Commonly known as the Judges Case, it established the procedure for the appointment of judges.',
      type: 'Constitutional'
    },
    {
      title: 'Justice Hasnat Ahmed Khan vs. Federation of Pakistan',
      caseNo: 'PLD 2011 SC 619',
      court: 'Supreme Court of Pakistan',
      date: 'June 20, 2011',
      judges: 'Full Bench',
      summary: 'Dealt with the independence of the judiciary and the role of the Judicial Commission.',
      type: 'Recent'
    },
    {
      title: 'Panama Papers Case (Imran Khan vs. Nawaz Sharif)',
      caseNo: 'PLD 2017 SC 265',
      court: 'Supreme Court of Pakistan',
      date: 'July 28, 2017',
      judges: 'Justice Asif Saeed Khosa, et al.',
      summary: 'Disqualification of a sitting Prime Minister on grounds of non-disclosure of assets.',
      type: 'Landmark'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-legal-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold mb-4">Case Laws & Judgments</h1>
          <p className="text-slate-400 max-w-2xl">
            Explore a comprehensive database of Supreme Court and High Court judgments. Search by case title, number, or judge.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search by Case Title or Keyword..."
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-legal-gold/50"
              />
            </div>
            <div className="relative">
              <Scale className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <select className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none appearance-none text-slate-600">
                <option>All Courts</option>
                <option>Supreme Court</option>
                <option>Lahore High Court</option>
                <option>Sindh High Court</option>
                <option>Peshawar High Court</option>
              </select>
            </div>
            <button className="bg-legal-gold text-legal-dark font-bold py-3 rounded-lg hover:bg-opacity-90 transition-all">
              Apply Filters
            </button>
          </div>
        </div>

        {/* Results List */}
        <div className="space-y-6">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="legal-card p-8 flex flex-col md:flex-row gap-8 items-start group"
            >
              <div className="bg-slate-100 p-4 rounded-2xl group-hover:bg-legal-gold transition-colors shrink-0">
                <Gavel className="h-8 w-8 text-legal-dark" />
              </div>
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                    c.type === 'Landmark' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {c.type} Case
                  </span>
                  <span className="text-slate-400 text-xs flex items-center">
                    <Calendar size={14} className="mr-1" /> {c.date}
                  </span>
                  <span className="text-slate-400 text-xs flex items-center">
                    <MapPin size={14} className="mr-1" /> {c.court}
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-legal-gold transition-colors">
                  {c.title}
                </h3>
                <p className="text-legal-gold font-mono text-sm mb-4 font-bold">{c.caseNo}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-3xl">
                  {c.summary}
                </p>
                <div className="flex items-center text-xs text-slate-500 italic">
                  <span className="font-bold not-italic text-slate-700 mr-2">Judges:</span> {c.judges}
                </div>
              </div>
              <div className="shrink-0 w-full md:w-auto">
                <button className="w-full md:w-auto bg-legal-dark text-white px-6 py-3 rounded-lg font-bold text-sm flex items-center justify-center hover:bg-slate-800 transition-all">
                  Full Judgment <ChevronRight size={16} className="ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="text-legal-dark font-bold border-b-2 border-legal-gold pb-1 hover:text-legal-gold transition-colors">
            Load More Judgments
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseLaws;
