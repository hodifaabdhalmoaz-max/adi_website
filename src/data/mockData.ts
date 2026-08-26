import { ServiceItem, ProjectItem, NewsArticle, JobPosition } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'desktop',
    titleAr: 'تطبيقات سطح المكتب',
    titleEn: 'Desktop Applications',
    subtitleAr: 'حلول برمجية عالية الأداء لأنظمة Windows, macOS, و Linux',
    descriptionAr: 'نقوم بتطوير تطبيقات سطح مكتب فائقة السرعة والأمان، تدمج بين واجهات المستخدم الحديثة وأقصى درجات استغلال إمكانيات الأجهزة، سواء باستخدام Electron, Tauri, Qt, أو النواة المباشرة C++/C#.',
    technologies: ['Tauri', 'Electron', 'Qt / C++', 'C# / .NET', 'Rust', 'React Native Desktop'],
    features: [
      'معالجة البيانات في الوقت الفعلي بأقل استهلاك لذاكرة RAM',
      'تكامل تام مع الملحقات الطبية، الصناعية، وأجهزة الطرفيات',
      'تشفير كامل وحماية أمنية للبيانات الحساسة بدون اتصال بالنت',
      'تحديثات تلقائية آمنة خلف الكواليس'
    ],
    metrics: [
      { label: 'أداء الاستجابة', value: '< 5ms' },
      { label: 'استهلاك الذاكرة', value: 'خفيف جداً' },
      { label: 'التوافقية', value: '100% Cross-Platform' }
    ],
    color: '#06B6D4' // Cyan
  },
  {
    id: 'mobile',
    titleAr: 'تطبيقات الجوال والذكاء الاصطناعي',
    titleEn: 'Mobile Applications',
    subtitleAr: 'تطبيقات جوال مبتكرة لنظامي iOS و Android بلمسة عالمية',
    descriptionAr: 'نبني تطبيقات جوال توفر تجربة مستخدم سلسة مع محركات رسومية تفاعلية، دعم كامل للعمل بدون اتصال، وربط مباشر مع الحساسات ومحركات الذكاء الاصطناعي على الجهاز.',
    technologies: ['Swift / iOS', 'Kotlin / Android', 'Flutter', 'React Native', 'CoreML / TensorFlow Lite'],
    features: [
      'حركات ميكروية سلسة بسرعة 120 FPS على الشاشات الحديثة',
      'إشعارات ذكية مخصصة وسلسلة عمليات دفع متكاملة',
      'أمان بيومتري (FaceID / TouchID) وتشفير البيانات',
      'مزامنة فورية عبر السحاب مع التعامل الذكي مع انقطاع الشبكة'
    ],
    metrics: [
      { label: 'سلاسة الحركة', value: '120 FPS' },
      { label: 'تقييم رضا المستخدمين', value: '4.9★' },
      { label: 'وقت الإطلاق', value: 'سريع للغاية' }
    ],
    color: '#8B5CF6' // Purple
  },
  {
    id: 'web',
    titleAr: 'المواقع والمنصات الإلكترونية',
    titleEn: 'Web Platforms & Apps',
    subtitleAr: 'منصات ويب فائقة الأداء تعتمد تكنولوجيا Next.js و WebGL',
    descriptionAr: 'نصمم ونطور منصات ويب تفاعلية فائقة الجمال والأداء، تعتمد على التقديم السحابي السريع (SSR/ISR) وتجربة تفاعلية ثلاثية الأبعاد تبهر زوار موقعك من اللحظة الأولى.',
    technologies: ['Next.js 14', 'React', 'TypeScript', 'Three.js / WebGL', 'Tailwind CSS', 'Sanity CMS'],
    features: [
      'تفاعل WebGL ثلاثي الأبعاد يعطي تجربة فاخرة',
      'سرعة تحميل فائقة وتجاوب تام مع معايير SEO',
      'بنية دقيقة موزعة على شبكات الحافة (Edge CDN)',
      'نظام إدارة محتوى لارأسي مرن (Headless CMS)'
    ],
    metrics: [
      { label: 'سرعة التحميل TTFB', value: '< 40ms' },
      { label: 'درجة Lighthouse', value: '99/100' },
      { label: 'التوفر السحابي', value: '99.99%' }
    ],
    color: '#6366F1' // Indigo
  },
  {
    id: 'solutions',
    titleAr: 'الحلول التقنية والبنية السحابية',
    titleEn: 'Enterprise Tech Solutions',
    subtitleAr: 'بنية تحتية متكاملة وحلول تحول رقمي للمؤسسات الكبرى',
    descriptionAr: 'نقدم حلول هندسة البرمجيات المعقدة، بناء الدعم السحابي المتوسع، تحليلات الذكاء الاصطناعي، وإعادة هيكلة الأنظمة القديمة لتمكين المؤسسات من النمو الرقمي بلا حدود.',
    technologies: ['AWS / Cloudflare', 'Docker / Kubernetes', 'PostgreSQL / Redis', 'Microservices', 'Python AI / PyTorch'],
    features: [
      'بنية تحتية مرنة تتحمل ملايين الزيارات والتداولات',
      'نظم أمان سيبراني متقدمة واختبارات اختراق دورية',
      'تكامل الذكاء الاصطناعي التوليدي والتحليلات التنبؤية',
      'مراقبة فورية للأنظمة 24/7 مع حماية ضد DDoS'
    ],
    metrics: [
      { label: 'قدرة التوسع', value: 'Infinite Scale' },
      { label: 'أمان البيانات', value: 'Enterprise Grade' },
      { label: 'دعم المعالجة', value: 'اللحظي 24/7' }
    ],
    color: '#10B981' // Emerald
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: 'pulse-desktop-suite',
    title: 'نظام Pulse للتحكم والتحليل الصناعي',
    category: 'desktop',
    categoryLabel: 'تطبيق سطح مكتب',
    client: 'شركة أرامكس للحلول اللوجستية',
    summary: 'برنامج سطح مكتب فائق الأداء لمراقبة والتحكم في الأجهزة اللوجستية والطرفيات في الوقت الفعلي مع تشفير تام.',
    description: 'تم تصميم Pulse ليحل محل الأنظمة القديمة، حيث يوفر واجهة تفاعلية ثلاثية الأبعاد لمراقبة الشحنات والمعدات الصناعية، مع استهلاك لا يتجاوز 45 ميجابايت من ذاكرة RAM.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    previewVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-42894-large.mp4',
    techStack: ['Tauri', 'Rust', 'React', 'Three.js', 'WebSockets'],
    metrics: [
      { label: 'تحسين كفاءة العمليات', value: '+340%' },
      { label: 'تقليل خفض استهلاك RAM', value: '-85%' },
      { label: 'معالجة البيانات', value: '1M+/sec' }
    ],
    year: '2026',
    featured: true
  },
  {
    id: 'nexus-banking-app',
    title: 'تطبيق Nexus للخدمات المصرفية الذكية',
    category: 'mobile',
    categoryLabel: 'تطبيق جوال',
    client: 'بنك الاستثمار الرقمي',
    summary: 'تطبيق جوال مصرفي فائق الأمان مع محرك توصيات بالذكاء الاصطناعي وتصميم ثلاثي الأبعاد تفاعلي.',
    description: 'تطبيق جوال يعيد تعريف التجربة البنكية الرقمية، حيث يتيح التحويلات الفورية، التشفير البيومتري المتقدم، والتعرف الذكي على سلوك الإنفاق.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    previewVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smartphone-with-green-screen-41225-large.mp4',
    techStack: ['Flutter', 'Swift', 'Kotlin', 'TensorFlow Lite', 'Secure Enclave'],
    metrics: [
      { label: 'عدد المستخدمين النشطين', value: '2.5M+' },
      { label: 'درجة التقييم على الستور', value: '4.9/5' },
      { label: 'وقت التنفيذ', value: '0.2s' }
    ],
    year: '2025',
    featured: true
  },
  {
    id: 'aura-luxury-platform',
    title: 'منصة Aura للمنتجات الفاخرة والتسوق T3D',
    category: 'web',
    categoryLabel: 'منصة ويب تفاعلية',
    client: 'مجموعة Aura العالمية',
    summary: 'منصة إلكترونية تجارية تدمج بين التصفح ثلاثي الأبعاد WebGL، السرعة الفائقة، وتوليد البطاقات التفاعلية.',
    description: 'تعتمد منصة Aura على تجربة ثلاثية الأبعاد تفاعلية تمكن المستخدمين من معاينة المنتجات الفاخرة بزاوية 360 درجة، وتجربة الساعات والمجوهرات افتراضياً قبل الشراء.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    previewVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-animation-of-futuristic-devices-99786-large.mp4',
    techStack: ['Next.js 14', 'React Three Fiber', 'Tailwind', 'Sanity CMS', 'Shopify API'],
    metrics: [
      { label: 'ارتفاع معدل التحويل', value: '+180%' },
      { label: 'معدل التفاعل في الصفحة', value: '4.2 min' },
      { label: 'أداء التصفح', value: '60 FPS' }
    ],
    year: '2026',
    featured: true
  },
  {
    id: 'cyber-vault-solution',
    title: 'منظومة CyberVault للأمن والحماية السحابية',
    category: 'solutions',
    categoryLabel: 'حلول تقنية وبنية سحابية',
    client: 'هيئة التقنية الوطنية',
    summary: 'حل تقني شامل لتأمين وحماية البيانات الحساسة والبنية التحتية ضد التهديدات السيبرانية المتقدمة.',
    description: 'نظام مراقبة وأمان وحماية يعتمد خوارزميات الذكاء الاصطناعي للتنبؤ بالهجمات والتصدي لها تلقائياً في أجزاء من الثانية مع تشفير البيانات المعقد.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    previewVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-data-41539-large.mp4',
    techStack: ['AWS', 'Kubernetes', 'Python AI', 'Zero Trust Architecture', 'Go'],
    metrics: [
      { label: 'معدل تصدي التهديدات', value: '99.99%' },
      { label: 'حجم البيانات المحمية', value: '50+ PB' },
      { label: 'زمن الاستجابة', value: '< 1ms' }
    ],
    year: '2025',
    featured: true
  }
];

export const newsArticlesData: NewsArticle[] = [
  {
    id: 'future-of-desktop-apps-2026',
    title: 'مستقبل تطبيقات سطح المكتب في 2026: كيف تعيد تقنية Tauri تشكيل الحلول البرمجية؟',
    category: 'desktop',
    categoryLabel: 'تطبيقات سطح المكتب',
    excerpt: 'استعراض تحليلي لكيفية استبدال الإطارات الثقيلة بتقنيات حديثة خفيفة الوزن توفر سرعة استجابة مذهلة.',
    content: 'تفاصيل المقال تناقش التطور الفائق في أداء تطبيقات سطح المكتب واستغلال قدرات محركات Rust والمكونات المدمجة...',
    date: '20 أغسطس 2026',
    readTime: '5 دقائق',
    author: 'م. أحمد العتيبي - رئيس قسم الهندسة في ADI',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'webgl-and-3d-ux-trends',
    title: 'ثورة الـ WebGL في تصميم واجهات المستخدم: تحويل التصفح إلى تجربة سينمائية',
    category: 'web',
    categoryLabel: 'منصات الويب',
    excerpt: 'كيف تساهم العناصر ثلاثية الأبعاد والتفاعل الحركي في زيادة رفع معدلات التحويل وزيادة بقاء الزوار.',
    content: 'الموقع الإلكتروني لم يعد مجرد صفحات ثابته، بل أصبح بيئة تفاعلية حية تمنح الزائر انطباعاً راقياً بمنتجات وخدمات الشركة...',
    date: '15 أغسطس 2026',
    readTime: '4 دقائق',
    author: 'سارة خالد - مدير تجربة المستخدم UI/UX',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mobile-ai-ondevice-processing',
    title: 'معالجة الذكاء الاصطناعي داخل الجوال مباشرة دون الحاجة للاتصال بالسحاب',
    category: 'mobile',
    categoryLabel: 'تطبيقات الجوال',
    excerpt: 'دراسة استخدام نماذج AI المدمجة في الهواتف لحماية خصوصية المستخدمين وتحقيق الاستجابة اللحظية.',
    content: 'مع تطور المعالجات الذكية في أجهزة الجوال الحديثة، أصبح بالإمكان تشغيل النماذج المعقدة محلياً بدرجة أمان عالية...',
    date: '10 أغسطس 2026',
    readTime: '6 دقائق',
    author: 'د. طارق السعيد - مستشار الذكاء الاصطناعي',
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80'
  }
];

export const jobPositionsData: JobPosition[] = [
  {
    id: 'senior-desktop-engineer',
    title: 'كبير مهندسي تطبيقات سطح المكتب (Senior Desktop Engineer - Rust/Tauri)',
    department: 'قسم البرمجيات الخاصة',
    location: 'الرياض (أو عن بُعد)',
    type: 'دوام كامل',
    experience: '+5 سنوات',
    description: 'نبحث عن مهندس برمجيات متخصص لبناء تطبيقات سطح مكتب فائقة السرعة واستغلال الإمكانيات العتادية للأجهزة.',
    requirements: [
      'خبرة متقدمة في بلغة Rust و C++ وتطوير المكونات المنخفضة المستوى',
      'خبرة عملية في إطار عمل Tauri أو Electron',
      'إتقان التعامل مع الذاكرة، التزامن، والاتصال بالأجهزة والملحقات الطرفية',
      'قدرة على تصميم معصومة ضد الأخطاء وبنية برمجية قابلة للاختبار والتوسع'
    ]
  },
  {
    id: 'senior-webgl-threejs-developer',
    title: 'مطوّر واجهات 3D وتفاعلية (Senior Three.js / WebGL Developer)',
    department: 'قسم الويب والتجارب التفاعلية',
    location: 'دبي / الرياض (هجين)',
    type: 'دوام كامل',
    experience: '+4 سنوات',
    description: 'نبحث عن مطوّر شغوف ببناء مشاهد 3D تفاعلية ومؤثرات بصرية ساحرة باستخدام Three.js و React Three Fiber.',
    requirements: [
      'إتقان تام لـ Three.js, React Three Fiber, GLSL Shaders, و WebGL',
      'خبرة في تحسين أداء 60 FPS على مختلف الأجهزة والجوالات',
      'معرفة واسعة بمحركات الفيزياء مثل Rapier أو Matter.js',
      'حس فني عالي وفهم عميق للحركة والـ Micro-interactions'
    ]
  },
  {
    id: 'mobile-lead-engineer',
    title: 'قائد فريق تطبيقات الجوال (Mobile Apps Lead Engineer - iOS/Flutter)',
    department: 'قسم الجوال',
    location: 'الرياض (دوام كامل)',
    type: 'دوام كامل',
    experience: '+6 سنوات',
    description: 'قيادة تطوير تطبيقات الجوال المتقدمة لعملائنا وتوجيه مهندسي التطبيقات لتطبيق أعلى معايير الجودة والأمان.',
    requirements: [
      'خبرة واسعة في تطوير تطبيقات iOS و Flutter المعقدة',
      'فهم عميق للهيكليات المتقدمة (Clean Architecture, MVVM, State Management)',
      'خبرة في دمج تقنيات التشفير والذكاء الاصطناعي On-Device',
      'مهارات قيادية وتواصل عالية جداً'
    ]
  }
];
