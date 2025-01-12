import { projects2to5 } from './projectTranslations/fr/projects2-5';
import { projects6to10 } from './projectTranslations/fr/projects6-10';

export default {
  translation: {
    hero: {
      titles: [
        "un Ingénieur IA/ML",
        "un Expert LLM",
        "un Développeur Full Stack"
      ],
      role: "Ingénieur Senior IA/ML",
      skills: {
        ai: "Expertise IA : Grands Modèles de Langage | Systèmes RAG | Réseaux Neuronaux | Vision par Ordinateur | TAL",
        blockchain: "Infrastructure IA : AWS SageMaker | Google Cloud AI | Azure ML | PyTorch | TensorFlow",
        fullstack: "Développement : Python | TypeScript | React | FastAPI | Django | Node.js",
        uiux: "Outils IA : LangChain | Pinecone | OpenAI | Anthropic | Together AI",
        tools: "MLOps : Docker | Kubernetes | MLflow | DVC | Weights & Biases",
        projects: "Projets Récents : Plateforme Chatbot IA | Assistant Vocal | IA Rédaction Roman | Moteur Recherche Image",
        industries: "Industries : IA Entreprise | Santé | EdTech | Recherche | Startups",
        focus: "Focus : Développement de solutions IA évolutives et applications ML innovantes"
      }
    },
    nav: {
      about: "À propos",
      experience: "Expérience",
      projects: "Projets",
      testimonials: "Témoignages",
      contact: "Contact"
    },
    workExperience: {
      title: "Expérience Professionnelle",
      roles: {
        lead: "Développeur Principal",
        senior: "Développeur Senior",
        technical: "Responsable Technique",
        fullstack: "Développeur Full Stack"
      }
    },
    testimonials: {
      title: "Témoignages Clients",
      projectTitle: "Projet",
      country: "Pays",
      platform: "Plateforme",
      feedback: {
        1: "Excellent travail sur le projet d'Analyse de Culture d'Entreprise. La visualisation des données et les insights fournis étaient exactement ce dont nous avions besoin.",
        2: "L'implémentation du chatbot IA a dépassé nos attentes. Une approche très professionnelle et approfondie.",
        3: "Excellent travail sur notre moteur de recherche d'images. L'intégration avec l'API Google Search était parfaite.",
        4: "La plateforme Ollabot a transformé notre service client. Fortement recommandé !",
        5: "Jsonscout a révolutionné nos besoins en transformation de données. Excellente implémentation.",
        6: "L'éditeur de documents est intuitif et puissant. Grande attention aux détails.",
        7: "L'implémentation de l'assistant vocal était impeccable. Très impressionné par les interactions naturelles.",
        8: "Novmuser IA a révolutionné notre processus d'écriture. L'intégration de l'IA est parfaite.",
        9: "La plateforme de prévente a dépassé nos attentes. Implémentation très professionnelle.",
        10: "La solution de transformation d'entiers était exactement ce dont nous avions besoin. Excellente optimisation.",
        11: "Les smart contracts développés pour Autheo étaient sécurisés et efficaces. Excellent travail !",
        12: "Le Projet Athena a considérablement amélioré notre sécurité Web3. Implémentation remarquable.",
        13: "L'extension Chrome fonctionne parfaitement pour nos besoins en données immobilières. Très satisfait."
      }
    },
    projects: {
      title: "Projets Vedettes",
      1: {
        title: "Analyse de la Culture d'Entreprise",
        description: "Plateforme d'analyse basée sur les données pour les métriques de culture d'entreprise",
        details: [
          "Développement d'une plateforme complète d'analyse de données axée sur la mesure et l'amélioration de la culture d'entreprise.",
          "Mise en œuvre de tableaux de bord interactifs utilisant React et Recharts pour visualiser les KPI.",
          "Intégration d'algorithmes d'apprentissage automatique pour identifier les tendances.",
          "Construction d'un système backend robuste pour le traitement de grands ensembles de données."
        ]
      },
      ...projects2to5,
      ...projects6to10,
      11: {
        title: "Projet Athena - Plateforme de Sécurité Web3",
        description: "Plateforme de sécurité avancée pour protéger les utilisateurs dans l'écosystème Web3",
        details: [
          "Développement d'une plateforme de sécurité Web3 complète axée sur la protection des utilisateurs contre les escroqueries.",
          "Implémentation d'audits de sécurité des contrats intelligents.",
          "Développement et intégration de la fonctionnalité de connexion de portefeuille.",
          "Création d'un système de surveillance des transactions en temps réel.",
          "Implémentation de solutions d'identité décentralisées."
        ]
      },
      12: {
        title: "StarC-Project - Centres de Ressources en Technologie Solaire",
        description: "Site Web pour le Réseau International des Centres de Ressources en Technologie Solaire",
        details: [
          "Développement d'un site Web complet pour le Réseau International des Centres de Ressources en Technologie Solaire (STAR-C).",
          "Mise en œuvre de thèmes WordPress personnalisés et de modifications de plugins.",
          "Intégration de l'optimisation SEO et de Google Maps pour les emplacements des centres de ressources.",
          "Création d'un système de gestion de documents et d'un calendrier d'événements.",
          "Focalisation sur la création d'un réseau de capacités solide pour les PMA et les SIDS."
        ]
      },
      13: {
        title: "Creek Waters - Page d'Atterrissage pour l'Immobilier",
        description: "Développement d'une page d'atterrissage pour l'immobilier",
        details: [
          "Création d'une page d'atterrissage attrayante pour AX Capital, mettant en avant leurs propriétés de luxe.",
          "Développement d'une interface réactive et conviviale pour une expérience utilisateur optimale.",
          "Mise en œuvre d'une fonctionnalité d'envoi d'e-mails pour les demandes de renseignements sur les propriétés.",
          "Intégration de données en temps réel via des API pour fournir aux visiteurs les dernières informations sur les propriétés.",
          "Optimisation du site Web pour les moteurs de recherche afin d'améliorer la visibilité et le trafic organique."
        ]
      },
      14: {
        title: "Giant Integer Transformer avec Python",
        description: "Transformation de grands nombres avec Python",
        details: [
          "Développement d'une solution Python pour les grands entiers.",
          "Implémentation d'algorithmes efficaces.",
          "Création d'un système avec des contraintes spécifiques.",
          "Utilisation de la bibliothèque mpmath.",
          "Implémentation d'opérations binaires."
        ]
      },
      15: {
        title: "Autheo - Plateforme de Médias Sociaux de Nouvelle Génération",
        description: "Plateforme basée sur la blockchain pour les créateurs avec propriété décentralisée",
        details: [
          "Conception et mise en œuvre de contrats intelligents pour la tokenisation du contenu des créateurs.",
          "Développement de mécanismes de récompense utilisant Solidity.",
          "Implémentation d'une intégration sécurisée des portefeuilles.",
          "Création de contrats intelligents pour la gouvernance sur chaîne.",
          "Optimisation de l'utilisation du gaz dans les contrats intelligents."
        ]
      }
    }
  }
};
