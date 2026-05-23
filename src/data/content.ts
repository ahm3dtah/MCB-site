export const languages = ['fr', 'en', 'ar'] as const;
export type Lang = (typeof languages)[number];

export const defaultLang: Lang = 'fr';

export const siteContent = {
  fr: {
    localeName: 'FR',
    direction: 'ltr',
    siteTitle: 'MCB Ingénieries',
    tagline: 'Architecture, urbanisme et stratégie territoriale',
    metaDescription:
      'MCB est un bureau d'architecture et d'ingénierie basé à Nouakchott, fondé en 1996 par Menih Ould Tah.',
    nav: {
      studio: 'Studio',
      projects: 'Projets',
      chronology: 'Chronologie',
      journal: 'Journal',
      contact: 'Contact'
    },
    hero: {
      kicker: 'MCB Ingénieries',
      subtitle: 'Architecture, urbanisme et stratégie territoriale',
      titleLines: [
        'Concevoir aujourd'hui',
        'les territoires de demain',
        'en Mauritanie.'
      ],
      paragraph:
        'Depuis 1996, MCB accompagne la transformation du cadre bâti mauritanien à travers l'architecture, l'urbanisme et la coordination de projets institutionnels et privés. Le bureau se [...]
    },
    studio: {
      eyebrow: 'Studio',
      introTitle: 'Une continuité institutionnelle, une pratique de terrain.',
      paragraphs: [
        'Fondé en 1996 par Menih Ould Tah, Architecte ITAAUT, puis structuré en société en 1998, MCB accompagne depuis près de trois décennies des projets qui ont compté dans la fabrication[...]
        'De l'urbanisme aux équipements universitaires, des programmes diplomatiques aux opérations privées de référence, MCB travaille à l'interface des institutions, des investisseurs [...]
      ],
      founderTitle: 'Fondateur',
      founderQuote:
        '« Depuis sa création en 1996, le bureau a développé une expérience solide en architecture, en études de projets et en gestion de projets, en maintenant une réputation fondée sur l[...]
      founderRole:
        'Menih Ould Tah — Architecte ITAAUT, fondateur de MCB et Président de l'Ordre des Architectes de Mauritanie.'
    },
    sections: {
      projectsEyebrow: 'Projets sélectionnés',
      projectsTitle: 'Des références qui témoignent d'une pratique étendue, à différentes échelles et sur plusieurs territoires.',
      journalEyebrow: 'Journal',
      journalTitle: 'Trois lectures pour situer les projets dans une réflexion plus large.',
      chronologyEyebrow: 'Chronologie',
      chronologyTitle: 'Trois décennies de projets au service du développement des territoires.',
      contactEyebrow: 'Contact',
      contactTitle: 'Nouakchott, Mauritanie'
    },
    ctas: {
      discoverStudio: 'Découvrir le studio',
      viewProjects: 'Voir les projets',
      readArticle: 'Lire l'article',
      exploreChronology: 'Explorer la chronologie',
      allProjects: 'Tous les projets',
      backToProjects: 'Retour aux projets',
      backToJournal: 'Retour au journal'
    },
    footer: {
      address: 'Rue 44-126, Tavregh Zeina, BP 4221, Nouakchott, Mauritanie',
      email: 'mcbingenieries@gmail.com',
      phone: '+222 45 25 49 50',
      phone2: '+222 20 02 00 61',
      whatsapp: '+222 43 18 33 13'
    }
  },
  en: {
    localeName: 'EN',
    direction: 'ltr',
    siteTitle: 'MCB Engineering',
    tagline: 'Architecture, urbanism and territorial strategy',
    metaDescription:
      'MCB is an architecture and engineering practice based in Nouakchott, founded in 1996 by Menih Ould Tah.',
    nav: {
      studio: 'Studio',
      projects: 'Projects',
      chronology: 'Chronology',
      journal: 'Journal',
      contact: 'Contact'
    },
    hero: {
      kicker: 'MCB Engineering',
      subtitle: 'Architecture, urbanism and territorial strategy',
      titleLines: [
        'Designing today',
        'the territories of tomorrow',
        'in Mauritania.'
      ],
      paragraph:
        'Since 1996, MCB has accompanied the transformation of Mauritania's built environment through architecture, urbanism, and the coordination of institutional and private projects. The offi[...]
    },
    studio: {
      eyebrow: 'Studio',
      introTitle: 'Institutional continuity, grounded practice.',
      paragraphs: [
        'Founded in 1996 by Menih Ould Tah, Architect ITAAUT, and structured as a company in 1998, MCB has spent nearly three decades contributing to projects that have shaped the Mauritanian ter[...]
        'From urban planning to university facilities, from diplomatic programmes to benchmark private developments, MCB works at the intersection of institutions, investors and development partn[...]
      ],
      founderTitle: 'Founder',
      founderQuote:
        '"Since its creation in 1996, the office has built solid experience in architecture, project studies and project management, sustaining a reputation grounded in continuity and the quali[...]
      founderRole:
        'Menih Ould Tah — Architect ITAAUT, founder of MCB and President of the Order of Architects of Mauritania.'
    },
    sections: {
      projectsEyebrow: 'Selected projects',
      projectsTitle: 'References that reflect a wide-ranging practice across scales and territories.',
      journalEyebrow: 'Journal',
      journalTitle: 'Three essays placing projects within a broader intellectual frame.',
      chronologyEyebrow: 'Chronology',
      chronologyTitle: 'Three decades of projects serving territorial development.',
      contactEyebrow: 'Contact',
      contactTitle: 'Nouakchott, Mauritania'
    },
    ctas: {
      discoverStudio: 'Discover the studio',
      viewProjects: 'View projects',
      readArticle: 'Read article',
      exploreChronology: 'Explore the chronology',
      allProjects: 'All projects',
      backToProjects: 'Back to projects',
      backToJournal: 'Back to journal'
    },
    footer: {
      address: 'Rue 44-126, Tavregh Zeina, BP 4221, Nouakchott, Mauritania',
      email: 'mcbingenieries@gmail.com',
      phone: '+222 45 25 49 50',
      phone2: '+222 20 02 00 61',
      whatsapp: '+222 43 18 33 13'
    }
  },
  ar: {
    localeName: 'العربية',
    direction: 'rtl',
    siteTitle: 'MCB للهندسة',
    tagline: 'العمارة والتخطيط العمراني والاستراتيجية الترابية',
    metaDescription:
      'MCB مكتب للهندسة المعمارية والدراسات مقره نواكشوط، أسسه منيه ولد الطاه سنة 1996.',
    nav: {
      studio: 'المكتب',
      projects: 'المشاريع',
      chronology: 'التسلسل الزمني',
      journal: 'المجلة',
      contact: 'اتصال'
    },
    hero: {
      kicker: 'MCB للهندسة',
      subtitle: 'العمارة والتخطيط العمراني والاستراتيجية الترابية',
      titleLines: [
        'تصميم الحاضر',
        'لبناء أقاليم الغد',
        'في موريتانيا.'
      ],
      paragraph:
        'منذ عام 1996، يواكب مكتب MCB تحوّل المجال المبني في موريتانيا من خلال العمارة والتخطيط العمراني وتنسيق ال[...]
    },
    studio: {
      eyebrow: 'المكتب',
      introTitle: 'استمرارية مؤسسية وممارسة ميدانية.',
      paragraphs: [
        'تأسس MCB سنة 1996 على يد منيه ولد الطاه، المهندس المعماري ITAAUT، ثم اتخذ صيغته المؤسسية سنة 1998. وعلى مدى ما ي�[...]
        'من التخطيط الحضري إلى التجهيزات الجامعية، ومن البرامج الدبلوماسية إلى المشاريع الخاصة المرجعية، يعم�[...]
      ],
      founderTitle: 'المؤسس',
      founderQuote:
        '« منذ تأسيسه سنة 1996، راكم المكتب خبرة راسخة في العمارة ودراسات المشاريع وإدارة التنفيذ، وحافظ على سمع�[...]
      founderRole:
        'منيه ولد الطاه — مهندس معماري ITAAUT، مؤسس MCB ورئيس هيئة المعماريين في موريتانيا.'
    },
    sections: {
      projectsEyebrow: 'مشاريع مختارة',
      projectsTitle: 'مرجعيات تعكس ممارسة واسعة النطاق، عبر مقاييس مختلفة وفي أكثر من مجال ترابي.',
      journalEyebrow: 'المجلة',
      journalTitle: 'ثلاثة نصوص تضع المشاريع ضمن أفق فكري أوسع.',
      chronologyEyebrow: 'التسلسل الزمني',
      chronologyTitle: 'ثلاثة عقود من المشاريع في خدمة تنمية الأقاليم.',
      contactEyebrow: 'اتصال',
      contactTitle: 'نواكشوط، موريتانيا'
    },
    ctas: {
      discoverStudio: 'اكتشف المكتب',
      viewProjects: 'عرض المشاريع',
      readArticle: 'قراءة المقال',
      exploreChronology: 'استكشاف التسلسل الزمني',
      allProjects: 'كل المشاريع',
      backToProjects: 'العودة إلى المشاريع',
      backToJournal: 'العودة إلى المجلة'
    },
    footer: {
      address: 'شارع 44-126، تفرغ زينة، ص.ب 4221، نواكشوط، موريتانيا',
      email: 'mcbingenieries@gmail.com',
      phone: '+222 45 25 49 50',
      phone2: '+222 20 02 00 61',
      whatsapp: '+222 43 18 33 13'
    }
  }
} as const;

export const projects = [
  {
    slug: 'universite-nouakchott',
    image: '/images/projects/universite-nouakchott.png',
    year: '2019',
    type: {
      fr: 'Équipement universitaire',
      en: 'University facilities',
      ar: 'تجهيز جامعي'
    },
    location: {
      fr: 'Nouakchott, Mauritanie',
      en: 'Nouakchott, Mauritania',
      ar: 'نواكشوط، موريتانيا'
    },
    title: {
      fr: 'Faculté des Sciences Juridiques et Économiques, Résidence pour Filles, Restaurant universitaire et Mosquée avec commerce',
      en: 'Faculty of Law and Economics, Women's Residence, University Restaurant and Mosque with retail units',
      ar: 'كلية العلوم القانونية والاقتصادية، إقامة للطالبات، مطعم جامعي ومسجد مع محلات'
    },
    excerpt: {
      fr: 'À l'Université de Nouakchott, MCB assure la revue des études d'exécution et le suivi des travaux d'un ensemble universitaire de grande ampleur réunissant enseignement, hébe[...]
      en: 'At the University of Nouakchott, MCB reviewed execution studies and supervised the construction of a large academic complex combining teaching, housing, dining and worship facilities.'[...]
      ar: 'في جامعة نواكشوط، تولى MCB مراجعة دراسات التنفيذ ومتابعة الأشغال لمركب جامعي واسع يجمع بين التعليم وا�[...]
    },
    details: {
      fr: [
        'Réalisé en groupement avec le bureau koweïtien PACE, le projet rassemble plusieurs composantes majeures d'un même ensemble : une faculté, une résidence pour filles, un restaurant[...]
        'La mission assurée par MCB porte sur la revue des études d'exécution ainsi que sur le suivi des travaux. Elle suppose un dialogue constant entre conception, adaptation au site et co[...]
        'Au-delà de sa dimension bâtie, le projet témoigne de la capacité du bureau à intervenir sur des opérations de grande taille, financées et structurées dans un cadre de coopératio[...]
      ],
      en: [
        'Developed in association with the Kuwaiti office PACE, the project brings together several major components within one academic ensemble: a faculty building, a women's residence, a uni[...]
        'MCB's role covered the review of execution studies and the supervision of works. This required a constant dialogue between design, site adaptation and construction control across a com[...]
        'Beyond its physical footprint, the project demonstrates the office's ability to work on large operations structured within international cooperation frameworks while remaining attentiv[...]
      ],
      ar: [
        'أُنجز المشروع بالشراكة مع مكتب PACE الكويتي، ويضم عدة مكونات رئيسية ضمن مجموعة واحدة: كلية، وإقامة للطا�[...]
        'شملت مهمة MCB مراجعة دراسات التنفيذ ومتابعة الأشغال، وهو ما استدعى حواراً متواصلاً بين التصميم وتكييف �[...]
        'وبعيداً عن حجمه العمراني، يبرهن المشروع على قدرة المكتب على مواكبة العمليات الكبرى المؤطرة في إطار ال[...]
      ]
    },
    facts: {
      fr: {
        mission: 'Revue des études d'exécution et suivi des travaux de construction',
        client: 'Non communiqué',
        partners: 'En groupement avec PACE',
        completion: '2019'
      },
      en: {
        mission: 'Review of execution studies and construction supervision',
        client: 'Not specified',
        partners: 'In association with PACE',
        completion: '2019'
      },
      ar: {
        mission: 'مراجعة دراسات التنفيذ ومتابعة أشغال البناء',
        client: 'غير محدد',
        partners: 'بالشراكة مع PACE',
        completion: '2019'
      }
    }
  },
  {
    slug: 'lycee-theodore-monod',
    image: '/images/projects/lycee-theodore-monod.png',
    year: '2016',
    type: {
      fr: 'Équipement éducatif',
      en: 'Educational facility',
      ar: 'تجهيز تعليمي'
    },
    location: {
      fr: 'Nouakchott, Mauritanie',
      en: 'Nouakchott, Mauritania',
      ar: 'نواكشوط، موريتانيا'
    },
    title: {
      fr: 'Construction du Lycée Théodore Monod',
      en: 'Construction of Lycée Théodore Monod',
      ar: 'إنجاز ثانوية تيودور مونود'
    },
    excerpt: {
      fr: 'À Nouakchott, MCB participe à la réalisation du Lycée Théodore Monod, programme éducatif conduit en groupement et soutenu par des partenaires institutionnels français.',
      en: 'In Nouakchott, MCB contributed to the Lycée Théodore Monod project, an educational programme delivered in association and supported by French institutional partners.',
      ar: 'في نواكشوط، شارك MCB في إنجاز ثانوية تيودور مونود، وهو برنامج تعليمي أُنجز ضمن تجمع مهني وبدعم من شركا�[...]
    },
    details: {
      fr: [
        'Mené en groupement avec Guyon Segond et MTC, le projet du Lycée Théodore Monod s'inscrit dans la continuité des grands équipements scolaires réalisés à Nouakchott au cours des [...]
        'MCB y intervient sur les études, le dossier d'exécution et le suivi des travaux de construction. La mission s'inscrit dans un cadre où la précision technique doit se conjuguer av[...]
        'Le programme illustre aussi l'inscription du bureau dans des projets financés ou soutenus par des partenaires internationaux, en l'occurrence le ministère français de l'Éducati[...]
      ],
      en: [
        'Delivered in association with Guyon Segond and MTC, the Lycée Théodore Monod project belongs to the wave of major school facilities built in Nouakchott in the 2010s. Its architecture i[...]
        'MCB was involved in the studies, execution documentation and supervision of works. The mission required technical accuracy while responding to the demands of a public educational facilit[...]
        'The programme also illustrates the office's involvement in projects supported by international partners — in this case the French Ministry of Education and the Saudi Fund — while m[...]
      ],
      ar: [
        'أُنجز مشروع ثانوية تيودور مونود ضمن تجمع مع Guyon Segond وMTC، وينتمي إلى جيل التجهيزات المدرسية الكبرى التي [...]
        'تدخل MCB في الدراسات وإعداد ملف التنفيذ ومتابعة الأشغال. وقد تطلبت المهمة دقة تقنية إلى جانب الاستجابة �[...]
        'كما يبرز البرنامج حضور المكتب في المشاريع المدعومة من شركاء دوليين — وفي هذه الحالة وزارة التربية الف[...]
      ]
    },
    facts: {
      fr: {
        mission: 'Études, dossier d'exécution et suivi des travaux de construction',
        client: 'Ministère français de l'Éducation / Saudi Fund',
        partners: 'En groupement avec Guyon Segond et MTC',
        completion: '2016'
      },
      en: {
        mission: 'Studies, execution documentation and construction supervision',
        client: 'French Ministry of Education / Saudi Fund',
        partners: 'In association with Guyon Segond and MTC',
        completion: '2016'
      },
      ar: {
        mission: 'الدراسات وملف التنفيذ ومتابعة أشغال البناء',
        client: 'وزارة التربية الفرنسية / الصندوق السعودي',
        partners: 'ضمن تجمع مع Guyon Segond وMTC',
        completion: '2016'
      }
    }
  },
  {
    slug: 'lycees-santiago-cap-vert',
    image: '/images/projects/lycees-santiago-cap-vert.png',
    year: '2006',
    type: {
      fr: 'Équipement éducatif',
      en: 'Educational facility',
      ar: 'تجهيز تعليمي'
    },
    location: {
      fr: 'Île de Santiago, Cap-Vert',
      en: 'Santiago Island, Cape Verde',
      ar: 'جزيرة سانتياغو، الرأس الأخضر'
    },
    title: {
      fr: 'Construction de deux lycées dans l'île de Santiago',
      en: 'Construction of two high schools on Santiago Island',
      ar: 'إنجاز ثانويتين في جزيرة سانتياغو'
    },
    excerpt: {
      fr: 'Avec ce projet au Cap-Vert, MCB signe une première expérience régionale en Afrique de l'Ouest et confirme sa capacité à intervenir hors de Mauritanie dans un cadre de maîtrise [...]
      en: 'With this project in Cape Verde, MCB marked an early regional experience in West Africa and confirmed its ability to work beyond Mauritania within a public procurement framework.',
      ar: 'من خلال هذا المشروع في الرأس الأخضر، خاض MCB إحدى أولى تجاربه الإقليمية في غرب أفريقيا، مؤكداً قدرته ع�[...]
    },
    details: {
      fr: [
        'Conçu en groupement avec P. Martin pour le ministère de l'Éducation du Cap-Vert, le projet concerne deux établissements scolaires implantés sur l'île de Santiago. Il marque l��[...]
        'La mission confiée à MCB couvre l'ensemble du processus : études, APS, APD, dossier d'exécution et suivi des travaux. Dans ce cadre, la cohérence entre programme, mise en œuvre[...]
        'Au-delà du projet lui-même, cette référence atteste d'une familiarité avec les opérations portées par des institutions publiques hors de Mauritanie et soutenues par des mécanis[...]
      ],
      en: [
        'Designed in association with P. Martin for Cape Verde's Ministry of Education, the project covers two school facilities on Santiago Island. It marks the office's regional opening and[...]
        'MCB's mission covered the full process: studies, preliminary design, developed design, execution documentation and supervision of works. Throughout, the coherence between programme, de[...]
        'Beyond the project itself, the reference confirms familiarity with operations commissioned by public institutions outside Mauritania and supported by international financing mechanisms, [...]
      ],
      ar: [
        'صُمم المشروع بالشراكة مع P. Martin لفائدة وزارة التربية في الرأس الأخضر، ويهم ثانويتين في جزيرة سانتياغو. [...]
        'شملت مهمة MCB كامل المسار: الدراسات، والتصميم الأولي، والتصميم المتقدم، وملف التنفيذ، ومتابعة الأشغال.[...]
        'وتؤكد هذه المرجعية، إلى جانب المشروع نفسه، إلمام المكتب بالعمليات التي تطلبها مؤسسات عمومية خارج مور�[...]
      ]
    },
    facts: {
      fr: {
        mission: 'Études, APS, APD, dossier d'exécution et suivi des travaux',
        client: 'Ministère de l'Éducation du Cap-Vert',
        partners: 'En groupement avec P. Martin',
        completion: '2006'
      },
      en: {
        mission: 'Studies, preliminary and developed design, execution documents and supervision',
        client: 'Cape Verde Ministry of Education',
        partners: 'In association with P. Martin',
        completion: '2006'
      },
      ar: {
        mission: 'الدراسات والتصميم الأولي والمتقدم وملف التنفيذ ومتابعة الأشغال',
        client: 'وزارة التربية في الرأس الأخضر',
        partners: 'بالشراكة مع P. Martin',
        completion: '2006'
      }
    }
  },
  {
    slug: 'cfed-nouakchott',
    image: '/images/projects/cfed-nouakchott.png',
    year: '2003',
    type: {
      fr: 'Équipement éducatif',
      en: 'Educational infrastructure',
      ar: 'بنية تعليمية'
    },
    location: {
      fr: 'Nouakchott, Mauritanie',
      en: 'Nouakchott, Mauritania',
      ar: 'نواكشوط، موريتانيا'
    },
    title: {
      fr: 'CFED — Centre de Formation et d'Échange à Distance',
      en: 'CFED — Distance Training and Exchange Centre',
      ar: 'CFED — مركز التكوين والتبادل عن بُعد'
    },
    excerpt: {
      fr: 'Au début des années 2000, MCB conçoit l'un des premiers centres de formation à distance du pays, au moment où les infrastructures numériques éducatives émergent en Mauritanie[...]
      en: 'In the early 2000s, MCB designed one of the country's first distance-learning centres, at a moment when educational digital infrastructure was emerging in Mauritania.',
      ar: 'في مطلع الألفية، صمم MCB واحداً من أوائل مراكز التكوين عن بُعد في البلاد، في لحظة بدأ فيها ظهور البنى ا�[...]
    },
    details: {
      fr: [
        'Le CFED de Nouakchott représente une étape importante dans la trajectoire du bureau. Il accompagne l'introduction d'infrastructures éducatives liées aux premiers usages d'Inter[...]
        'Pour le ministère de l'Économie et du Plan, MCB assure les études, les phases APS et APD, le dossier d'exécution ainsi que le suivi des travaux. L'architecture du centre tradui[...]
        'Soutenu à l'époque par la Banque mondiale, le programme montre la capacité du bureau à inscrire un projet architectural dans une évolution institutionnelle plus large, où l'éq[...]
      ],
      en: [
        'The CFED in Nouakchott represents an important stage in the office's trajectory. It accompanied the introduction of educational infrastructure linked to the early use of the internet a[...]
        'For the Ministry of Economy and Planning, MCB carried out the studies, preliminary and developed design, execution documentation and construction supervision. The centre's architecture[...]
        'Supported at the time by the World Bank, the programme shows the office's ability to situate an architectural project within a broader institutional transition, where a facility is not[...]
      ],
      ar: [
        'يمثل مركز CFED في نواكشوط مرحلة مهمة في مسار المكتب، إذ واكب إدخال بنى تعليمية مرتبطة ببدايات استخدام ال[...]
        'لفائدة وزارة الاقتصاد والتخطيط، تولى MCB الدراسات والتصميم الأولي والمتقدم وملف التنفيذ ومتابعة الأشغ[...]
        'وقد حظي البرنامج آنذاك بدعم البنك الدولي، ما يبرز قدرة المكتب على إدراج المشروع المعماري ضمن تحول مؤس�[...]
      ]
    },
    facts: {
      fr: {
        mission: 'Études, APS, APD, dossier d'exécution et suivi des travaux',
        client: 'Ministère de l'Économie et du Plan',
        partners: 'Avec appui de la Banque mondiale',
        completion: '2003'
      },
      en: {
        mission: 'Studies, preliminary and developed design, execution documents and supervision',
        client: 'Ministry of Economy and Planning',
        partners: 'With World Bank support',
        completion: '2003'
      },
      ar: {
        mission: 'الدراسات والتصميم الأولي والمتقدم وملف التنفيذ ومتابعة الأشغال',
        client: 'وزارة الاقتصاد والتخطيط',
        partners: 'بدعم من البنك الدولي',
        completion: '2003'
      }
    }
  },
  {
    slug: 'ambassade-tunisie',
    image: '/images/projects/ambassade-tunisie.png',
    year: '2014',
    type: {
      fr: 'Architecture diplomatique',
      en: 'Diplomatic architecture',
      ar: 'عمارة دبلوماسية'
    },
    location: {
      fr: 'Nouakchott, Mauritanie',
      en: 'Nouakchott, Mauritania',
      ar: 'نواكشوط، موريتانيا'
    },
    title: {
      fr: 'Ambassade de Tunisie à Nouakchott',
      en: 'Embassy of Tunisia in Nouakchott',
      ar: 'سفارة تونس في نواكشوط'
    },
    excerpt: {
      fr: 'Conçu en groupement avec BICA, le projet de l'ambassade développe une écriture diplomatique sobre, inspirée de Sidi Bou Saïd et adaptée au contexte de Nouakchott.',
      en: 'Designed in association with BICA, the embassy project develops a restrained diplomatic language inspired by Sidi Bou Saïd and adapted to the Nouakchott context.',
      ar: 'صُمم المشروع بالشراكة مع BICA، ويطوّر لغة دبلوماسية رصينة تستلهم سيدي بوسعيد وتتكيف مع سياق نواكشوط.'
    },
    details: {
      fr: [
        'L'ambassade de Tunisie à Nouakchott fait partie des références diplomatiques marquantes du bureau. Le projet, conçu en groupement avec BICA, associe des volumes blancs épurés à [...]
        'La mission confiée à MCB porte sur les études, l'APS, l'APD et le dossier d'exécution. Elle suppose une attention particulière à la représentation institutionnelle, à la s�[...]
        'Cette opération atteste d'une capacité à travailler sur des programmes où la dimension symbolique est indissociable de la rigueur technique, et où la présence d'un partenaire l[...]
      ],
      en: [
        'The Embassy of Tunisia in Nouakchott is one of the office's notable diplomatic references. Designed in association with BICA, the project combines purified white volumes with Mediterra[...]
        'MCB's role covered the studies, preliminary design, developed design and execution documents. The mission required particular attention to institutional representation, security, and t[...]
        'The operation confirms the office's ability to work on programmes where symbolic dimension is inseparable from technical rigour, and where the presence of a capable local counterpart i[...]
      ],
      ar: [
        'تُعد سفارة تونس في نواكشوط من أبرز المرجعيات الدبلوماسية للمكتب. وقد جُمعت في المشروع، المصمم بالشراك[...]
        'شملت مهمة MCB الدراسات والتصميم الأولي والمتقدم وملف التنفيذ. وقد استدعى ذلك عناية خاصة بالتمثيل المؤس�[...]
        'ويؤكد هذا المشروع قدرة المكتب على الاشتغال على برامج تكون فيها الرمزية ملازمة للصرامة التقنية، ويكون [...]
      ]
    },
    facts: {
      fr: {
        mission: 'Études, APS, APD et dossier d'exécution',
        client: 'Gouvernement tunisien',
        partners: 'En groupement avec BICA',
        completion: '2014'
      },
      en: {
        mission: 'Studies, preliminary and developed design, and execution documents',
        client: 'Tunisian Government',
        partners: 'In association with BICA',
        completion: '2014'
      },
      ar: {
        mission: 'الدراسات والتصميم الأولي والمتقدم وملف التنفيذ',
        client: 'الحكومة التونسية',
        partners: 'بالشراكة مع BICA',
        completion: '2014'
      }
    }
  },
  {
    slug: 'pavillon-expo-zar08',
    image: '/images/projects/pavillon-expo-zar08.png',
    year: '2008',
    type: {
      fr: 'Pavillon d'exposition',
      en: 'Exhibition pavilion',
      ar: 'جناح عرض'
    },
    location: {
      fr: 'Saragosse, Espagne',
      en: 'Zaragoza, Spain',
      ar: 'سرقسطة، إسبانيا'
    },
    title: {
      fr: 'Pavillon de la Mauritanie à l'Expo ZAR08',
      en: 'Mauritania Pavilion at Expo ZAR08',
      ar: 'جناح موريتانيا في معرض ZAR08'
    },
    excerpt: {
      fr: 'À Saragosse, MCB conçoit et suit la réalisation du pavillon mauritanien pour l'Expo ZAR08, projet de représentation internationale où espace, image et narration doivent se répo[...]
      en: 'In Zaragoza, MCB designed and supervised the Mauritanian pavilion for Expo ZAR08, an international representation project where space, image and narrative had to work together.',
      ar: 'في سرقسطة، صمم MCB وتابع إنجاز الجناح الموريتاني لمعرض ZAR08، وهو مشروع تمثيل دولي تتكامل فيه الفضاءات و�[...]
    },
    details: {
      fr: [
        'Le pavillon de la Mauritanie à l'Expo ZAR08 prolonge l'activité du bureau dans un registre particulier : celui de l'architecture événementielle et de la représentation nationa[...]
        'MCB assure les études, les phases APS et APD, le dossier d'exécution ainsi que le suivi des travaux. À cette échelle, la relation entre architecture, scénographie et récit du pay[...]
        'Cette référence complète utilement le panorama des réalisations du bureau : elle montre qu'une pratique enracinée dans le territoire mauritanien peut également prendre en charge [...]
      ],
      en: [
        'The Mauritania Pavilion at Expo ZAR08 extends the office's activity into a particular register: event architecture and international national representation. The project had to bring t[...]
        'MCB carried out the studies, preliminary and developed design, execution documents and construction supervision. At this scale, the relationship between architecture, exhibition design a[...]
        'The reference usefully broadens the spectrum of the office's work: it shows that a practice rooted in the Mauritanian territory can also take on temporary or representative devices whe[...]
      ],
      ar: [
        'يوسّع جناح موريتانيا في معرض ZAR08 مجال نشاط المكتب نحو نوع خاص من المشاريع: عمارة الفعاليات والتمثيل ال�[...]
        'تكفّل MCB بالدراسات والتصميم الأولي والمتقدم وملف التنفيذ ومتابعة الأشغال. وفي هذا المستوى، تصبح العلا[...]
        'وتكمل هذه المرجعية صورة أعمال المكتب بشكل مفيد، إذ تبرز أن ممارسة متجذرة في المجال الموريتاني قادرة أ�[...]
      ]
    },
    facts: {
      fr: {
        mission: 'Études, APS, APD, dossier d'exécution et suivi des travaux',
        client: 'Ministère de l'Industrie et du Commerce',
        partners: 'Mission réalisée par MCB',
        completion: '2008'
      },
      en: {
        mission: 'Studies, preliminary and developed design, execution documents and supervision',
        client: 'Ministry of Industry and Commerce',
        partners: 'Mission carried out by MCB',
        completion: '2008'
      },
      ar: {
        mission: 'الدراسات والتصميم الأولي والمتقدم وملف التنفيذ ومتابعة الأشغال',
        client: 'وزارة الصناعة والتجارة',
        partners: 'مهمة أنجزها MCB',
        completion: '2008'
      }
    }
  }
] as const;

export const journal = [
  {
    slug: 'architecture-institutionnelle-mauritanie',
    date: '24 avril 2025',
    dateEn: '24 April 2025',
    dateAr: '24 أبريل 2025',
    title: {
      fr: 'Construire l'architecture institutionnelle en Mauritanie depuis les années 1990',
      en: 'Building institutional architecture in Mauritania since the 1990s',
      ar: 'بناء العمارة المؤسسية في موريتانيا منذ تسعينيات القرن الماضي'
    },
    excerpt: {
      fr: 'L'architecture institutionnelle n'est pas un simple exercice de représentation. En Mauritanie, elle accompagne la mise en place d'administrations, de services publics et d'éq[...]
      en: 'Institutional architecture is not merely a representational exercise. In Mauritania, it accompanies the formation of administrations, public services and facilities that give durable f[...]
      ar: 'ليست العمارة المؤسسية مجرد واجهة تمثيلية. ففي موريتانيا، ترافق بناء الإدارات والخدمات العمومية والت[...]
    },
    body: {
      fr: [
        'Depuis les années 1990, la question de l'architecture institutionnelle en Mauritanie ne peut être lue seulement comme une affaire de style. Elle relève d'abord d'une histoire de[...]
        'Dans un contexte où les ressources restent comptées et où les programmes se développent souvent par séquences, l'architecture institutionnelle doit articuler économie des moyens [...]
        'Cette dimension est particulièrement sensible dans les projets éducatifs et administratifs. Un lycée n'est pas seulement un ensemble de salles de classe ; il organise une vie collec[...]
        'Ce qui importe, dans cette histoire, est la continuité. L'architecture institutionnelle se construit rarement dans l'éclat d'un geste unique. Elle résulte d'accumulations, d��[...]
        'En ce sens, parler d'architecture institutionnelle en Mauritanie revient moins à célébrer quelques objets isolés qu'à reconnaître une culture de projet. Cette culture fait teni[...]
      ],
      en: [
        'Since the 1990s, institutional architecture in Mauritania cannot be read only as a question of style. It is first a story of the gradual formation of administrations, the organisation of[...]
        'In a context where resources remain measured and programmes often develop in stages, institutional architecture must reconcile economy of means with clarity of expression. This leads les[...]
        'This is especially visible in educational and administrative projects. A high school is not simply a set of classrooms; it organises collective life, daily flows and a relationship to pu[...]
        'What matters in this history is continuity. Institutional architecture is rarely built through the brilliance of a single gesture. It results from accumulations, adjustments and a fine u[...]
        'In that sense, speaking of institutional architecture in Mauritania is less about celebrating isolated objects than about recognising a project culture. That culture holds together publi[...]
      ],
      ar: [
        'منذ تسعينيات القرن الماضي، لا يمكن قراءة مسألة العمارة المؤسسية في موريتانيا بوصفها مجرد سؤال أسلوبي.[...]
        'في سياق تبقى فيه الموارد محدودة وتتطور فيه البرامج على مراحل، يتعين على العمارة المؤسسية أن تجمع بين ا[...]
        'وتتضح هذه المسألة على نحو خاص في المشاريع التعليمية والإدارية. فالثانوية ليست فقط مجموعة أقسام، بل هي [...]
        'وما يهم في هذا التاريخ هو الاستمرارية. فالعمارة المؤسسية نادراً ما تُبنى على وهج لفتة وحيدة. إنها حصيل�[...]
        'ومن هذا المنظور، فإن الحديث عن العمارة المؤسسية في موريتانيا يعني الاعتراف بثقافة مشروع أكثر مما يعني[...]
      ]
    }
  },
  {
    slug: 'cooperation-internationale-maitrise-doeuvre-locale',
    date: '11 mars 2025',
    dateEn: '11 March 2025',
    dateAr: '11 مارس 2025',
    title: {
      fr: 'Coopération internationale et maîtrise d'œuvre locale : retours d'expérience',
      en: 'International cooperation and local project leadership: lessons from practice',
      ar: 'التعاون الدولي والإشراف المحلي على المشاريع: دروس من الممارسة'
    },
    excerpt: {
      fr: 'Dans les projets financés par des bailleurs ou portés avec des partenaires étrangers, la qualité du relais local conditionne souvent la réussite de l'opération.',
      en: 'In projects financed by development partners or delivered with foreign consultants, the quality of the local counterpart often determines the project's success.',
      ar: 'في المشاريع الممولة من الجهات المانحة أو المنجزة مع شركاء أجانب، غالباً ما تحدد جودة الشريك المحلي ن�[...]
    },
    body: {
      fr: [
        'Les projets conduits avec des bailleurs internationaux ou des partenaires étrangers sont souvent décrits à travers leurs procédures : appels d'offres, cadres logiques, revues, miss[...]
        'Être partenaire local ne signifie pas seulement représenter un projet sur place. Cela implique une connaissance des administrations, des entreprises, des circuits d'approvisionnement[...]
        'L'enjeu n'est pas d'opposer expertise internationale et compétence locale, mais de comprendre leur complémentarité. Les meilleures coopérations sont celles où le cadre méthod[...]
        'Dans le domaine de l'architecture et des infrastructures, cette articulation devient encore plus sensible. Une étude peut être techniquement impeccable et pourtant demeurer partielle[...]
        'Pour les maîtres d'ouvrage, bailleurs et partenaires étrangers, le choix d'un bureau local expérimenté ne relève donc pas d'une simple exigence administrative. Il constitue un[...]
      ],
      en: [
        'Projects carried out with international donors or foreign partners are often described through their procedures: tenders, logical frameworks, reviews and supervision missions. Yet a deci[...]
        'Being a local counterpart does not simply mean representing a project on site. It implies knowledge of administrations, contractors, supply chains and the actual rhythms of construction.[...]
        'The point is not to oppose international expertise and local competence, but to understand their complementarity. The strongest cooperations are those in which methodological frameworks,[...]
        'In architecture and infrastructure, this articulation becomes even more sensitive. A study may be technically impeccable and still remain partly abstract if it is not confronted with sit[...]
        'For clients, donors and foreign teams, choosing an experienced local office is therefore not a mere administrative requirement. It is an investment in project continuity. When present, i[...]
      ],
      ar: [
        'غالباً ما توصف المشاريع المنجزة مع الجهات المانحة الدولية أو الشركاء الأجانب من خلال إجراءاتها: طلبات[...]
        'ولا يعني القيام بدور الشريك المحلي مجرد تمثيل المشروع في الموقع، بل يفترض معرفة بالإدارات والمقاولات [...]
        'ولا يتعلق الأمر بمقابلة الخبرة الدولية بالكفاءة المحلية، بل بفهم تكاملهما. فأفضل أشكال التعاون هي تلك[...]
        'وفي مجالي العمارة والبنية التحتية، يصبح هذا الترابط أكثر حساسية. فقد تكون الدراسة محكمة تقنياً لكنها �[...]
        'وبالنسبة لأصحاب المشاريع والجهات المانحة والفرق الأجنبية، فإن اختيار مكتب محلي ذي خبرة ليس مجرد مطلب [...]
      ]
    }
  },
  {
    slug: 'nouakchott-expansion-urbaine-milieu-cotier',
    date: '7 février 2025',
    dateEn: '7 February 2025',
    dateAr: '7 فبراير 2025',
    title: {
      fr: 'Nouakchott face au défi de l'expansion urbaine en milieu côtier',
      en: 'Nouakchott and the challenge of urban expansion in a coastal environment',
      ar: 'نواكشوط وتحدي التوسع الحضري في بيئة ساحلية'
    },
    excerpt: {
      fr: 'Ville en croissance rapide, Nouakchott doit concilier extension urbaine, vulnérabilité environnementale et besoin d'équipements structurants.',
      en: 'As a rapidly growing city, Nouakchott must reconcile urban expansion, environmental vulnerability and the need for structuring facilities.',
      ar: 'بوصفها مدينة سريعة النمو، يتعين على نواكشوط التوفيق بين التوسع الحضري والهشاشة البيئية والحاجة إلى �[...]
    },
    body: {
      fr: [
        'L'expansion de Nouakchott est l'un des faits majeurs de la transformation territoriale mauritanienne contemporaine. La ville concentre la population, les administrations, une part cr[...]
        'Le caractère côtier de Nouakchott ajoute une dimension décisive à cette équation. Le rapport à la mer, aux dunes, aux zones basses et aux dynamiques d'ensablement ou d'inondati[...]
        'Les projets urbains et architecturaux prennent alors une responsabilité particulière. Un master plan, un équipement universitaire, une voie structurante ou un développement en front [...]
        'Pour cela, Nouakchott a besoin d'une culture de projet qui fasse dialoguer étude urbaine, faisabilité technique et connaissance fine du territoire. Il ne s'agit pas seulement de pr[...]
        'Le défi n'est donc pas uniquement de construire davantage, mais de construire avec discernement. Dans une ville comme Nouakchott, la qualité des décisions amont — localisation, s�[...]
      ],
      en: [
        'Nouakchott's expansion is one of the major facts of contemporary territorial transformation in Mauritania. The city concentrates population, administrations, a growing share of investm[...]
        'Nouakchott's coastal character adds a decisive dimension to this equation. Its relationship to the sea, dunes, low-lying areas and processes of sand encroachment or flooding requires g[...]
        'Urban and architectural projects therefore assume a particular responsibility. A master plan, a university facility, a major road or a seafront development matter not only for their own [...]
        'For this, Nouakchott needs a project culture able to connect urban study, technical feasibility and deep territorial knowledge. It is not only a matter of planning extensions, but of ant[...]
        'The challenge, then, is not only to build more, but to build with discernment. In a city such as Nouakchott, the quality of upstream decisions — siting, sequencing, articulation with i[...]
      ],
      ar: [
        'يمثل توسع نواكشوط أحد أبرز مظاهر التحول الترابي المعاصر في موريتانيا. فالمدينة تركز السكان والإدارات [...]
        'ويضيف الطابع الساحلي لنواكشوط بعداً حاسماً إلى هذه المعادلة. فالعلاقة بالبحر والكثبان والمناطق المنخ[...]
        'وتكتسب المشاريع الحضرية والمعمارية تبعاً لذلك مسؤولية خاصة. فالمخطط العام أو التجهيز الجامعي أو الطر�[...]
        'ومن أجل ذلك، تحتاج نواكشوط إلى ثقافة مشروع تربط بين الدراسة الحضرية والجدوى التقنية والمعرفة الدقيقة [...]
        'لذلك فالتحدي لا يتمثل فقط في البناء أكثر، بل في البناء بتمييز. ففي مدينة مثل نواكشوط، تحدد جودة القرار�[...]
      ]
    }
  }
] as const;

export const chronology = [
  {
    year: '1997',
    title: {
      fr: 'Structurer les premières visions urbaines',
      en: 'Structuring the first urban visions',
      ar: 'بلورة أولى الرؤى الحضرية'
    },
    text: {
      fr: 'Programme Urbain de Référence de Néma et d'Aioun.',
      en: 'Reference Urban Programmes for Néma and Aioun.',
      ar: 'البرنامج الحضري المرجعي لمدينتي النعمة وعيون العتروس.'
    }
  },
  {
    year: '1998',
    title: {
      fr: 'Premières architectures institutionnelles',
      en: 'First institutional architectures',
      ar: 'أولى العمارات المؤسسية'
    },
    text: {
      fr: 'Siège de la SMCP à Nouadhibou.',
      en: 'SMCP headquarters in Nouadhibou.',
      ar: 'مقر الشركة الموريتانية لتسويق السمك في نواذيبو.'
    }
  },
  {
    year: '2001',
    title: {
      fr: 'Introduction des infrastructures numériques éducatives',
      en: 'Introduction of educational digital infrastructure',
      ar: 'إدخال البنى التعليمية الرقمية'
    },
    text: {
      fr: 'CFED de Nouakchott.',
      en: 'CFED in Nouakchott.',
      ar: 'مركز CFED في نواكشوط.'
    }
  },
  {
    year: '2006',
    title: {
      fr: 'Première expérience régionale en Afrique',
      en: 'First regional experience in Africa',
      ar: 'أول تجربة إقليمية في أفريقيا'
    },
    text: {
      fr: 'Lycées de Santiago, Cap-Vert.',
      en: 'High schools in Santiago, Cape Verde.',
      ar: 'ثانويتان في سانتياغو، الرأس الأخضر.'
    }
  },
  {
    year: '2009',
    title: {
      fr: 'Structuration de grands projets urbains',
      en: 'Structuring large urban projects',
      ar: 'هيكلة المشاريع الحضرية الكبرى'
    },
    text: {
      fr: 'Ribat Al Bahr — master plan et programmation.',
      en: 'Ribat Al Bahr — master plan and programming.',
      ar: 'رباط البحر — المخطط العام والبرمجة.'
    }
  },
  {
    year: '2010',
    title: {
      fr: 'Coordination technique internationale',
      en: 'International technical coordination',
      ar: 'تنسيق تقني دولي'
    },
    text: {
      fr: 'Centre commercial Ribat Al Bahr.',
      en: 'Ribat Al Bahr shopping centre.',
      ar: 'المركز التجاري رباط البحر.'
    }
  },
  {
    year: '2014',
    title: {
      fr: 'Architecture diplomatique',
      en: 'Diplomatic architecture',
      ar: 'عمارة دبلوماسية'
    },
    text: {
      fr: 'Ambassade de Tunisie à Nouakchott.',
      en: 'Embassy of Tunisia in Nouakchott.',
      ar: 'سفارة تونس في نواكشوط.'
    }
  },
  {
    year: '2014–2019',
    title: {
      fr: 'Supervision de grands équipements universitaires',
      en: 'Supervision of major university facilities',
      ar: 'متابعة التجهيزات الجامعية الكبرى'
    },
    text: {
      fr: 'Université de Nouakchott.',
      en: 'University of Nouakchott.',
      ar: 'جامعة نواكشوط.'
    }
  },
  {
    year: '2020',
    title: {
      fr: 'Développement des équipements pilotes',
      en: 'Development of pilot facilities',
      ar: 'تطوير التجهيزات النموذجية'
    },
    text: {
      fr: 'Restaurant Le Mirador, Ribat Al Bahr.',
      en: 'Le Mirador restaurant, Ribat Al Bahr.',
      ar: 'مطعم لو ميرادور، رباط البحر.'
    }
  }
] as const;

export function isLang(value: string): value is Lang {
  return (languages as readonly string[]).includes(value);
}
