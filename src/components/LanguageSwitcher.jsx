import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { getTranslation } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { currentLanguage, switchLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'en' ? 'de' : 'en';
    switchLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-xl transition-colors"
      aria-label={`Switch to ${currentLanguage === 'en' ? 'German' : 'English'}`}
    >
      <Globe className="w-4 h-4" />
      <span className="hidden sm:inline">
        {currentLanguage === 'en' ? 'DE' : 'EN'}
      </span>
    </Button>
  );
};
