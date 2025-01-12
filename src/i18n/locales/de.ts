import { projects2to5 } from './projectTranslations/de/projects2-5';
import { projects6to10 } from './projectTranslations/de/projects6-10';

export default {
  translation: {
    hero: {
      titles: [
        "ein KI/ML-Ingenieur",
        "ein LLM-Experte",
        "ein Full-Stack-Entwickler"
      ],
      role: "Senior KI/ML-Ingenieur",
      skills: {
        ai: "KI-Expertise: Large Language Models | RAG-Systeme | Neuronale Netze | Computer Vision | NLP",
        blockchain: "KI-Infrastruktur: AWS SageMaker | Google Cloud AI | Azure ML | PyTorch | TensorFlow",
        fullstack: "Entwicklung: Python | TypeScript | React | FastAPI | Django | Node.js",
        uiux: "KI-Tools: LangChain | Pinecone | OpenAI | Anthropic | Together AI",
        tools: "MLOps: Docker | Kubernetes | MLflow | DVC | Weights & Biases",
        projects: "Aktuelle Projekte: KI-Chatbot-Plattform | Sprachassistent | Roman-KI | Bildsuche",
        industries: "Branchen: Enterprise KI | Gesundheitswesen | EdTech | Forschung | Startups",
        focus: "Fokus: Entwicklung skalierbarer KI-Lösungen und innovativer ML-Anwendungen"
      }
    },
    nav: {
      about: "Über mich",
      experience: "Berufserfahrung",
      projects: "Projekte",
      testimonials: "Referenzen",
      contact: "Kontakt"
    },
    workExperience: {
      title: "Berufserfahrung",
      roles: {
        lead: "Leitender Entwickler",
        senior: "Senior Entwickler",
        technical: "Technischer Leiter",
        fullstack: "Full-Stack Entwickler"
      }
    },
    testimonials: {
      title: "Kundenbewertungen",
      projectTitle: "Projekt",
      country: "Land",
      platform: "Plattform",
      feedback: {
        1: "Hervorragende Arbeit am Company Culture Analysis Projekt. Die Datenvisualisierung und Erkenntnisse waren genau das, was wir brauchten.",
        2: "Die KI-Chatbot-Implementierung übertraf unsere Erwartungen. Sehr professioneller und gründlicher Ansatz.",
        3: "Ausgezeichnete Arbeit an unserer Bildsuche. Die Integration mit der Google Search API war nahtlos.",
        4: "Die Ollabot-Plattform hat unseren Kundenservice transformiert. Sehr zu empfehlen!",
        5: "Jsonscout war ein Game-Changer für unsere Datentransformationsanforderungen. Exzellente Implementierung.",
        6: "Der Dokumenteneditor ist intuitiv und leistungsstark. Große Liebe zum Detail.",
        7: "Die Implementierung des Sprachassistenten war makellos. Sehr beeindruckt von den natürlichen Interaktionen.",
        8: "Novmuser KI hat unseren Schreibprozess revolutioniert. Die KI-Integration ist nahtlos.",
        9: "Die Presale-Launchpad übertraf unsere Erwartungen. Sehr professionelle Umsetzung.",
        10: "Die Integer-Transformationslösung war genau das, was wir brauchten. Ausgezeichnete Optimierung.",
        11: "Die für Autheo entwickelten Smart Contracts waren sicher und effizient. Großartige Arbeit!",
        12: "Projekt Athena hat unsere Web3-Sicherheit deutlich verbessert. Hervorragende Implementierung.",
        13: "Die Chrome-Erweiterung funktioniert perfekt für unsere Immobiliendatenanforderungen. Sehr zufrieden."
      }
    },
    projects: {
      title: "Ausgewählte Projekte",
      1: {
        title: "Unternehmenskultur-Analyse",
        description: "Datengesteuerte Analyseplattform für Unternehmenskultur-Metriken",
        details: [
          "Entwicklung einer umfassenden Datenanalyseplattform zur Messung und Verbesserung der Unternehmenskultur durch Echtzeit-Metriken und Erkenntnisse.",
          "Implementierung interaktiver Dashboards mit React und Recharts zur Visualisierung von KPIs, Mitarbeiterzufriedenheit und Team-Engagement.",
          "Integration von Machine-Learning-Algorithmen zur Identifizierung von Trends und Mustern in Unternehmenskultur-Daten.",
          "Aufbau eines robusten Backend-Systems zur Verarbeitung großer Datensätze aus verschiedenen Quellen."
        ]
      },
      ...projects2to5,
      ...projects6to10,
      11: {
        title: "Projekt Athena - Web3-Sicherheitsplattform",
        description: "Fortschrittliche Sicherheitsplattform zum Schutz von Nutzern im Web3-Ökosystem",
        details: [
          "Entwicklung einer umfassenden Web3-Sicherheitsplattform zum Schutz der Nutzer vor Identitätsbetrug, Phishing und Wallet-Diebstahl.",
          "Implementierung von Sicherheitsprüfungen für Smart Contracts mit Tools wie Slither und Mythril.",
          "Entwicklung und Integration von Wallet-Verbindungsfunktionen für sichere Nutzer-Authentifizierung.",
          "Erstellung eines Echtzeit-Transaktionsüberwachungssystems zur Erkennung verdächtiger Aktivitäten.",
          "Implementierung dezentraler Identitätslösungen zur Verbesserung der Privatsphäre und Sicherheit der Nutzer.",
          "Gestaltung einer benutzerfreundlichen Oberfläche zur Anzeige von Sicherheitswarnungen und Risikobewertungen.",
          "Integration von Blockchain-Forensik-Tools zur Verfolgung und Analyse potenziell schädlicher Transaktionen.",
          "Technologien: Solidity, Web3.js, Smart Contract Auditing, Blockchain-Sicherheit, React, Node.js, Ethereum-Entwicklung"
        ]
      },
      12: {
        title: "StarC-Projekt - Solartechnologie-Ressourcenzentren",
        description: "Website für das internationale Netzwerk der Solartechnologie- und Anwendungsressourcenzentren",
        details: [
          "Entwicklung einer umfassenden Website für das internationale Netzwerk der Solartechnologie- und Anwendungsressourcenzentren (STAR-C).",
          "Implementierung von benutzerdefinierten WordPress-Themes und Plugin-Modifikationen.",
          "Integration von SEO-Optimierung und Google Maps für Ressourcenzentren-Standorte.",
          "Entwicklung eines Dokumentenmanagementsystems und Veranstaltungskalenders.",
          "Fokus auf den Aufbau eines starken Kapazitätsnetzwerks für LDCs und SIDS.",
          "Projektzeitraum: 13.-20.8.2023, Website erreichbar unter starc-project.org",
          "Verwendete Technologien: WordPress, PHP, JavaScript, CSS, Google Maps API, SEO-Tools"
        ]
      },
      13: {
        title: "Creek Waters - Landing Page für Immobilien",
        description: "Entwicklung einer Landing Page für Immobilien",
        details: [
          "Erstellung einer ansprechenden Landing Page für AX Capital, die ihre Luxusimmobilien hervorhebt.",
          "Entwicklung einer responsiven und benutzerfreundlichen Oberfläche für ein optimales Nutzungserlebnis.",
          "Implementierung einer E-Mail-Zustellfunktion für Anfragen zu Immobilien.",
          "Integration von Echtzeitdaten über APIs, um den Besuchern die neuesten Immobilieninformationen bereitzustellen.",
          "Optimierung der Website für Suchmaschinen zur Verbesserung der Sichtbarkeit und des organischen Traffics.",
          "Projektzeitraum: 2023.5, Website erreichbar unter sales-inquiries.ae/axcapital/creek-waters",
          "Verwendete Technologien: React.js, Tailwind CSS, E-Mail-Integration, SEO-Optimierung"
        ]
      },
      14: {
        title: "Projekt Athena - Web3-Sicherheitsplattform",
        description: "Fortschrittliche Sicherheitsplattform zum Schutz von Nutzern im Web3-Ökosystem",
        details: [
          "Entwicklung einer umfassenden Web3-Sicherheitsplattform zum Schutz der Nutzer vor Identitätsbetrug, Phishing und Wallet-Diebstahl.",
          "Implementierung von Sicherheitsprüfungen für Smart Contracts mit Tools wie Slither und Mythril.",
          "Entwicklung und Integration von Wallet-Verbindungsfunktionen für sichere Nutzer-Authentifizierung.",
          "Erstellung eines Echtzeit-Transaktionsüberwachungssystems zur Erkennung verdächtiger Aktivitäten.",
          "Implementierung dezentraler Identitätslösungen zur Verbesserung der Privatsphäre und Sicherheit der Nutzer.",
          "Gestaltung einer benutzerfreundlichen Oberfläche zur Anzeige von Sicherheitswarnungen und Risikobewertungen.",
          "Integration von Blockchain-Forensik-Tools zur Verfolgung und Analyse potenziell schädlicher Transaktionen.",
          "Technologien: Solidity, Web3.js, Smart Contract Auditing, Blockchain-Sicherheit, React, Node.js, Ethereum-Entwicklung"
        ]
      },
      15: {
        title: "Autheo - Next-Gen Social Media Platform",
        description: "Blockchain-basierte Plattform für Kreatoren mit dezentralem Eigentum",
        details: [
          "Entwicklung und Implementierung von Smart Contracts zur Tokenisierung von Inhalten von Kreatoren.",
          "Entwicklung von Belohnungsmechanismen zur Förderung des Nutzerengagements.",
          "Implementierung sicherer Wallet-Integration für nahtlose Token-Transaktionen.",
          "Erstellung von Smart Contracts für On-Chain-Governance.",
          "Optimierung der Gasnutzung in Smart Contracts zur Reduzierung der Transaktionskosten.",
          "Durchführung gründlicher Sicherheitsprüfungen und Tests von Smart Contracts.",
          "Technologien: Solidity, Ethereum-Entwicklung, Smart Contract Auditing, Web3.js, Blockchain-Architektur, DeFi, Gas-Optimierung"
        ]
      }
    }
  }
};
