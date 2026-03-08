export const languages = {
  en: 'English',
  nl: 'Nederlands',
} as const;

export type Lang = keyof typeof languages;

export const translations = {
  en: {
    // Meta
    siteTitle: 'Nero',
    siteDescription: 'The modern CRM for teams that move fast.',

    // Nav
    navFeatures: 'Features',
    navPricing: 'Pricing',
    navSignIn: 'Sign in',
    navGetStarted: 'Get started',

    // Hero
    heroBadge: 'Now with AI-powered triage',
    heroTitle: 'Your team\'s CRM,',
    heroTitleAccent: 'finally simple.',
    heroSubtitle: 'Tasks, contacts, deals, and inbox — all in one place. Built for teams that want to move fast without the bloat.',
    heroCta: 'Start for free',
    heroCtaSecondary: 'See how it works',

    // Social proof
    socialProofTitle: 'Trusted by teams who ship',

    // Features
    featuresLabel: 'Features',
    featuresTitle: 'Everything your team needs',
    featuresSubtitle: 'No more juggling between five different tools. Nero brings it all together.',

    featureInboxTitle: 'Smart Inbox',
    featureInboxDesc: 'All your emails, tasks, and notifications unified. AI triages and prioritizes what matters most.',
    featureTasksTitle: 'Task Management',
    featureTasksDesc: 'Sprints, kanban, and list views. Assign, track, and close tasks with your team in real-time.',
    featureContactsTitle: 'CRM & Contacts',
    featureContactsDesc: 'Full contact and company management with deal tracking, activity history, and smart associations.',
    featureAiTitle: 'AI Triage',
    featureAiDesc: 'Let AI analyze incoming work, suggest priorities, and draft replies — so you can focus on what matters.',
    featureKnowledgeTitle: 'Knowledge Base',
    featureKnowledgeDesc: 'Build and share articles with your team. Searchable, organized, and always up to date.',
    featureWorkspaceTitle: 'Multi-Workspace',
    featureWorkspaceDesc: 'Manage multiple organizations from one account. Switch instantly, keep data fully isolated.',

    // How it works
    howItWorksLabel: 'How it works',
    howItWorksTitle: 'Up and running in minutes',
    howItWorksSubtitle: 'No complex setup. No consultants. Just sign up and start working.',
    howStep1Title: 'Create your workspace',
    howStep1Desc: 'Sign up, name your organization, and invite your team — all in under two minutes.',
    howStep2Title: 'Connect your tools',
    howStep2Desc: 'Import contacts, connect your email, and let AI categorize your existing data.',
    howStep3Title: 'Start shipping',
    howStep3Desc: 'Manage tasks, close deals, and collaborate — everything your team needs in one place.',

    // CTA
    ctaTitle: 'Ready to simplify your workflow?',
    ctaSubtitle: 'Join teams who switched from scattered tools to one streamlined platform.',
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
    siteDescription: 'Het moderne CRM voor teams die snel werken.',

    // Nav
    navFeatures: 'Functies',
    navPricing: 'Prijzen',
    navSignIn: 'Inloggen',
    navGetStarted: 'Aan de slag',

    // Hero
    heroBadge: 'Nu met AI-gestuurde triage',
    heroTitle: 'Het CRM van je team,',
    heroTitleAccent: 'eindelijk simpel.',
    heroSubtitle: 'Taken, contacten, deals en inbox — alles op een plek. Gebouwd voor teams die snel willen werken zonder rommel.',
    heroCta: 'Start gratis',
    heroCtaSecondary: 'Bekijk hoe het werkt',

    // Social proof
    socialProofTitle: 'Vertrouwd door teams die leveren',

    // Features
    featuresLabel: 'Functies',
    featuresTitle: 'Alles wat je team nodig heeft',
    featuresSubtitle: 'Stop met jongleren tussen vijf tools. Nero brengt het samen.',

    featureInboxTitle: 'Slimme Inbox',
    featureInboxDesc: 'Al je e-mails, taken en meldingen op een plek. AI triageert en prioriteert wat belangrijk is.',
    featureTasksTitle: 'Taakbeheer',
    featureTasksDesc: 'Sprints, kanban en lijstweergaven. Wijs toe, volg en sluit taken af met je team in real-time.',
    featureContactsTitle: 'CRM & Contacten',
    featureContactsDesc: 'Volledig contact- en bedrijfsbeheer met dealtracking, activiteitenhistorie en slimme koppelingen.',
    featureAiTitle: 'AI Triage',
    featureAiDesc: 'Laat AI inkomend werk analyseren, prioriteiten voorstellen en antwoorden opstellen.',
    featureKnowledgeTitle: 'Kennisbank',
    featureKnowledgeDesc: 'Bouw en deel artikelen met je team. Doorzoekbaar, georganiseerd en altijd up-to-date.',
    featureWorkspaceTitle: 'Multi-Workspace',
    featureWorkspaceDesc: 'Beheer meerdere organisaties vanuit een account. Schakel direct, data volledig gescheiden.',

    // How it works
    howItWorksLabel: 'Hoe het werkt',
    howItWorksTitle: 'Binnen minuten operationeel',
    howItWorksSubtitle: 'Geen complexe setup. Geen consultants. Aanmelden en aan de slag.',
    howStep1Title: 'Maak je workspace',
    howStep1Desc: 'Meld je aan, geef je organisatie een naam en nodig je team uit — in minder dan twee minuten.',
    howStep2Title: 'Verbind je tools',
    howStep2Desc: 'Importeer contacten, koppel je e-mail en laat AI je bestaande data categoriseren.',
    howStep3Title: 'Begin met werken',
    howStep3Desc: 'Beheer taken, sluit deals en werk samen — alles wat je team nodig heeft op een plek.',

    // CTA
    ctaTitle: 'Klaar om je workflow te vereenvoudigen?',
    ctaSubtitle: 'Sluit je aan bij teams die van losse tools naar een gestroomlijnd platform zijn overgestapt.',
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
