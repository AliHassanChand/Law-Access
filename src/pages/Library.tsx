import { Search, Filter, Book, ChevronRight, Bookmark, Download } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Library = () => {
  const categories = [
    'All Books',
    'Criminal Laws',
    'Civil Laws',
    'Central Acts',
    'Sharia Laws',
    'Constitutional',
    'Corporate Law'
  ];

  const books = [
    { title: 'Pakistan Penal Code (PPC)', author: 'Government of Pakistan', edition: '2024 Edition', category: 'Criminal Laws', year: '1860' },
    { title: 'Criminal Procedure Code (CrPC)', author: 'Government of Pakistan', edition: '2024 Edition', category: 'Criminal Laws', year: '1898' },
    { title: 'Civil Procedure Code (CPC)', author: 'Government of Pakistan', edition: '2023 Edition', category: 'Civil Laws', year: '1908' },
    { title: 'Qanun-e-Shahadat Order', author: 'Justice (R) M. Mahmood', edition: 'Latest Edition', category: 'Sharia Laws', year: '1984' },
    { title: 'Constitution of Pakistan', author: 'National Assembly', edition: 'Amended 2024', category: 'Constitutional', year: '1973' },
    { title: 'Contract Act', author: 'Frederick Pollock', edition: 'Classic Edition', category: 'Civil Laws', year: '1872' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-legal-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold mb-4">Digital Law Library</h1>
          <p className="text-slate-400 max-w-2xl">
            Browse and search through thousands of digitized law books, acts, and ordinances. Organized by category for easy access.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sticky top-28">
              <h3 className="font-serif font-bold text-lg mb-6 flex items-center">
                <Filter size={18} className="mr-2 text-legal-gold" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((cat, i) => (
                  <button
                    key={i}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${
                      i === 0 ? 'bg-legal-gold text-legal-dark font-bold' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="font-serif font-bold text-lg mb-4">Publication Year</h3>
                <div className="space-y-2">
                  {['2020 - 2024', '2010 - 2019', '2000 - 2009', 'Pre-2000'].map((range, i) => (
                    <label key={i} className="flex items-center space-x-3 text-sm text-slate-600 cursor-pointer">
                      <input type="checkbox" className="rounded border-slate-300 text-legal-gold focus:ring-legal-gold" />
                      <span>{range}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search Bar */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-8 flex items-center">
              <Search className="text-slate-400 ml-2" size={20} />
              <input
                type="text"
                placeholder="Search books by title, author, or keyword..."
                className="flex-grow px-4 py-2 focus:outline-none text-slate-800"
              />
              <button className="bg-legal-dark text-white px-6 py-2 rounded-lg font-bold text-sm">
                Search
              </button>
            </div>

            {/* Book Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {books.map((book, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="legal-card group"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-slate-100 p-3 rounded-lg group-hover:bg-legal-gold transition-colors">
                        <Book className="h-6 w-6 text-legal-dark" />
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 text-slate-400 hover:text-legal-gold transition-colors">
                          <Bookmark size={18} />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-legal-gold transition-colors">
                          <Download size={18} />
                        </button>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-legal-gold font-bold mb-2 block">
                      {book.category}
                    </span>
                    <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-legal-gold transition-colors">
                      {book.title}
                    </h3>
                    <div className="text-sm text-slate-500 mb-6">
                      <p>Author: {book.author}</p>
                      <p>Edition: {book.edition} ({book.year})</p>
                    </div>
                    <Link to="/viewer" className="w-full py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-legal-dark flex items-center justify-center hover:bg-legal-dark hover:text-white transition-all">
                      Read Digital Version <ChevronRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center space-x-2">
              {[1, 2, 3, '...', 12].map((page, i) => (
                <button
                  key={i}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold transition-all ${
                    page === 1 ? 'bg-legal-dark text-white' : 'bg-white border border-slate-200 text-slate-600 hover:border-legal-gold'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
