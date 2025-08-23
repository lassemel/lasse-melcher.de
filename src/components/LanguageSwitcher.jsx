import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { currentLanguage, switchLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'en' ? 'de' : 'en';
    switchLanguage(newLang);
  };

  return (
    <div className="flex items-center">
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleLanguage}
        className="relative flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-xl transition-all duration-200 bg-zinc-100 hover:bg-zinc-200 group"
        aria-label={`Switch to ${currentLanguage === 'en' ? 'German' : 'English'}`}
      >
        {/* Globe Icon */}
        <Globe className="w-4 h-4 text-zinc-600" />
        
        {/* EN Button */}
        <span 
          className={`px-2 py-1 rounded-lg transition-all duration-200 ${
            currentLanguage === 'en' 
              ? 'bg-zinc-900 text-white shadow-sm' 
              : 'text-zinc-600 hover:text-zinc-900'
          }`}
        >
          EN
        </span>
        
        {/* DE Button */}
        <span 
          className={`px-2 py-1 rounded-lg transition-all duration-200 ${
            currentLanguage === 'de' 
              ? 'bg-zinc-900 text-white shadow-sm' 
              : 'text-zinc-600 hover:text-zinc-900'
          }`}
        >
          DE
        </span>
      </Button>
    </div>
  );
};
