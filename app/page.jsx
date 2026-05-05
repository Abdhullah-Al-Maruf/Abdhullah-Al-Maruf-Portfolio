"use client";

import { Navbar } from '@/components/Navbar';
import {
  Layout, Atom, Wind,
  Github, Mail, MapPin, Linkedin, Twitter, Heart, Briefcase, GraduationCap
} from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiPostman, SiNextdotjs } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    icon: Github,
    url: "https://github.com/Abdhullah-Al-Maruf"
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/abdhullah-al-maruf/"
  },
  {
    icon: Twitter,
    url: "#" // add later if you want
  }
];

const colorMap = {
  'brand-red': '#e11d48',
  'brand-orange': '#f97316',
  'blue-500': '#3b82f6',
  'purple-500': '#a855f7',
};

export default function Home() {
  const containerRef = useRef(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      title: "SkillSphere Online Platform",
      color: "brand-red",
      hex: "#e11d48",
      tech: ["React", "Next.js", "MongoDB", "Better-Auth", "Google-Auth", "HeroUI"],
      icon: <Layout className="w-5 h-5 text-white" />,
      repo: "https://github.com/Abdhullah-Al-Maruf/skillSphere-online-platform",
      live: "https://skill-sphere-online-platform.vercel.app/",
      desc: "A sophisticated online learning platform with secure authentication and a modern dashboard for managing courses and skills.",
      image: "/Screenshot 2026-05-05 170113.png"
    },
    {
      title: "Products Haven Next.js",
      color: "purple-500",
      hex: "#a855f7",
      tech: ["Next.js", "Tailwind", "React", "Shadcn UI"],
      icon: <Atom className="w-5 h-5 text-white" />,
      repo: "https://github.com/Abdhullah-Al-Maruf/products-haven-next.js",
      live: "https://products-haven-next-js.vercel.app/",
      desc: "A premium e-commerce accessories store built with Next.js, featuring a sleek purple aesthetic and high-end product displays.",
      image: "/image.png"
    },
    {
      title: "DigiTools",
      color: "blue-500",
      hex: "#7c3aed",
      tech: ["React", "Tailwind CSS", "DaisyUI", "Lucide React"],
      icon: <Wind className="w-5 h-5 text-white" />,
      repo: "https://github.com/Abdhullah-Al-Maruf/DigiTool-React-Project-A6",
      live: "https://digitools-inventory.netlify.app/",
      desc: "A powerful platform to supercharge your digital workflow with premium AI tools, design assets, and productivity software.",
      image: "/digitools.png"
    }
    ,
    {
      title: "Keen Keeper",
      color: "brand-orange",
      hex: "#10b981",
      tech: ["React", "Tailwind CSS", "Lucide React", "DaisyUI"],
      icon: <Heart className="w-5 h-5 text-white" />,
      repo: "https://github.com/Abdhullah-Al-Maruf/keepkepper-asssignment-7",
      live: "https://kin-kepper.vercel.app/",
      desc: "A personal shelf of meaningful connections to browse, tend, and nurture the relationships that matter most.",
      image: "/keen-keeper.png"
    },
    {
      title: "My Food Recipes App",
      color: "blue-500",
      hex: "#3b82f6",
      tech: ["React", "DaisyUI", "Tailwind"],
      icon: <Wind className="w-5 h-5 text-white" />,
      repo: "https://github.com/Abdhullah-Al-Maruf/my-food-react-project",
      live: "https://myfood-product.netlify.app/",
      desc: "A vibrant and appetizing food product application featuring high-quality recipes and a responsive, user-friendly interface.",
      image: "/Screenshot 2026-05-05 170219.png"
    },
    {
      title: "English Janala Web App",
      color: "purple-500",
      hex: "#a855f7",
      tech: ["Tailwind", "Vanilla JS", "DaisyUI"],
      icon: <Atom className="w-5 h-5 text-white" />,
      repo: "https://github.com/Abdhullah-Al-Maruf/English-janala-web-app",
      live: "https://abdhullah-al-maruf.github.io/English-janala-web-app/",
      desc: "A clean and modern vocabulary learning application designed to help users master English words through an interactive UI.",
      image: "/Screenshot 2026-05-05 170140.png"
    }

  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {

      // 1. Loading Screen & Hero Entrance Timeline
      document.body.style.overflow = "hidden";
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          const loader = document.querySelector('.loader-overlay');
          if (loader) loader.style.display = 'none';
          ScrollTrigger.refresh();
        }
      });

      // Cinematic background text pan
      gsap.fromTo(".loader-bg-text",
        { xPercent: 10 },
        { xPercent: -20, duration: 3.5, ease: "none" }
      );

      // Percentage Counter
      const counter = { val: 0 };
      tl.to(counter, {
        val: 100,
        duration: 2,
        ease: "power4.inOut",
        onUpdate: () => {
          const el = document.querySelector('.loader-counter');
          if (el) el.textContent = Math.round(counter.val) + "%";
        }
      })
        .fromTo(".loader-text-span",
          { y: 30, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
          "-=1.5"
        )
        .to(".loader-progress", { width: "100%", duration: 2, ease: "power4.inOut" }, "-=2")
        // Exit animations
        .to([".loader-counter", ".loader-text-span", ".loader-progress"], { y: -50, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power3.in" })
        .to(".loader-bg-text", { opacity: 0, duration: 0.5 }, "-=0.6")
        .to(".loader-overlay", {
          yPercent: -100,
          duration: 1.2,
          ease: "power4.inOut"
        })
        // Seamlessly chain into the Hero animation as the curtain rises
        .from(".hero-title", { y: 50, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.6")
        .from(".hero-subtitle", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
        .from(".hero-desc", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .from(".hero-buttons", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4");

      // 2. Section Reveal Animations
      gsap.utils.toArray('.reveal-section').forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%", // trigger when top of section hits 85% of viewport
            toggleActions: "play none none none", // Only play once for premium feel
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });

      // 3. Skill Section Container Animation
      gsap.from(".skill-container", {
        scrollTrigger: {
          trigger: "#skills",
          start: "top 80%",
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });

      // 4. Skills Staggered Entrance
      gsap.from(".skill-item", {
        scrollTrigger: {
          trigger: "#skills",
          start: "top 70%",
        },
        y: 50,
        opacity: 0,
        scale: 0.5,
        stagger: 0.15, // Increased stagger for "one by one" effect
        duration: 0.8,
        ease: "back.out(1.5)"
      });

      // 5. Timeline Animations (Experience & Education)
      gsap.utils.toArray('.timeline-container').forEach(container => {
        const line = container.querySelector('.timeline-line');
        // Draw the line down as you scroll
        if (line) {
          gsap.fromTo(line,
            { scaleY: 0, transformOrigin: "top" },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: container,
                start: "top center",
                end: "bottom center",
                scrub: true
              }
            }
          );
        }

        const items = container.querySelectorAll('.timeline-item');

        items.forEach((item) => {
          const dot = item.querySelector('.timeline-dot');
          const content = item.querySelector('.timeline-content');

          // Animate dot (activates when line reaches it)
          if (dot) {
            gsap.from(dot, {
              scale: 0,
              backgroundColor: "#374151", // Starts off inactive (gray)
              duration: 0.6,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: item,
                start: "top center", // Triggers exactly when line reaches the item
                toggleActions: "play none none reverse"
              }
            });
          }

          // Animate content box
          if (content) {
            gsap.from(content, {
              x: 50,
              opacity: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top center", // Syncs with dot activation
                toggleActions: "play none none reverse"
              }
            });
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* Unique Cinematic Loader Overlay */}
      <div className="loader-overlay fixed inset-0 z-[99999] bg-[#030303] flex flex-col items-center justify-center overflow-hidden">

        {/* Huge Background Text */}
        <div className="loader-bg-text absolute opacity-5 whitespace-nowrap text-[20vw] font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 pointer-events-none select-none">
          PORTFOLIO
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="loader-counter text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-brand-orange via-brand-red to-purple-600 drop-shadow-[0_0_30px_rgba(225,29,72,0.4)] mb-2">
            0%
          </div>

          <div className="overflow-hidden h-12 mb-8 flex items-center justify-center">
            <span className="loader-text-span text-lg md:text-2xl font-bold tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-red to-purple-500 drop-shadow-[0_0_15px_rgba(225,29,72,0.5)]">
              Welcome to my portfolio
            </span>
          </div>

          <div className="w-64 md:w-96 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
            <div className="loader-progress absolute top-0 left-0 h-full w-0 bg-gradient-to-r from-brand-orange via-brand-red to-purple-600 shadow-[0_0_20px_rgba(225,29,72,0.8)]"></div>
          </div>
        </div>
      </div>

      <Navbar />

      {/* Ultra Glassy Background Elements with Parallax classes */}
      <div className="fixed inset-0 top-0 hero-bg -z-20 opacity-40"></div>
      <div className="bg-orb-1 fixed top-1/4 left-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-brand-red/10 rounded-full blur-[100px] md:blur-[150px] -z-10 animate-glow-pulse pointer-events-none"></div>
      <div className="bg-orb-2 fixed bottom-1/4 right-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-brand-orange/5 rounded-full blur-[100px] md:blur-[150px] -z-10 animate-glow-pulse pointer-events-none delay-1000"></div>

      <main className="max-w-7xl mx-auto px-6 pt-48 pb-24 relative z-10 overflow-hidden">
        {/* Hero */}
        <section id="home" className="text-center space-y-6 mb-40 flex flex-col items-center">
          <h1 className="hero-title text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            ABDHULLAH AL MARUF
          </h1>
          <h2 className="hero-subtitle text-2xl md:text-3xl font-bold tracking-widest uppercase bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent drop-shadow-md">
            MERN STACK DEVELOPER
          </h2>
          <p className="hero-desc text-gray-300 max-w-xl mx-auto mt-4 text-sm md:text-base leading-relaxed bg-white/5 p-5 rounded-3xl backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
            I am a driven and passionate MERN Stack Developer with a strong foundation in building scalable and performant
            web applications.
          </p>
          <div className="hero-buttons flex gap-5 justify-center pt-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="bg-brand-red/80 backdrop-blur-xl hover:bg-brand-red text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:shadow-[0_0_30px_rgba(225,29,72,0.7)] border border-white/20"
            >
              Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10 hover:border-white/40 text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)]"
            >
              Projects
            </motion.a>
          </div>



          <div className="flex justify-center gap-5 pt-4">
            {socialLinks.map(({ icon: Icon, url }, idx) => (
              <motion.a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-white/20 text-gray-400 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </section>

        {/* About Me */}
        <section id="about" className="reveal-section mb-40 pt-10 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-brand-orange text-2xl font-bold uppercase tracking-widest drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]">About Me</h2>
            <p className="text-gray-400 text-sm mt-1">Get to know me better</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 justify-center bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden group hover:border-white/20 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex-1 text-gray-300 space-y-4 text-sm leading-relaxed border-l-2 border-brand-orange/50 pl-6 max-w-lg relative z-10">
              <p>I am a driven and passionate Full Stack Developer with experience in building scalable web applications. I
                love turning complex problems into elegant solutions.</p>
              <p>My journey in web development started with a curiosity for how things work, and it has evolved into a
                career where I build solutions that make a real impact.</p>
              <p>When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or
                enjoying a good cup of coffee.</p>
            </div>
            <div className="flex-shrink-0 relative z-10">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="avatar-wrapper shadow-[0_0_30px_rgba(225,29,72,0.3)]"
              >
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden bg-black/50 backdrop-blur-md border-4 border-white/10 relative">
                  <Image src="/headshot.jpg" alt="Profile" fill
                    className="object-cover object-top" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="reveal-section mb-40 pt-10 scroll-mt-20 text-center">
          <div className="text-center mb-12">
            <h2 className="text-brand-orange text-2xl font-bold uppercase tracking-widest drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]">Skills</h2>
            <p className="text-gray-400 text-sm mt-1">My technical arsenal</p>
          </div>

          <div className="skill-container bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 max-w-3xl mx-auto shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-white/20 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/5 to-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Frontend */}
            <h3 className="text-xs font-semibold text-gray-300 mb-8 uppercase tracking-widest bg-white/5 inline-block px-5 py-2.5 rounded-full border border-white/10 shadow-sm relative z-10">Frontend</h3>
            <div className="flex flex-wrap justify-center gap-6 mb-12 relative z-10">
              {[
                { icon: <FaHtml5 className="w-7 h-7 text-[#E44D26]" />, name: 'HTML' },
                { icon: <FaCss3Alt className="w-7 h-7 text-[#264DE4]" />, name: 'CSS' },
                { icon: <IoLogoJavascript className="w-7 h-7 text-[#F7DF1E]" />, name: 'JavaScript' },
                { icon: <FaReact className="w-7 h-7 text-[#61DAFB]" />, name: 'React' },
                { icon: <SiTailwindcss className="w-7 h-7 text-[#38B2AC]" />, name: 'Tailwind' },
                { icon: <SiNextdotjs className="w-7 h-7 text-[#38B2AC]" />, name: 'Next.js' },
              ].map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="skill-item flex flex-col items-center gap-3 bg-white/5 hover:bg-white/10 p-5 rounded-3xl border border-white/5 hover:border-white/20 transition-colors backdrop-blur-md shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]"
                >
                  <div className="w-12 h-12 flex items-center justify-center drop-shadow-lg">
                    {skill.icon}
                  </div>
                  <span className="text-xs font-bold text-gray-400">{skill.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Backend & Tools */}
            <h3 className="text-xs font-semibold text-gray-300 mb-8 uppercase tracking-widest bg-white/5 inline-block px-5 py-2.5 rounded-full border border-white/10 shadow-sm relative z-10">Backend & Database</h3>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              {[
                { icon: <FaNodeJs className="w-7 h-7 text-[#339933]" />, name: 'Node.js' },
                { icon: <SiMongodb className="w-7 h-7 text-[#47A248]" />, name: 'MongoDB' },
                { icon: <SiExpress className="w-7 h-7 text-gray-300" />, name: 'Express' },
                { icon: <FaGithub className="w-7 h-7 text-white" />, name: 'Git/GitHub' },
                { icon: <SiPostman className="w-7 h-7 text-[#FF6C37]" />, name: 'Postman' },
              ].map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="skill-item flex flex-col items-center gap-3 bg-white/5 hover:bg-white/10 p-5 rounded-3xl border border-white/5 hover:border-white/20 transition-colors backdrop-blur-md shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]"
                >
                  <div className="w-12 h-12 flex items-center justify-center drop-shadow-lg">
                    {skill.icon}
                  </div>
                  <span className="text-xs font-bold text-gray-400">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="reveal-section mb-40 pt-10 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-brand-orange text-2xl font-bold uppercase tracking-widest drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]">Featured Projects</h2>
            <p className="text-gray-400 text-sm mt-1">Some of my recent work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Cards with Framer Motion Hover */}
            {(showAllProjects ? projects : projects.slice(0, 3)).map((proj, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden flex flex-col group shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.15)] hover:border-white/30 transition-colors"
              >
                <div className="h-48 overflow-hidden relative border-b border-white/10">
                  <Image src={proj.image} alt={proj.title} fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                </div>
                <div className="p-7 flex flex-col flex-1 relative">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute top-0 right-7 -translate-y-1/2"
                  >
                    <div
                      className="backdrop-blur-xl w-12 h-12 rounded-full flex items-center justify-center border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                      style={{ backgroundColor: `${proj.hex}cc` }}
                    >
                      {proj.icon}
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white transition">{proj.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed">{proj.desc}</p>
                  <div className="flex gap-2 mb-7 flex-wrap">
                    {proj.tech.map(t => (
                      <span key={t} className="text-[11px] font-bold text-gray-300 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md shadow-sm">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand-red/80 backdrop-blur-xl hover:bg-brand-red text-white text-xs px-4 py-3 rounded-xl font-bold text-center flex-1 shadow-[0_0_15px_rgba(225,29,72,0.3)] border border-brand-red/50"
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={proj.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/20 text-white text-xs px-4 py-3 rounded-xl font-bold text-center flex-1 shadow-sm"
                    >
                      Source Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 text-white px-10 py-4 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 group transition-all"
            >
              {showAllProjects ? "Show Less" : "View All Projects"}
              <motion.span
                animate={{ rotate: showAllProjects ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ↓
              </motion.span>
            </motion.button>
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="reveal-section mb-20 pt-10 scroll-mt-20">
          <div className="text-center mb-16">
            <h2 className="text-brand-orange text-2xl font-bold uppercase tracking-widest drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]">Experience</h2>
            <p className="text-gray-400 text-sm mt-1">My professional journey</p>
          </div>

          <div className="timeline-container relative pl-8 md:pl-0 max-w-2xl mx-auto">
            <div className="timeline-line md:left-[16px] bg-gradient-to-b from-brand-red/50 via-brand-orange/50 to-transparent shadow-[0_0_15px_rgba(225,29,72,0.5)]"></div>

            {/* Experience Items */}
            {[
              {
                role: "Full Stack MERN Developer",
                comp: "Self Projects",
                year: "2024 - Present",
                hex: "#e11d48",
                icon: <Briefcase className="w-4 h-4 text-white" />,
                desc: "Built multiple full-stack web applications using MongoDB, Express.js, React, and Node.js. Implemented authentication, REST APIs, and responsive UI design."
              },
              {
                role: "Programming Mentor",
                comp: "Fpi Computer Club",
                year: "2025 - Present",
                hex: "#f97316",
                icon: <Briefcase className="w-4 h-4 text-white" />,
                desc: "Helping students understand programming fundamentals and guiding beginners in web development concepts and problem solving."
              }
            ].map((exp, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 10 }}
                className="timeline-item relative mb-14 md:pl-16 group"
              >
                <div className="timeline-dot flex items-center justify-center w-8 h-8 md:left-[-1px] left-[-32px] top-4 group-hover:scale-110 shadow-[0_0_20px_rgba(225,29,72,0.6)] transition-transform z-10" style={{ backgroundColor: exp.hex }}>
                  {exp.icon}
                </div>
                <div className="timeline-content bg-white/5 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(225,29,72,0.15)] relative overflow-hidden transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                      <h3 className="text-xl font-bold text-white transition">{exp.role}</h3>
                      <span className="text-xs font-bold text-white px-4 py-1.5 rounded-full mt-3 md:mt-0 w-max backdrop-blur-md" style={{ backgroundColor: `${exp.hex}33`, border: `1px solid ${exp.hex}4d` }}>{exp.year}</span>
                    </div>
                    <h4 className="text-sm font-bold mb-4" style={{ color: exp.hex }}>{exp.comp}</h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Timeline */}
        <section id="education" className="reveal-section mb-40 pt-10 scroll-mt-20">
          <div className="text-center mb-16">
            <h2 className="text-brand-orange text-2xl font-bold uppercase tracking-widest drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]">Education</h2>
            <p className="text-gray-400 text-sm mt-1">My academic background</p>
          </div>

          <div className="timeline-container relative pl-8 md:pl-0 max-w-2xl mx-auto">
            <div className="timeline-line md:left-[16px] bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>

            {/* Education Items */}
            {[
              {
                degree: "Computer Science And Technology",
                school: "Feni Polytechnic Institute",
                year: "2023 - 2026",
                hex: "#3b82f6",
                icon: <GraduationCap className="w-4 h-4 text-white" />,
                desc: "Studying core computer science subjects including programming, database systems, networking, and software development."
              },
              {
                degree: "SSC",
                school: "South Ballavpur High School And College",
                year: "2017 - 2022",
                hex: "#a855f7",
                icon: <GraduationCap className="w-4 h-4 text-white" />,
                desc: "Completed secondary education with focus on science and mathematics foundation."
              },
              {
                degree: "MERN Stack Development",
                school: "Programming Hero",
                year: "2025 - 2026",
                hex: "#22c55e",
                icon: <GraduationCap className="w-4 h-4 text-white" />,
                desc: "Completed structured training in full-stack web development using React, Node.js, Express, and MongoDB. Built real-world projects."
              }
            ].map((edu, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 10 }}
                className="timeline-item relative mb-14 md:pl-16 group"
              >
                <div className="timeline-dot flex items-center justify-center w-8 h-8 md:left-[-1px] left-[-32px] top-4 group-hover:scale-110 shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-transform z-10" style={{ backgroundColor: edu.hex }}>
                  {edu.icon}
                </div>
                <div className="timeline-content bg-white/5 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)] relative overflow-hidden transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                      <h3 className="text-xl font-bold text-white transition">{edu.degree}</h3>
                      <span className="text-xs font-bold text-white px-4 py-1.5 rounded-full mt-3 md:mt-0 w-max backdrop-blur-md" style={{ backgroundColor: `${edu.hex}33`, border: `1px solid ${edu.hex}4d` }}>{edu.year}</span>
                    </div>
                    <h4 className="text-sm font-bold mb-4" style={{ color: edu.hex }}>{edu.school}</h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {edu.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="reveal-section mb-20 pt-10 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-brand-orange text-2xl font-bold uppercase tracking-widest drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]">Get In Touch</h2>
            <p className="text-gray-400 text-sm mt-1">Let&apos;s work together</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 space-y-6">
              {[
                { label: "Email", val: "mdmaruf20053@gmail.com", icon: <Mail className="w-7 h-7 text-brand-red" /> },
                { label: "Location", val: "Bangladesh,Feni", icon: <MapPin className="w-7 h-7 text-brand-red" /> }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[2.5rem] text-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] group relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center mb-5 border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      {item.icon}
                    </div>
                    <h4 className="text-white font-bold mb-2">{item.label}</h4>
                    <p className="text-sm text-gray-400">{item.val}</p>
                  </div>
                </motion.div>
              ))}



              <div className="flex justify-center gap-5 pt-4">
                {socialLinks.map(({ icon: Icon, url }, idx) => (
                  <motion.a
                    key={idx}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-white/20 text-gray-400 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="md:col-span-3">
              <form action="https://formsubmit.co/mdmaruf20053@gmail.com" method="POST" className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] space-y-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="New message from your Portfolio!" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="relative z-10 grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs text-gray-300 uppercase tracking-widest font-bold ml-1">First Name</label>
                    <input type="text" name="First Name" placeholder="John" required className="w-full bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-sm text-white transition-all focus:outline-none focus:border-brand-red/80 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(225,29,72,0.2)] placeholder:text-gray-600" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-300 uppercase tracking-widest font-bold ml-1">Last Name</label>
                    <input type="text" name="Last Name" placeholder="Doe" required className="w-full bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-sm text-white transition-all focus:outline-none focus:border-brand-red/80 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(225,29,72,0.2)] placeholder:text-gray-600" />
                  </div>
                </div>
                <div className="relative z-10 space-y-2">
                  <label className="text-xs text-gray-300 uppercase tracking-widest font-bold ml-1">Email</label>
                  <input type="email" name="email" placeholder="john@example.com" required className="w-full bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-sm text-white transition-all focus:outline-none focus:border-brand-red/80 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(225,29,72,0.2)] placeholder:text-gray-600" />
                </div>
                <div className="relative z-10 space-y-2">
                  <label className="text-xs text-gray-300 uppercase tracking-widest font-bold ml-1">Message</label>
                  <textarea name="message" placeholder="Tell me about your project..." rows={5} required className="w-full bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-sm text-white transition-all resize-none focus:outline-none focus:border-brand-red/80 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(225,29,72,0.2)] placeholder:text-gray-600"></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="relative z-10 bg-brand-red/80 backdrop-blur-xl border border-brand-red/40 hover:bg-brand-red text-white w-full py-4 rounded-2xl font-bold tracking-widest uppercase text-sm shadow-[0_0_20px_rgba(225,29,72,0.4)] mt-4"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t  border-white/10 bg-black/40 backdrop-blur-2xl py-10 mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm  font-medium text-gray-400">© 2026  All rights reserved.</p>
          <p className="text-sm  font-medium text-gray-400">Developed byAbdullah Al Maruf</p>
        </div>
      </footer>
    </div>
  );
}
