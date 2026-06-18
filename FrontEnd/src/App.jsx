import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion as Motion, useInView } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  Bird,
  Bug,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Droplets,
  Hammer,
  Home,
  IndianRupee,
  Layers3,
  MapPin,
  Menu,
  MessageCircle,
  Microscope,
  Phone,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Star,
  Waves,
  Wrench,
  X,
  Zap,
} from 'lucide-react'
import './App.css'
import heroImage from './assets/projects/0234b19f3092f7ddba412623aafeb9cde609e5b66da36d55a004c452a7aad752.jpg'
import projectCollage from './assets/projects/aht-project-collage.jpg'

const phonePrimary = '916284069119'
const callPrimary = '+916284069119'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Projects', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

const counters = [
  { value: 100, suffix: '+', label: 'Projects Completed' },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '%', label: 'Customer Satisfaction' },
  { value: 24, suffix: '/7', label: 'Support' },
]

const services = [
  {
    title: 'Waterproofing',
    icon: Droplets,
    description:
      'Complete waterproofing systems for homes, offices, factories, roofs, and wet areas.',
  },
  {
    title: 'Anti Termite Treatment',
    icon: Bug,
    description:
      'Preventive and corrective termite protection for foundations, woodwork, and interiors.',
  },
  {
    title: 'Anti Termite Pipeline',
    icon: SprayCan,
    description:
      'Pipeline-based termite treatment planning for long-term soil and structural protection.',
  },
  {
    title: 'Injection Grouting',
    icon: Wrench,
    description:
      'High-pressure crack filling and leakage sealing for slabs, walls, and basements.',
  },
  {
    title: 'Bird Spikes Installation',
    icon: Bird,
    description:
      'Neat, durable bird control solutions for ledges, signage, balconies, and facades.',
  },
  {
    title: 'Leakage Repair',
    icon: Hammer,
    description:
      'Fast diagnosis and repair for seepage, damp patches, dripping joints, and cracks.',
  },
  {
    title: 'Terrace Waterproofing',
    icon: Home,
    description:
      'UV-resistant terrace protection that helps reduce seepage and surface damage.',
  },
  {
    title: 'Basement Waterproofing',
    icon: Building2,
    description:
      'Below-ground moisture control for basements, parking areas, retaining walls, and pits.',
  },
]

const reasons = [
  { title: 'Experienced Team', icon: BadgeCheck },
  { title: 'Modern Technology', icon: Microscope },
  { title: 'Quality Materials', icon: ShieldCheck },
  { title: 'Affordable Pricing', icon: IndianRupee },
  { title: 'Long Term Protection', icon: Layers3 },
  { title: 'Quick Service', icon: Zap },
]

const processSteps = [
  'Site Inspection',
  'Problem Analysis',
  'Solution Planning',
  'Professional Execution',
  'Quality Assurance',
]

const projects = [
  {
    title: 'Residential Terrace Waterproofing',
    type: 'High Quality Waterproof Coating',
    image: projectCollage,
    imagePosition: '0% 0%',
  },
  {
    title: 'Premium Roof Protection Treatment',
    type: 'Advanced Roof Waterproofing',
    image: projectCollage,
    imagePosition: '100% 0%',
  },
  {
    title: 'Bird Spike Installation',
    type: 'Effective Bird Control Solution',
    image: projectCollage,
    imagePosition: '0% 83%',
  },
  {
    title: 'Industrial Waterproofing Project',
    type: 'Long-Term Industrial Protection',
    image: projectCollage,
    imagePosition: '100% 83%',
  },
]

const testimonials = [
  {
    name: 'Paramjeet Singh',
    location: 'Kharar, Mohali',
    review:
      'AHT inspected our roof the same day and explained the full treatment clearly. The seepage stopped after the work and the finishing was very neat.',
  },
  {
    name: 'Pankaj Gulati',
    location: 'Nangal City',
    review:
      'Their team handled anti-termite treatment before our renovation. Professional people, punctual work, and very practical pricing.',
  },
  {
    name: 'Mittal Construction ',
    location: 'Sector-54 ,Mohali Phase-4',
    review:
      'We hired them for water proofing in a Residential property. They found the exact weak points and completed the grouting without disrupting operations.',
  },
]

const faqs = [
  {
    question: 'What areas do you serve?',
    answer:
      'Aujla Hydro Technologies serves Ludhiana and nearby cities across Punjab for residential, commercial, and industrial waterproofing needs.',
  },
  {
    question: 'How long does waterproofing last?',
    answer:
      'Durability depends on the surface condition, product system, and exposure, but professional waterproofing can protect a property for many years with proper maintenance.',
  },
  {
    question: 'Do you provide warranty?',
    answer:
      'Warranty availability depends on the service, surface condition, and selected treatment system. The team confirms applicable warranty terms after inspection.',
  },
  {
    question: 'How much does treatment cost?',
    answer:
      'Pricing depends on site size, leakage severity, material requirement, and service type. A free inspection helps provide an accurate estimate.',
  },
  {
    question: 'How quickly can inspection be scheduled?',
    answer:
      'Inspections can usually be scheduled quickly in Ludhiana, often within the same or next working day depending on availability.',
  },
]

const contactPeople = [
  { name: 'SJS AUJLA', phone: '+91-62840-69119', href: 'tel:+916284069119' },
  { name: 'SUKHDEV SINGH AUJLA', phone: '+91-98721-95517', href: 'tel:+919872195517' },
  { name: 'OS AUJLA', phone: '+91-77176-79119', href: 'tel:+917717679119' },
]

const serviceOptions = services.map((service) => service.title)
const propertyTypes = ['Residential', 'Commercial', 'Industrial', 'Under Construction', 'Other']

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
}

function SectionIntro({ eyebrow, title, text, inverted = false }) {
  return (
    <Motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={fadeUp}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <p className={`mb-3 text-sm font-bold uppercase tracking-[0.24em] ${inverted ? 'text-[#4CC9F0]' : 'text-[#1DA8E8]'}`}>
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-black leading-tight md:text-5xl ${inverted ? 'text-white' : 'text-[#173B7A]'}`}>
        {title}
      </h2>
      <p className={`mt-5 text-base leading-8 md:text-lg ${inverted ? 'text-blue-50/80' : 'text-slate-600'}`}>
        {text}
      </p>
    </Motion.div>
  )
}

function CounterCard({ value, suffix, label }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return undefined

    let frameId
    const duration = 1500
    const startedAt = performance.now()

    const update = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(value * eased))

      if (progress < 1) {
        frameId = requestAnimationFrame(update)
      }
    }

    frameId = requestAnimationFrame(update)

    return () => cancelAnimationFrame(frameId)
  }, [isInView, value])

  return (
    <Motion.div
      ref={ref}
      className="trust-card"
      variants={fadeUp}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <span className="text-4xl font-black text-[#173B7A] md:text-5xl">
        {count}
        {suffix}
      </span>
      <span className="mt-2 block text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
        {label}
      </span>
    </Motion.div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-[#f8f6eb]/88 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="Aujla Hydro Technologies">
          <span className="logo-mark">
            <Waves size={26} />
          </span>
          <span>
            <span className="block text-sm  font-black tracking-[0.18em] text-[#173B7A]">AHT</span>
            <span className="block text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              Aujla Hydro Technologies
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a className="btn-secondary" href={`tel:${callPrimary}`}>
            <Phone size={18} />
            Call Now
          </a>
          <a className="btn-primary" href="#lead-form">
            Free Inspection
            <ArrowRight size={18} />
          </a>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-lg border border-[#173B7A]/15 bg-white text-[#173B7A] lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <Motion.div
            className="border-t border-[#173B7A]/10 bg-[#f8f6eb] px-5 py-5 lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="nav-link py-1" onClick={closeMenu}>
                  {link.label}
                </a>
              ))}
              <a className="btn-primary justify-center" href="#lead-form" onClick={closeMenu}>
                Get Free Inspection
                <ArrowRight size={18} />
              </a>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero-section relative overflow-hidden pt-28 md:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(76,201,240,0.24),transparent_28rem)]" />
      <Motion.div
        className="wave-ribbon top-28"
        animate={{ x: ['-8%', '4%', '-8%'] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-14 px-5 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <Motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-3xl"
        >
          <Motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1DA8E8]/25 bg-white/75 px-4 py-2 text-sm font-bold text-[#173B7A] shadow-sm"
          >
            <Sparkles size={16} className="text-[#1DA8E8]" />
            Advanced Waterproofing For Modern Living
          </Motion.div>
          <Motion.h1
            variants={fadeUp}
            className="max-w-4xl text-5xl font-black leading-[1.02] text-[#173B7A] md:text-7xl"
          >
            Protect Your Property From Water Damage & Termites
          </Motion.h1>
          <Motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-lg leading-9 text-slate-600 md:text-xl"
          >
            Professional waterproofing and anti-termite solutions trusted across Punjab.
          </Motion.p>
          <Motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Motion.a whileTap={{ scale: 0.98 }} className="btn-primary text-base" href="#lead-form">
              Get Free Inspection
              <ArrowRight size={20} />
            </Motion.a>
            <Motion.a whileTap={{ scale: 0.98 }} className="btn-secondary text-base" href={`tel:${callPrimary}`}>
              <Phone size={20} />
              Call Now
            </Motion.a>
          </Motion.div>
          <Motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4 text-sm font-bold text-slate-600"
          >
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={18} className="text-[#1DA8E8]" />
              Ludhiana based
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={18} className="text-[#1DA8E8]" />
              Free inspection leads
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={18} className="text-[#1DA8E8]" />
              Residential & commercial
            </span>
          </Motion.div>
        </Motion.div>

        <Motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94, y: 36 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
        >
          <div className="hero-image">
            <img
              src={heroImage}
              alt="Construction team working on a modern waterproofing project"
            />
          </div>
          <Motion.div
            className="hero-card left-0 top-10"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Droplets className="text-[#1DA8E8]" size={24} />
            <span>Leakage control specialists</span>
          </Motion.div>
          <Motion.div
            className="hero-card bottom-8 right-0"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ShieldCheck className="text-[#1DA8E8]" size={24} />
            <span>Long-term surface protection</span>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  )
}

function TrustIndicators() {
  return (
    <section className="section-pad bg-white/60">
      <Motion.div
        className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
      >
        {counters.map((counter) => (
          <CounterCard key={counter.label} {...counter} />
        ))}
      </Motion.div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="section-pad relative overflow-hidden">
      <div className="section-wave" />
      <SectionIntro
        eyebrow="Services"
        title="Built To Stop Seepage Before It Becomes Expensive"
        text="Every service is designed around practical inspection, correct material selection, and reliable execution for properties across Ludhiana and Punjab."
      />
      <Motion.div
        className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={stagger}
      >
        {services.map((service) => {
          const Icon = service.icon
          return (
            <Motion.article
              key={service.title}
              className="service-card group"
              variants={fadeUp}
              whileHover={{ y: -10, transition: { duration: 0.22 } }}
            >
              <div className="icon-tile">
                <Icon size={28} />
              </div>
              <h3 className="mt-6 text-xl font-black text-[#173B7A]">{service.title}</h3>
              <p className="mt-4 min-h-24 text-sm leading-7 text-slate-600">{service.description}</p>
              <a href="#lead-form" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#1DA8E8]">
                Request inspection
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </a>
            </Motion.article>
          )
        })}
      </Motion.div>
    </section>
  )
}

function WhyChooseUs() {
  return (
    <section className="section-pad bg-[#173B7A] text-white">
      <SectionIntro
        eyebrow="Why Choose Us"
        title="Premium Workmanship With Practical Punjabi Reliability"
        text="AHT combines site experience, modern waterproofing methods, and responsive service so property owners can act before damage spreads."
        inverted
      />
      <Motion.div
        className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
        variants={stagger}
      >
        {reasons.map((reason) => {
          const Icon = reason.icon
          return (
            <Motion.a
              href="#lead-form"
              key={reason.title}
              className="reason-card"
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.01 }}
            >
              <Icon size={28} />
              <span>{reason.title}</span>
            </Motion.a>
          )
        })}
      </Motion.div>
    </section>
  )
}

function Process() {
  return (
    <section id="process" className="section-pad">
      <SectionIntro
        eyebrow="Our Process"
        title="A Clear Path From Inspection To Protection"
        text="The process keeps decisions simple for homeowners, builders, and commercial property managers."
      />
      <Motion.div
        className="process-line mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-5 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        {processSteps.map((step, index) => (
          <Motion.article key={step} className="process-card" variants={fadeUp}>
            <span className="process-number">0{index + 1}</span>
            <h3 className="mt-5 text-lg font-black text-[#173B7A]">{step}</h3>
            <a href="#lead-form" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#1DA8E8]">
              Start here
              <ArrowRight size={15} />
            </a>
          </Motion.article>
        ))}
      </Motion.div>
    </section>
  )
}

function Gallery() {
  return (
    <section id="gallery" className="section-pad bg-white/65">
      <SectionIntro
        eyebrow="Project Gallery"
        title="Protection Work For Real Property Problems"
        text="From terraces and basements to commercial structures, AHT focuses on clean execution and durable protection."
      />
      <Motion.div
        className="gallery-grid mx-auto max-w-7xl px-5 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={stagger}
      >
        {projects.map((project, index) => (
          <Motion.article
            key={project.title}
            className={`project-card project-card-${index + 1}`}
            variants={fadeUp}
          >
            <div
              className="project-photo"
              role="img"
              aria-label={`${project.title} by Aujla Hydro Technologies`}
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundPosition: project.imagePosition,
              }}
            />
            <div className="project-overlay">
              <p>{project.type}</p>
              <h3>{project.title}</h3>
              <a href="#lead-form">Discuss similar work</a>
            </div>
          </Motion.article>
        ))}
      </Motion.div>
    </section>
  )
}

function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length)
    }, 5200)

    return () => window.clearInterval(timer)
  }, [])

  const testimonial = testimonials[active]

  return (
    <section className="section-pad">
      <SectionIntro
        eyebrow="Testimonials"
        title="Property Owners Trust AHT When Water Starts Winning"
        text="Clear communication, quick inspection, and reliable execution turn urgent leakage calls into long-term customer relationships."
      />
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="testimonial-shell">
          <AnimatePresence mode="wait">
            <Motion.article
              key={testimonial.name}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              <div className="mb-6 flex gap-1 text-[#1DA8E8]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-xl font-semibold leading-9 text-slate-700 md:text-2xl">
                “{testimonial.review}”
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-black text-[#173B7A]">{testimonial.name}</h3>
                  <p className="mt-1 text-sm font-bold text-slate-500">{testimonial.location}</p>
                </div>
                <a className="btn-primary" href="#lead-form">
                  Book inspection
                  <ArrowRight size={18} />
                </a>
              </div>
            </Motion.article>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex justify-center gap-3">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              className={`slider-dot ${active === index ? 'is-active' : ''}`}
              onClick={() => setActive(index)}
              aria-label={`Show testimonial from ${item.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function LeadForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: '',
    service: '',
    property: '',
    message: '',
  })

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const message = `Hello Aujla Hydro Technologies,

I would like a free inspection.

Name: ${form.name}

Phone: ${form.phone}

City: ${form.city}

Service Required: ${form.service}

Property Type: ${form.property}

Message: ${form.message}

Please contact me.`

    window.open(`https://wa.me/${phonePrimary}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="lead-form" className="section-pad lead-section">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-[#4CC9F0]">
            Free Inspection
          </p>
          <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
            Tell Us The Problem. We’ll Help Protect The Property.
          </h2>
          <p className="mt-5 text-lg leading-8 text-blue-50/85">
            Share your site details and the form will open WhatsApp with a ready-to-send inspection request.
          </p>
          <div className="mt-8 grid gap-4 text-blue-50">
            <span className="inline-flex items-center gap-3 font-bold">
              <Phone size={20} className="text-[#4CC9F0]" />
              +91-62840-69119
            </span>
            <span className="inline-flex items-center gap-3 font-bold">
              <MapPin size={20} className="text-[#4CC9F0]" />
              Ludhiana, Punjab
            </span>
            <span className="inline-flex items-center gap-3 font-bold">
              <Clock3 size={20} className="text-[#4CC9F0]" />
              Monday-Saturday, 9 AM - 7 PM
            </span>
          </div>
        </Motion.div>

        <Motion.form
          className="lead-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <label>
            Full Name
            <input name="name" value={form.name} onChange={updateField} required placeholder="Your name" />
          </label>
          <label>
            Phone Number
            <input
              name="phone"
              value={form.phone}
              onChange={updateField}
              required
              inputMode="tel"
              placeholder="+91"
            />
          </label>
          <label>
            City
            <input name="city" value={form.city} onChange={updateField} required placeholder="Ludhiana" />
          </label>
          <label>
            Service Required
            <select name="service" value={form.service} onChange={updateField} required>
              <option value="">Select service</option>
              {serviceOptions.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>
          <label>
            Property Type
            <select name="property" value={form.property} onChange={updateField} required>
              <option value="">Select property</option>
              {propertyTypes.map((property) => (
                <option key={property} value={property}>
                  {property}
                </option>
              ))}
            </select>
          </label>
          <label className="md:col-span-2">
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={updateField}
              rows="4"
              placeholder="Tell us about leakage, termite issue, area size, or site urgency"
            />
          </label>
          <Motion.button type="submit" className="btn-primary md:col-span-2" whileTap={{ scale: 0.98 }}>
            Send WhatsApp Enquiry
            <MessageCircle size={19} />
          </Motion.button>
        </Motion.form>
      </div>
    </section>
  )
}

function FAQ() {
  const [active, setActive] = useState(0)

  return (
    <section className="section-pad bg-white/65">
      <SectionIntro
        eyebrow="FAQ"
        title="Answers That Help You Decide Faster"
        text="A quick inspection is still the best way to confirm the exact treatment, but these answers cover the usual first questions."
      />
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        {faqs.map((faq, index) => (
          <div key={faq.question} className="faq-item">
            <button
              type="button"
              onClick={() => setActive(active === index ? null : index)}
              className="flex w-full items-center justify-between gap-5 text-left"
            >
              <span>{faq.question}</span>
              <ChevronDown className={`shrink-0 transition ${active === index ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence initial={false}>
              {active === index && (
                <Motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28 }}
                  className="overflow-hidden"
                >
                  <p>{faq.answer}</p>
                </Motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section-pad">
      <SectionIntro
        eyebrow="Contact"
        title="Schedule Your Property Inspection"
        text="Call the AHT team directly or send a WhatsApp enquiry for waterproofing, termite treatment, leakage repair, grouting, or bird spike installation."
      />
      <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <Motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid gap-4">
            {contactPeople.map((person) => (
              <a key={person.phone} href={person.href} className="contact-person">
                <span>
                  <strong>{person.name}</strong>
                  <small>{person.phone}</small>
                </span>
                <Phone size={20} />
              </a>
            ))}
          </div>
          <div className="mt-8 grid gap-5 text-slate-600">
            <p className="flex gap-3">
              <MapPin className="mt-1 shrink-0 text-[#1DA8E8]" size={22} />
              <span>
                #159, Guru Nanak Nagar,
                <br />
                Chandigarh Road,
                <br />
                Ludhiana, Punjab
              </span>
            </p>
            <p className="flex gap-3">
              <CalendarCheck className="mt-1 shrink-0 text-[#1DA8E8]" size={22} />
              <span>
                Monday-Saturday
                <br />
                9 AM - 7 PM
              </span>
            </p>
          </div>
        </Motion.div>

        <Motion.div
          className="map-embed"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          <iframe
            title="Aujla Hydro Technologies map location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d935.5545104542094!2d75.90847283959917!3d30.910752526338296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a9d3689d53c85%3A0x461107605d4585b5!2sAUJLA%20HYDRO%20TECHNOLOGIES!5e0!3m2!1sen!2sin!4v1781783056592!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#0f2a59] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.1fr_0.7fr_0.9fr_1fr] lg:px-8">
        <div>
          <a href="#home" className="flex items-center gap-3">
            <span className="logo-mark bg-white text-[#173B7A]">
              <Waves size={26} />
            </span>
            <span>
              <span className="block text-lg font-black">AHT</span>
              <span className="block text-sm text-blue-100">Aujla Hydro Technologies</span>
            </span>
          </a>
          <p className="mt-5 max-w-sm leading-7 text-blue-100">
            Advanced Waterproofing For Modern Living. Professional waterproofing and anti-termite
            solutions in Ludhiana and Punjab.
          </p>
        </div>
        <div>
          <h3 className="footer-title">Quick Links</h3>
          <div className="footer-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="footer-title">Services</h3>
          <div className="footer-links">
            {services.slice(0, 6).map((service) => (
              <a key={service.title} href="#lead-form">
                {service.title}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="footer-title">Contact Information</h3>
          <div className="space-y-3 text-blue-100">
            <p>+91-62840-69119</p>
            <p>#159, Guru Nanak Nagar, Chandigarh Road, Ludhiana, Punjab</p>
            <a className="btn-primary mt-5 inline-flex" href="#lead-form">
              Request inspection
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-sm text-blue-100">
        Copyright © 2026 Aujla Hydro Technologies. All rights reserved.
      </div>
    </footer>
  )
}

function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <Motion.a
        href={`https://wa.me/${phonePrimary}?text=${encodeURIComponent('Hello Aujla Hydro Technologies, I would like a free inspection. Please contact me.')}`}
        className="floating-action bg-[#25D366]"
        whileHover={{ y: -4, scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </Motion.a>
      <Motion.a
        href={`tel:${callPrimary}`}
        className="floating-action bg-[#173B7A]"
        whileHover={{ y: -4, scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        aria-label="Call Aujla Hydro Technologies"
      >
        <Phone size={24} />
      </Motion.a>
    </div>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustIndicators />
        <Services />
        <WhyChooseUs />
        <Process />
        <Gallery />
        <Testimonials />
        <LeadForm />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}

export default App
