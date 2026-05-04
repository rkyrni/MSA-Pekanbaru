import SectionHeading from './components/SectionHeading'
import ServiceCard from './components/ServiceCard'
import StrengthFeatureIcon from './components/StrengthFeatureIcon'
import TestimonialCard from './components/TestimonialCard'
import logoImg from './assets/logo.jpeg'
import {
  about,
  cta,
  contact,
  footerSections,
  hero,
  navLinks,
  serviceSections,
  strengths,
  testimonials,
} from './data/siteData'

function App() {
  return (
    <div className="relative overflow-hidden bg-[#f6f2e9] text-[#1F3A5F]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_0%,_rgba(212,160,23,0.22),_transparent_32%),radial-gradient(circle_at_88%_12%,_rgba(46,125,50,0.17),_transparent_36%)]" />

      <header className="sticky top-0 z-30 border-b border-[#D4A017]/30 bg-[#1F3A5F]/95 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
          <a href="#beranda" className="flex items-center gap-2">
            <img
              src={logoImg}
              alt="Mitra Serbabisa"
              className="h-10 w-auto rounded-lg border border-[#D4A017]/50 bg-white/90 p-0.5 shadow-[0_8px_18px_-10px_rgba(212,160,23,0.8)]"
            />
          </a>
          <nav className="hidden items-center gap-5 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-[#e4edf8] transition hover:text-[#D4A017]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={contact.whatsapp}
            className="rounded-xl bg-[#2E7D32] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-[0_10px_24px_-14px_rgba(46,125,50,0.9)] transition hover:bg-[#256628]"
            target="_blank"
            rel="noreferrer"
          >
            Pesan Sekarang
          </a>
        </div>
      </header>

      <main>
        <section id="beranda" className="mx-auto w-full max-w-6xl px-4 pb-16 pt-14 md:px-6 lg:px-8 lg:pt-20">
          <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="space-y-6">
              <p className="inline-flex rounded-full border border-[#D4A017]/50 bg-[#D4A017]/15 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#9B7312]">
                {hero.badge}
              </p>
              <h1 className="text-4xl font-black leading-tight text-[#1F3A5F] md:text-5xl lg:text-[3.5rem]">
                {hero.title}
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-[rgb(55,85,125)] md:text-lg">
                {hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-[#2E7D32] px-5 py-3 text-sm font-black uppercase tracking-wide text-white shadow-[0_12px_30px_-16px_rgba(46,125,50,1)] transition hover:bg-[#256628]"
                >
                  {hero.primaryCta}
                </a>
                <a
                  href="#layanan"
                  className="rounded-xl border border-[#1F3A5F]/20 bg-white px-5 py-3 text-sm font-black uppercase tracking-wide text-[#1F3A5F] transition hover:border-[#D4A017]/70 hover:text-[#D4A017]"
                >
                  {hero.secondaryCta}
                </a>
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-[#D4A017]/20 bg-white p-5 shadow-[0_24px_60px_-28px_rgba(31,58,95,0.5)] md:p-7">
              <img src={logoImg} alt="MSA service" className="min-h-full w-full rounded-2xl object-cover md:min-h-full" />
              <p className="mb-2 mt-4 text-sm font-bold uppercase tracking-wide text-[#2E7D32]">Layanan Favorit</p>
              <ul className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
                {hero.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center justify-between gap-2 rounded-xl bg-[#f9f5ea] p-3 text-sm font-semibold text-[#1F3A5F]">
                    <span>{highlight}</span>
                    <span className="text-xs tracking-tight text-[#D4A017]" aria-label={`Rating 5 dari 5 untuk ${highlight}`}>
                      ★★★★★
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-[#395a84]">
                Tim MSA siap membantu kebutuhan Anda dengan proses pemesanan praktis.
              </p>
            </div>
          </div>
        </section>

        <section id="layanan" className="mx-auto w-full max-w-6xl space-y-10 px-4 py-14 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Kami Siap Membantu"
            title="Pilihan Layanan Lengkap Untuk Kebutuhan Harian Anda"
            subtitle="MSA menghadirkan ragam layanan dengan integritas tinggi, dikelola secara profesional untuk memberi solusi yang tepercaya, rapi, dan nyaman di setiap kebutuhan Anda."
            center
          />

          {serviceSections.map((group, index) => (
            <section key={group.title} className="space-y-4">
              <h3 className="text-xl font-black text-[#1F3A5F]">
                {group.title} <span className="text-[#D4A017]">0{index + 1}</span>
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {group.services.map((service) => (
                  <ServiceCard
                    key={service.name}
                    name={service.name}
                    items={service.items}
                    href={service.href}
                    actionLabel={service.actionLabel}
                  />
                ))}
              </div>
            </section>
          ))}
        </section>

        <section id="tentang" className="border-y border-[#1F3A5F]/10 bg-white/75">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 md:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
            <SectionHeading eyebrow={about.eyebrow} title={about.title} subtitle={about.description} />
            <div className="grid gap-4 sm:grid-cols-2">
              {strengths.map((item, idx) => (
                <article key={item.title} className="rounded-2xl border border-[#1F3A5F]/10 bg-white p-5 text-center">
                  <span className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4A017]/15 text-[#1F3A5F]">
                    <StrengthFeatureIcon title={item.title} />
                  </span>
                  <h3 className="text-base font-black text-[#1F3A5F]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#49678d]">{item.description}</p>
                  <div
                    className={`mx-auto mt-4 h-1.5 w-16 rounded-full ${idx % 2 === 0 ? 'bg-[#D4A017]' : 'bg-[#2E7D32]'}`}
                    aria-hidden="true"
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 pb-14 md:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#1F3A5F] p-8 text-center text-white md:p-10 shadow-[0_20px_50px_-24px_rgba(31,58,95,0.8)]">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#D4A017]">Pesan Sekarang</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">{cta.title}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#dbe8f5] md:text-base">{cta.description}</p>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-xl bg-[#D4A017] px-5 py-3 text-sm font-black uppercase tracking-wide text-[#1F3A5F] shadow-[0_12px_30px_-14px_rgba(212,160,23,0.8)] transition hover:bg-[#be8f12]"
            >
              {cta.buttonLabel}
            </a>
          </div>
        </section>

        <section id="testimoni" className="border-y border-[#1F3A5F]/10 bg-white">
          <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-14 md:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Pelayanan Terbaik Dari Kami"
              title="Kata Mereka Tentang Kami"
              subtitle="Testimonimu adalah semangat kami. Berikut sebagian ulasan pelanggan MSA Serba Bisa."
              center
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((person) => (
                <TestimonialCard key={person.name} name={person.name} quote={person.quote} />
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer id="kontak" className="border-t border-[#1F3A5F]/10 bg-[#eef1f4]">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 md:grid-cols-4 md:px-6 lg:px-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-black uppercase tracking-wider text-[#1F3A5F]">{section.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-[#48698f]">
                {section.links.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-[#1F3A5F]">Kontak</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#48698f]">
              <li>{contact.address}</li>
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-[#2E7D32]">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phone}`} className="hover:text-[#2E7D32]">
                  {contact.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-[#1F3A5F]">Media Sosial</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#48698f]">
              <li>
                <a href={contact.instagram} target="_blank" rel="noreferrer" className="hover:text-[#2E7D32]">
                  Instagram @adaMSA
                </a>
              </li>
              <li>
                <a href={contact.tiktok} target="_blank" rel="noreferrer" className="hover:text-[#2E7D32]">
                  TikTok @adaMSA
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="border-t border-[#1F3A5F]/10 py-4 text-center text-xs text-[#58789e]">
          © {new Date().getFullYear()} MSA. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
