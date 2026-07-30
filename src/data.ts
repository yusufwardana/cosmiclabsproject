import { Division, PortfolioItem, BlogPost, Milestone, FAQItem, ProcessStep } from "./types";
import { Globe, Wifi, Server, Paintbrush } from "lucide-react";

// DIVISIONS DATA
export const DIVISIONS: Division[] = [
  {
    id: "digital",
    title: "Solusi Digital",
    tagline: "Aplikasi Web, CMS, dan Portal Khusus Kinerja Tinggi",
    icon: Globe,
    badge: "REAKSI CEPAT",
    description: "Kami merancang dan mengembangkan aplikasi web modern berkinerja tinggi, website instansi & sekolah, portal e-commerce, dan sistem manajemen konten khusus yang dioptimalkan untuk kecepatan dan SEO.",
    features: [
      "Pengembangan Aplikasi Web Kustom (React / Vite / Node)",
      "Website Sekolah & Sistem Informasi Manajemen Pendidikan",
      "Portal Instansi Pemerintah & Pelayanan Publik Aksesibel",
      "E-Commerce Kinerja Tinggi dengan Integrasi Payment Gateway",
      "Sistem Manajemen Konten (CMS) Terkustomisasi & Aman",
      "Optimasi SEO Teknis, PWA, dan Skor Lighthouse 100/100"
    ],
    technologies: ["React 19", "Vite", "TypeScript", "Tailwind CSS v4", "Express", "Node.js", "REST / GraphQL"],
    sla: "Waktu Aktif Uptime 99,9% & Respons Dukungan Kritis < 1 Jam",
    caseStudiesCount: 145
  },
  {
    id: "connectivity",
    title: "Konektivitas & Fiber Optik",
    tagline: "Internet Dedicated 1:1 & Jaringan Fiber Optik Korporat",
    icon: Wifi,
    badge: "BANDWIDTH TERDEDIKASI 1:1",
    description: "Infrastruktur jaringan internet terdedikasi 1:1 dengan bandwidth simetris tanpa FUP. Didukung jaringan fiber optik backbone, penyambungan core (splicing), dan instalasi Access Point area luas.",
    features: [
      "Layanan Internet Dedicated Bandwidth Simetris 1:1 (Tanpa FUP)",
      "Penyambungan Core Fiber Optik (Splicing) & Pengujian OTDR",
      "Instalasi Jaringan Kampus & Area Luas (WAN / LAN / Wi-Fi 6)",
      "Koneksi Antar Cabang Terenskripsi (Point-to-Point & VPN)",
      "Layanan Pemantauan Jaringan Proaktif 24/7/365",
      "Garansi Tingkat Layanan SLA Uptime Hingga 99,9%"
    ],
    technologies: ["MikroTik RouterOS", "Cisco Catalyst", "Fiber Optic OTDR", "Ubiquiti UniFi", "GPON / EPON"],
    sla: "Garansi Uptime SLA 99,9% dengan Tim Perbaikan Lapangan Siaga",
    caseStudiesCount: 92
  },
  {
    id: "infrastructure",
    title: "Infrastruktur IT & Cloud",
    tagline: "Virtualisasi Server Proxmox, Keamanan, & Pusat Data",
    icon: Server,
    badge: "Enterprise Security",
    description: "Perancangan dan pengelolaan infrastruktur IT menyeluruh. Mulai dari virtualisasi cluster Proxmox VE, manajemen server pusat data, keamanan jaringan, hingga sistem cadangan otomatis terenkripsi.",
    features: [
      "Virtualisasi Server & Cluster High Availability Proxmox VE",
      "Penyimpanan Terdistribusi Ceph & Cadangan Otomatis Multisite",
      "Konfigurasi Hardware Firewall & Sistem Pencegahan Intrusi (IPS)",
      "Infrastruktur Ruang Server & Pemasangan Rak Pusat Data",
      "Migrasi Sistem Legacy ke Arsitektur Cloud Hybrid",
      "Audit Keamanan Jaringan & Sertifikasi Kepatuhan Data"
    ],
    technologies: ["Proxmox VE", "Ceph Storage", "Linux Enterprise", "PfSense Firewall", "Docker & Kubernetes"],
    sla: "SLA Pemulihan Bencana RPO < 15 Menit & RTO < 1 Jam",
    caseStudiesCount: 68
  },
  {
    id: "creative",
    title: "Studio Kreatif & Media",
    tagline: "Identitas Brand, Desain Grafis, & Videografi Sinematik",
    icon: Paintbrush,
    badge: "AWARDS WINNING STUDIO",
    description: "Divisi kreatif profesional yang menghidupkan narasi brand Anda melalui desain identitas visual yang elegan, produksi video sinematik profil perusahaan, motion graphics, dan materi promosi.",
    features: [
      "Desain Identitas Brand, Pedoman Logo, & System Design Tokens",
      "Produksi Video Profil Perusahaan & Iklan Sinematik 4K",
      "Motion Graphics, Animasi Lottie, & Visual FX 3D",
      "Desain Grafis Media Cetak, Banners, & Media Sosial Corporate",
      "UI/UX Design Kit (Figma Tokens, Wireframing, Prototyping)",
      "Materi Kampanye Pemasaran Digital & Fotografi Produk"
    ],
    technologies: ["Figma Enterprise", "DaVinci Resolve Studio", "Adobe Creative Cloud", "Cinema 4D", "Blender"],
    sla: "Revisi Diberikan dalam 24 Jam dengan Penjaminan Kualitas Desain",
    caseStudiesCount: 110
  }
];

// PORTFOLIO / CASE STUDIES DATA
export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "sman4-portal",
    title: "Portal Sistem Informasi Digital SMAN 4 Jakarta",
    category: "School Websites",
    description: "Pengembangan portal sekolah terpadu dengan sistem akademik terintegrasi, manajemen PPDB online, dan direktori kelulusan.",
    longDescription: "SMAN 4 Jakarta membutuhkan modernisasi sistem digital secara menyeluruh. Cosmic Labs membangun portal web pintar berbasis React yang responsif, terhubung ke database siswa secara real-time, dan dilengkapi fitur pengumuman nilai instan yang tahan lonjakan trafik hingga 10.000 pengguna bersamaan saat pengumuman ujian.",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    client: "SMAN 4 Jakarta",
    year: "2025",
    technologies: ["React 19", "Tailwind CSS", "Node.js", "PostgreSQL"],
    deliverables: ["Portal Website Utama", "Sistem PPDB Online", "Dasbor Nilai Siswa", "Pelatihan Staf Pengajar"]
  },
  {
    id: "apex-fintech",
    title: "Aplikasi Manajemen Keuangan Apex Wealth",
    category: "Website Development",
    description: "Sistem web finansial tingkat tinggi dengan dasbor analitik real-time, enkripsi data end-to-end, dan pemantauan portofolio investasi.",
    longDescription: "Apex Wealth mempercayakan pembuatan platform manajemen kekayaan bagi klien institusi mereka. Kami menerapkan arsitektur microservices cepat, dasbor rechart interaktif, dan standar keamanan perbankan tinggi dengan otentikasi dua faktor (2FA).",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    client: "Apex Wealth Global",
    year: "2025",
    technologies: ["React", "TypeScript", "Recharts", "Express API"],
    deliverables: ["Dasbor Portofolio Real-Time", "Otentikasi 2FA Enkripsi", "REST API Berkecepatan Tinggi"]
  },
  {
    id: "sunda-fiber",
    title: "Jaringan Fiber Optik Dedicated Pemda Wilayah Barat",
    category: "Networking",
    description: "Instalasi dan penyambungan kabel fiber optik dedicated sepanjang 15 KM untuk menghubungkan 12 gedung dinas pemerintahan.",
    longDescription: "Proyek infrastruktur konektivitas antargedung dinas pemerintah daerah. Tim teknis lapangan Cosmic Labs melakukan penarikan kabel fiber optik armor, splicing core dengan akurasi kehilangan sinyal di bawah 0,02 dB, serta konfigurasi router MikroTik CCR di setiap titik simpul.",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    client: "Dinas Kominfo Daerah",
    year: "2024",
    technologies: ["Fiber Optic Single-Mode", "MikroTik CCR", "OTDR Testing", "UniFi AP"],
    deliverables: ["Penarikan 15KM Fiber Optik", "Splicing 120 Core", "Router Redundancy Point-to-Point"]
  },
  {
    id: "proxmox-data-center",
    title: "Cluster Server Virtualisasi Proxmox & Ceph Storage",
    category: "IT Infrastructure",
    description: "Membangun cluster virtualisasi 8 node Proxmox VE dengan sistem penyimpanan terdistribusi Ceph HA untuk perusahaan swasta.",
    longDescription: "Klien memerlukan migrasi dari infrastruktur fisik lama ke sistem cloud privat yang tangguh. Kami merancang cluster 8-node Proxmox dengan dukungan penyimpanan Ceph terdistribusi yang mampu memulihkan diri otomatis saat salah satu server fisik mengalami kendala hardware.",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    client: "PT Nexa Data Media",
    year: "2024",
    technologies: ["Proxmox VE", "Ceph Storage", "pfSense", "10G SFP+ Network"],
    deliverables: ["Virtualisasi 8 Node Server", "Ceph Storage 50TB HA", "Skema Backup Multisite Automatis"]
  },
  {
    id: "brand-identity-cosmic",
    title: "Brand Identity & Video Profil Perusahaan Nexa Health",
    category: "Branding",
    description: "Rebranding komprehensif, desain sistem token visual, serta pembuatan video profil perusahaan sinematik 4K.",
    longDescription: "Nexa Health meluncurkan identitas merek baru untuk memperkuat posisi pasar sebagai jaringan klinik medis modern. Tim Studio Kreatif kami memproduksi buku panduan brand lengkap, elemen desain visual digital, serta rekaman video sinematik dengan latar belakang fasilitas medis.",
    imageUrl: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80",
    client: "Nexa Health Indonesia",
    year: "2025",
    technologies: ["Figma Tokens", "DaVinci Resolve 4K", "Adobe Illustrator", "Lottie"],
    deliverables: ["Buku Panduan Brand (Brandbook)", "Video Profil Perusahaan 4K", "Aset Grafis Media Sosial"]
  },
  {
    id: "univ-learning-portal",
    title: "Platform E-Learning & Ujian Online Kampus Terpadu",
    category: "Government Projects",
    description: "Sistem e-learning interaktif dan pelaksanaan ujian berbasis komputer (CBT) yang melayani lebih dari 15.000 mahasiswa.",
    longDescription: "Platform pendidikan tinggi yang dirancang untuk mendukung perkuliahan daring, unggah tugas, forum diskusi interaktif, dan ujian sistem acak yang aman dari potensi kecurangan.",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80",
    client: "Universitas Nusantara",
    year: "2024",
    technologies: ["React", "Express", "PostgreSQL", "Redis Cache"],
    deliverables: ["Aplikasi E-Learning Web", "Sistem CBT Tahan Beban Tinggi", "Integrasi Database Akademik"]
  }
];

// BLOG POSTS DATA
export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    title: "Strategi Memilih Koneksi Internet Dedicated 1:1 Tanpa FUP untuk Sekolah & Bisnis",
    excerpt: "Mengapa koneksi internet simetris terdedikasi sangat krusial bagi operasional server sekolah, ujian CBT, dan streaming tanpa hambatan.",
    content: "Di era transformasi digital, kebutuhan akan internet berkecepatan tinggi tidak lagi sekadar opsional, melainkan kebutuhan mendasar bagi institusi pendidikan dan korporasi. Internet Dedicated 1:1 memberikan garansi alokasi bandwidth penuh yang tidak dibagi dengan pengguna lain. Artikel ini mengulas keunggulan bandwidth simetris, manfaat garansi SLA 99,9%, serta cara mencegah lag saat ujian online serentak.",
    category: "Connectivity",
    author: {
      name: "Budi Santoso, S.T.",
      role: "Lead Network Engineer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Budi"
    },
    date: "12 Februari 2026",
    readTime: "5 Menit Baca",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    tags: ["Internet Dedicated", "Fiber Optic", "Network SLA", "Sekolah Digital"]
  },
  {
    id: "post-2",
    title: "Virtualisasi Server Menggunakan Proxmox VE: Efisiensi Biaya & Keamanan Data Enterprise",
    excerpt: "Panduan lengkap merancang pusat data privat mandiri menggunakan Proxmox VE dan Ceph Storage untuk keandalan tinggi.",
    content: "Pusat data modern memerlukan fleksibilitas tinggi tanpa membebankan biaya lisensi perangkat lunak yang berlebihan. Proxmox VE hadir sebagai solusi open-source kelas enterprise yang handal. Dengan mengombinasikannya bersama Ceph Storage, perusahaan Anda dapat menikmati fitur High Availability (HA) di mana server virtual dapat berpindah otomatis jika terjadi kendala hardware.",
    category: "IT Infrastructure",
    author: {
      name: "Rian Hidayat",
      role: "Senior Cloud & SysAdmin",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rian"
    },
    date: "28 Januari 2026",
    readTime: "8 Menit Baca",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    tags: ["Proxmox", "Cloud Hybrid", "Ceph Storage", "Server Security"]
  },
  {
    id: "post-3",
    title: "Tren Desain UI/UX Web 2026: Kecepatan, Komposisi Typografi, & Estetika Modern",
    excerpt: "Bagaimana mengombinasikan desain visual yang memukau dengan optimasi kode modern tanpa mengorbankan skor SEO.",
    content: "Situs web modern tidak hanya harus terlihat indah, tetapi juga harus memuat dalam hitungan milidetik. Pada tahun 2026, standar industri berfokus pada hierarki tipografi yang tajam, kontras warna yang nyaman di mata, dan optimasi aset visual secara cermat. Pelajari bagaimana standar React 19 dan Tailwind CSS membantu menciptakan performa website dengan skor Lighthouse sempurna.",
    category: "Digital Solutions",
    author: {
      name: "Siti Rahmawati",
      role: "Head of Design Studio",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Siti"
    },
    date: "15 Januari 2026",
    readTime: "6 Menit Baca",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    tags: ["UI/UX", "React 19", "Tailwind CSS", "Web Design"]
  },
  {
    id: "post-4",
    title: "Pentingnya Video Profil Perusahaan Sinematik dalam Membangun Kepercayaan Klien",
    excerpt: "Alasan mengapa media visual sinematik berbasis video 4K dapat meningkatkan konversi penjualan dan reputasi bisnis Anda secara drastis.",
    content: "Video profil perusahaan adalah kartu nama digital di masa kini. Pengunjung situs web lebih memilih menonton video berdurasi 60 detik yang dikemas secara profesional dibandingkan membaca teks yang panjang. Temukan bagaimana tata cahaya, pencahayaan sinematik, dan penceritaan naratif dapat meningkatkan nilai apresiasi calon mitra bisnis terhadap perusahaan Anda.",
    category: "Creative Studio",
    author: {
      name: "Dicky Prasetyo",
      role: "Creative Director",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dicky"
    },
    date: "04 Januari 2026",
    readTime: "4 Menit Baca",
    imageUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
    tags: ["Video Production", "Branding", "Creative Media", "Marketing"]
  }
];

// TIMELINE MILESTONES DATA
export const TIMELINE: Milestone[] = [
  {
    year: "2021",
    title: "Inisiasi Pendirian Cosmic Labs",
    description: "Berawal dari studio konsultan IT dan penyedia jaringan fiber optik lokal dengan komitmen memberikan solusi teknologi berkualitas tinggi."
  },
  {
    year: "2022",
    title: "Ekspansi Divisi Konektivitas Dedicated",
    description: "Resmi meluncurkan layanan Internet Dedicated 1:1 dan penarikan jaringan fiber optik antargedung untuk instansi pemerintah dan jaringan sekolah."
  },
  {
    year: "2023",
    title: "Perluasan Infrastruktur Cloud Proxmox",
    description: "Membangun cluster pusat data terdistribusi berbasis Proxmox VE & Ceph Storage untuk mendukung kebutuhan hosting enterprise dan virtualisasi."
  },
  {
    year: "2024",
    title: "Peluncuran Studio Kreatif & Media",
    description: "Membentuk divisi Studio Kreatif terpadu untuk memberikan layanan desain grafis, branding, UI/UX, dan pembuatan video sinematik 4K."
  },
  {
    year: "2025-2026",
    title: "Transformasi Ekosistem Digital Terpadu",
    description: "Menjadi penyedia solusi satu pintu (One-Stop Solutions) terdepan yang melayani ratusan klien institusi, sekolah, dan perusahaan nasional."
  }
];

// TESTIMONIALS DATA
export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Dr. H. Hendra Wijaya, M.Pd.",
    role: "Kepala Sekolah",
    company: "SMAN 4 Jakarta",
    content: "Cosmic Labs membantu modernisasi portal sekolah kami secara luar biasa. Sistem PPDB dan pengumuman nilai berjalan sangat lancar tanpa kendala lag, didukung koneksi internet dedicated yang sangat stabil saat ujian CBT.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hendra",
    rating: 5
  },
  {
    id: "t2",
    name: "Bambang Kurniawan",
    role: "Chief Technology Officer",
    company: "Apex Wealth Global",
    content: "Kecepatan pengembangan dan keamanan sistem yang diberikan oleh tim Cosmic Labs luar biasa. Dasbor keuangan kami memuat sangat cepat dan lulus pengujian audit keamanan tanpa catatan merah.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bambang",
    rating: 5
  },
  {
    id: "t3",
    name: "Ir. Maya Pertiwi",
    role: "Head of IT Infrastructure",
    company: "PT Nexa Data Media",
    content: "Cluster Proxmox VE dan jaringan fiber optik yang dirancang oleh tim Cosmic Labs terbukti sangat andal. Garansi SLA 99,9% benar-benar ditepati dan tim teknis mereka sangat responsif 24/7.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maya",
    rating: 5
  }
];

// FAQ DATA
export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Apa keunggulan utama layanan Internet Dedicated 1:1 dari Cosmic Labs?",
    answer: "Layanan Internet Dedicated kami memberikan alokasi bandwidth simetris 1:1 antara upload dan download tanpa pembatasan kuota (Tanpa FUP). Koneksi disalurkan langsung via kabel fiber optik terdedikasi dengan garansi Uptime SLA 99,9%.",
    category: "Connectivity"
  },
  {
    id: "faq-2",
    question: "Berapa lama waktu yang dibutuhkan untuk pembuatan website atau portal aplikasi?",
    answer: "Waktu pengerjaan bergantung pada skala proyek. Website profil instansi atau sekolah umumnya selesai dalam 2-3 minggu, sedangkan aplikasi web kustom skala enterprise membutuhkan waktu 4-8 minggu termasuk tahap pengujian sistem.",
    category: "Digital Solutions"
  },
  {
    id: "faq-3",
    question: "Apakah Cosmic Labs menyediakan dukungan teknis dan perawatan pasca-proyek?",
    answer: "Ya, setiap proyek kami dilengkapi dengan garansi pemeliharaan pasca-implementasi, pemantauan proaktif server 24/7, cadangan data berkala, serta tim dukungan respons cepat.",
    category: "General"
  },
  {
    id: "faq-4",
    question: "Bagaimana proses estimasi biaya layanan di Cosmic Labs?",
    answer: "Anda dapat menggunakan kalkulator estimasi interaktif kami di situs web ini untuk mendapatkan perkiraan transparan, atau menghubungi tim konsultan kami untuk diskusi kebutuhan spesifik gratis.",
    category: "Billing"
  },
  {
    id: "faq-5",
    question: "Apakah layanan Studio Kreatif bisa dipesan terpisah dari proyek teknologi?",
    answer: "Tentu saja. Anda dapat memesan layanan desain branding, pembuatan video profil perusahaan, atau desain UI/UX secara mandiri tanpa harus mengambil paket infrastruktur IT.",
    category: "Creative Studio"
  }
];

// PROCESS STEPS DATA
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "Konsultasi & Analisis Kebutuhan",
    description: "Diskusi awal mendalam untuk memahami tujuan bisnis, kendala teknis, spesifikasi infrastruktur, serta target penyelesaian proyek Anda.",
    icon: "MessageSquareCode",
    details: ["Audit sistem awal", "Penetapan parameter KPI", "Estimasi anggaran awal"]
  },
  {
    number: 2,
    title: "Perancangan Arsitektur & Strategi",
    description: "Merancang cetak biru solusi teknis, skema jaringan fiber optik, topologi server Proxmox, serta prototipe desain visual (Figma).",
    icon: "Map",
    details: ["Wireframe & Prototyping", "Topologi Jaringan / Cloud", "Dokumen Spesifikasi Teknis"]
  },
  {
    number: 3,
    title: "Desain Visual & Sistem Token",
    description: "Mengembangkan identitas visual yang elegan, sistem token desain, serta alur pengalaman pengguna yang intuitif dan mudah diakses.",
    icon: "Palette",
    details: ["System Design Tokens", "Aset Visual High-Res", "Review Antarmuka Pengguna"]
  },
  {
    number: 4,
    title: "Pengembangan Kode & Instalasi Fisik",
    description: "Proses penulisan kode aplikasi web, konfigurasi cluster server Proxmox, serta penarikan dan penyambungan kabel fiber optik di lapangan.",
    icon: "Cpu",
    details: ["Pengembangan React / Node", "Penyambungan Fiber Splicing", "Setup Server Proxmox VE"]
  },
  {
    number: 5,
    title: "Pengujian Kualitas & Keamanan (QA)",
    description: "Pengujian menyeluruh meliputi uji beban trafik tinggi, audit keamanan penetration testing, dan validasi skor Lighthouse 100/100.",
    icon: "ShieldAlert",
    details: ["Audit Keamanan Penetration Test", "Uji Otomasi Load Test", "Optimasi Kecepatan SEO"]
  },
  {
    number: 6,
    title: "Peluncuran Sistem & Serah Terima",
    description: "Proses migrasi dan peluncuran resmi ke lingkungan produksi, diiringi pelatihan staf internal dan penyerahan dokumentasi proyek.",
    icon: "Rocket",
    details: ["Deployment Production", "Pelatihan Staf Pengelola", "Penyerahan Dokumentasi"]
  },
  {
    number: 7,
    title: "Pemantauan 24/7 & Perawatan Rutin",
    description: "Dukungan berkelanjutan dengan sistem pemantauan otomatis 24/7/365, cadangan data rutin, dan pembaruan sistem secara berkala.",
    icon: "LifeBuoy",
    details: ["Pemantauan Uptime SLA 99,9%", "Cadangan Data Berkala", "Dukungan Teknis Prioritas"]
  }
];
