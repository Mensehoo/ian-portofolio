import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Moon, Sun, Github, Linkedin, Mail, Phone, 
  MapPin, BookOpen, Briefcase, Award, Code, 
  ChevronRight, ExternalLink, User, Instagram, Menu, X
} from "lucide-react";
import ProfilFoto from "./profil-foto.png";
import gsaFoto from "./gsa-foto.jpg";
import leadDscFoto from "./lead-dsc-foto.jpeg";
import sosmedDscFoto from "./sosmed-dsc-foto.jpeg";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Check initial preference
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-surface dark:bg-[#0f1115]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-[#1a1d24]/70 backdrop-blur-xl shadow-sm border-b border-gray-200/50 dark:border-gray-800/50 transition-colors duration-300">
        <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-bold tracking-tight text-on-surface font-headline">
            Ian<span className="text-primary">.</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300" href="#about">About</a>
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300" href="#experience">Experience</a>
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300" href="#projects">Projects</a>
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300" href="#contact">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-on-surface hover:scale-110 active:scale-95 transition-all duration-200"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />}
            </button>
            <a href="mailto:tnanmen96@gmail.com" className="hidden sm:block bg-gradient-to-br from-primary to-primary-container text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95 transition-all duration-200">
              Contact Me
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-on-surface"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white dark:bg-[#1a1d24] border-b border-gray-200 dark:border-gray-800"
            >
              <div className="flex flex-col px-6 py-4 space-y-4 shadow-inner">
                <a onClick={() => setMenuOpen(false)} className="text-on-surface font-semibold text-lg" href="#about">About</a>
                <a onClick={() => setMenuOpen(false)} className="text-on-surface font-semibold text-lg" href="#experience">Experience</a>
                <a onClick={() => setMenuOpen(false)} className="text-on-surface font-semibold text-lg" href="#projects">Projects</a>
                <a onClick={() => setMenuOpen(false)} className="text-on-surface font-semibold text-lg" href="#contact">Contact</a>
                <a onClick={() => setMenuOpen(false)} href="mailto:tnanmen96@gmail.com" className="text-center w-full block mt-4 bg-primary text-white px-6 py-3 rounded-xl font-bold">
                  Contact Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <section id="about" className="flex flex-col items-center mb-24 min-h-[80vh] w-full pt-8 md:pt-16">
          
          {/* Top: Photo & Background Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full flex items-end justify-center group mb-12 h-[50vh] sm:h-[60vh] max-h-[600px] mt-8"
          >
            {/* Huge Background Text for Photo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[75%] w-[120vw] flex flex-col items-center justify-center z-0 pointer-events-none select-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              <div className="text-[4rem] sm:text-[6.5rem] md:text-[8rem] lg:text-[10rem] font-black leading-[0.85] text-blue-600/40 dark:text-blue-400/30 tracking-tighter text-center whitespace-nowrap drop-shadow-md">
                I'm ian<br/>Tech n Marketing<br/>enthusiast
              </div>
            </div>

            {/* Clean Frameless Photo Area */}
            <div className="relative z-10 w-full max-w-lg aspect-[4/5] flex items-end justify-center overflow-visible mt-10">
              <img 
                src={ProfilFoto} 
                alt="Tiananmen Setyo Nugroho" 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[120%] h-auto max-h-[140%] object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] dark:drop-shadow-[0_30px_60px_rgba(255,255,255,0.15)] transition-transform duration-700 hover:scale-[1.03]" 
              />
            </div>
            
            {/* Decorative background blobs to enhance the frameless photo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-gradient-to-tr from-primary/30 to-secondary/30 blur-[100px] -z-20 rounded-full opacity-70 dark:opacity-40 pointer-events-none"></div>
          </motion.div>

          {/* Bottom: Summary (Left) & Contacts (Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 bg-surface-variant/30 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-gray-200/50 dark:border-gray-800/50"
          >
            <div className="lg:w-2/3 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6">
                <Code className="w-4 h-4" />
                S1 Teknik Informatika @ UHAMKA
              </div>
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-on-surface mb-6 leading-tight">
                Tiananmen Setyo Nugroho
              </h1>
              <p className="text-base md:text-lg text-on-surface-variant leading-relaxed mb-0 max-w-2xl">
                Mahasiswa S1 Teknik Informatika Universitas Muhammadiyah Prof. Dr. Hamka dengan minat kuat pada 
                <span className="text-primary font-semibold"> pengembangan web</span> dan 
                <span className="text-primary font-semibold"> Artificial Intelligence</span>, khususnya 
                <span className="text-primary font-semibold"> Generative AI</span>. Berpengalaman dalam kepemimpinan dan pengelolaan komunitas teknologi melalui peran sebagai 
                <span className="text-on-surface font-semibold dark:text-gray-200"> Google Student Ambassador</span> dan 
                <span className="text-on-surface font-semibold dark:text-gray-200"> Lead Google Developer Student Clubs</span>. 
                Terbiasa menangani konten teknis, penyuntingan akademik, serta pengembangan proyek berbasis AI. Memiliki motivasi tinggi untuk mengembangkan solusi teknologi yang aplikatif dan berdampak bagi lingkungan akademik.
              </p>
            </div>
            
            <div className="lg:w-1/3 flex flex-col items-start lg:items-end justify-start gap-4" id="contact">
              <h3 className="font-headline text-2xl font-bold mb-2 lg:mb-4">Hubungi Saya</h3>
              <div className="flex flex-col gap-3 w-full sm:w-auto">
                <a href="https://linkedin.com/in/tiananmen-setyo-nugroho/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors font-medium bg-white/60 dark:bg-[#1a1d24]/60 px-6 py-3 rounded-2xl hover:bg-white dark:hover:bg-[#1a1d24] shadow-sm sm:w-full">
                  <Linkedin className="w-6 h-6 text-blue-600" /> LinkedIn
                </a>
                <a href="https://www.instagram.com/itz_ian.96/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors font-medium bg-white/60 dark:bg-[#1a1d24]/60 px-6 py-3 rounded-2xl hover:bg-white dark:hover:bg-[#1a1d24] shadow-sm sm:w-full">
                  <Instagram className="w-6 h-6 text-pink-600" /> Instagram
                </a>
                <a href="mailto:tnanmen96@gmail.com" className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors font-medium bg-white/60 dark:bg-[#1a1d24]/60 px-6 py-3 rounded-2xl hover:bg-white dark:hover:bg-[#1a1d24] shadow-sm sm:w-full">
                  <Mail className="w-6 h-6 text-red-500" /> Email
                </a>
                <a href="https://wa.me/6281234698833" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors font-medium bg-white/60 dark:bg-[#1a1d24]/60 px-6 py-3 rounded-2xl hover:bg-white dark:hover:bg-[#1a1d24] shadow-sm sm:w-full">
                  <Phone className="w-6 h-6 text-green-500" /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-20">
            
            {/* Experience Section */}
            <section id="experience">
              <SectionHeader icon={<Briefcase />} title="Pengalaman Kerja" />
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:via-gray-200 before:to-transparent dark:before:via-gray-800">
                <ExperienceItem 
                  title="Lead | Google Developer Student Clubs (GDSC) UHAMKA"
                  date="Des 2025 – Sekarang"
                  points={[
                    "Memimpin komunitas developer mahasiswa di UHAMKA serta mengelola tim inti (core team).",
                    "Menyusun dan menjalankan strategi program kerja komunitas berbasis pengembangan Web, Mobile, dan Artificial Intelligence.",
                    "Menjadi penghubung antara mahasiswa dan ekosistem Google Developers."
                  ]}
                  image={leadDscFoto}
                />
                <ExperienceItem 
                  title="Library Assistant | Universitas Muhammadiyah Prof. Dr. Hamka"
                  date="Feb 2025 – Sekarang"
                  points={[
                    "Melakukan validasi administrasi skripsi dan magang mahasiswa tingkat akhir.",
                    "Menangani pengecekan plagiarisme karya ilmiah mahasiswa.",
                    "Mengelola layanan sirkulasi peminjaman dan pengembalian buku."
                  ]}
                />
                <ExperienceItem 
                  title="Google Student Ambassador | Google Indonesia"
                  date="Sep 2025 – Jan 2026"
                  points={[
                    "Berperan sebagai duta adopsi teknologi Google AI (Gemini) di lingkungan kampus untuk meningkatkan literasi digital mahasiswa.",
                    "Merancang dan mempublikasikan konten edukatif terkait pemanfaatan Artificial Intelligence untuk kebutuhan akademik.",
                    "Menginisiasi kegiatan komunitas serta memfasilitasi akses Google AI Pro bagi mahasiswa."
                  ]}
                  image={gsaFoto}
                />
                <ExperienceItem 
                  title="Script Editor (Teknoka 10) | UHAMKA"
                  date="Des 2025 – Jan 2026"
                  points={[
                    "Menyunting naskah akademik pemateri konferensi untuk keperluan publikasi prosiding.",
                    "Memeriksa tata bahasa, ejaan, dan konsistensi format sesuai standar penulisan ilmiah."
                  ]}
                />
                <ExperienceItem 
                  title="Social Media Specialist | GDSC UHAMKA"
                  date="Mar 2025 – Nov 2025"
                  points={[
                    "Mengelola media sosial komunitas GDSC UHAMKA.",
                    "Membuat konten promosi acara dan edukasi teknologi dalam bentuk post dan Instagram Reels.",
                    "Menyusun jadwal konten untuk menjaga konsistensi komunikasi komunitas."
                  ]}
                  image={sosmedDscFoto}
                />
                <ExperienceItem 
                  title="Script Editor (Teknoka 9) | UHAMKA"
                  date="Nov 2024 – Jan 2025"
                  points={[
                    "Melakukan penyuntingan naskah akademik untuk publikasi prosiding konferensi.",
                    "Meningkatkan kualitas tulisan melalui proofreading dan perbaikan struktur bahasa."
                  ]}
                />
                <ExperienceItem 
                  title="Secretary | GDSC UHAMKA"
                  date="Agu 2023 – Des 2024"
                  points={[
                    "Menyusun notulensi rapat sebagai dokumentasi kegiatan organisasi.",
                    "Mengelola administrasi dan korespondensi internal serta eksternal komunitas."
                  ]}
                />
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects">
              <SectionHeader icon={<Code />} title="Proyek" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProjectCard 
                  title="AI Konsultasi Mahasiswa"
                  date="Des 2025 – Sekarang"
                  description="Sistem konsultasi berbasis AI untuk membantu mahasiswa memperoleh informasi akademik & non-akademik."
                  tech={["Python", "Google Gemini API", "Streamlit"]}
                  status="Dalam tahap pengembangan"
                />
                <ProjectCard 
                  title="Website Pemesanan Tiket Bioskop (ANIBI)"
                  date="Selesai"
                  description="Website pemesanan tiket dengan fitur pemilihan film, jadwal, kursi, sistem manajemen serta panel admin."
                  tech={["HTML/CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"]}
                  link="https://linuxhosting2.cyberprimatama.co.id/anibi/"
                />
                <ProjectCard 
                  title="BengkelPro - Sistem Manajemen Bengkel"
                  date="Mar 2026 – Sekarang"
                  description="Sistem manajemen bengkel web modern dengan fitur role-based access control (Customer, Kasir, Mekanik, Admin, Owner)."
                  tech={["React 18", "Vite", "Supabase", "JavaScript"]}
                  link="https://bengkelpro.vercel.app"
                  status="Dalam tahap pengembangan"
                />
              </div>
            </section>

          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-12">
            
            {/* Education */}
            <section id="education">
              <div className="bg-surface-variant/50 border border-gray-200 dark:border-gray-800 p-8 rounded-[2rem] shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h2 className="font-headline text-2xl font-bold">Pendidikan</h2>
                </div>
                <div className="mb-2">
                  <h3 className="font-bold text-lg text-on-surface">Universitas Muhammadiyah Prof. Dr. Hamka</h3>
                  <p className="text-on-surface-variant text-sm mt-1">S1 Teknik Informatika</p>
                </div>
                <div className="flex justify-between items-center text-sm font-semibold mt-4">
                  <span className="text-on-surface-variant">2023 – Sekarang</span>
                  <span className="text-primary bg-primary/10 px-3 py-1 rounded-full">IPK 3.50</span>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <div className="bg-surface-variant/50 border border-gray-200 dark:border-gray-800 p-8 rounded-[2rem] shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-secondary/10 text-secondary rounded-xl">
                    <Award className="w-5 h-5" />
                  </div>
                  <h2 className="font-headline text-2xl font-bold">Sertifikasi</h2>
                </div>
                <ul className="space-y-4">
                  {[
                    "Develop GenAI Apps with Gemini and Streamlit",
                    "Prompt Design in Vertex AI",
                    "Inspect Rich Documents with Gemini Multimodality and Multimodal RAG",
                    "Introduction to Cloud and Artificial Intelligence Applications for Digital Business",
                    "Gemini Certified Educator"
                  ].map((cert, idx) => (
                    <li key={idx} className="flex gap-3 text-on-surface-variant text-sm leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Skills */}
            <section id="skills">
              <div className="bg-surface-variant/50 border border-gray-200 dark:border-gray-800 p-8 rounded-[2rem] shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-tertiary/10 text-tertiary rounded-xl">
                    <Code className="w-5 h-5" />
                  </div>
                  <h2 className="font-headline text-2xl font-bold">Keterampilan</h2>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-on-surface mb-3 uppercase tracking-wider">Hard Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Python", "Generative AI", "Prompt Engineering", "API Integration", "Microsoft Word"].map(skill => (
                      <span key={skill} className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-on-surface text-xs font-semibold rounded-lg shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-on-surface mb-3 uppercase tracking-wider">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Kepemimpinan", "Komunikasi", "Manajemen Komunitas", "Proofreading & Penyuntingan", "Manajemen Media Sosial"].map(skill => (
                      <span key={skill} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-on-surface-variant text-xs font-semibold rounded-lg">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-surface-variant/30 border-t border-gray-200 dark:border-gray-800 mt-12 py-10">
        <div className="px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="font-headline font-bold text-xl">Ian<span className="text-primary">.</span></div>
          <p className="text-sm text-on-surface-variant">
            © {new Date().getFullYear()} Tiananmen Setyo Nugroho. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Helper Components
function SectionHeader({ icon, title }: { icon: React.ReactNode, title: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <div className="p-4 bg-primary/10 text-primary rounded-2xl">
        {icon}
      </div>
      <h2 className="font-headline text-3xl font-extrabold">{title}</h2>
    </div>
  );
}

function ExperienceItem({ title, date, points, image }: { title: string, date: string, points: string[], image?: string }) {
  return (
    <div className="relative flex items-start group">
      <div className="hidden md:block w-4 h-4 rounded-full bg-primary border-4 border-surface shadow-sm absolute left-1/2 -translate-x-1/2 mt-1.5 z-10 transition-transform group-hover:scale-125"></div>
      <div className="md:w-1/2 pr-8 md:pr-12 md:text-right hidden md:block">
        <span className="text-sm font-bold text-primary block mt-1 mb-4">{date}</span>
        {image && (
          <div className="w-full flex justify-end">
            <img src={image} alt={title} className="w-48 lg:w-56 h-auto rounded-xl shadow-md border border-gray-100 dark:border-gray-800 object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        )}
      </div>
      <div className="w-full md:w-1/2 pl-12 md:pl-12 pb-10">
        <div className="absolute left-3 w-4 h-4 rounded-full bg-primary border-4 border-surface shadow-sm mt-1.5 z-10 md:hidden"></div>
        <div className="bg-surface-variant/50 border border-gray-200 dark:border-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group-hover:border-primary/30">
          <span className="text-xs font-bold text-primary block md:hidden mb-3">{date}</span>
          {image && (
            <div className="block md:hidden mb-4 w-full">
              <img src={image} alt={title} className="w-full h-auto rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 object-cover" />
            </div>
          )}
          <h3 className="font-headline font-bold text-lg text-on-surface mb-4 leading-tight">{title}</h3>
          <ul className="space-y-2">
            {points.map((point, idx) => (
              <li key={idx} className="text-sm text-on-surface-variant flex items-start gap-2">
                <span className="text-primary/50 text-xs mt-0.5">•</span>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ title, date, description, tech, link, status }: { title: string, date: string, description: string, tech: string[], link?: string, status?: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-surface-variant/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 flex flex-col h-full shadow-sm"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-headline font-bold text-xl text-on-surface leading-tight">{title}</h3>
        {link && (
          <a href={link} target="_blank" rel="noreferrer" className="p-2 bg-white dark:bg-gray-800 rounded-full text-on-surface hover:text-primary hover:scale-110 transition-all shadow-sm">
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
      <div className="text-xs font-bold text-primary mb-3">{date}</div>
      <p className="text-sm text-on-surface-variant mb-6 flex-grow leading-relaxed">{description}</p>
      
      <div className="space-y-4 mt-auto border-t border-gray-200 dark:border-gray-800 pt-4">
        <div className="flex flex-wrap gap-2">
          {tech.map((t, idx) => (
            <span key={idx} className="px-2 py-1 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-wider rounded">
              {t}
            </span>
          ))}
        </div>
        {status && (
          <div className="flex items-center gap-2 text-xs font-medium text-yellow-600 dark:text-yellow-500">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
            {status}
          </div>
        )}
      </div>
    </motion.div>
  );
}
