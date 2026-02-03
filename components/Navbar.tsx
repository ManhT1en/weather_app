'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState('EN');

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'VI' : 'EN');
  };

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-2xl bg-white/10 rounded-2xl shadow-2xl border border-white/20 px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left: User Name */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                T
              </div>
              <h2 className="text-white font-bold text-xl hidden sm:block">
                Tran Duy Truong
              </h2>
            </div>

            {/* Right: Controls */}
            <div className="flex items-center gap-3">
              {/* Language Button */}
              <button
                onClick={toggleLanguage}
                className="backdrop-blur-xl bg-white/10 hover:bg-white/20
                           px-4 py-2 rounded-xl border border-white/20
                           text-white font-semibold transition-all duration-200
                           hover:scale-105 cursor-pointer flex items-center gap-2
                           focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Change language"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span className="hidden sm:inline">{language}</span>
              </button>

              {/* Dark Mode Button */}
              <button
                onClick={toggleDarkMode}
                className="backdrop-blur-xl bg-white/10 hover:bg-white/20
                           px-4 py-2 rounded-xl border border-white/20
                           text-white font-semibold transition-all duration-200
                           hover:scale-105 cursor-pointer
                           focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Toggle dark mode"
              >
                {isDark ? (
                  // Sun Icon
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  // Moon Icon
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              {/* Profile Button */}
              <button
                className="backdrop-blur-xl bg-white/10 hover:bg-white/20
                           px-4 py-2 rounded-xl border border-white/20
                           text-white font-semibold transition-all duration-200
                           hover:scale-105 cursor-pointer flex items-center gap-2
                           focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="User profile"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="hidden md:inline">Profile</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
