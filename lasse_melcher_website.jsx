import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Database, LineChart, Cog, Cloud, Boxes, GitBranch, ShieldCheck, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// ---- Editable content (pulls from your bio) ---------------------------------
const NAME = "Lasse Melcher";
const TAGLINE = "From data to decisions — creating impact, with you";
const ROLE = "Data Expert";
const CURRENT_COMPANY = "Cleos Welt";
const LOCATION = "Berlin";
const YEARS_EXPERIENCE = 10; // since 2011

const CONTACT = {
  email: "hello@example.com", // TODO: replace with your email
  phone: "+49 000 0000000", // TODO: optional phone
  city: "Berlin, Germany",
  github: "https://github.com/", // TODO: your GitHub
  linkedin: "https://www.linkedin.com/in/", // TODO: your LinkedIn
};

const skills = [
  "Analytics Engineering (dbt)",
  "SQL & Data Modeling",
  "Python & PySpark",
  "Data Orchestration",
  "Docker & CI/CD (GitLab)",
  "Cloud: GCP, AWS, Databricks",
  "Data Warehousing & Lakes",
  "Power BI & Metabase",
  "Data Quality & Enablement",
  "Linux & Shell Scripting",
];

const services = [
  {
    icon: <Database className="w-5 h-5" aria-hidden />,
    title: "Modern Data Stack",
    blurb: "Design pragmatic, scalable data platforms on GCP/AWS/Databricks.",
  },
  {
    icon: <LineChart className="w-5 h-5" aria-hidden />,
    title: "Analytics Engineering",
    blurb: "Model business logic with dbt, enforce quality, and ship trusted metrics.",
  },
  {
    icon: <Cog className="w-5 h-5" aria-hidden />,
    title: "Orchestration & Ops",
    blurb: "Data pipeline orchestration, observability, and reliable deployments.",
  },
  {
    icon: <GitBranch className="w-5 h-5" aria-hidden />,
    title: "CI/CD for Data",
    blurb: "GitLab pipelines for tests, image builds, and environment promotion.",
  },
  {
    icon: <Cloud className="w-5 h-5" aria-hidden />,
    title: "Cloud Architecture",
    blurb: "Secure, cost-aware patterns for warehouses, lakes, and compute.",
  },
  {
    icon: <Boxes className="w-5 h-5" aria-hidden />,
    title: "BI Enablement",
    blurb: "Self-serve dashboards in Power BI & Metabase with semantic layers.",
  },
];

const projects = [
  {
    title: "Pet Insurance Contracts: dbt + BigQuery",
    image: "https://placehold.co/1200x700/6b7280/6b7280",
    tags: ["dbt", "BigQuery", "Modeling"],
    summary:
      "Developed a comprehensive data foundation for insurance operations that handles complex business rules, extracts insights from unstructured data, and tracks performance metrics to ensure reliable reporting and decision-making.",
  },
  {
    title: "Data Orchestration & CI/CD",
    image: "https://placehold.co/1200x700/6b7280/6b7280",
    tags: ["Data Orchestration", "Docker", "GitLab"],
    summary:
      "Automated data pipeline management with continuous integration and deployment across development and production environments, including real-time monitoring and alerting.",
  },
  {
    title: "Zammad API Landing Zone",
    image: "https://placehold.co/1200x700/6b7280/6b7280",
    tags: ["Ingestion", "APIs", "Data Quality"],
    summary:
      "Designed and implemented a comprehensive data integration solution for customer support systems, including API development, automated data ingestion, and quality assurance processes.",
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
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <nav aria-label="Primary" className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-8 h-14">
          <a href="#home" className="font-semibold tracking-tight">{NAME}</a>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#work" className="hover:opacity-70">Work</a>
            <a href="#services" className="hover:opacity-70">Services</a>
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden md:block">
              <Button className="rounded-2xl">Let’s talk</Button>
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <Section id="home" className="pt-16 md:pt-24 pb-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial="hidden" animate="show" variants={fade} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 mb-4">
              <Pill>{ROLE} @ {CURRENT_COMPANY}</Pill>
              <Pill>{LOCATION}</Pill>
              <Pill>{YEARS_EXPERIENCE}+ yrs</Pill>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Minimal, reliable data systems for real business impact.
            </h1>
            <p className="mt-4 text-zinc-600 text-lg max-w-2xl">
              {TAGLINE}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact"><Button className="rounded-2xl">Work with me<ArrowRight className="ml-2 w-4 h-4"/></Button></a>
              {/* <a href="/Lasse-Melcher-CV.pdf" download>
                <Button variant="outline" className="rounded-2xl">Download CV</Button>
              </a> */}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="relative">
            <img
              src="https://placehold.co/900x900/png"
              alt="Portrait placeholder"
              className="w-full aspect-square object-cover rounded-3xl border shadow-sm"
            />
          </motion.div>
        </div>

        {/* Quick facts */}
        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {["Data Modeling & Warehousing", "Orchestration & CI/CD", "Cloud-native & Cost-aware"].map((f) => (
            <Card key={f} className="rounded-3xl">
              <CardHeader>
                <CardTitle className="text-base">{f}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      {/* Selected Work / Projects */}
      <Section id="work" className="py-16 md:py-24">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Selected Work</h2>
          <div className="hidden md:block text-sm text-zinc-600">Representative projects I loved building</div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Card key={p.title} className="rounded-3xl overflow-hidden">
              <img src={p.image} alt="Project placeholder" className="w-full h-44 object-cover" />
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{p.title}</CardTitle>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="rounded-full">{t}</Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="text-sm text-zinc-600">
                {p.summary}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section id="services" className="py-16 md:py-24">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">What I Do</h2>
          <div className="hidden md:block text-sm text-zinc-600">Hands-on, outcomes-first</div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card key={s.title} className="rounded-3xl">
              <CardHeader className="flex-row items-center gap-3">
                <div className="p-2 rounded-xl border">{s.icon}</div>
                <CardTitle className="text-lg">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-zinc-600">{s.blurb}</CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* About */}
      <Section id="about" className="py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">About</h2>
            <p className="text-zinc-600 leading-relaxed">
              I’m {NAME}, a {ROLE} based in Berlin. I build minimal, durable data systems that help teams ship
              decisions faster. My background spans telecom operations, freelancing, and product-led startups —
              with a focus on dbt modeling, orchestration, and data enablement.
            </p>
            <div className="mt-6">
              <h3 className="font-medium mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <Badge key={s} variant="outline" className="rounded-full">{s}</Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle className="text-base">Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {experience.map((e) => (
                  <div key={e.company} className="text-sm">
                    <div className="font-medium">{e.role} — {e.company}</div>
                    <div className="text-zinc-600">{e.period} · {e.place}</div>
                    <ul className="list-disc ml-4 mt-2 text-zinc-600">
                      {e.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle className="text-base">Education & Certifications</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-3">
                {education.map((ed) => (
                  <div key={ed.title}>
                    <div className="font-medium">{ed.title}</div>
                    <div className="text-zinc-600">{ed.org} · {ed.period}{ed.note ? ` · ${ed.note}` : ""}</div>
                  </div>
                ))}
                <div className="pt-2">
                  {certifications.map((c) => (
                    <div key={c.title} className="text-zinc-700">{c.title} · <span className="text-zinc-600">{c.period}</span></div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Let’s build something</h2>
            <p className="text-zinc-600 mt-3">Tell me about your data challenges and goals. I’ll reply promptly with ideas and next steps.</p>
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-center gap-2"><Mail className="w-4 h-4"/> <a className="underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4"/> <span>{CONTACT.phone}</span></div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4"/> <span>{CONTACT.city}</span></div>
              <div className="flex items-center gap-2"><Github className="w-4 h-4"/> <a className="underline" href={CONTACT.github} target="_blank" rel="noreferrer">GitHub</a></div>
              <div className="flex items-center gap-2"><Linkedin className="w-4 h-4"/> <a className="underline" href={CONTACT.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div>
            </div>
          </div>

          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle className="text-base">Contact form</CardTitle>
            </CardHeader>
            <CardContent>
              <form action={`mailto:${CONTACT.email}`} method="post" className="space-y-3">
                <input name="name" placeholder="Your name" className="w-full border rounded-xl px-3 py-2" />
                <input name="email" placeholder="Your email" type="email" className="w-full border rounded-xl px-3 py-2" />
                <textarea name="message" placeholder="What would you like to achieve?" rows={5} className="w-full border rounded-xl px-3 py-2" />
                <Button type="submit" className="rounded-2xl">Send</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t py-10">
        <Section>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
            <div>© {new Date().getFullYear()} {NAME}. All rights reserved.</div>
            <div className="flex gap-4">
              <a href="#home" className="hover:opacity-70">Top</a>
              <a href="#work" className="hover:opacity-70">Work</a>
              <a href="#services" className="hover:opacity-70">Services</a>
              <a href="#about" className="hover:opacity-70">About</a>
              <a href="#contact" className="hover:opacity-70">Contact</a>
            </div>
          </div>
        </Section>
      </footer>
    </div>
  );
}
