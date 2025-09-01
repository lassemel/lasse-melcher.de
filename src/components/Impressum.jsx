import React from "react";
import { getTranslation } from "@/lib/translations";

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`max-w-6xl mx-auto px-6 md:px-8 ${className}`}>{children}</section>
);

export default function Impressum({ onBackHome }) {
  // Always use German for Impressum (legal requirement)
  const impressumLanguage = 'de';
  
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
      <Section id="impressum" className="pt-16 md:pt-24 pb-16">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-semibold mb-8">
            {getTranslation(impressumLanguage, 'impressum.title')}
          </h1>
          
          <div className="mb-6">
            <p className="text-lg font-bold text-zinc-900">
              {getTranslation(impressumLanguage, 'impressum.tmgReference')}
            </p>
          </div>
          
          <div className="prose prose-zinc max-w-none">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-3">
                  {getTranslation(impressumLanguage, 'impressum.responsiblePerson')}
                </h2>
                <div className="text-zinc-600 space-y-1">
                  <p>Lasse Melcher</p>
                  <p>{getTranslation(impressumLanguage, 'impressum.address.street')}</p>
                  {getTranslation(impressumLanguage, 'impressum.address.street2') && (
                    <p>{getTranslation(impressumLanguage, 'impressum.address.street2')}</p>
                  )}
                  <p>{getTranslation(impressumLanguage, 'impressum.address.city')}</p>
                  <p>{getTranslation(impressumLanguage, 'impressum.address.country')}</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">
                  {getTranslation(impressumLanguage, 'impressum.contact')}
                </h2>
                <div className="text-zinc-600 space-y-1">
                  <p>
                    <strong>{getTranslation(impressumLanguage, 'impressum.email')}:</strong>{" "}
                    <a href="mailto:contact@lasse-melcher.de" className="text-blue-600 hover:underline">
                      contact@lasse-melcher.de
                    </a>
                  </p>
                  <p>
                    <strong>{getTranslation(impressumLanguage, 'impressum.website')}:</strong>{" "}
                    <a href="https://www.lasse-melcher.de" className="text-blue-600 hover:underline">
                      www.lasse-melcher.de
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <div className="text-zinc-600">
                  <p>{getTranslation(impressumLanguage, 'impressum.freeText')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t">
            <button 
              onClick={onBackHome}
              className="inline-flex items-center text-sm text-zinc-600 hover:text-zinc-900 transition-colors cursor-pointer"
            >
              ← {getTranslation(impressumLanguage, 'impressum.backToHome')}
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}
