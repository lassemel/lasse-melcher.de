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

const skillsDe = [
  "Analytics Engineering (dbt)",
  "SQL & Datenmodellierung",
  "Python & PySpark",
  "Datenorchestrierung",
  "Docker & CI/CD (GitLab)",
  "Cloud: GCP, AWS, Databricks",
  "Data Warehousing & Data Lakes",
  "Power BI & Metabase",
  "Datenqualität & Aktivierung",
  "Linux & Shell-Skripting",
];

export const translations = {
  en: {
    // Navigation
    nav: {
      work: "Work",
      services: "Services", 
      about: "About",
      contact: "Contact",
      letsTalk: "Let's talk"
    },

    // Hero section
    hero: {
      role: "Data Expert",
      location: "Berlin",
      yearsExperience: "10+ yrs",
      title: "Minimal, reliable data systems for real business impact.",
      tagline: "From data to decisions — creating impact, with you",
      cta: "Work with me",
      quickFacts: {
        dataModeling: "Data Modeling & Warehousing",
        orchestration: "Orchestration & CI/CD", 
        cloudNative: "Cloud-native & Cost-aware"
      }
    },

    // About section
    about: {
      title: "About",
      description1: "I'm Lasse, a Data Expert based in Berlin. I build minimal, cost-effective, and easily maintainable data systems that scale with your business. My approach focuses on helping teams ship decisions faster with reliable, pragmatic solutions.",
      description2: "My background spans telecom operations, insurance, freelancing, and product-led startups — giving me deep insight into diverse data challenges. I specialize in dbt modeling, modern orchestration, and data enablement that actually works in production.",
      skills: "Skills",
      skillsList: skills,
      keyHighlights: "Key Highlights",
      highlights: [
        "10+ years building data systems across telecom, insurance, startups, and enterprise",
        "Led analytics engineering transformations with dbt and modern data stacks",
        "Implemented CI/CD for data teams with Docker and GitLab automation",
        "Enabled self-serve analytics with Power BI and Metabase dashboards",
        "Mentored teams on data quality, observability, and best practices",
        "Accelerated delivery with state-of-the-art AI tools for code generation and optimization"
      ]
    },

    // Work section
    work: {
      title: "Selected Work",
      subtitle: "Representative projects I loved building",
      projects: [
        {
          title: "Data Platform: dbt + BigQuery",
          titleDe: "Datenplattform: dbt + BigQuery",
          tags: ["dbt", "BigQuery", "Modeling"],
          tagsDe: ["dbt", "BigQuery", "Modellierung"],
          summary: "Developed a comprehensive data foundation for insurance operations that handles complex business rules, extracts insights from unstructured data, and tracks performance metrics to ensure reliable reporting and decision-making.",
          summaryDe: "Entwicklung einer umfassenden Datenbasis für Versicherungsbetriebe, die komplexe Geschäftsregeln handhabt, Erkenntnisse aus unstrukturierten Daten extrahiert und Leistungsmetriken verfolgt, um zuverlässige Berichterstattung und Entscheidungsfindung zu gewährleisten."
        },
        {
          title: "Data Orchestration & CI/CD",
          titleDe: "Datenorchestrierung & CI/CD",
          tags: ["Data Orchestration", "Docker", "GitLab"],
          tagsDe: ["Datenorchestrierung", "Docker", "GitLab"],
          summary: "Automated data pipeline management with continuous integration and deployment across development and production environments, including real-time monitoring and alerting.",
          summaryDe: "Automatisierte Verwaltung von Datenpipelines mit kontinuierlicher Integration und Bereitstellung in Entwicklungs- und Produktionsumgebungen, einschließlich Echtzeitüberwachung und Benachrichtigungen."
        },
        {
          title: "Ticket System API Integration",
          titleDe: "Ticket-System API-Integration",
          tags: ["Ingestion", "APIs", "Data Quality"],
          tagsDe: ["Ingestion", "APIs", "Datenqualität"],
          summary: "Designed and implemented a comprehensive data integration solution for customer support systems, including API development, automated data ingestion, and quality assurance processes.",
          summaryDe: "Entwicklung und Implementierung einer umfassenden Datenintegrationslösung für Kundensupportsysteme, einschließlich API-Entwicklung, automatisierter Datenerfassung und Qualitätssicherungsprozessen."
        }
      ]
    },

    // Services section
    services: {
      title: "What I Do",
      subtitle: "Hands-on, outcomes-first",
      modernDataStack: {
        title: "Modern Data Stack",
        blurb: "Design pragmatic, scalable data platforms on GCP/AWS/Databricks."
      },
      analyticsEngineering: {
        title: "Analytics Engineering", 
        blurb: "Model business logic with dbt, enforce quality, and ship trusted metrics."
      },
      orchestration: {
        title: "Orchestration & Ops",
        blurb: "Data pipeline orchestration, observability, and reliable deployments."
      },
      cicd: {
        title: "CI/CD for Data",
        blurb: "GitLab pipelines for tests, image builds, and environment promotion."
      },
      cloudArchitecture: {
        title: "Cloud Architecture",
        blurb: "Secure, cost-aware patterns for warehouses, lakes, and compute."
      },
      biEnablement: {
        title: "BI Enablement",
        blurb: "Self-serve dashboards in Power BI & Metabase with semantic layers."
      }
    },

    // Contact section
    contact: {
      title: "Let's build something",
      subtitle: "Tell me about your data challenges and goals. I'll reply promptly with ideas and next steps.",
      form: {
        title: "Contact form",
        name: "Your name",
        email: "Your email", 
        message: "What would you like to achieve?",
        send: "Send",
        submissionNote: "After submitting, you will be redirected to a confirmation page."
      }
    },

    // Footer
    footer: {
      rights: "All rights reserved.",
      top: "Top"
    },

    // Language switcher
    language: "Language"
  },

  de: {
    // Navigation
    nav: {
      work: "Arbeit",
      services: "Leistungen",
      about: "Über mich", 
      contact: "Kontakt",
      letsTalk: "Let's talk"
    },

    // Hero section
    hero: {
      role: "Datenexperte",
      location: "Berlin",
      yearsExperience: "10+ Jahre",
      title: "Schlanke Datensysteme für messbaren Geschäftserfolg.",
      tagline: "Von Daten zu Entscheidungen — Wirkung schaffen, mit Ihnen",
      cta: "Gemeinsam wachsen",
      quickFacts: {
        dataModeling: "Datenmodellierung & DWH",
        orchestration: "Orchestrierung & CI/CD",
        cloudNative: "Cloud-nativ & Kostenbewusst"
      }
    },

    // About section
    about: {
      title: "Über mich",
      description1: "Ich bin Lasse, ein Datenexperte aus Berlin. Ich baue minimale, kosteneffiziente und leicht wartbare Datensysteme, die mit Ihrem Unternehmen wachsen. Mein Ansatz konzentriert sich darauf, Teams dabei zu helfen, schneller Entscheidungen zu treffen, mit zuverlässigen, pragmatischen Lösungen.",
      description2: "Meine Branchenkenntniss umfasst Telekommunikation, Versicherungen und produktorientierte Startups — was mir tiefe Einblicke in verschiedene Datenherausforderungen gibt. Ich bin spezialisiert auf dbt-Modellierung, moderne Orchestrierung und Datenaktivierung, die tatsächlich in der Produktion funktioniert.",
      skills: "Fähigkeiten",
      skillsList: skillsDe,
      keyHighlights: "Wichtige Highlights",
      highlights: [
        "10+ Jahre Erfahrung beim Aufbau von Datensystemen in Telekommunikation, Versicherungen, Startups und Unternehmen",
        "Analytics Engineering-Transformationen mit dbt und modernen Datenstacks geleitet",
        "CI/CD für Daten-Teams mit Docker und GitLab-Automatisierung implementiert",
        "Self-Service-Analysen mit Power BI und Metabase-Dashboards ermöglicht",
        "Teams zu Datenqualität, Beobachtbarkeit und bewährten Praktiken geschult",
        "Lieferung mit modernsten KI-Tools für Codegenerierung und Optimierung beschleunigt"
      ]
    },

    // Work section
    work: {
      title: "Ausgewählte Arbeiten",
      subtitle: "Repräsentative Projekte",
      projects: [
        {
          title: "Data Platform: dbt + BigQuery",
          titleDe: "Datenplattform: dbt + BigQuery",
          tags: ["dbt", "BigQuery", "Modellierung"],
          tagsDe: ["dbt", "BigQuery", "Modellierung"],
          summary: "Entwicklung einer umfassenden Datenbasis für Versicherungsbetriebe, die komplexe Geschäftsregeln handhabt, Erkenntnisse aus unstrukturierten Daten extrahiert und Leistungsmetriken verfolgt, um zuverlässige Berichterstattung und Entscheidungsfindung zu gewährleisten.",
          summaryDe: "Entwicklung einer umfassenden Datenbasis für Versicherungsbetriebe, die komplexe Geschäftsregeln handhabt, Erkenntnisse aus unstrukturierten Daten extrahiert und Leistungsmetriken verfolgt, um zuverlässige Berichterstattung und Entscheidungsfindung zu gewährleisten."
        },
        {
          title: "Datenorchestrierung & CI/CD",
          titleDe: "Datenorchestrierung & CI/CD",
          tags: ["Datenorchestrierung", "Docker", "GitLab"],
          tagsDe: ["Datenorchestrierung", "Docker", "GitLab"],
          summary: "Automatisierte Verwaltung von Datenpipelines mit kontinuierlicher Integration und Bereitstellung in Entwicklungs- und Produktionsumgebungen, einschließlich Echtzeitüberwachung und Benachrichtigungen.",
          summaryDe: "Automatisierte Verwaltung von Datenpipelines mit kontinuierlicher Integration und Bereitstellung in Entwicklungs- und Produktionsumgebungen, einschließlich Echtzeitüberwachung und Benachrichtigungen."
        },
        {
          title: "Ticket-System API-Integration",
          titleDe: "Ticket-System API-Integration",
          tags: ["Ingestion", "APIs", "Datenqualität"],
          tagsDe: ["Ingestion", "APIs", "Datenqualität"],
          summary: "Entwicklung und Implementierung einer umfassenden Datenintegrationslösung für Kundensupportsysteme, einschließlich API-Entwicklung, automatisierter Datenerfassung und Qualitätssicherungsprozessen.",
          summaryDe: "Entwicklung und Implementierung einer umfassenden Datenintegrationslösung für Kundensupportsysteme, einschließlich API-Entwicklung, automatisierter Datenerfassung und Qualitätssicherungsprozessen."
        }
      ]
    },

    // Services section
    services: {
      title: "Was ich tue",
      subtitle: "Praktisch, ergebnisorientiert",
      modernDataStack: {
        title: "Moderner Datenstack",
        blurb: "Entwerfen pragmatischer, skalierbarer Datenplattformen auf GCP/AWS/Databricks."
      },
      analyticsEngineering: {
        title: "Analytics Engineering",
        blurb: "Geschäftslogik mit dbt modellieren, Qualität durchsetzen und vertrauenswürdige Metriken liefern."
      },
      orchestration: {
        title: "Orchestrierung & Betrieb",
        blurb: "Datenpipeline-Orchestrierung, Beobachtbarkeit und zuverlässige Bereitstellungen."
      },
      cicd: {
        title: "CI/CD für Daten",
        blurb: "GitLab-Pipelines für Tests, Image-Builds und Umgebungsförderung."
      },
      cloudArchitecture: {
        title: "Cloud-Architektur",
        blurb: "Sichere, kostenbewusste Muster für Data Warehouses, Data Lakes und Computing."
      },
      biEnablement: {
        title: "BI-Aktivierung",
        blurb: "Self-Service-Dashboards in Power BI & Metabase mit semantischen Ebenen."
      }
    },

    // Contact section
    contact: {
      title: "Lassen Sie uns etwas aufbauen",
      subtitle: "Erzählen Sie mir von Ihren Datenherausforderungen und Zielen. Ich antworte umgehend mit Ideen und nächsten Schritten.",
      form: {
        title: "Kontaktformular",
        name: "Ihr Name",
        email: "Ihre E-Mail",
        message: "Was möchten Sie erreichen?",
        send: "Senden",
        submissionNote: "Nach dem Absenden werden Sie auf eine Bestätigungsseite weitergeleitet."
      }
    },

    // Footer
    footer: {
      rights: "Alle Rechte vorbehalten.",
      top: "Nach oben"
    },

    // Language switcher
    language: "Sprache"
  }
};

export const getTranslation = (lang, key) => {
  const keys = key.split('.');
  let value = translations[lang] || translations.en;
  
  for (const k of keys) {
    if (value && value[k] !== undefined) {
      value = value[k];
    } else {
      // Fallback to English
      value = translations.en;
      for (const fallbackKey of keys) {
        if (value && value[fallbackKey] !== undefined) {
          value = value[fallbackKey];
        } else {
          return key; // Return key if translation not found
        }
      }
    }
  }
  
  return value;
};
