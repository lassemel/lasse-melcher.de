import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Database, LineChart, Cog, Cloud, Boxes, GitBranch, ShieldCheck, Mail, MapPin, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/LanguageContext";
import { getTranslation } from "@/lib/translations";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { config } from "@/lib/config";

// ---- Editable content (pulls from your bio) ---------------------------------
const NAME = "Lasse Melcher";
const TAGLINE = "From data to decisions — creating impact, with you";
const ROLE = "Data Expert";
const CURRENT_COMPANY = "";
const LOCATION = "Berlin";
const YEARS_EXPERIENCE = 10; // since 2015

const CONTACT = config.contact;



const services = [
  {
    icon: <Database className="w-5 h-5" aria-hidden />,
    title: "modernDataStack",
    blurb: "modernDataStack",
  },
  {
    icon: <LineChart className="w-5 h-5" aria-hidden />,
    title: "analyticsEngineering",
    blurb: "analyticsEngineering",
  },
  {
    icon: <Cog className="w-5 h-5" aria-hidden />,
    title: "orchestration",
    blurb: "orchestration",
  },
  {
    icon: <GitBranch className="w-5 h-5" aria-hidden />,
    title: "cicd",
    blurb: "cicd",
  },
  {
    icon: <Cloud className="w-5 h-5" aria-hidden />,
    title: "cloudArchitecture",
    blurb: "cloudArchitecture",
  },
  {
    icon: <Boxes className="w-5 h-5" aria-hidden />,
    title: "biEnablement",
    blurb: "biEnablement",
  },
];



const experience = [
  {
    role: "Data Expert",
    company: "Cleos Welt",
    period: "Oct 2024 – Present",
    place: "Berlin",
    points: [
      "Leading the analytics engineering roadmap and data quality initiatives.",
      "Owning dbt models, CI/CD, and stakeholder-facing semantic layers.",
    ],
  },
  {
    role: "Data Engineer",
    company: "yoummday",
    period: "Dec 2023 – Oct 2024",
    place: "Berlin · Hybrid",
    points: [
      "Delivered pipelines and models to power product and ops analytics.",
      "Standardized build/deploy processes with Docker and GitLab CI.",
    ],
  },
  {
    role: "Freelance Data Engineer",
    company: "Self-Employed",
    period: "Aug 2022 – Dec 2023",
    place: "Remote",
    points: [
      "Partnered with teams to bootstrap modern data stacks and dashboards.",
    ],
  },
  {
    role: "Data Operations Manager",
    company: "Deutsche Telekom",
    period: "Jun 2011 – Jul 2022",
    place: "Hamburg · On-site",
    points: [
      "Led operational analytics and cross-functional process improvements.",
    ],
  },
];

const education = [
  {
    title: "IT-Systemelektroniker (Apprenticeship)",
    org: "Deutsche Telekom AG",
    period: "2008 – 2011",
    note: "Grade: 2.3",
  },
  { title: "Python Bootcamp", org: "Pierian Training", period: "Oct 2022 – Jan 2023" },
];

const certifications = [
  { title: "AWS Certified Cloud Practitioner", period: "May 2023 – May 2026" },
  { title: "Data Warehouse – The Ultimate Guide (Udemy)", period: "Sep 2023" },
];

// ---- UI helpers --------------------------------------------------------------
const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`max-w-6xl mx-auto px-6 md:px-8 ${className}`}>{children}</section>
);

const Pill = ({ children }) => (
  <span className="text-xs rounded-full border px-2 py-1 font-medium tracking-wide">
    {children}
  </span>
);

// ---- Page -------------------------------------------------------------------
export default function LasseMelcherSite() {
  const { currentLanguage } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <nav aria-label="Primary" className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-8 h-14">
          <a href="#home" className="font-semibold tracking-tight">{NAME}</a>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#work" className="hover:opacity-70">{getTranslation(currentLanguage, 'nav.work')}</a>
            <a href="#services" className="hover:opacity-70">{getTranslation(currentLanguage, 'nav.services')}</a>
            <a href="#about" className="hover:opacity-70">{getTranslation(currentLanguage, 'nav.about')}</a>
            <a href="#contact" className="hover:opacity-70">{getTranslation(currentLanguage, 'nav.contact')}</a>
          </div>
          <div className="flex items-center gap-2">
            <a 
              href="/Lasse-Melcher-CV-Resume-lite.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              download="Lasse-Melcher-CV-Resume-lite.pdf"
              className="hidden md:flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 transition-colors px-3 py-2 rounded-lg hover:bg-blue-50 border border-blue-200 hover:border-blue-300"
            >
              <Download className="w-4 h-4" />
              {getTranslation(currentLanguage, 'about.cvDownload')}
            </a>
            <LanguageSwitcher />
          </div>
        </nav>
      </header>

      {/* Hero */}
      <Section id="home" className="pt-16 md:pt-24 pb-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial="hidden" animate="show" variants={fade} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 mb-4">
              <Pill>{getTranslation(currentLanguage, 'hero.role')}</Pill>
              <Pill>{getTranslation(currentLanguage, 'hero.location')}</Pill>
              <Pill>{getTranslation(currentLanguage, 'hero.yearsExperience')}</Pill>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              {getTranslation(currentLanguage, 'hero.title')}
            </h1>
            <p className="mt-4 text-zinc-600 text-lg max-w-2xl">
              {getTranslation(currentLanguage, 'hero.tagline')}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact"><Button className="rounded-2xl">{getTranslation(currentLanguage, 'hero.cta')}<ArrowRight className="ml-2 w-4 h-4"/></Button></a>
              {/* <a href="/Lasse-Melcher-CV.pdf" download>
                <Button variant="outline" className="rounded-2xl">Download CV</Button>
              </a> */}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="relative">
            <img
              src="portrait.jpg"
              alt="Lasse Melcher - Data Expert"
              className="w-full aspect-square object-cover rounded-3xl border shadow-sm"
            />
          </motion.div>
        </div>

        {/* Quick facts */}
        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {[
            { title: getTranslation(currentLanguage, 'hero.quickFacts.dataModeling'), icon: <Database className="w-5 h-5" /> },
            { title: getTranslation(currentLanguage, 'hero.quickFacts.orchestration'), icon: <GitBranch className="w-5 h-5" /> },
            { title: getTranslation(currentLanguage, 'hero.quickFacts.cloudNative'), icon: <Cloud className="w-5 h-5" /> }
          ].map((f) => (
            <Card key={f.title} className="rounded-3xl">
              <CardHeader className="flex-row items-center gap-3">
                <div className="p-2 rounded-xl border">{f.icon}</div>
                <CardTitle className="text-base">{f.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      {/* About */}
      <Section id="about" className="py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">{getTranslation(currentLanguage, 'about.title')}</h2>
            <p className="text-zinc-600 leading-relaxed">
              {getTranslation(currentLanguage, 'about.description1')}
            </p>
            <p className="text-zinc-600 leading-relaxed mt-4">
              {getTranslation(currentLanguage, 'about.description2')}
            </p>
            <div className="mt-6">
              <h3 className="font-medium mb-3">{getTranslation(currentLanguage, 'about.skills')}</h3>
              <div className="flex flex-wrap gap-2">
                {getTranslation(currentLanguage, 'about.skillsList').map((s) => (
                  <Badge key={s} variant="outline" className="rounded-full">{s}</Badge>
                ))}
              </div>
            </div>
            

          </div>

          <div className="space-y-6">
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle className="text-base">{getTranslation(currentLanguage, 'about.keyHighlights')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm space-y-2 text-zinc-600">
                  {getTranslation(currentLanguage, 'about.highlights').map((highlight, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>


          </div>
        </div>
      </Section>

      {/* Selected Work / Projects */}
      <Section id="work" className="py-16 md:py-24">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">{getTranslation(currentLanguage, 'work.title')}</h2>
          <div className="hidden md:block text-sm text-zinc-600">{getTranslation(currentLanguage, 'work.subtitle')}</div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {getTranslation(currentLanguage, 'work.projects').map((p, index) => {
            // Map each project to its specific image
            const projectImages = [
              "/platform.jpg",      // Data Platform: dbt + BigQuery
              "/orchestration.jpg", // Data Orchestration & CI/CD
              "/api.jpg"            // Ticket System API Integration
            ];
            
            return (
              <Card key={index} className="rounded-3xl overflow-hidden">
                <img 
                  src={projectImages[index]} 
                  alt={`${currentLanguage === 'de' ? p.titleDe : p.title} - Project screenshot`} 
                  className={`w-full h-44 object-cover ${
                    index === 0 || index === 2 ? 'object-bottom' : 'object-center'
                  }`}
                />
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">
                    {currentLanguage === 'de' ? p.titleDe : p.title}
                  </CardTitle>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {(currentLanguage === 'de' ? p.tagsDe : p.tags).map((t) => (
                      <Badge key={t} variant="secondary" className="rounded-full">{t}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-zinc-600">
                  {currentLanguage === 'de' ? p.summaryDe : p.summary}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Services */}
      <Section id="services" className="py-16 md:py-24">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">{getTranslation(currentLanguage, 'services.title')}</h2>
          <div className="hidden md:block text-sm text-zinc-600">{getTranslation(currentLanguage, 'services.subtitle')}</div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card key={s.title} className="rounded-3xl">
              <CardHeader className="flex-row items-center gap-3">
                <div className="p-2 rounded-xl border">{s.icon}</div>
                <CardTitle className="text-lg">{getTranslation(currentLanguage, `services.${s.title}.title`)}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-zinc-600">{getTranslation(currentLanguage, `services.${s.blurb}.blurb`)}</CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">{getTranslation(currentLanguage, 'contact.title')}</h2>
            <p className="text-zinc-600 mt-3">{getTranslation(currentLanguage, 'contact.subtitle')}</p>
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4"/> <span>{CONTACT.city}</span></div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4"/> <a className="hover:font-bold transition-all" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div>
              <div className="flex items-center gap-2"><Github className="w-4 h-4"/> <a className="hover:font-bold transition-all" href={CONTACT.github} target="_blank" rel="noreferrer">GitHub</a></div>
              <div className="flex items-center gap-2"><Linkedin className="w-4 h-4"/> <a className="hover:font-bold transition-all" href={CONTACT.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div>
            </div>
          </div>

          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle className="text-base">{getTranslation(currentLanguage, 'contact.form.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <form 
                action={config.formspreeEndpoint} 
                method="POST" 
                className="space-y-3"
                onSubmit={(e) => {
                  // Optional: Add custom validation or handling here
                  console.log('Form submitted');
                }}
              >
                <input 
                  name="name" 
                  placeholder={getTranslation(currentLanguage, 'contact.form.name')} 
                  required 
                  className="w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent" 
                />
                <input 
                  name="email" 
                  placeholder={getTranslation(currentLanguage, 'contact.form.email')} 
                  type="email" 
                  required 
                  className="w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent" 
                />
                <textarea 
                  name="message" 
                  placeholder={getTranslation(currentLanguage, 'contact.form.message')} 
                  rows={5} 
                  required 
                  className="w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent resize-none" 
                />
                <Button type="submit" className="rounded-2xl w-full">
                  {getTranslation(currentLanguage, 'contact.form.send')}
                </Button>
                
                {/* Formspree will automatically show success/error messages here */}
                <div className="text-xs text-zinc-500 text-center">
                  {getTranslation(currentLanguage, 'contact.form.submissionNote')}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t py-10">
        <Section>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
            <div>© {new Date().getFullYear()} {NAME}. {getTranslation(currentLanguage, 'footer.rights')}</div>
            <div className="flex gap-4">
              <a href="#home" className="hover:opacity-70">{getTranslation(currentLanguage, 'footer.top')}</a>
              <a href="#work" className="hover:opacity-70">{getTranslation(currentLanguage, 'nav.work')}</a>
              <a href="#services" className="hover:opacity-70">{getTranslation(currentLanguage, 'nav.services')}</a>
              <a href="#about" className="hover:opacity-70">{getTranslation(currentLanguage, 'nav.about')}</a>
              <a href="#contact" className="hover:opacity-70">{getTranslation(currentLanguage, 'nav.contact')}</a>
            </div>
          </div>
        </Section>
      </footer>
    </div>
  );
}
