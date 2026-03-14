/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import Library from './pages/Library';
import CaseLaws from './pages/CaseLaws';
import LawBooks from './pages/LawBooks';
import BookViewer from './pages/BookViewer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-slate-50">
            <Routes>
              <Route path="/viewer" element={<BookViewer />} />
              <Route path="*" element={
                <>
                  <Navbar />
                  <main className="flex-grow">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/library" element={<Library />} />
                      <Route path="/case-laws" element={<CaseLaws />} />
                      <Route path="/law-books" element={<LawBooks />} />
                    </Routes>
                  </main>
                  <Footer />
                </>
              } />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}
