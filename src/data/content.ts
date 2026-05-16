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
      'MCB est un bureau d’architecture et d’ingénierie basé à Nouakchott, fondé en 1996 par Menih Ould Tah.',
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
        'Concevoir aujourd’hui',
        'les territoires de demain',
        'en Mauritanie.'
      ],
      paragraph:
        'Depuis 1996, MCB accompagne la transformation du cadre bâti mauritanien à travers l’architecture, l’urbanisme et la coordination de projets institutionnels et privés. Le bureau se présente comme une plateforme de réflexion et d’action au service de la transformation territoriale.'
    },
    studio: {
      eyebrow: 'Studio',
      introTitle: 'Une continuité institutionnelle, une pratique de terrain.',
      paragraphs: [
        'Fondé en 1996 par Menih Ould Tah, Architecte ITAAUT, puis structuré en société en 1998, MCB accompagne depuis près de trois décennies des projets qui ont compté dans la fabrication du territoire mauritanien. Le bureau intervient là où la durée, la connaissance des acteurs et la continuité institutionnelle importent autant que la conception elle-même.',
        'De l’urbanisme aux équipements universitaires, des programmes diplomatiques aux opérations privées de référence, MCB travaille à l’interface des institutions, des investisseurs et des bailleurs. Sa position n’est pas celle d’un catalogue de prestations, mais d’un interlocuteur de confiance capable d’inscrire un projet dans un contexte, un calendrier et une réalité d’exécution.'
      ],
      founderTitle: 'Fondateur',
      founderQuote:
        '« Depuis sa création en 1996, le bureau a développé une expérience solide en architecture, en études de projets et en gestion de projets, en maintenant une réputation fondée sur la durée et la qualité des réalisations. »',
      founderRole:
        'Menih Ould Tah — Architecte ITAAUT, fondateur de MCB et Président de l’Ordre des Architectes de Mauritanie.'
    },
    sections: {
      projectsEyebrow: 'Projets sélectionnés',
      projectsTitle: 'Des références qui témoignent d’une pratique étendue, à différentes échelles et sur plusieurs territoires.',
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
      readArticle: 'Lire l’article',
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
        'Since 1996, MCB has accompanied the transformation of Mauritania’s built environment through architecture, urbanism, and the coordination of institutional and private projects. The office operates as a think-and-do platform for territorial transformation.'
    },
    studio: {
      eyebrow: 'Studio',
      introTitle: 'Institutional continuity, grounded practice.',
      paragraphs: [
        'Founded in 1996 by Menih Ould Tah, Architect ITAAUT, and structured as a company in 1998, MCB has spent nearly three decades contributing to projects that have shaped the Mauritanian territory. The office works where duration, knowledge of local actors and institutional continuity matter as much as design itself.',
        'From urban planning to university facilities, from diplomatic programmes to benchmark private developments, MCB works at the intersection of institutions, investors and development partners. Its position is not that of a service catalogue, but of a trusted counterpart able to anchor a project in context, schedule and implementation realities.'
      ],
      founderTitle: 'Founder',
      founderQuote:
        '“Since its creation in 1996, the office has built solid experience in architecture, project studies and project management, sustaining a reputation grounded in continuity and the quality of built work.”',
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
        'منذ عام 1996، يواكب مكتب MCB تحوّل المجال المبني في موريتانيا من خلال العمارة والتخطيط العمراني وتنسيق المشاريع المؤسسية والخاصة. ويعمل المكتب بوصفه منصة تجمع بين التفكير والفعل في خدمة التحول الترابي.'
    },
    studio: {
      eyebrow: 'المكتب',
      introTitle: 'استمرارية مؤسسية وممارسة ميدانية.',
      paragraphs: [
        'تأسس MCB سنة 1996 على يد منيه ولد الطاه، المهندس المعماري ITAAUT، ثم اتخذ صيغته المؤسسية سنة 1998. وعلى مدى ما يقارب ثلاثة عقود، رافق المكتب مشاريع ساهمت في تشكيل المجال الموريتاني، في مواقع يكون فيها عامل الزمن ومعرفة الفاعلين والاستمرارية المؤسسية جزءاً من قيمة المشروع نفسها.',
        'من التخطيط الحضري إلى التجهيزات الجامعية، ومن البرامج الدبلوماسية إلى المشاريع الخاصة المرجعية، يعمل MCB عند تقاطع المؤسسات والمستثمرين والجهات المانحة. وهو لا يقدّم نفسه كقائمة خدمات، بل كشريك موثوق قادر على تثبيت المشروع في سياقه وبرنامجه الزمني وواقعه التنفيذي.'
      ],
      founderTitle: 'المؤسس',
      founderQuote:
        '« منذ تأسيسه سنة 1996، راكم المكتب خبرة راسخة في العمارة ودراسات المشاريع وإدارة التنفيذ، وحافظ على سمعته من خلال الاستمرارية وجودة الإنجاز. »',
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
      en: 'Faculty of Law and Economics, Women’s Residence, University Restaurant and Mosque with retail units',
      ar: 'كلية العلوم القانونية والاقتصادية، إقامة للطالبات، مطعم جامعي ومسجد مع محلات'
    },
    excerpt: {
      fr: 'À l’Université de Nouakchott, MCB assure la revue des études d’exécution et le suivi des travaux d’un ensemble universitaire de grande ampleur réunissant enseignement, hébergement, restauration et culte.',
      en: 'At the University of Nouakchott, MCB reviewed execution studies and supervised the construction of a large academic complex combining teaching, housing, dining and worship facilities.',
      ar: 'في جامعة نواكشوط، تولى MCB مراجعة دراسات التنفيذ ومتابعة الأشغال لمركب جامعي واسع يجمع بين التعليم والإيواء والإطعام والعبادة.'
    },
    details: {
      fr: [
        'Réalisé en groupement avec le bureau koweïtien PACE, le projet rassemble plusieurs composantes majeures d’un même ensemble : une faculté, une résidence pour filles, un restaurant universitaire et une mosquée avec commerces. Par son échelle, il appartient à la génération des grands équipements publics qui accompagnent la croissance de Nouakchott.',
        'La mission assurée par MCB porte sur la revue des études d’exécution ainsi que sur le suivi des travaux. Elle suppose un dialogue constant entre conception, adaptation au site et contrôle de la mise en œuvre, sur un programme complexe où se superposent usages quotidiens et exigences institutionnelles.',
        'Au-delà de sa dimension bâtie, le projet témoigne de la capacité du bureau à intervenir sur des opérations de grande taille, financées et structurées dans un cadre de coopération internationale, sans perdre de vue les réalités du chantier mauritanien.'
      ],
      en: [
        'Developed in association with the Kuwaiti office PACE, the project brings together several major components within one academic ensemble: a faculty building, a women’s residence, a university restaurant and a mosque with retail units. By scale alone, it belongs to the generation of public facilities that accompanied Nouakchott’s expansion.',
        'MCB’s role covered the review of execution studies and the supervision of works. This required a constant dialogue between design, site adaptation and construction control across a complex programme where everyday use and institutional expectations had to be reconciled.',
        'Beyond its physical footprint, the project demonstrates the office’s ability to work on large operations structured within international cooperation frameworks while remaining attentive to the practical realities of building in Mauritania.'
      ],
      ar: [
        'أُنجز المشروع بالشراكة مع مكتب PACE الكويتي، ويضم عدة مكونات رئيسية ضمن مجموعة واحدة: كلية، وإقامة للطالبات، ومطعماً جامعياً، ومسجداً مع محلات. وبحجمه، ينتمي إلى جيل التجهيزات العامة الكبرى التي واكبت نمو نواكشوط.',
        'شملت مهمة MCB مراجعة دراسات التنفيذ ومتابعة الأشغال، وهو ما استدعى حواراً متواصلاً بين التصميم وتكييف المشروع مع الموقع وضبط التنفيذ، ضمن برنامج معقد تتداخل فيه الاستعمالات اليومية مع المتطلبات المؤسسية.',
        'وبعيداً عن حجمه العمراني، يبرهن المشروع على قدرة المكتب على مواكبة العمليات الكبرى المؤطرة في إطار التعاون الدولي، مع الحفاظ على فهم دقيق لواقع الورشات في موريتانيا.'
      ]
    },
    facts: {
      fr: {
        mission: 'Revue des études d’exécution et suivi des travaux de construction',
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
      fr: 'À Nouakchott, MCB participe à la réalisation du Lycée Théodore Monod, programme éducatif conduit en groupement et soutenu par des partenaires institutionnels français et saoudiens.',
      en: 'In Nouakchott, MCB contributed to the Lycée Théodore Monod project, an educational programme delivered in association and supported by French and Saudi institutional partners.',
      ar: 'في نواكشوط، شارك MCB في إنجاز ثانوية تيودور مونود، وهو برنامج تعليمي أُنجز ضمن تجمع مهني وبدعم من شركاء مؤسسيين فرنسيين وسعوديين.'
    },
    details: {
      fr: [
        'Mené en groupement avec Guyon Segond et MTC, le projet du Lycée Théodore Monod s’inscrit dans la continuité des grands équipements scolaires réalisés à Nouakchott au cours des années 2010. Il donne à voir une architecture sobre, climatique, organisée autour d’espaces de circulation ombragés.',
        'MCB y intervient sur les études, le dossier d’exécution et le suivi des travaux de construction. La mission s’inscrit dans un cadre où la précision technique doit se conjuguer avec les exigences de l’équipement public, la coordination entre intervenants et la tenue du calendrier.',
        'Le programme illustre aussi l’inscription du bureau dans des projets financés ou soutenus par des partenaires internationaux, en l’occurrence le ministère français de l’Éducation et le Saudi Fund, sans perdre l’ancrage local indispensable à la bonne conduite du chantier.'
      ],
      en: [
        'Delivered in association with Guyon Segond and MTC, the Lycée Théodore Monod project belongs to the wave of major school facilities built in Nouakchott in the 2010s. Its architecture is sober and climate-conscious, organised around shaded circulation areas.',
        'MCB was involved in the studies, execution documentation and supervision of works. The mission required technical accuracy while responding to the demands of a public educational facility, coordinating multiple stakeholders and keeping to schedule.',
        'The programme also illustrates the office’s involvement in projects supported by international partners — in this case the French Ministry of Education and the Saudi Fund — while maintaining the local anchoring that is essential to successful implementation.'
      ],
      ar: [
        'أُنجز مشروع ثانوية تيودور مونود ضمن تجمع مع Guyon Segond وMTC، وينتمي إلى جيل التجهيزات المدرسية الكبرى التي شهدتها نواكشوط في العقد الماضي. وتعكس هندسته المعمارية رصانةً واستجابةً مناخيةً عبر فضاءات حركة مظللة.',
        'تدخل MCB في الدراسات وإعداد ملف التنفيذ ومتابعة الأشغال. وقد تطلبت المهمة دقة تقنية إلى جانب الاستجابة لمتطلبات المرفق التعليمي العمومي وتنسيق المتدخلين واحترام الآجال.',
        'كما يبرز البرنامج حضور المكتب في المشاريع المدعومة من شركاء دوليين — وفي هذه الحالة وزارة التربية الفرنسية والصندوق السعودي — مع الحفاظ على الارتكاز المحلي الضروري لحسن تنفيذ المشروع.'
      ]
    },
    facts: {
      fr: {
        mission: 'Études, dossier d’exécution et suivi des travaux de construction',
        client: 'Ministère français de l’Éducation / Saudi Fund',
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
      fr: 'Construction de deux lycées dans l’île de Santiago',
      en: 'Construction of two high schools on Santiago Island',
      ar: 'إنجاز ثانويتين في جزيرة سانتياغو'
    },
    excerpt: {
      fr: 'Avec ce projet au Cap-Vert, MCB signe une première expérience régionale en Afrique de l’Ouest et confirme sa capacité à intervenir hors de Mauritanie dans un cadre de maîtrise d’ouvrage publique.',
      en: 'With this project in Cape Verde, MCB marked an early regional experience in West Africa and confirmed its ability to work beyond Mauritania within a public procurement framework.',
      ar: 'من خلال هذا المشروع في الرأس الأخضر، خاض MCB إحدى أولى تجاربه الإقليمية في غرب أفريقيا، مؤكداً قدرته على العمل خارج موريتانيا ضمن إطار عمومي.'
    },
    details: {
      fr: [
        'Conçu en groupement avec P. Martin pour le ministère de l’Éducation du Cap-Vert, le projet concerne deux établissements scolaires implantés sur l’île de Santiago. Il marque l’ouverture régionale du bureau et sa capacité à transférer son expérience sur d’autres contextes ouest-africains.',
        'La mission confiée à MCB couvre l’ensemble du processus : études, APS, APD, dossier d’exécution et suivi des travaux. Dans ce cadre, la cohérence entre programme, mise en œuvre et coordination d’acteurs multiples demeure centrale.',
        'Au-delà du projet lui-même, cette référence atteste d’une familiarité avec les opérations portées par des institutions publiques hors de Mauritanie et soutenues par des mécanismes de financement internationaux, dont la BADEA.'
      ],
      en: [
        'Designed in association with P. Martin for Cape Verde’s Ministry of Education, the project covers two school facilities on Santiago Island. It marks the office’s regional opening and its ability to carry experience into other West African contexts.',
        'MCB’s mission covered the full process: studies, preliminary design, developed design, execution documentation and supervision of works. Throughout, the coherence between programme, delivery and multi-actor coordination remained central.',
        'Beyond the project itself, the reference confirms familiarity with operations commissioned by public institutions outside Mauritania and supported by international financing mechanisms, including BADEA.'
      ],
      ar: [
        'صُمم المشروع بالشراكة مع P. Martin لفائدة وزارة التربية في الرأس الأخضر، ويهم ثانويتين في جزيرة سانتياغو. وهو يمثل انفتاح المكتب إقليمياً وقدرته على نقل خبرته إلى سياقات أخرى في غرب أفريقيا.',
        'شملت مهمة MCB كامل المسار: الدراسات، والتصميم الأولي، والتصميم المتقدم، وملف التنفيذ، ومتابعة الأشغال. وفي ذلك ظل الحفاظ على التناسق بين البرنامج والتنفيذ وتنسيق المتدخلين أمراً محورياً.',
        'وتؤكد هذه المرجعية، إلى جانب المشروع نفسه، إلمام المكتب بالعمليات التي تطلبها مؤسسات عمومية خارج موريتانيا والمدعومة بآليات تمويل دولية، ومنها BADEA.'
      ]
    },
    facts: {
      fr: {
        mission: 'Études, APS, APD, dossier d’exécution et suivi des travaux',
        client: 'Ministère de l’Éducation du Cap-Vert',
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
      fr: 'CFED — Centre de Formation et d’Échange à Distance',
      en: 'CFED — Distance Training and Exchange Centre',
      ar: 'CFED — مركز التكوين والتبادل عن بُعد'
    },
    excerpt: {
      fr: 'Au début des années 2000, MCB conçoit l’un des premiers centres de formation à distance du pays, au moment où les infrastructures numériques éducatives émergent en Mauritanie.',
      en: 'In the early 2000s, MCB designed one of the country’s first distance-learning centres, at a moment when educational digital infrastructure was emerging in Mauritania.',
      ar: 'في مطلع الألفية، صمم MCB واحداً من أوائل مراكز التكوين عن بُعد في البلاد، في لحظة بدأ فيها ظهور البنى التعليمية الرقمية في موريتانيا.'
    },
    details: {
      fr: [
        'Le CFED de Nouakchott représente une étape importante dans la trajectoire du bureau. Il accompagne l’introduction d’infrastructures éducatives liées aux premiers usages d’Internet et à la montée des besoins de formation à distance.',
        'Pour le ministère de l’Économie et du Plan, MCB assure les études, les phases APS et APD, le dossier d’exécution ainsi que le suivi des travaux. L’architecture du centre traduit un moment où l’équipement technique devient lui-même une composante visible du projet.',
        'Soutenu à l’époque par la Banque mondiale, le programme montre la capacité du bureau à inscrire un projet architectural dans une évolution institutionnelle plus large, où l’équipement ne se réduit pas à un bâtiment mais participe à une politique publique.'
      ],
      en: [
        'The CFED in Nouakchott represents an important stage in the office’s trajectory. It accompanied the introduction of educational infrastructure linked to the early use of the internet and the rise of distance-learning needs.',
        'For the Ministry of Economy and Planning, MCB carried out the studies, preliminary and developed design, execution documentation and construction supervision. The centre’s architecture reflects a moment when technical equipment itself became a visible component of the project.',
        'Supported at the time by the World Bank, the programme shows the office’s ability to situate an architectural project within a broader institutional transition, where a facility is not merely a building but part of public policy.'
      ],
      ar: [
        'يمثل مركز CFED في نواكشوط مرحلة مهمة في مسار المكتب، إذ واكب إدخال بنى تعليمية مرتبطة ببدايات استخدام الإنترنت وبتزايد الحاجة إلى التكوين عن بُعد.',
        'لفائدة وزارة الاقتصاد والتخطيط، تولى MCB الدراسات والتصميم الأولي والمتقدم وملف التنفيذ ومتابعة الأشغال. وتعكس عمارة المركز لحظة أصبح فيها التجهيز التقني جزءاً ظاهراً من هوية المشروع.',
        'وقد حظي البرنامج آنذاك بدعم البنك الدولي، ما يبرز قدرة المكتب على إدراج المشروع المعماري ضمن تحول مؤسسي أوسع، حيث لا يقتصر التجهيز على المبنى بل يندرج ضمن سياسة عمومية.'
      ]
    },
    facts: {
      fr: {
        mission: 'Études, APS, APD, dossier d’exécution et suivi des travaux',
        client: 'Ministère de l’Économie et du Plan',
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
      fr: 'Conçu en groupement avec BICA, le projet de l’ambassade développe une écriture diplomatique sobre, inspirée de Sidi Bou Saïd et adaptée au contexte de Nouakchott.',
      en: 'Designed in association with BICA, the embassy project develops a restrained diplomatic language inspired by Sidi Bou Saïd and adapted to the Nouakchott context.',
      ar: 'صُمم المشروع بالشراكة مع BICA، ويطوّر لغة دبلوماسية رصينة تستلهم سيدي بوسعيد وتتكيف مع سياق نواكشوط.'
    },
    details: {
      fr: [
        'L’ambassade de Tunisie à Nouakchott fait partie des références diplomatiques marquantes du bureau. Le projet, conçu en groupement avec BICA, associe des volumes blancs épurés à des accents méditerranéens qui ancrent l’ensemble dans une culture architecturale identifiable sans céder au décoratif.',
        'La mission confiée à MCB porte sur les études, l’APS, l’APD et le dossier d’exécution. Elle suppose une attention particulière à la représentation institutionnelle, à la sécurité, ainsi qu’à la qualité d’usage d’un lieu à la fois protocolaire et quotidien.',
        'Cette opération atteste d’une capacité à travailler sur des programmes où la dimension symbolique est indissociable de la rigueur technique, et où la présence d’un partenaire local compétent conditionne la bonne traduction du projet sur le terrain.'
      ],
      en: [
        'The Embassy of Tunisia in Nouakchott is one of the office’s notable diplomatic references. Designed in association with BICA, the project combines purified white volumes with Mediterranean accents, grounding the complex in a recognisable architectural culture without becoming decorative.',
        'MCB’s role covered the studies, preliminary design, developed design and execution documents. The mission required particular attention to institutional representation, security, and the quality of everyday use in a place that is both ceremonial and practical.',
        'The operation confirms the office’s ability to work on programmes where symbolic dimension is inseparable from technical rigour, and where the presence of a capable local counterpart is essential to the project’s faithful translation on site.'
      ],
      ar: [
        'تُعد سفارة تونس في نواكشوط من أبرز المرجعيات الدبلوماسية للمكتب. وقد جُمعت في المشروع، المصمم بالشراكة مع BICA، كتل بيضاء صافية مع لمسات متوسطية تمنح المركب هوية معمارية واضحة من دون انزلاق نحو الزخرفة.',
        'شملت مهمة MCB الدراسات والتصميم الأولي والمتقدم وملف التنفيذ. وقد استدعى ذلك عناية خاصة بالتمثيل المؤسسي وبالاعتبارات الأمنية وبجودة الاستعمال اليومي لمكان يجمع بين الطابع البروتوكولي والوظيفة العملية.',
        'ويؤكد هذا المشروع قدرة المكتب على الاشتغال على برامج تكون فيها الرمزية ملازمة للصرامة التقنية، ويكون فيها حضور شريك محلي كفء شرطاً أساسياً لحسن ترجمة المشروع في موقعه.'
      ]
    },
    facts: {
      fr: {
        mission: 'Études, APS, APD et dossier d’exécution',
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
      fr: 'Pavillon d’exposition',
      en: 'Exhibition pavilion',
      ar: 'جناح عرض'
    },
    location: {
      fr: 'Saragosse, Espagne',
      en: 'Zaragoza, Spain',
      ar: 'سرقسطة، إسبانيا'
    },
    title: {
      fr: 'Pavillon de la Mauritanie à l’Expo ZAR08',
      en: 'Mauritania Pavilion at Expo ZAR08',
      ar: 'جناح موريتانيا في معرض ZAR08'
    },
    excerpt: {
      fr: 'À Saragosse, MCB conçoit et suit la réalisation du pavillon mauritanien pour l’Expo ZAR08, projet de représentation internationale où espace, image et narration doivent se répondre.',
      en: 'In Zaragoza, MCB designed and supervised the Mauritanian pavilion for Expo ZAR08, an international representation project where space, image and narrative had to work together.',
      ar: 'في سرقسطة، صمم MCB وتابع إنجاز الجناح الموريتاني لمعرض ZAR08، وهو مشروع تمثيل دولي تتكامل فيه الفضاءات والصورة والسرد.'
    },
    details: {
      fr: [
        'Le pavillon de la Mauritanie à l’Expo ZAR08 prolonge l’activité du bureau dans un registre particulier : celui de l’architecture événementielle et de la représentation nationale à l’international. Le projet devait tenir ensemble lisibilité spatiale, identité culturelle et contraintes d’un calendrier resserré.',
        'MCB assure les études, les phases APS et APD, le dossier d’exécution ainsi que le suivi des travaux. À cette échelle, la relation entre architecture, scénographie et récit du pays exposant devient un enjeu central.',
        'Cette référence complète utilement le panorama des réalisations du bureau : elle montre qu’une pratique enracinée dans le territoire mauritanien peut également prendre en charge des dispositifs temporaires ou représentatifs, dès lors qu’ils exigent rigueur, cohérence et présence effective jusqu’au chantier.'
      ],
      en: [
        'The Mauritania Pavilion at Expo ZAR08 extends the office’s activity into a particular register: event architecture and international national representation. The project had to bring together spatial legibility, cultural identity and the constraints of a compressed schedule.',
        'MCB carried out the studies, preliminary and developed design, execution documents and construction supervision. At this scale, the relationship between architecture, exhibition design and the narrative of the represented country became central.',
        'The reference usefully broadens the spectrum of the office’s work: it shows that a practice rooted in the Mauritanian territory can also take on temporary or representative devices whenever they require rigour, coherence and sustained involvement through construction.'
      ],
      ar: [
        'يوسّع جناح موريتانيا في معرض ZAR08 مجال نشاط المكتب نحو نوع خاص من المشاريع: عمارة الفعاليات والتمثيل الوطني على الصعيد الدولي. وكان على المشروع أن يجمع بين وضوح الفضاء والهوية الثقافية ومتطلبات جدول زمني مضغوط.',
        'تكفّل MCB بالدراسات والتصميم الأولي والمتقدم وملف التنفيذ ومتابعة الأشغال. وفي هذا المستوى، تصبح العلاقة بين العمارة والسينوغرافيا والسرد الخاص بالبلد المُمثَّل مسألة مركزية.',
        'وتكمل هذه المرجعية صورة أعمال المكتب بشكل مفيد، إذ تبرز أن ممارسة متجذرة في المجال الموريتاني قادرة أيضاً على مواكبة أجهزة مؤقتة أو تمثيلية كلما تطلبت الصرامة والاتساق والحضور الفعلي حتى لحظة الإنجاز.'
      ]
    },
    facts: {
      fr: {
        mission: 'Études, APS, APD, dossier d’exécution et suivi des travaux',
        client: 'Ministère de l’Industrie et du Commerce',
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
      fr: 'Construire l’architecture institutionnelle en Mauritanie depuis les années 1990',
      en: 'Building institutional architecture in Mauritania since the 1990s',
      ar: 'بناء العمارة المؤسسية في موريتانيا منذ تسعينيات القرن الماضي'
    },
    excerpt: {
      fr: 'L’architecture institutionnelle n’est pas un simple exercice de représentation. En Mauritanie, elle accompagne la mise en place d’administrations, de services publics et d’équipements qui donnent une forme durable à l’action collective.',
      en: 'Institutional architecture is not merely a representational exercise. In Mauritania, it accompanies the formation of administrations, public services and facilities that give durable form to collective action.',
      ar: 'ليست العمارة المؤسسية مجرد واجهة تمثيلية. ففي موريتانيا، ترافق بناء الإدارات والخدمات العمومية والتجهيزات التي تمنح الفعل الجماعي شكلاً دائماً.'
    },
    body: {
      fr: [
        'Depuis les années 1990, la question de l’architecture institutionnelle en Mauritanie ne peut être lue seulement comme une affaire de style. Elle relève d’abord d’une histoire de mise en place progressive des administrations, d’organisation du service public et de fabrication d’une présence matérielle de l’institution dans la ville. Un siège, une école, un centre de formation ou une ambassade ne sont pas seulement des enveloppes ; ils ordonnent des usages, hiérarchisent des accès, construisent une image de stabilité et rendent l’action publique lisible.',
        'Dans un contexte où les ressources restent comptées et où les programmes se développent souvent par séquences, l’architecture institutionnelle doit articuler économie des moyens et clarté de l’expression. Cela conduit moins à la monumentalité qu’à une certaine tenue : des plans compréhensibles, des circulations bien hiérarchisées, une relation juste au climat et une matérialité suffisamment robuste pour traverser le temps. Les meilleures réalisations ne sont pas les plus démonstratives ; ce sont celles qui supportent durablement des usages parfois intensifs, tout en affirmant une dignité publique.',
        'Cette dimension est particulièrement sensible dans les projets éducatifs et administratifs. Un lycée n’est pas seulement un ensemble de salles de classe ; il organise une vie collective, des flux quotidiens et un rapport à l’espace public. Un centre de formation ne se réduit pas à un équipement technique ; il représente aussi une certaine idée du progrès et de l’accès au savoir. Quant aux programmes diplomatiques, ils introduisent une couche supplémentaire : la représentation d’un État devant un autre, avec tout ce que cela suppose de retenue, de lisibilité et de précision.',
        'Ce qui importe, dans cette histoire, est la continuité. L’architecture institutionnelle se construit rarement dans l’éclat d’un geste unique. Elle résulte d’accumulations, d’ajustements et d’une connaissance fine des conditions locales. C’est pourquoi l’expérience compte. Un bureau qui accompagne plusieurs générations de programmes acquiert non seulement des références, mais une intelligence des procédures, des temporalités administratives et des arbitrages techniques qui conditionnent la qualité réelle du bâti.',
        'En ce sens, parler d’architecture institutionnelle en Mauritanie revient moins à célébrer quelques objets isolés qu’à reconnaître une culture de projet. Cette culture fait tenir ensemble la commande publique, les contraintes d’exécution, la valeur d’usage et la tenue symbolique. Lorsqu’elle est maîtrisée, elle produit des bâtiments discrets mais durables : des architectures qui ne cherchent pas l’effet, mais qui inscrivent l’institution dans le temps long du territoire.'
      ],
      en: [
        'Since the 1990s, institutional architecture in Mauritania cannot be read only as a question of style. It is first a story of the gradual formation of administrations, the organisation of public service and the construction of a material presence of institutions in the city. A headquarters, a school, a training centre or an embassy are not merely envelopes; they organise uses, structure access and make collective action legible over time.',
        'In a context where resources remain measured and programmes often develop in stages, institutional architecture must reconcile economy of means with clarity of expression. This leads less to monumentality than to a certain composure: plans that are easy to read, clearly ordered circulation, a just response to climate and a materiality robust enough to endure. The strongest projects are not the most demonstrative; they are those able to sustain intensive uses while maintaining public dignity.',
        'This is especially visible in educational and administrative projects. A high school is not simply a set of classrooms; it organises collective life, daily flows and a relationship to public space. A training centre is more than a technical facility; it also embodies an idea of progress and access to knowledge. Diplomatic programmes add another layer still: the representation of one state before another, with all the restraint, legibility and precision that such a role implies.',
        'What matters in this history is continuity. Institutional architecture is rarely built through the brilliance of a single gesture. It results from accumulations, adjustments and a fine understanding of local conditions. This is why experience matters. An office that accompanies several generations of programmes acquires not only references, but an understanding of procedures, administrative timeframes and technical arbitrations that condition the actual quality of the built outcome.',
        'In that sense, speaking of institutional architecture in Mauritania is less about celebrating isolated objects than about recognising a project culture. That culture holds together public commission, implementation constraints, usefulness and symbolic composure. When mastered, it produces discreet yet durable buildings: architectures that do not seek effect, but place the institution within the long time of the territory.'
      ],
      ar: [
        'منذ تسعينيات القرن الماضي، لا يمكن قراءة مسألة العمارة المؤسسية في موريتانيا بوصفها مجرد سؤال أسلوبي. فهي قبل كل شيء تاريخٌ لتدرج بناء الإدارات وتنظيم الخدمة العمومية وصناعة حضور مادي للمؤسسة داخل المدينة. فالمقر أو المدرسة أو مركز التكوين أو السفارة ليست مجرد أغلفة، بل فضاءات تنظم الاستعمالات وتضبط الولوج وتمنح الفعل الجماعي قابلية للقراءة والاستمرار.',
        'في سياق تبقى فيه الموارد محدودة وتتطور فيه البرامج على مراحل، يتعين على العمارة المؤسسية أن تجمع بين اقتصاد الوسائل ووضوح التعبير. وهذا يقود أقل إلى النزعة التذكارية وأكثر إلى نوع من الاتزان: مخططات واضحة، وحركات سير مرتبة، واستجابة عادلة للمناخ، ومادية متينة قادرة على الصمود. وأفضل الإنجازات ليست بالضرورة الأكثر استعراضاً، بل تلك القادرة على احتضان الاستعمالات المكثفة مع الحفاظ على كرامة المرفق العام.',
        'وتتضح هذه المسألة على نحو خاص في المشاريع التعليمية والإدارية. فالثانوية ليست فقط مجموعة أقسام، بل هي تنظيم لحياة جماعية وتدفقات يومية وعلاقة بالفضاء العام. كما أن مركز التكوين لا يختزل في كونه تجهيزاً تقنياً، بل يجسد أيضاً فكرة عن التقدم وإتاحة المعرفة. أما البرامج الدبلوماسية فتضيف طبقة أخرى: تمثيل دولة أمام أخرى، بكل ما يقتضيه ذلك من رصانة ووضوح ودقة.',
        'وما يهم في هذا التاريخ هو الاستمرارية. فالعمارة المؤسسية نادراً ما تُبنى على وهج لفتة وحيدة. إنها حصيلة تراكمات وتعديلات وفهم دقيق للشروط المحلية. لذلك تكتسب الخبرة أهميتها. فالمكتب الذي يواكب أجيالاً متعددة من البرامج لا يراكم المرجعيات فقط، بل يراكم أيضاً معرفة بالإجراءات والإيقاعات الإدارية والتحكيمات التقنية التي تحدد الجودة الفعلية للبناء.',
        'ومن هذا المنظور، فإن الحديث عن العمارة المؤسسية في موريتانيا يعني الاعتراف بثقافة مشروع أكثر مما يعني الاحتفاء بأشياء منفصلة. وهي ثقافة تجمع بين الطلب العمومي وقيود التنفيذ وقيمة الاستعمال والرصانة الرمزية. وعندما تُحسن إدارتها، تنتج مباني متحفظة لكنها دائمة: عمارات لا تسعى إلى التأثير العابر، بل تُدرج المؤسسة في الزمن الطويل للمجال.'
      ]
    }
  },
  {
    slug: 'cooperation-internationale-maitrise-doeuvre-locale',
    date: '11 mars 2025',
    dateEn: '11 March 2025',
    dateAr: '11 مارس 2025',
    title: {
      fr: 'Coopération internationale et maîtrise d’œuvre locale : retours d’expérience',
      en: 'International cooperation and local project leadership: lessons from practice',
      ar: 'التعاون الدولي والإشراف المحلي على المشاريع: دروس من الممارسة'
    },
    excerpt: {
      fr: 'Dans les projets financés par des bailleurs ou portés avec des partenaires étrangers, la qualité du relais local conditionne souvent la réussite de l’opération.',
      en: 'In projects financed by development partners or delivered with foreign consultants, the quality of the local counterpart often determines the project’s success.',
      ar: 'في المشاريع الممولة من الجهات المانحة أو المنجزة مع شركاء أجانب، غالباً ما تحدد جودة الشريك المحلي نجاح العملية.'
    },
    body: {
      fr: [
        'Les projets conduits avec des bailleurs internationaux ou des partenaires étrangers sont souvent décrits à travers leurs procédures : appels d’offres, cadres logiques, revues, missions de contrôle. Pourtant, une part décisive de leur réussite se joue ailleurs, dans la qualité de l’interface locale. C’est à ce niveau que se traduisent les documents en décisions opératoires, que les intentions se confrontent aux réalités du terrain et que la continuité du projet peut être préservée malgré les changements d’interlocuteurs.',
        'Être partenaire local ne signifie pas seulement représenter un projet sur place. Cela implique une connaissance des administrations, des entreprises, des circuits d’approvisionnement et des temporalités effectives du chantier. Dans des contextes où la logistique, la disponibilité des matériaux ou l’évolution réglementaire peuvent influer fortement sur le calendrier, cette connaissance n’est pas secondaire : elle est une condition de faisabilité.',
        'L’enjeu n’est pas d’opposer expertise internationale et compétence locale, mais de comprendre leur complémentarité. Les meilleures coopérations sont celles où le cadre méthodologique, les exigences de qualité et la vision d’ensemble portés par les partenaires extérieurs rencontrent une capacité locale de traduction, d’adaptation et de présence continue. Cette présence est indispensable au moment des arbitrages, des vérifications, des ajustements en cours de chantier et du dialogue avec les entreprises.',
        'Dans le domaine de l’architecture et des infrastructures, cette articulation devient encore plus sensible. Une étude peut être techniquement impeccable et pourtant demeurer partiellement abstraite si elle n’est pas confrontée à l’état du site, aux pratiques constructives, aux coûts réels et aux séquences d’exécution possibles. La valeur du relais local réside précisément dans cette mise en correspondance entre la qualité documentaire d’un projet et sa possibilité concrète de réalisation.',
        'Pour les maîtres d’ouvrage, bailleurs et partenaires étrangers, le choix d’un bureau local expérimenté ne relève donc pas d’une simple exigence administrative. Il constitue un investissement dans la continuité du projet. Lorsqu’il existe, il réduit les angles morts, sécurise les échanges et permet à l’opération d’avancer avec plus de précision, mais aussi avec plus de justesse vis-à-vis du territoire où elle s’inscrit.'
      ],
      en: [
        'Projects carried out with international donors or foreign partners are often described through their procedures: tenders, logical frameworks, reviews and supervision missions. Yet a decisive part of their success is played elsewhere, in the quality of the local interface. It is at this level that documents are turned into operational decisions, intentions are tested against field realities and continuity can be preserved despite changes in counterparts.',
        'Being a local counterpart does not simply mean representing a project on site. It implies knowledge of administrations, contractors, supply chains and the actual rhythms of construction. In contexts where logistics, material availability or regulatory evolution can significantly affect schedules, such knowledge is not secondary; it is a condition of feasibility.',
        'The point is not to oppose international expertise and local competence, but to understand their complementarity. The strongest cooperations are those in which methodological frameworks, quality requirements and strategic vision brought by external partners meet a local capacity for translation, adaptation and sustained presence. That presence is essential when decisions must be made, checks undertaken, site adjustments introduced and dialogue with contractors maintained.',
        'In architecture and infrastructure, this articulation becomes even more sensitive. A study may be technically impeccable and still remain partly abstract if it is not confronted with site conditions, construction practices, real costs and possible implementation sequences. The value of the local counterpart lies precisely in this correspondence between the documentary quality of a project and its concrete possibility of realisation.',
        'For clients, donors and foreign teams, choosing an experienced local office is therefore not a mere administrative requirement. It is an investment in project continuity. When present, it reduces blind spots, secures exchanges and allows the operation to move forward with greater precision and greater fairness toward the territory in which it is anchored.'
      ],
      ar: [
        'غالباً ما توصف المشاريع المنجزة مع الجهات المانحة الدولية أو الشركاء الأجانب من خلال إجراءاتها: طلبات العروض، والأطر المنطقية، والمراجعات، ومهام المراقبة. غير أن جزءاً حاسماً من نجاحها يُحسم في مكان آخر، أي في جودة الواجهة المحلية. فعند هذا المستوى تتحول الوثائق إلى قرارات عملية، وتُختبر النوايا في ضوء واقع الميدان، وتُصان استمرارية المشروع رغم تبدّل المخاطَبين.',
        'ولا يعني القيام بدور الشريك المحلي مجرد تمثيل المشروع في الموقع، بل يفترض معرفة بالإدارات والمقاولات وسلاسل التوريد والإيقاعات الفعلية للورشات. وفي سياقات يمكن أن تؤثر فيها اللوجستيات أو توفر المواد أو التطور التنظيمي بقوة في الآجال، لا تعد هذه المعرفة مسألة ثانوية، بل شرطاً من شروط القابلية للتنفيذ.',
        'ولا يتعلق الأمر بمقابلة الخبرة الدولية بالكفاءة المحلية، بل بفهم تكاملهما. فأفضل أشكال التعاون هي تلك التي يلتقي فيها الإطار المنهجي ومتطلبات الجودة والرؤية العامة القادمة من الخارج مع قدرة محلية على الترجمة والتكييف والحضور المستمر. ويصبح هذا الحضور أساسياً عند اتخاذ القرارات والتحقق من المعطيات وإدخال التعديلات أثناء الورش والحفاظ على الحوار مع المقاولات.',
        'وفي مجالي العمارة والبنية التحتية، يصبح هذا الترابط أكثر حساسية. فقد تكون الدراسة محكمة تقنياً لكنها تظل جزئياً مجردة إذا لم تُختبر وفق حالة الموقع وممارسات البناء والكلفة الحقيقية وتسلسل التنفيذ الممكن. وهنا تكمن قيمة الشريك المحلي: في ربط الجودة الوثائقية للمشروع بإمكان تحققه الفعلي.',
        'وبالنسبة لأصحاب المشاريع والجهات المانحة والفرق الأجنبية، فإن اختيار مكتب محلي ذي خبرة ليس مجرد مطلب إداري، بل استثمار في استمرارية المشروع. وعندما يكون هذا الحضور متوفراً، فإنه يقلص مناطق الغموض، ويؤمن التبادل، ويسمح بتقدم العملية بدقة أكبر وبملاءمة أعدل مع المجال الذي تندرج فيه.'
      ]
    }
  },
  {
    slug: 'nouakchott-expansion-urbaine-milieu-cotier',
    date: '7 février 2025',
    dateEn: '7 February 2025',
    dateAr: '7 فبراير 2025',
    title: {
      fr: 'Nouakchott face au défi de l’expansion urbaine en milieu côtier',
      en: 'Nouakchott and the challenge of urban expansion in a coastal environment',
      ar: 'نواكشوط وتحدي التوسع الحضري في بيئة ساحلية'
    },
    excerpt: {
      fr: 'Ville en croissance rapide, Nouakchott doit concilier extension urbaine, vulnérabilité environnementale et besoin d’équipements structurants.',
      en: 'As a rapidly growing city, Nouakchott must reconcile urban expansion, environmental vulnerability and the need for structuring facilities.',
      ar: 'بوصفها مدينة سريعة النمو، يتعين على نواكشوط التوفيق بين التوسع الحضري والهشاشة البيئية والحاجة إلى تجهيزات مهيكلة.'
    },
    body: {
      fr: [
        'L’expansion de Nouakchott est l’un des faits majeurs de la transformation territoriale mauritanienne contemporaine. La ville concentre la population, les administrations, une part croissante des investissements et une pression foncière continue. Cette croissance est porteuse d’opportunités, mais elle crée aussi des déséquilibres : éloignement des centralités, extension des réseaux, inégalités d’accès aux équipements et exposition renforcée aux risques environnementaux.',
        'Le caractère côtier de Nouakchott ajoute une dimension décisive à cette équation. Le rapport à la mer, aux dunes, aux zones basses et aux dynamiques d’ensablement ou d’inondation oblige à penser la croissance non comme une simple addition de quartiers, mais comme une composition plus fine entre infrastructures, paysages et modes d’occupation du sol. Dans ce cadre, la planification urbaine ne peut être dissociée de la gestion environnementale.',
        'Les projets urbains et architecturaux prennent alors une responsabilité particulière. Un master plan, un équipement universitaire, une voie structurante ou un développement en front de mer ne valent pas seulement pour leur fonctionnalité propre. Ils introduisent des formes d’organisation, créent de nouvelles polarités et participent à la manière dont la ville se distribue dans l’espace. Chaque projet important engage donc une réflexion sur la ville entière, même lorsqu’il se présente à l’échelle d’une parcelle ou d’un programme spécifique.',
        'Pour cela, Nouakchott a besoin d’une culture de projet qui fasse dialoguer étude urbaine, faisabilité technique et connaissance fine du territoire. Il ne s’agit pas seulement de prévoir des extensions, mais d’anticiper leurs effets : sur la mobilité, sur les réseaux, sur les usages quotidiens et sur les équilibres fragiles du milieu côtier. Les approches fragmentaires produisent souvent des coûts différés ; les approches coordonnées, au contraire, permettent de donner de la cohérence à des dynamiques qui, sans cela, restent dispersées.',
        'Le défi n’est donc pas uniquement de construire davantage, mais de construire avec discernement. Dans une ville comme Nouakchott, la qualité des décisions amont — localisation, séquençage, articulation avec les infrastructures et prise en compte des contraintes environnementales — détermine souvent davantage l’avenir urbain que la seule qualité formelle des bâtiments. C’est à cet endroit que l’urbanisme, l’architecture et la stratégie territoriale se rejoignent réellement.'
      ],
      en: [
        'Nouakchott’s expansion is one of the major facts of contemporary territorial transformation in Mauritania. The city concentrates population, administrations, a growing share of investment and constant land pressure. This growth opens opportunities, but it also creates imbalances: greater distance from centralities, network extension costs, unequal access to facilities and heightened exposure to environmental risks.',
        'Nouakchott’s coastal character adds a decisive dimension to this equation. Its relationship to the sea, dunes, low-lying areas and processes of sand encroachment or flooding requires growth to be conceived not as a simple accumulation of neighbourhoods, but as a more careful composition between infrastructure, landscape and land occupation. In that sense, urban planning cannot be separated from environmental management.',
        'Urban and architectural projects therefore assume a particular responsibility. A master plan, a university facility, a major road or a seafront development matter not only for their own function. They introduce new forms of organisation, create polarities and participate in the way the city distributes itself in space. Every significant project thus implies a reflection on the whole city, even when it appears at the scale of a parcel or a single programme.',
        'For this, Nouakchott needs a project culture able to connect urban study, technical feasibility and deep territorial knowledge. It is not only a matter of planning extensions, but of anticipating their effects: on mobility, on networks, on daily uses and on the fragile balances of the coastal environment. Fragmented approaches often generate deferred costs; coordinated approaches, by contrast, can give coherence to otherwise dispersed dynamics.',
        'The challenge, then, is not only to build more, but to build with discernment. In a city such as Nouakchott, the quality of upstream decisions — siting, sequencing, articulation with infrastructure and acknowledgement of environmental constraints — often determines the urban future more than the formal quality of buildings alone. It is precisely at this point that urbanism, architecture and territorial strategy truly meet.'
      ],
      ar: [
        'يمثل توسع نواكشوط أحد أبرز مظاهر التحول الترابي المعاصر في موريتانيا. فالمدينة تركز السكان والإدارات ونسبة متزايدة من الاستثمارات، كما تخضع لضغط عقاري متواصل. ويتيح هذا النمو فرصاً مهمة، لكنه يخلق أيضاً اختلالات: اتساع المسافات عن المراكز، وكلفة تمديد الشبكات، والتفاوت في الولوج إلى التجهيزات، وتعاظم التعرض للمخاطر البيئية.',
        'ويضيف الطابع الساحلي لنواكشوط بعداً حاسماً إلى هذه المعادلة. فالعلاقة بالبحر والكثبان والمناطق المنخفضة وديناميات زحف الرمال أو الفيضانات تفرض التفكير في النمو لا باعتباره مجرد إضافة أحياء، بل كتركيب أدق بين البنية التحتية والمناظر الطبيعية وأنماط استعمال الأرض. ومن ثم لا يمكن فصل التخطيط الحضري عن التدبير البيئي.',
        'وتكتسب المشاريع الحضرية والمعمارية تبعاً لذلك مسؤولية خاصة. فالمخطط العام أو التجهيز الجامعي أو الطريق المهيكل أو التطوير الساحلي لا تقتصر أهميته على وظيفته المباشرة، بل يقدّم أشكالاً جديدة للتنظيم ويخلق مراكز جذب ويسهم في كيفية توزع المدينة في المجال. وكل مشروع مهم يقتضي إذاً تفكيراً في المدينة بكاملها، حتى حين يظهر في مقياس قطعة أرض أو برنامج مفرد.',
        'ومن أجل ذلك، تحتاج نواكشوط إلى ثقافة مشروع تربط بين الدراسة الحضرية والجدوى التقنية والمعرفة الدقيقة بالمجال. فالمطلوب ليس فقط توقع التمددات، بل استباق آثارها على التنقل والشبكات والاستعمالات اليومية وعلى التوازنات الهشة للبيئة الساحلية. وغالباً ما تنتج المقاربات المجزأة كلفاً مؤجلة، بينما تسمح المقاربات المنسقة بإضفاء قدر من الاتساق على ديناميات متفرقة.',
        'لذلك فالتحدي لا يتمثل فقط في البناء أكثر، بل في البناء بتمييز. ففي مدينة مثل نواكشوط، تحدد جودة القرارات السابقة — من اختيار الموقع وتسلسل التنفيذ وربط المشروع بالبنية التحتية وأخذ القيود البيئية في الاعتبار — مستقبل المدينة بدرجة قد تفوق الجودة الشكلية للمباني نفسها. وهنا بالضبط يلتقي التخطيط الحضري والعمارة والاستراتيجية الترابية.'
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
      fr: 'Programme Urbain de Référence de Néma et d’Aioun.',
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
