'use client'
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Link as LinkIcon, Phone, MapPin, Sun, Moon, ExternalLink, Download, Code2, Briefcase, Rocket, Star, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// === HOW TO USE ===
// 1) Export your resume PDF as `/public/resume.pdf` or update RESUME_URL.
// 2) Replace any remaining placeholders (e.g., avatar) if you like.
// 3) Deploy to Vercel/Netlify/GitHub Pages.

const RESUME_URL = "/resume.pdf"; // put your exported PDF here when deploying

const profile = {
  name: "Shrsti Garhewal",
  title: "Frontend Developer (React, Next.js)",
  tagline:
    "MCA graduate building scalable, high‑performance web apps with React/Next.js, Tailwind & Redux.",
  location: "Bhopal, Madhya Pradesh, India",
  avatar:
    "https://res.cloudinary.com/dxduwhoku/image/upload/v1757231876/formal_jhseu1.jpg", // optional placeholder
  socials: [
    { label: "GitHub", href: "https://github.com/Shrsti27", icon: Github },
    { label: "LinkedIn", href: "https://linkedin.com/in/shrsti-garhewal", icon: Linkedin },
    { label: "Email", href: "mailto:shrstigarhewal271627@gmail.com", icon: Mail },
  ],
};

const skills = [
  {
    group: "Frontend",
    items: ["React.js", "Next.js", "HTML5", "CSS3", "JavaScript (ES6+)", "Accessibility"],
  },
  {
    group: "UI Libraries",
    items: ["Shadcn/UI", "Material UI", "Next UI", "Framer Motion", "Radix UI"],
  },
  {
    group: "State & Data",
    items: ["Redux Toolkit", "Axios"],
  },
  {
    group: "Styling",
    items: ["Tailwind CSS", "Bootstrap", "Responsive Design"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "v0.dev", "ChatGPT", "Vite/Webpack", "ESLint", "Prettier"],
  },
  {
    group: "Backend/DB (used)",
    items: ["Node.js", "MongoDB"],
  },
];

const projects = [
  {
    name: "Beangate Academy",
    description:
      "Full‑featured educational platform with student enrollments, course pages, and an in‑progress Admin Panel for course, user, and content management.",
    stack: ["Next.js", "Redux Toolkit", "Shadcn", "Next UI", "Tailwind", "Axios", "Node.js", "MongoDB"],
    links: [
      { label: "Live", href: "https://academy.beangates.com/" },
      { label: "Company", href: "https://beangates.com/" },
    ],
  },
  {
    name: "DG News",
    description:
      "Dynamic news website featuring real‑time updates and a clean, mobile‑first interface.",
    stack: ["Next.js", "Next UI", "Tailwind"],
    links: [
      { label: "Live", href: "https://dgnews.co.in/" },
    ],
  },
  {
    name: "Beangate CRM",
    description:
      "Role‑based CRM for customer data and operations with integrated backend APIs.",
    stack: ["Next.js", "Redux Toolkit", "Tailwind", "Node.js", "MongoDB"],
    links: [
      { label: "Admin", href: "https://admin.beangates.com/" },
    ],
  },
];

const experience = [
  {
    company: "Beangate IT Solutions",
    role: "Frontend Developer",
    period: "Jun 2023 – Present",
    points: [
      "Designed and built responsive UI with React, Shadcn, Material UI, and Next UI.",
      "Integrated REST APIs and managed state with Redux Toolkit to reduce props drilling.",
      "Improved performance and reliability across user‑facing pages; building an Admin Panel for Academy.",
    ],
  },
  {
    company: "Sony Computers (Internship)",
    role: "Front‑End Development Intern",
    period: "Jun 2021",
    points: [
      "Learned foundations of C/C++ and frontend essentials; collaborated on small UI tasks.",
    ],
  },
];

const education = [
  {
    school: "TIT – Technocrats Institute of Technology, Bhopal (RGPV)",
    degree: "Master of Computer Applications (MCA)",
    period: "2022 – 2024",
  },
  {
    school: "Govt Autonomous Post Graduate College, Chhindwara (RDVV)",
    degree: "Bachelor of Computer Applications (BCA)",
    period: "2018 – 2021",
  },
];

const contact = {
  email: "shrstigarhewal271627@gmail.com",
  phone: "+91 91742 91936",
};

const Section = ({ id, title, icon: Icon, children } : any) => (
  <section id={id} className="scroll-mt-24">
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
    >
      <div className="flex items-center gap-3">
        {Icon && <Icon className="h-6 w-6" aria-hidden />}
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      </div>
      <div className="mt-6">{children}</div>
    </motion.div>
  </section>
);

const NavLink = ({ href, children }: any) => (
  <a
    href={href}
    className="inline-flex items-center rounded-xl px-3 py-2 text-sm font-medium hover:bg-muted transition"
  >
    {children}
  </a>
);

export default function PortfolioShrsti() {
  const [dark, setDark] = useState(true);
  const themeClass = useMemo(() => (dark ? "dark" : ""), [dark]);

  return (
    <div className={`${themeClass}`}>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
        {/* Top Nav */}
        <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5" aria-hidden />
              <span className="text-sm font-semibold">Shrsti.dev</span>
            </div>

            <div className="hidden gap-1 md:flex">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>

            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="ghost"
                aria-label="Toggle theme"
                onClick={() => setDark((v) => !v)}
                className="rounded-2xl"
              >
                {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <a href={RESUME_URL} target="_blank" rel="noreferrer">
                <Button className="rounded-2xl">
                  <Download className="mr-2 h-4 w-4" /> Resume
                </Button>
              </a>
            </div>
          </nav>
        </header>

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-30 blur-3xl" aria-hidden />

          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium">
                <Rocket className="h-3.5 w-3.5" /> Available for full‑time roles
              </div>
              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Hi, I’m {profile.name} — <span className="text-primary">{profile.title}</span>
              </h1>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">{profile.tagline}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#projects">
                  <Button className="rounded-2xl">
                    <Star className="mr-2 h-4 w-4" /> View Projects
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="outline" className="rounded-2xl">
                    <Mail className="mr-2 h-4 w-4" /> Contact Me
                  </Button>
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {profile.location}</span>
                <span className="inline-flex items-center gap-1"><Phone className="h-4 w-4" /> {contact.phone}</span>
              </div>
              <div className="mt-6 flex gap-3">
                {profile.socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="inline-flex items-center rounded-xl border px-3 py-2 text-sm hover:bg-muted">
                    <s.icon className="mr-2 h-4 w-4" /> {s.label}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="mx-auto w-full max-w-sm">
              <Card className="overflow-hidden rounded-3xl">
                <CardContent className="p-0">
                  <img src={profile.avatar} alt="Portrait" className="h-full w-full object-cover" />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* About */}
        <Section id="about" title="About" icon={User}>
          <div className="prose dark:prose-invert max-w-none mb-5">
            <p>
              I’m a frontend developer specializing in React and Next.js. Backed by an MCA and hands‑on
              experience at Beangate IT Solutions, I focus on building scalable, high‑performance, accessible UIs.
              I enjoy collaborating with backend teams, integrating APIs, and shipping business impact quickly.
            </p>
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills" icon={Code2} >
          <div className="grid  border-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-5">
            {skills.map((s) => (
              <Card key={s.group} className="rounded-3xl">
                <CardContent className="p-5">
                  <h3 className="text-base font-semibold">{s.group}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {s.items.map((i) => (
                      <li key={i} className="rounded-xl border px-3 py-1 text-sm">{i}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects" icon={Rocket}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-5">
            {projects.map((p) => (
              <Card key={p.name} className="rounded-3xl">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span key={t} className="rounded-xl border px-2.5 py-1 text-xs">{t}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.links?.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm underline-offset-4 hover:underline">
                        <ExternalLink className="h-4 w-4" /> {l.label}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience" icon={Briefcase}>
          <div className="grid gap-4 mb-5">
            {experience.map((e) => (
              <Card key={e.company+e.role} className="rounded-3xl">
                <CardContent className="p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold">{e.role} · {e.company}</h3>
                    <span className="text-sm text-muted-foreground">{e.period}</span>
                  </div>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                    {e.points.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section id="education" title="Education" icon={Star}>
          <div className="grid gap-4 mb-5">
            {education.map((ed) => (
              <Card key={ed.school+ed.degree} className="rounded-3xl">
                <CardContent className="p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-semibold">{ed.degree}</h3>
                    <span className="text-sm text-muted-foreground">{ed.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{ed.school}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact" icon={Mail}>
          <div className="flex flex-wrap items-center gap-3 text-sm mb-5">
            <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-muted">
              <Mail className="h-4 w-4" /> {contact.email}
            </a>
            <a href="tel:+919174291936" className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-muted">
              <Phone className="h-4 w-4" /> {contact.phone}
            </a>
          </div>
        </Section>

        {/* Footer */}
        <footer className="border-t py-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-sm text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
