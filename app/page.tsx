'use client'

import { useState } from 'react'
import {
  ArrowRight,
  ChevronDown,
  CircleHelp,
  Gem,
  Headphones,
  Menu,
  MessageCircle,
  MousePointer2,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'
import { siteConfig, whatsappUrl } from '@/src/config/site'

const features = [
  { icon: Gem, title: 'আধুনিক গেমিং প্ল্যাটফর্ম', text: 'নতুন প্রজন্মের খেলোয়াড়দের জন্য তৈরি একটি পরিশীলিত গন্তব্য।' },
  { icon: MousePointer2, title: 'সহজ ব্যবহারকারীর অভিজ্ঞতা', text: 'আবিষ্কার থেকে খেলায় পৌঁছান এমন এক ইন্টারফেসে, যা ব্যবহার করা অনায়াস।' },
  { icon: Sparkles, title: 'বিভিন্ন গেমিং বিভাগ', text: 'টেবিল, গেম এবং নানা অভিজ্ঞতার সাজানো জগৎ ঘুরে দেখুন।' },
  { icon: Headphones, title: 'নিবেদিত কাস্টমার সাপোর্ট', text: 'যখনই আপনার সহায়তা দরকার, আমাদের টিম প্রস্তুত।' },
]

function ExternalLink({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <a href={siteConfig.casinoUrl} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>
}

function BrandMark() {
  return <span className="brand-mark" aria-hidden="true"><span>♠</span></span>
}

function CasinoIllustration() {
  return (
    <div className="casino-art" aria-label="Decorative casino table illustration" role="img">
      <div className="art-glow art-glow-one" />
      <div className="art-glow art-glow-two" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="playing-card card-back"><span>♠</span></div>
      <div className="playing-card card-front"><small>A</small><span>♦</span></div>
      <div className="chip chip-gold"><span>♣</span></div>
      <div className="chip chip-green"><span>♦</span></div>
      <div className="chip chip-dark"><span>♠</span></div>
      <div className="art-label"><span className="label-line" />প্রতিষ্ঠিত ২০২৪<span className="label-line" /></div>
    </div>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a
            href="#home"
            className="brand"
            onClick={closeMenu}
            aria-label={`${siteConfig.siteName}-এর হোমপেজ`}
          >
            <BrandMark />
            <span>{siteConfig.siteName}</span>
          </a>
          <nav
            id="main-navigation"
            className={`main-nav ${menuOpen ? 'is-open' : ''}`}
            aria-label="Main navigation"
          >
            <a href="#home" onClick={closeMenu}>
              হোম
            </a>
            <a href="#about" onClick={closeMenu}>
              পরিচিতি
            </a>
            <a href="#features" onClick={closeMenu}>
              বৈশিষ্ট্য
            </a>
            <a href="#contact" onClick={closeMenu}>
              যোগাযোগ
            </a>
            <ExternalLink className="nav-cta">
              অফিশিয়াল ওয়েবসাইট দেখুন <ArrowRight aria-hidden="true" />
            </ExternalLink>
          </nav>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section id="home" className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              গেমের শিল্প
            </p>
            <h1>
              প্রিমিয়াম গেমিংয়ের <em>জগতে</em> আপনাকে স্বাগতম
            </h1>
            <p className="hero-text">
              আবহ, আবিষ্কার এবং উন্নত গেমিং অভিজ্ঞতাকে ঘিরে তৈরি এক জগতে প্রবেশ
              করুন। আপনার পরবর্তী মুহূর্ত অপেক্ষায়।
            </p>
            <div className="hero-actions">
              <ExternalLink className="button button-gold">
                আমাদের ওয়েবসাইট দেখুন <ArrowRight aria-hidden="true" />
              </ExternalLink>
              <a
                className="button button-ghost bg-[#57c883]"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle aria-hidden="true" /> হোয়াটসঅ্যাপে যোগাযোগ করুন
              </a>
            </div>
            <div className="hero-note">
              <ShieldCheck aria-hidden="true" /> দায়িত্বশীলভাবে খেলুন।
              শুধুমাত্র ১৮+।
            </div>
          </div>
          <CasinoIllustration />
        </div>
        <a
          href="#about"
          className="scroll-cue"
          aria-label="আরও জানতে স্ক্রল করুন"
        >
          <span>আবিষ্কার করতে স্ক্রল করুন</span>
          <ChevronDown aria-hidden="true" />
        </a>
      </section>

      <section id="features" className="features-section section-block">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">কেন আমাদের বেছে নেবেন</p>
            <h2>
              একটি <em>অসাধারণ</em> অভিজ্ঞতার জন্য যা কিছু দরকার।
            </h2>
          </div>
          <div className="feature-grid">
            {features.map(({ icon: Icon, title, text }) => (
              <article className="feature-card" key={title}>
                <div className="feature-icon">
                  <Icon aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="card-arrow" aria-hidden="true">
                  <ArrowRight />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about-section section-block">
        <div className="container about-grid">
          <div className="about-art">
            <div className="about-ring" />
            <div className="about-suit">♣</div>
            <div className="about-caption">
              খেলার
              <br />
              <span>নতুন মানদণ্ড</span>
            </div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">অভিজ্ঞতা</p>
            <h2>
              যারা <em>আরও বেশি</em> প্রত্যাশা করেন, তাদের জন্য।
            </h2>
            <p>
              আমরা বিশ্বাস করি, সেরা গেমিং অভিজ্ঞতা খুঁটিনাটির মধ্যেই নিহিত।
              প্রথম দেখার অনুভূতি থেকে পরবর্তী প্রতিটি যোগাযোগ—আমাদের
              প্ল্যাটফর্মটি যত্নশীল, স্বচ্ছন্দ এবং সম্পূর্ণ আপনার করে তৈরি।
            </p>
            <ExternalLink className="text-link">
              আমাদের ওয়েবসাইট ঘুরে দেখুন <ArrowRight aria-hidden="true" />
            </ExternalLink>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section section-block">
        <div className="container contact-card">
          <div>
            <p className="eyebrow">যোগাযোগ করি</p>
            <h2>
              আমরা <em>সহায়তার</em> জন্য আছি।
            </h2>
            <p>
              কোনো প্রশ্ন আছে? হোয়াটসঅ্যাপে সরাসরি আমাদের টিমের সঙ্গে যোগাযোগ
              করুন।
            </p>
          </div>
          <div className="contact-actions">
            <a
              className="button button-whatsapp"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle aria-hidden="true" /> হোয়াটসঅ্যাপে চ্যাট করুন
            </a>
            <ExternalLink className="button button-outline">
              অফিশিয়াল ওয়েবসাইট দেখুন <ArrowRight aria-hidden="true" />
            </ExternalLink>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-top">
          <a href="#home" className="brand">
            <BrandMark />
            <span>{siteConfig.siteName}</span>
          </a>
          <div className="footer-links">
            <a href="#about">পরিচিতি</a>
            <a href="#features">বৈশিষ্ট্য</a>
            <a href="#contact">যোগাযোগ</a>
            <ExternalLink>অফিশিয়াল ওয়েবসাইট</ExternalLink>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              হোয়াটসঅ্যাপ
            </a>
          </div>
          <div className="footer-support">
            <CircleHelp aria-hidden="true" />
            <span>প্রয়োজনে আমরা পাশে আছি।</span>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} {siteConfig.siteName}। সর্বস্বত্ব
            সংরক্ষিত।
          </span>
          <span>১৮+ &nbsp;|&nbsp; দায়িত্বশীলভাবে খেলুন।</span>
        </div>
      </footer>
    </main>
  );
}
