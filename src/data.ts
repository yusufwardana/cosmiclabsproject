import { Division, PortfolioItem, BlogPost, Testimonial, FAQItem, TimelineMilestone, ProcessStep } from "./types";

export const DIVISIONS: Division[] = [
  {
    id: "digital",
    title: "Digital Solutions",
    tagline: "High-Performance Web & Application Architectures",
    description: "We build modern, blazing fast, and conversion-optimized websites that serve as critical digital storefronts and operational powerhouses for modern businesses, government bodies, and schools.",
    icon: "Globe",
    gradient: "from-blue-500 via-indigo-500 to-violet-600",
    glowColor: "rgba(59, 130, 246, 0.15)",
    services: [
      {
        id: "web-corp",
        name: "Corporate & Enterprise Websites",
        description: "Tailored brand experiences with perfect SEO, custom interactions, and lightning-fast speed.",
        features: ["Awwwards-grade visual design", "Lighthouse 100/100 performance", "Headless CMS integration"]
      },
      {
        id: "edu-gov",
        name: "School & Government Portals",
        description: "Secure, highly accessible, and standardized portals designed to serve communities and manage directories.",
        features: ["WCAG Web Accessibility compliant", "High-traffic scalability", "Interactive public document libraries"]
      },
      {
        id: "custom-app",
        name: "Custom Web Applications & Admin Dashboards",
        description: "Dynamic SaaS platforms, booking systems, and specialized business logic modules custom-engineered.",
        features: ["Real-time state sync", "Role-based authorization", "Advanced interactive charts & data visualizers"]
      },
      {
        id: "maintenance",
        name: "DevOps & Active Support",
        description: "Continuous server monitoring, performance audits, and responsive layout optimization.",
        features: ["99.99% uptime SLA guarantee", "Automated daily secure backups", "Instant security patching"]
      }
    ]
  },
  {
    id: "connectivity",
    title: "Connectivity & Networks",
    tagline: "Carrier-Grade Fiber Optic & Dedicated Internet Solutions",
    description: "Transforming how your organization communicates with dedicated corporate internet, structured fiber optic backbones, and smart local Wi-Fi management systems.",
    icon: "Wifi",
    gradient: "from-emerald-500 to-teal-600",
    glowColor: "rgba(16, 185, 129, 0.15)",
    services: [
      {
        id: "dedicated-net",
        name: "Dedicated Business Internet",
        description: "1:1 symmetrical bandwidth allocation with ultra-low latency and static IP addressing.",
        features: ["Symmetrical upload & download", "Redundant fiber ring configuration", "24/7/365 active monitoring"]
      },
      {
        id: "office-wifi",
        name: "WiFi Management & Access Points",
        description: "Enterprise Mikrotik configuration, seamless hotspot gateways, and zero-dead-zone layouts.",
        features: ["Seamless client roaming", "Captive portal guest systems", "Bandwidth shaping & custom firewalls"]
      },
      {
        id: "fiber-install",
        name: "Fiber Optic Networking & Splicing",
        description: "High-precision physical layer routing, fiber splicing, and multi-facility dark fiber bridging.",
        features: ["OTDR precision diagnostics", "High-density cabinet layout", "Outdoor aerial & underground splicing"]
      },
      {
        id: "cctv-net",
        name: "IP CCTV Networking",
        description: "High-definition surveillance layouts, isolated NVR VLAN routing, and remote mobile viewing panels.",
        features: ["Isolated secure network channels", "Intelligent motion alarm triggers", "Failover power planning (UPS)"]
      }
    ]
  },
  {
    id: "it-infra",
    title: "IT Infrastructure",
    tagline: "Secure, Scalable Enterprise Cloud & On-Premise Systems",
    description: "Modern physical servers, cloud virtualization architectures, automated backups, and rigorous cyber security structures.",
    icon: "Server",
    gradient: "from-blue-600 to-cyan-500",
    glowColor: "rgba(37, 99, 235, 0.15)",
    services: [
      {
        id: "server-virt",
        name: "Server Virtualization & Setup",
        description: "Deploy and optimize bare-metal hypervisors (Proxmox, VMware) to maximize compute efficiency.",
        features: ["High Availability clustering", "Virtual machine instant migration", "Software-defined storage (Ceph)"]
      },
      {
        id: "cloud-ops",
        name: "Cloud Solutions & Migration",
        description: "Move on-prem workloads securely into hybrid cloud models with minimal business disruption.",
        features: ["Multi-tenant VPC planning", "Serverless auto-scaling", "Identity & Access Management (IAM) audits"]
      },
      {
        id: "cyber-sec",
        name: "Active Cyber Security Audits",
        description: "System vulnerability scanning, advanced firewall rules, and penetration diagnostics.",
        features: ["Intrusion Detection Setup", "SSL/TLS cryptographic hardening", "Ransomware protection policies"]
      },
      {
        id: "disaster-rec",
        name: "Data Backup & Recovery Systems",
        description: "Automated, triple-redundant backups mapping local NAS arrays directly to secure offsite cold vaults.",
        features: ["3-2-1 backup rule implementation", "Near-zero Recovery Point Objective (RPO)", "Encryption-at-rest protocols"]
      }
    ]
  },
  {
    id: "creative",
    title: "Creative Studio",
    tagline: "Award-Winning Visuals & High-Impact Motion Graphics",
    description: "Bringing brands to life with stunning corporate videography, bespoke brand design assets, and immersive motion graphics.",
    icon: "Paintbrush",
    gradient: "from-fuchsia-500 via-pink-500 to-rose-500",
    glowColor: "rgba(217, 70, 239, 0.15)",
    services: [
      {
        id: "brand-identity",
        name: "Brand Design & Visual Identity",
        description: "Bespoke logos, type design pairings, comprehensive color guides, and design tokens.",
        features: ["Complete Brand Identity Guidelines", "Interactive SVG vector assets", "Scalable design systems"]
      },
      {
        id: "motion-graphics",
        name: "Motion Design & Outro Animation",
        description: "Dynamic typographic promos, product interface simulations, and premium intro loops.",
        features: ["60fps premium video rendering", "Vector illustration animations", "Lottie-ready JSON animations"]
      },
      {
        id: "promo-video",
        name: "Promotional & Corporate Video Editing",
        description: "High-end corporate advertisements, multi-camera documentation, and dynamic sound designing.",
        features: ["Color grading in DaVinci Resolve", "Spatial audio mixing", "Social-optimized dynamic framing"]
      },
      {
        id: "social-stud",
        name: "High-Volume Social Media Assets",
        description: "Eye-catching graphic banners, interactive catalog templates, and high-conversion assets.",
        features: ["Figma source-file delivery", "Adaptive template modules", "Ad campaign graphic sets"]
      }
    ]
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "p1",
    title: "EcoSphere Corporate Identity & Digital Platform",
    category: "Website Development",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Three.js"],
    description: "A premium headless web experience designed for a leading renewable energy conglomerate, featuring 3D interactive turbine visualizations.",
    longDescription: "EcoSphere required an experience that reflected their innovative engineering. We crafted a highly interactive headless website featuring optimized canvas backgrounds, seamless route transitions, and interactive graphs that showcase actual renewable energy metrics. This platform reduced their page load times by 62% and boosted user engagement metrics by over 40%.",
    imageUrl: "https://picsum.photos/seed/ecosphere/800/600",
    accentColor: "from-emerald-500 to-teal-500",
    client: "EcoSphere Global",
    year: "2025",
    deliverables: ["Visual Identity", "Corporate Web Portal", "High-End Interactive 3D Graphs", "Headless CMS Integration"]
  },
  {
    id: "p2",
    title: "St. John's Academy Integrated Portal",
    category: "School Websites",
    technologies: ["Next.js", "PostgreSQL", "Tailwind CSS", "Tailwind UI"],
    description: "An accessible, streamlined educational portal serving 2,500+ students and staff with live academic logs and payment gateways.",
    longDescription: "We redesigned the educational portal for St. John's Academy, replacing four legacy systems. The portal provides real-time access to grades, classroom resources, school fees payment, and a student counseling booking interface. The site fully complies with WCAG accessibility guidelines, making it usable for all community members.",
    imageUrl: "https://picsum.photos/seed/academy/800/600",
    accentColor: "from-blue-500 to-indigo-500",
    client: "St. John's Educational Board",
    year: "2026",
    deliverables: ["UX Architecture Research", "Student & Parent Dashboard", "Integrated Online Payment Hub", "Accessible Class Calendars"]
  },
  {
    id: "p3",
    title: "Regional Government Digital One-Stop Service",
    category: "Government Projects",
    technologies: ["React", "Tailwind CSS", "Enterprise Security SDK", "REST API"],
    description: "A high-security, multi-department government dashboard allowing citizens to access public services and register local businesses.",
    longDescription: "To accelerate regional digitization, we constructed a secure, low-latency citizen service portal. Engineered with advanced multi-tenant routing, standard compliance, and server-side encryption. The system streamlined license applications, reducing processing times from days to a few hours.",
    imageUrl: "https://picsum.photos/seed/govportal/800/600",
    accentColor: "from-slate-700 to-slate-900",
    client: "Department of Digital Innovation",
    year: "2025",
    deliverables: ["Civic User Interface Design", "High-Security Cryptographic Firewall", "Document Upload Optimization", "Public License Automation"]
  },
  {
    id: "p4",
    title: "MetroNet Fiber Optic Ring Implementation",
    category: "Networking",
    technologies: ["Mikrotik RouterOS", "OSPF Routing", "GPON Fiber", "Cisco Catalyst"],
    description: "Deploying a redundant fiber optic backbone across 14 enterprise blocks, securing redundant failover networks.",
    longDescription: "Our network team planned and executed a complete GPON fiber-to-the-building infrastructure for a major commercial complex. Spanning 5 kilometers of optical cabling, configured with OSPF ring routing, the installation provides seamless redundant 10Gbps links to offices, including backup wireless bridges.",
    imageUrl: "https://picsum.photos/seed/fiberoptics/800/600",
    accentColor: "from-emerald-600 to-green-400",
    client: "Metro Commercial Hubs Inc.",
    year: "2026",
    deliverables: ["High-Precision Fiber Core Splicing", "Mikrotik OSPF Network Configuration", "Underground Cabling Laying", "Uptime Monitoring Alert System"]
  },
  {
    id: "p5",
    title: "Prisma Cloud Virtualization Infrastructure",
    category: "IT Infrastructure",
    technologies: ["Proxmox VE", "Ceph Storage", "Debian Linux", "OPNsense Firewall"],
    description: "Virtualizing legacy server rigs into high-availability clusters, introducing centralized Ceph storage layers.",
    longDescription: "Prisma Group faced high maintenance costs for physical servers. Cosmic Labs virtualized their infrastructure using Proxmox VE clusters and unified software-defined Ceph storage. This setup enabled instant VM migration and high-availability backups, lowering server power consumption by 45% and ensuring seamless failover.",
    imageUrl: "https://picsum.photos/seed/serverrack/800/600",
    accentColor: "from-cyan-500 to-blue-600",
    client: "Prisma Logistics Ltd.",
    year: "2025",
    deliverables: ["Proxmox Bare-Metal Clustering", "Ceph Block Storage Arrays", "OPNsense Redundant Firewall Setup", "3-2-1 Cloud Backup Integration"]
  },
  {
    id: "p6",
    title: "Apex FinTech Brand Identity & UI System",
    category: "Branding",
    technologies: ["Figma", "Adobe Illustrator", "Lottie Animations", "Tailwind Design Tokens"],
    description: "A futuristic brand identity, custom logo suite, and design system engineered for a rising micro-investment app.",
    longDescription: "Apex FinTech requested a design that balances playful accessibility with solid corporate trust. We developed a custom dynamic geometric logo, selected high-contrast typography, and laid out an adaptive design system in Figma with over 200 components. This was compiled directly into Tailwind design tokens for developer handoff.",
    imageUrl: "https://picsum.photos/seed/branddesign/800/600",
    accentColor: "from-pink-500 to-violet-600",
    client: "Apex Wealth Tech",
    year: "2026",
    deliverables: ["Logo & Brand Book", "Figma Design Token System", "Animated SVGs & Lottie Icons", "Responsive UI Mockups"]
  },
  {
    id: "p7",
    title: "Aura Skincare Launch Video Campaign",
    category: "Video Editing",
    technologies: ["DaVinci Resolve", "Adobe After Effects", "Cinema 4D", "Color Grading"],
    description: "A cinematic skincare promotional campaign with high-end motion graphics and ambient product renders.",
    longDescription: "To launch Aura's premium hydration line, our Creative Studio produced a 60-second video. Incorporating physical filming, 3D fluid simulations, custom kinetic typography, and surgical color grading, the final video saw over 2 million views across social media platforms with a 15% increase in purchase CTR.",
    imageUrl: "https://picsum.photos/seed/videoedit/800/600",
    accentColor: "from-rose-400 to-pink-500",
    client: "Aura Cosmetics",
    year: "2025",
    deliverables: ["High-Fidelity Videography", "Bespoke Fluid Simulations", "Sound Design & Ambient Foley", "Multi-Format Social Framing"]
  },
  {
    id: "p8",
    title: "Zenith Hub Smart WiFi & Guest Portal",
    category: "Internet Installation",
    technologies: ["Mikrotik Hotspot", "RADIUS Authentication", "Tailwind CMS", "VLAN Routing"],
    description: "Constructing and deploying enterprise-grade hotspot connectivity with customizable advertising dashboards.",
    longDescription: "We configured high-density Wi-Fi networks for Zenith Hub. Utilizing Mikrotik routers and custom RADIUS billing software, we designed a responsive guest portal. Users log in via social credentials or custom vouchers, allowing the marketing team to collect insights while managing network traffic securely.",
    imageUrl: "https://picsum.photos/seed/router/800/600",
    accentColor: "from-teal-500 to-sky-500",
    client: "Zenith Coworking Spaces",
    year: "2026",
    deliverables: ["VLAN Security Separation", "Captive Portal Design", "Bandwidth Allocation Dashboard", "High-Density Ubiquiti AP Layout"]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    title: "Maximizing Web Performance: How We Achieved 100/100 Lighthouse Scores",
    excerpt: "Learn the core techniques we use at Cosmic Labs to optimize images, strip down heavy JavaScript packages, and configure edge caches for instant load times.",
    content: "Web performance is no longer a luxury—it is a critical driver of user retention and SEO ranking. In this article, we delve deep into our frontend architecture strategy. We discuss lazy loading techniques, the transition from heavy styling frameworks to native Tailwind utilities, server-side asset compression, and optimizing fonts. We also show how setting up a headless CMS model improves loading speeds on diverse networks.",
    category: "Digital Solutions",
    author: {
      name: "Dian Pratama",
      role: "Lead Frontend Engineer",
      avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Dian"
    },
    date: "July 12, 2026",
    readTime: "5 min read",
    imageUrl: "https://picsum.photos/seed/webperf/600/400",
    tags: ["Performance", "React", "SEO", "Tailwind"]
  },
  {
    id: "b2",
    title: "The Ultimate Guide to Enterprise Wi-Fi: Mikrotik Best Practices",
    excerpt: "Dead zones, dropouts, and slow speeds? Discover the core configuration setups for Mikrotik, guest captive portals, and dynamic VLAN bandwidth allocation.",
    content: "Managing Wi-Fi in high-density office environments requires an understanding of radio frequency channels, interference parameters, and client grouping. In this guide, our network technicians detail how to divide your network into distinct VLANs (for staff, guest devices, and IoT hardware), set rate limits to prevent bandwidth hogging, configure captive hotspots with security profiles, and build reliable security walls.",
    category: "Connectivity",
    author: {
      name: "Budi Santoso",
      role: "Senior Network Architect",
      avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Budi"
    },
    date: "June 28, 2026",
    readTime: "7 min read",
    imageUrl: "https://picsum.photos/seed/routerset/600/400",
    tags: ["Mikrotik", "VLAN", "WiFi Setup", "Networking"]
  },
  {
    id: "b3",
    title: "Why High-Availability Proxmox Clusters Are Replacing Bare-Metal Servers",
    excerpt: "Hardware failures will happen. Learn how a virtualized cluster with Ceph storage allows server migration with zero business downtime.",
    content: "Physical servers present a single point of failure. If a motherboard or power supply fails, your company is locked out. High-Availability Proxmox clusters address this issue by bundling multiple physical nodes into a single compute pool. In this architectural overview, we detail software-defined storage configurations (Ceph), VM failover parameters, and system backups that safeguard corporate operations.",
    category: "IT Infrastructure",
    author: {
      name: "Rian Wijaya",
      role: "Lead DevOps Specialist",
      avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Rian"
    },
    date: "May 15, 2026",
    readTime: "6 min read",
    imageUrl: "https://picsum.photos/seed/servercloud/600/400",
    tags: ["Proxmox", "Cloud Security", "Virtualization", "Data Safety"]
  },
  {
    id: "b4",
    title: "Visual Storytelling: Color Grading Strategies for Modern Corporate Video",
    excerpt: "Color speaks louder than words. Discover the DaVinci Resolve color pipelines we employ to turn standard corporate footage into immersive cinematic experiences.",
    content: "Corporate videos do not have to feel clinical. Using proper color grading techniques, you can set the emotional tone for your brand. In this design-focused guide, we outline our DaVinci Resolve color grading pipeline. Learn how to normalize flat camera formats, establish consistent skin tones, use visual lighting shifts, and apply subtle warm tones to boost brand trust.",
    category: "Creative Studio",
    author: {
      name: "Siti Rahma",
      role: "Creative Director",
      avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Siti"
    },
    date: "April 02, 2026",
    readTime: "4 min read",
    imageUrl: "https://picsum.photos/seed/colorgrade/600/400",
    tags: ["Video Editing", "DaVinci", "Branding", "Creative Design"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Dr. Herman Susilo",
    role: "Head of IT & Infrastructure",
    company: "State High School 4 (SMAN 4)",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Herman",
    rating: 5,
    content: "Cosmic Labs transformed our school's digital framework. They deployed a secure, high-capacity student portal and organized fiber optic lines for our labs. The student portal is exceptionally stable and complies fully with accessibility rules."
  },
  {
    id: "t2",
    name: "Amara Kartika",
    role: "Managing Director & Co-Founder",
    company: "Velo Commerce Solutions",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amara",
    rating: 5,
    content: "The Creative Studio team at Cosmic Labs did an amazing job with our product launch. From brand styling and Figma guidelines to the promo videos and our custom e-commerce site, they delivered on every front. Highly recommended!"
  },
  {
    id: "t3",
    name: "Wawan Kurniawan",
    role: "Director of Digital Affairs",
    company: "District Government Portal Agency",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wawan",
    rating: 5,
    content: "Public security, fast processing times, and clear data guidelines were crucial. Cosmic Labs constructed our portal with precision, delivering a robust site that handles thousands of daily license inquiries seamlessly."
  },
  {
    id: "t4",
    name: "Taufik Hidayat",
    role: "Founder & CEO",
    company: "Nexa Health Technology",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Taufik",
    rating: 5,
    content: "Our team relies on stable, fast dedicated internet for daily SaaS code operations. Cosmic Labs installed symmetrical optic lines and configured our secure physical server cluster. Their technical support team is highly responsive."
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "f1",
    question: "What types of institutions and organizations does Cosmic Labs support?",
    answer: "We support a wide array of entities, including local UMKM (small-to-medium businesses), startups, large corporate enterprises, public schools, private universities, local government bodies, hospitality sites (hotels & restaurants), healthcare centers, and non-profits.",
    category: "General"
  },
  {
    id: "f2",
    question: "Can Cosmic Labs assist in migrating legacy websites to modern React structures?",
    answer: "Absolutely! We specialize in modernizing legacy architectures (such as old PHP or heavy WordPress configurations) into modern, secure, and fast headless structures (using React, Vite, and Next.js). This ensures higher speeds, enhanced SEO, and robust defense structures.",
    category: "Digital Solutions"
  },
  {
    id: "f3",
    question: "What is Dedicated Business Internet and how is it different from normal broadband?",
    answer: "Normal broadband features an asymmetric speed ratio (much slower upload speeds) and shared lines with neighboring buildings, which causes performance dips during peak hours. Dedicated Business Internet gives your facility a dedicated 1:1 symmetrical line, meaning you get identical upload and download bandwidth and a 99.9% uptime SLA.",
    category: "Connectivity"
  },
  {
    id: "f4",
    question: "How long does a standard server virtualization and security hardening project take?",
    answer: "Depending on network size and current systems, virtualization and cluster migrations take between 1 to 3 weeks. This includes planning, safe offsite data backing, installing virtualization hypervisors, VM staging, firewall rules configuration, and security audits.",
    category: "IT Infrastructure"
  },
  {
    id: "f5",
    question: "Does Cosmic Labs deliver source design assets (e.g., Figma files, After Effects files)?",
    answer: "Yes, transparency is one of our core values. We provide complete developer handoff and deliver raw creative assets—including Figma source components, high-resolution graphic canvases, motion templates, and Premiere/After Effects workspace files.",
    category: "Creative Studio"
  }
];

export const TIMELINE: TimelineMilestone[] = [
  {
    year: "2021",
    title: "The Cosmic Inception",
    description: "Founded as a specialized network and web development agency, serving local businesses and upgrading local computer systems."
  },
  {
    year: "2023",
    title: "Service Portfolio Expansion",
    description: "Launched the Creative Studio and IT Infrastructure division to provide clients with fully integrated technical and visual solutions."
  },
  {
    year: "2024",
    title: "Government & Enterprise Trust",
    description: "Secured agreements with regional government departments and academic campuses to build high-security citizen portals."
  },
  {
    year: "2025",
    title: "Next-Gen Fiber Deployment",
    description: "Built Carrier-Grade GPON fiber rings across major commercial sectors and deployed virtualized high-availability Proxmox rings."
  },
  {
    year: "2026",
    title: "Cosmic Labs Premium Release",
    description: "Consolidating our technologies and creative operations to serve as a one-stop digital transformation agency globally."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "Consultation & Discovery",
    description: "We analyze your operations, infrastructure, and brand goals to isolate key performance indicators.",
    details: ["Requirement gathering sessions", "Existing infrastructure evaluation", "Competitor analysis & aesthetic direction"],
    icon: "MessageSquareCode"
  },
  {
    number: 2,
    title: "Strategic Planning",
    description: "Our senior architects and creative directors lay out site wireframes, server maps, and splicing schematics.",
    details: ["Complete system & database architecture maps", "Detailed timeline milestones & deliverables", "Fixed, transparent project estimates"],
    icon: "Map"
  },
  {
    number: 3,
    title: "Bespoke Design",
    description: "We craft award-winning user interfaces in Figma and build beautiful brand styles.",
    details: ["Responsive high-fidelity interactive screens", "Motion concepts & typography systems", "Client review loops & edits"],
    icon: "Palette"
  },
  {
    number: 4,
    title: "Agile Development",
    description: "Engineers build your web platforms using clean, fast code, and network crews lay optical fibers.",
    details: ["Clean, modular, component-driven React coding", "Mikrotik router configurations & routing tests", "Hypervisor setups & database scripting"],
    icon: "Cpu"
  },
  {
    number: 5,
    title: "Rigorous Testing",
    description: "We conduct security audits, speed audits, packet loss assessments, and layout cross-compatibility diagnostics.",
    details: ["Lighthouse speed tests", "Penetration audits & data recovery runs", "W3C validation & accessibility audits"],
    icon: "ShieldAlert"
  },
  {
    number: 6,
    title: "Successful Deployment",
    description: "We push code servers live, turn on dedicated commercial lines, and launch video campaigns.",
    details: ["Seamless domain/DNS mapping and SSL activation", "Onsite router calibration", "Active traffic routing monitoring"],
    icon: "Rocket"
  },
  {
    number: 7,
    title: "Support & Maintenance",
    description: "We provide active support, automated secure daily backups, and prompt server optimizations.",
    details: ["24/7 technical monitoring alerts", "Periodic performance optimization audits", "Responsive team availability for modifications"],
    icon: "LifeBuoy"
  }
];
