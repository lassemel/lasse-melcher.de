import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Check localStorage first, then browser language, default to English
    const saved = localStorage.getItem('language');
    if (saved && (saved === 'en' || saved === 'de')) {
      return saved;
    }
    
    // Check browser language
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('de')) {
      return 'de';
    }
    
    return 'en';
  });

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('language', currentLanguage);
    
    // Update document language attribute for accessibility
    document.documentElement.lang = currentLanguage;
    
    // Also update the html element if it exists
    const htmlElement = document.getElementById('html-root');
    if (htmlElement) {
      htmlElement.lang = currentLanguage;
    }
  }, [currentLanguage]);

  const switchLanguage = (lang) => {
    if (lang === 'en' || lang === 'de') {
      setCurrentLanguage(lang);
    }
  };

  const value = {
    currentLanguage,
    switchLanguage,
    isEnglish: currentLanguage === 'en',
    isGerman: currentLanguage === 'de'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
