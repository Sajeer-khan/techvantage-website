import {
  AirVent,
  BadgeCheck,
  Building2,
  Cable,
  Check,
  ChevronDown,
  ClipboardCheck,
  Cog,
  DraftingCompass,
  Factory,
  Fan,
  FlaskConical,
  Gauge,
  HardHat,
  HeartPulse,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Snowflake,
  Warehouse,
  Wind,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Wind,
    number: "01",
    title: "HVAC & controlled environments",
    text: "Air-distribution, ventilation and environmental-control systems for pharmaceutical, laboratory, healthcare and industrial spaces.",
    details: ["AHUs, FCUs and ducting", "Controlled-area HVAC", "Airflow and pressure control"],
  },
  {
    icon: Cable,
    number: "02",
    title: "MEP contracting",
    text: "Coordinated mechanical, electrical and plumbing execution that keeps interfaces clear and project accountability in one place.",
    details: ["Mechanical installations", "Electrical coordination", "Piping and utilities"],
  },
  {
    icon: Fan,
    number: "03",
    title: "Industrial air quality",
    text: "Project-specific extraction, filtration and dust-control solutions for demanding production environments and process risks.",
    details: ["Dust collection", "Pulse-jet cleaning", "BIBO filtration provisions"],
  },
  {
    icon: Snowflake,
    number: "04",
    title: "Process cooling",
    text: "Cooling towers, chilled-water distribution and heat-rejection solutions matched to industrial process equipment and loads.",
    details: ["Cooling towers", "Chilled-water systems", "Process-equipment cooling"],
  },
  {
    icon: Cog,
    number: "05",
    title: "Equipment & spares",
    text: "Critical HVAC equipment, replacement components and technical sourcing support for York and other leading OEM systems.",
    details: ["Chiller spare parts", "FCU supply", "Equipment replacement support"],
  },
  {
    icon: Gauge,
    number: "06",
    title: "Testing & commissioning",
    text: "Structured checks, testing, balancing, commissioning and documented handover to turn installed scope into an operable system.",
    details: ["Testing and balancing", "Commissioning", "Handover documentation"],
  },
];

const process = [
  { number: "01", title: "Understand", text: "Process need, operational constraint and success criteria." },
  { number: "02", title: "Survey", text: "Site conditions, utilities, interfaces and execution risks." },
  { number: "03", title: "Engineer", text: "Scope, equipment, constructability and coordinated delivery plan." },
  { number: "04", title: "Install", text: "Equipment supply coordination and controlled site installation." },
  { number: "05", title: "Prove", text: "Inspection, testing, balancing and commissioning." },
  { number: "06", title: "Handover", text: "Close-out records and an orderly operational transition." },
];

const markets = [
  { icon: FlaskConical, title: "Pharmaceutical & life sciences", text: "Controlled areas, production support and regulated-environment utilities." },
  { icon: Factory, title: "Industrial facilities", text: "Process ventilation, cooling, utility and MEP execution." },
  { icon: HeartPulse, title: "Healthcare & laboratories", text: "Air quality and environmental systems for critical spaces." },
  { icon: Warehouse, title: "Commercial & warehousing", text: "Dependable HVAC and building-services delivery at operating scale." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "TechVantage Enterprise",
  description: "HVAC, MEP and industrial engineering solutions for regulated and industrial facilities.",
  email: "sales@techvantageenterprise.com",
  telephone: "+92-332-2666810",
  address: {
    "@type": "PostalAddress",
    streetAddress: "House No. 5E, Talib Ul Mola Street, MACHS",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  areaServed: "Pakistan",
  serviceType: [
    "HVAC contracting",
    "MEP contracting",
    "Industrial ventilation",
    "Process cooling",
    "Testing and commissioning",
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="utility-bar">
        <div className="shell utility-inner">
          <p>Karachi-based engineering delivery across Pakistan</p>
          <div className="utility-links">
            <a href="tel:+923322666810" aria-label="Call TechVantage Enterprise">
              <PhoneCall size={14} aria-hidden="true" />
              +92 332 2666810
            </a>
            <a href="mailto:sales@techvantageenterprise.com">
              <Mail size={14} aria-hidden="true" />
              sales@techvantageenterprise.com
            </a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="TechVantage Enterprise home">
            <img src="/assets/techvantage-mark-transparent.png" alt="" aria-hidden="true" />
            <span>TechVantage Enterprise</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#projects">Experience</a>
            <a href="#delivery">How we deliver</a>
            <a href="#markets">Markets</a>
          </nav>

          <a className="button button-small button-gold desktop-cta" href="#contact">
            Discuss a project
          </a>

          <details className="mobile-nav">
            <summary aria-label="Open navigation menu">
              <Menu size={22} aria-hidden="true" />
            </summary>
            <nav aria-label="Mobile navigation">
              <a href="#services">Services</a>
              <a href="#projects">Experience</a>
              <a href="#delivery">How we deliver</a>
              <a href="#markets">Markets</a>
              <a href="#contact">Discuss a project</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero" id="top">
        <img
          className="hero-image"
          src="/assets/hvac-hero.webp"
          alt="Illustrative modern pharmaceutical HVAC plant room with ductwork and chilled-water piping"
        />
        <div className="hero-wash" />
        <div className="hero-grid" />
        <div className="shell hero-inner">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light"><span /> HVAC · MEP · Industrial solutions</p>
            <h1>Engineering systems that keep critical operations moving.</h1>
            <p className="hero-lead">
              TechVantage delivers HVAC, controlled-environment, MEP and industrial utility projects, coordinating equipment sourcing, installation, testing, commissioning and handover.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href="#contact">Request a site assessment</a>
              <a className="button button-ghost" href="#services">Explore capabilities</a>
            </div>
            <div className="hero-proof" aria-label="Delivery strengths">
              <div><BadgeCheck aria-hidden="true" /><span><strong>End-to-end</strong> execution</span></div>
              <div><ShieldCheck aria-hidden="true" /><span><strong>Controlled-area</strong> experience</span></div>
              <div><ClipboardCheck aria-hidden="true" /><span><strong>Documented</strong> handover</span></div>
            </div>
          </div>

          <aside className="hero-note" aria-label="TechVantage delivery model">
            <div className="hero-note-top">
              <span>One accountable partner</span>
              <AirVent size={28} aria-hidden="true" />
            </div>
            <p>From plant-room equipment to the final air terminal, we manage the interfaces that decide whether a system works as intended.</p>
            <a href="mailto:sales@techvantageenterprise.com?subject=Project%20Enquiry%20-%20TechVantage%20Enterprise">Send your BOQ or scope</a>
          </aside>
        </div>
      </section>

      <section className="credibility-strip" aria-label="Technical capabilities">
        <div className="shell credibility-grid">
          <div><span>01</span><p>Engineering & sourcing</p></div>
          <div><span>02</span><p>Installation & coordination</p></div>
          <div><span>03</span><p>Testing & balancing</p></div>
          <div><span>04</span><p>Commissioning & handover</p></div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow"><span /> What we deliver</p>
              <h2>Integrated capability.<br />Clear accountability.</h2>
            </div>
            <p>
              Our scope is built around the systems that move air, water, cooling and power through modern facilities—delivered with practical site coordination and a commissioning mindset.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.number}>
                  <div className="service-card-head">
                    <span>{service.number}</span>
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul>
                    {service.details.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="shell">
          <div className="section-heading section-heading-light">
            <p className="eyebrow eyebrow-light"><span /> Selected project experience</p>
            <h2>Proof lives in the scope.</h2>
            <p>Representative work across pharmaceutical HVAC, industrial air quality and process cooling.</p>
          </div>

          <article className="project-feature">
            <div className="project-image-wrap">
              <img
                src="/assets/dust-collection-rooftop-industrial.webp"
                alt="Illustrative compact powder-coated aluminium dust-collection installation beneath an open-sided rooftop shed"
              />
            </div>
            <div className="project-feature-copy">
              <div className="project-meta"><span>Pharmaceutical</span><span>Confidential project</span></div>
              <h3>Steroidal-area HVAC and containment support</h3>
              <p>
                Technical project experience delivering HVAC and containment scope for a steroidal production area, where airflow and extraction interfaces demand disciplined execution.
              </p>
              <ul className="project-list">
                <li><Check aria-hidden="true" />ATEX-rated dust collector with pulse-jet cleaning mechanism</li>
                <li><Check aria-hidden="true" />BIBO filtration provisions for controlled filter handling</li>
                <li><Check aria-hidden="true" />FCU supply and installation</li>
                <li><Check aria-hidden="true" />Chiller spares for York and other leading equipment brands</li>
              </ul>
              <p className="project-disclaimer">Project experience is presented as scope evidence and does not imply client endorsement.</p>
            </div>
          </article>

          <div className="project-grid">
            <article className="project-card project-card-gold">
              <p className="project-kicker">Regulated production facility · 2026</p>
              <h3>HVAC air-distribution system for Grade D support</h3>
              <p>
                Completed on-site installation, testing, balancing, commissioning and handover of HVAC air-distribution works supporting Grade D environmental conditions in a designated area.
              </p>
              <div className="scope-tags">
                <span>Installation</span><span>TAB</span><span>Commissioning</span><span>Handover</span>
              </div>
            </article>

            <article className="project-card project-card-blue">
              <p className="project-kicker">Process cooling · Pharmaceutical operations</p>
              <h3>150 RT · 450 GPM cooling-tower installation</h3>
              <p>
                Installation of a 150 refrigeration ton, 450 GPM process cooling tower serving liquid-process tanks and reactors.
              </p>
              <div className="metric-row">
                <div><strong>150</strong><span>RT</span></div>
                <div><strong>450</strong><span>GPM</span></div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section delivery-section" id="delivery">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow"><span /> How we deliver</p>
              <h2>Designed around the handover.</h2>
            </div>
            <p>
              We work backward from an operable, maintainable system. That keeps engineering intent, procurement, equipment sourcing and site execution connected throughout the project.
            </p>
          </div>

          <div className="process-grid">
            {process.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="quality-panel">
            <div className="quality-intro">
              <p className="eyebrow eyebrow-light"><span /> Execution discipline</p>
              <h3>Quality, safety and documentation are part of the work—not an afterthought.</h3>
            </div>
            <div className="quality-points">
              <div><HardHat aria-hidden="true" /><span><strong>Safe work planning</strong> around live-facility constraints and controlled access.</span></div>
              <div><DraftingCompass aria-hidden="true" /><span><strong>Interface coordination</strong> between mechanical, electrical, civil and process requirements.</span></div>
              <div><ClipboardCheck aria-hidden="true" /><span><strong>Traceable close-out</strong> through inspection, test and handover records appropriate to the scope.</span></div>
              <div><Wrench aria-hidden="true" /><span><strong>Maintainability focus</strong> through access, service clearance and operational practicality.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section markets-section" id="markets">
        <div className="shell">
          <div className="section-heading centered-heading">
            <p className="eyebrow"><span /> Where we work</p>
            <h2>Engineering for controlled and operating environments.</h2>
            <p>From compliance-sensitive production to high-duty industrial and commercial facilities.</p>
          </div>
          <div className="market-grid">
            {markets.map((market) => {
              const Icon = market.icon;
              return (
                <article key={market.title}>
                  <Icon aria-hidden="true" />
                  <h3>{market.title}</h3>
                  <p>{market.text}</p>
                </article>
              );
            })}
          </div>

          <div className="about-band">
            <div className="about-mark"><Building2 aria-hidden="true" /></div>
            <div>
              <p className="eyebrow"><span /> TechVantage Enterprise</p>
              <h3>Local execution. Industrial perspective.</h3>
            </div>
            <p>
              Based in Karachi, TechVantage brings engineering, equipment sourcing and field execution together for facility teams that need practical answers and accountable delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-pattern" />
        <div className="shell contact-inner">
          <div className="contact-copy">
            <p className="eyebrow eyebrow-light"><span /> Start with the scope</p>
            <h2>Have an HVAC, MEP or industrial project to deliver?</h2>
            <p>Share the site location, current challenge and available BOQ or drawings. We’ll start with a focused technical discussion.</p>
            <div className="contact-actions">
              <a
                className="button button-gold"
                href="https://wa.me/923322666810?text=Hello%20TechVantage%20Enterprise%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle aria-hidden="true" /> WhatsApp our team
              </a>
              <a className="button button-ghost" href="mailto:sales@techvantageenterprise.com?subject=Project%20Enquiry%20-%20TechVantage%20Enterprise">
                <Mail aria-hidden="true" /> Email your scope
              </a>
            </div>
          </div>

          <aside className="contact-card">
            <div>
              <span className="contact-icon"><PhoneCall aria-hidden="true" /></span>
              <p>Call</p>
              <a href="tel:+923322666810">+92 332 2666810</a>
            </div>
            <div>
              <span className="contact-icon"><Mail aria-hidden="true" /></span>
              <p>Email</p>
              <a href="mailto:sales@techvantageenterprise.com">sales@techvantageenterprise.com</a>
            </div>
            <div>
              <span className="contact-icon"><MapPin aria-hidden="true" /></span>
              <p>Office</p>
              <address>House No. 5E, Talib Ul Mola Street, MACHS, Karachi</address>
            </div>
          </aside>
        </div>
      </section>

      <section className="faq-section">
        <div className="shell faq-grid">
          <div>
            <p className="eyebrow"><span /> Before we begin</p>
            <h2>Common project questions.</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>What information helps you assess a project?<ChevronDown aria-hidden="true" /></summary>
              <p>A short scope, site location, drawings or BOQ, target timeline and the operating constraint are the best starting point. We can then identify the right survey and technical inputs.</p>
            </details>
            <details>
              <summary>Can TechVantage handle supply and installation together?<ChevronDown aria-hidden="true" /></summary>
              <p>Yes. Our delivery model can coordinate equipment and material sourcing, installation, testing, balancing, commissioning and handover under one scope.</p>
            </details>
            <details>
              <summary>Do you work only with pharmaceutical facilities?<ChevronDown aria-hidden="true" /></summary>
              <p>No. Pharmaceutical and controlled environments are a core strength, while the same HVAC, MEP, ventilation and process-cooling capabilities also serve industrial, healthcare, laboratory, warehouse and commercial facilities.</p>
            </details>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-main">
          <div className="footer-brand">
            <div className="footer-logo-lockup">
              <img src="/assets/techvantage-mark-transparent.png" alt="" aria-hidden="true" />
              <span>TechVantage Enterprise</span>
            </div>
            <p>HVAC, MEP and industrial solutions delivered from scope to handover.</p>
          </div>
          <div>
            <p className="footer-label">Capabilities</p>
            <a href="#services">HVAC & controlled areas</a>
            <a href="#services">MEP contracting</a>
            <a href="#services">Industrial solutions</a>
          </div>
          <div>
            <p className="footer-label">Explore</p>
            <a href="#projects">Project experience</a>
            <a href="#delivery">Delivery model</a>
            <a href="#markets">Markets served</a>
          </div>
          <div>
            <p className="footer-label">Contact</p>
            <a href="tel:+923322666810">+92 332 2666810</a>
            <a href="mailto:sales@techvantageenterprise.com">sales@techvantageenterprise.com</a>
            <a href="#contact">Karachi, Pakistan</a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <p>© {new Date().getFullYear()} TechVantage Enterprise. All rights reserved.</p>
          <p>Engineering clarity. Accountable delivery.</p>
        </div>
      </footer>
    </main>
  );
}
