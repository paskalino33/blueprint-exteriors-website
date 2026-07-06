const phone = '973-362-5447';
const phoneHref = 'tel:9733625447';

const services = [
  ['Roofing', 'Full roof replacements, repairs, ventilation, flashing, and storm-damage solutions.'],
  ['Siding', 'Vinyl, composite, board & batten, trim details, and full exterior transformations.'],
  ['Windows & Doors', 'Energy-efficient replacements, patio doors, entry doors, and clean exterior trim finishes.'],
  ['Decks', 'Composite decking, railings, landings, stairs, and outdoor living upgrades.'],
  ['Gutters', 'Seamless gutters, gutter guards, fascia repairs, leaders, and drainage improvements.'],
  ['Masonry & Chimneys', 'Chimney repairs, stone veneer, steps, walls, crowns, caps, and exterior masonry.']
];

const projects = [
  { title: 'Complete Exterior Curb Appeal Upgrade', tag: 'Siding • Roofing • Trim', img: '/images/projects/sunset-exterior.jpg' },
  { title: 'Outdoor Living & Deck Expansion', tag: 'Decking • Railings • Pavers', img: '/images/projects/drone-deck-pavers.jpg' },
  { title: 'Wayne, NJ Roof Replacement', tag: 'Roofing • Ventilation • Flashing', img: '/images/projects/roof-wayne.jpg' },
  { title: 'Siding & Chimney Exterior Remodel', tag: 'Siding • Board & Batten • Trim', img: '/images/projects/siding-chimney.jpg' }
];

const counties = ['Somerset', 'Middlesex', 'Union', 'Essex', 'Hudson', 'Morris', 'Passaic', 'Bergen', 'Sussex', 'Warren'];

function LogoMark() {
  return (
    <div className="brand">
      <div className="mark"><span>B</span><span>E</span></div>
      <div>
        <strong>Blueprint</strong>
        <small>Exteriors LLC</small>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <header className="nav">
        <LogoMark />
        <nav className="navLinks">
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#process">Process</a>
          <a href="#areas">Service Areas</a>
          <a href="#estimate">Contact</a>
        </nav>
        <a className="navPhone" href={phoneHref}>{phone}</a>
      </header>

      <section className="hero">
        <video className="heroVideo" autoPlay muted loop playsInline poster="/images/projects/hero-house.jpg">
          <source src="/videos/blueprint-hero.mp4" type="video/mp4" />
        </video>
        <div className="heroOverlay" />
        <div className="heroContent">
          <p className="eyebrow">Exterior Remodeling • Northern New Jersey</p>
          <h1>Northern New Jersey's Trusted Exterior Remodeling Experts</h1>
          <p className="heroText">Roofing, siding, windows, doors, gutters, decks, masonry, chimneys, and exterior carpentry delivered with clean workmanship and honest communication.</p>
          <div className="heroActions">
            <a className="btn primary" href="#estimate">Get a Free Estimate</a>
            <a className="btn secondary" href="#projects">View Our Work</a>
          </div>
          <div className="trustRow">
            <span>Licensed & Insured</span>
            <span>20+ Years Experience</span>
            <span>Free Estimates</span>
            <span>Premium Materials</span>
          </div>
        </div>
        <aside className="heroCard">
          <span>Call Now</span>
          <a href={phoneHref}>{phone}</a>
          <p>Fast scheduling for roofing, siding, windows, decks, gutters, chimneys, and full exterior remodels.</p>
        </aside>
      </section>

      <section className="intro section">
        <div>
          <p className="eyebrow blue">Built Right. Built to Last.</p>
          <h2>A cleaner, more professional exterior remodeling experience.</h2>
        </div>
        <p>Blueprint Exteriors LLC helps homeowners improve curb appeal, protect their investment, and complete exterior projects with the attention to detail their home deserves. From roof replacements to siding transformations and outdoor living upgrades, our goal is simple: quality work, clear communication, and a finished result you are proud to show.</p>
      </section>

      <section id="services" className="section darkSection">
        <div className="sectionHeader">
          <p className="eyebrow blue">What We Do</p>
          <h2>Exterior services designed around your home.</h2>
        </div>
        <div className="serviceGrid">
          {services.map(([name, copy]) => (
            <article className="serviceCard" key={name}>
              <div className="serviceIcon">BE</div>
              <h3>{name}</h3>
              <p>{copy}</p>
              <a href="#estimate">Request Estimate →</a>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section projectsSection">
        <div className="sectionHeader split">
          <div>
            <p className="eyebrow blue">Featured Work</p>
            <h2>Real projects. Real craftsmanship.</h2>
          </div>
          <p>Use this section to show visitors the kind of work they can expect from Blueprint Exteriors. As you send more photos, we will turn this into a full portfolio with project pages.</p>
        </div>
        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.title}>
              <img src={project.img} alt={project.title} />
              <div className="projectInfo">
                <span>{project.tag}</span>
                <h3>{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="section processSection">
        <div className="photoPanel"><img src="/images/projects/siding-progress.jpg" alt="Blueprint Exteriors siding progress" /></div>
        <div className="processCopy">
          <p className="eyebrow blue">Our Process</p>
          <h2>Professional from first call to final cleanup.</h2>
          <div className="steps">
            <div><strong>01</strong><h3>Consultation</h3><p>We review your goals, inspect the exterior, and understand the scope of work.</p></div>
            <div><strong>02</strong><h3>Detailed Estimate</h3><p>You receive a clear proposal with materials, project details, and expectations.</p></div>
            <div><strong>03</strong><h3>Quality Installation</h3><p>Our crews complete the work with proper preparation, installation, and cleanup.</p></div>
          </div>
        </div>
      </section>

      <section className="section whySection">
        <div className="sectionHeader">
          <p className="eyebrow blue">Why Homeowners Choose Blueprint</p>
          <h2>The details matter on every exterior project.</h2>
        </div>
        <div className="whyGrid">
          <div><h3>Clear Communication</h3><p>You know what is happening, when it is happening, and what to expect next.</p></div>
          <div><h3>Clean Job Sites</h3><p>We respect your property and keep the work area organized throughout the project.</p></div>
          <div><h3>Quality Materials</h3><p>We recommend products that balance durability, curb appeal, and long-term value.</p></div>
          <div><h3>Exterior Specialists</h3><p>Roofing, siding, trim, decks, masonry, and gutters all work together as one system.</p></div>
        </div>
      </section>

      <section id="areas" className="section areasSection">
        <p className="eyebrow blue">Service Areas</p>
        <h2>Serving Somerset County and North Jersey.</h2>
        <p>Blueprint Exteriors LLC serves homeowners across Somerset County and all counties north, including major towns throughout Northern New Jersey.</p>
        <div className="countyGrid">
          {counties.map((county) => <span key={county}>{county} County</span>)}
        </div>
      </section>

      <section id="estimate" className="section estimateSection">
        <div>
          <p className="eyebrow blue">Request an Estimate</p>
          <h2>Ready to improve your home's exterior?</h2>
          <p>Call now or send a project request. The next version can connect this form directly to your email using Formspree, Resend, or another form service.</p>
          <a className="largePhone" href={phoneHref}>{phone}</a>
        </div>
        <form className="estimateForm">
          <input placeholder="Name" />
          <input placeholder="Phone" />
          <input placeholder="Email" />
          <input placeholder="Project Address" />
          <select defaultValue="">
            <option value="" disabled>Project Type</option>
            <option>Roofing</option><option>Siding</option><option>Windows / Doors</option><option>Decks</option><option>Gutters</option><option>Masonry / Chimney</option><option>Other</option>
          </select>
          <textarea placeholder="Tell us about your project" />
          <button type="button">Submit Estimate Request</button>
        </form>
      </section>

      <footer className="footer">
        <LogoMark />
        <p>Roofing • Siding • Windows • Doors • Decks • Gutters • Chimneys • Masonry • Carpentry</p>
        <a href={phoneHref}>{phone}</a>
      </footer>

      <a className="mobileCall" href={phoneHref}>Call {phone}</a>
    </main>
  );
}
