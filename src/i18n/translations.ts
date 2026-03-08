export const languages = {
  en: 'English',
  nl: 'Nederlands',
} as const;

export type Lang = keyof typeof languages;

export const translations = {
  en: {
    // Meta
    siteTitle: 'Nero',
    siteDescription: 'The AI operations platform that runs your team like a seasoned ops manager.',

    // Nav
    navFeatures: 'Features',
    navPricing: 'Pricing',
    navSignIn: 'Sign in',
    navGetStarted: 'Get started',

    // Hero
    heroBadge: 'AI-powered operations',
    heroTitle: 'Your AI',
    heroTitleAccent: 'ops manager.',
    heroSubtitle: 'Nero learns your procedures, triages incoming work, and keeps your team on track — like an ops manager that never sleeps.',
    heroCta: 'Start for free',
    heroCtaSecondary: 'See how it works',

    // Social proof
    socialProofTitle: 'Trusted by teams who ship',

    // Features
    featuresLabel: 'Platform',
    featuresTitle: 'One system to run your operations',
    featuresSubtitle: 'Tasks, inbox, knowledge, and relationships — all managed by AI that understands your business.',

    featureInboxTitle: 'AI-Powered Inbox',
    featureInboxDesc: 'Every channel flows into one inbox. AI triages, prioritizes, and drafts replies based on your procedures.',
    featureTasksTitle: 'Intelligent Task Ops',
    featureTasksDesc: 'AI suggests priorities, assigns work, and breaks down projects. Sprints, kanban, and standups built in.',
    featureContactsTitle: 'Relationships & Deals',
    featureContactsDesc: 'Track contacts, companies, and deals. AI surfaces context from your knowledge base for every interaction.',
    featureAiTitle: 'AI That Knows Your Business',
    featureAiDesc: 'Trained on your procedures and knowledge base. It triages work, suggests actions, and briefs your team daily.',
    featureKnowledgeTitle: 'Operational Knowledge Base',
    featureKnowledgeDesc: 'Your procedures, playbooks, and documentation — searchable and used by AI to make smarter decisions.',
    featureWorkspaceTitle: 'Multi-Organization',
    featureWorkspaceDesc: 'Run multiple organizations from one account. Fully isolated data, instant switching.',

    // How it works
    howItWorksLabel: 'How it works',
    howItWorksTitle: 'From chaos to clarity in minutes',
    howItWorksSubtitle: 'No consultants. No months of setup. Nero learns as you work.',
    howStep1Title: 'Set up your workspace',
    howStep1Desc: 'Create your organization, invite your team, and connect your email and channels.',
    howStep2Title: 'Feed it your knowledge',
    howStep2Desc: 'Add your procedures, playbooks, and SLAs. Nero uses this to triage work and make decisions.',
    howStep3Title: 'Let Nero operate',
    howStep3Desc: 'Incoming work gets triaged automatically. Tasks are prioritized. Your team gets a daily AI briefing with what to focus on.',

    // CTA
    ctaTitle: 'Stop managing operations manually.',
    ctaSubtitle: 'Let Nero handle the triage, prioritization, and coordination — so your team can focus on the work that matters.',
    ctaCta: 'Get started for free',

    // Footer
    footerProduct: 'Product',
    footerCompany: 'Company',
    footerLegal: 'Legal',
    footerFeatures: 'Features',
    footerPricing: 'Pricing',
    footerChangelog: 'Changelog',
    footerAbout: 'About',
    footerBlog: 'Blog',
    footerCareers: 'Careers',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms of Service',
    footerCopyright: 'All rights reserved.',

    // Workspaces
    workspacesTitle: 'Welcome back',
    workspacesSubtitle: 'Choose a workspace to get started.',
    workspacesYourWorkspaces: 'Your workspaces',
    workspacesCreate: 'Create a new workspace',
    workspacesDifferentAccount: 'Sign in with a different account',
  },
  nl: {
    // Meta
    siteTitle: 'Nero',
    siteDescription: 'Het AI-operationsplatform dat je team runt als een ervaren ops manager.',

    // Nav
    navFeatures: 'Functies',
    navPricing: 'Prijzen',
    navSignIn: 'Inloggen',
    navGetStarted: 'Aan de slag',

    // Hero
    heroBadge: 'AI-gedreven operations',
    heroTitle: 'Je AI',
    heroTitleAccent: 'ops manager.',
    heroSubtitle: 'Nero leert je procedures, triageert inkomend werk en houdt je team op koers — als een ops manager die nooit slaapt.',
    heroCta: 'Start gratis',
    heroCtaSecondary: 'Bekijk hoe het werkt',

    // Social proof
    socialProofTitle: 'Vertrouwd door teams die leveren',

    // Features
    featuresLabel: 'Platform',
    featuresTitle: 'Een systeem voor al je operations',
    featuresSubtitle: 'Taken, inbox, kennis en relaties — allemaal beheerd door AI die je bedrijf begrijpt.',

    featureInboxTitle: 'AI-Gedreven Inbox',
    featureInboxDesc: 'Elk kanaal komt samen in een inbox. AI triageert, prioriteert en stelt antwoorden op op basis van je procedures.',
    featureTasksTitle: 'Intelligente Task Ops',
    featureTasksDesc: 'AI stelt prioriteiten voor, wijst werk toe en breekt projecten op. Sprints, kanban en standups ingebouwd.',
    featureContactsTitle: 'Relaties & Deals',
    featureContactsDesc: 'Volg contacten, bedrijven en deals. AI haalt context uit je kennisbank bij elke interactie.',
    featureAiTitle: 'AI Die Je Bedrijf Kent',
    featureAiDesc: 'Getraind op je procedures en kennisbank. Triageert werk, stelt acties voor en brieft je team dagelijks.',
    featureKnowledgeTitle: 'Operationele Kennisbank',
    featureKnowledgeDesc: 'Je procedures, playbooks en documentatie — doorzoekbaar en gebruikt door AI voor slimmere beslissingen.',
    featureWorkspaceTitle: 'Multi-Organisatie',
    featureWorkspaceDesc: 'Beheer meerdere organisaties vanuit een account. Volledig gescheiden data, direct schakelen.',

    // How it works
    howItWorksLabel: 'Hoe het werkt',
    howItWorksTitle: 'Van chaos naar duidelijkheid in minuten',
    howItWorksSubtitle: 'Geen consultants. Geen maanden setup. Nero leert terwijl je werkt.',
    howStep1Title: 'Stel je workspace in',
    howStep1Desc: 'Maak je organisatie, nodig je team uit en koppel je e-mail en kanalen.',
    howStep2Title: 'Voed het met je kennis',
    howStep2Desc: 'Voeg je procedures, playbooks en SLA\'s toe. Nero gebruikt dit om werk te triageren en beslissingen te nemen.',
    howStep3Title: 'Laat Nero opereren',
    howStep3Desc: 'Inkomend werk wordt automatisch getriageerd. Taken worden geprioriteerd. Je team krijgt een dagelijkse AI-briefing.',

    // CTA
    ctaTitle: 'Stop met handmatig operations managen.',
    ctaSubtitle: 'Laat Nero de triage, prioritering en coordinatie afhandelen — zodat je team zich kan richten op werk dat ertoe doet.',
    ctaCta: 'Start gratis',

    // Footer
    footerProduct: 'Product',
    footerCompany: 'Bedrijf',
    footerLegal: 'Juridisch',
    footerFeatures: 'Functies',
    footerPricing: 'Prijzen',
    footerChangelog: 'Changelog',
    footerAbout: 'Over ons',
    footerBlog: 'Blog',
    footerCareers: 'Vacatures',
    footerPrivacy: 'Privacybeleid',
    footerTerms: 'Algemene voorwaarden',
    footerCopyright: 'Alle rechten voorbehouden.',

    // Workspaces
    workspacesTitle: 'Welkom terug',
    workspacesSubtitle: 'Kies een workspace om te beginnen.',
    workspacesYourWorkspaces: 'Jouw workspaces',
    workspacesCreate: 'Nieuwe workspace aanmaken',
    workspacesDifferentAccount: 'Inloggen met een ander account',
  },
} as const;
