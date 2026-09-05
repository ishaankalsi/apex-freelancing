const services = [
  { number: '01', title: 'Web & Product', description: 'Fast, thoughtful digital experiences built to turn attention into action.', tags: ['Websites', 'UX/UI', 'Development'] },
  { number: '02', title: 'Brand & Creative', description: 'Distinctive identities and content that make your business impossible to overlook.', tags: ['Branding', 'Design', 'Content'] },
  { number: '03', title: 'Growth & Strategy', description: 'Focused campaigns and clear strategy engineered around your next stage of growth.', tags: ['Marketing', 'SEO', 'Strategy'] },
]

const outcomes = [
  ['01', 'Work smarter', 'Automate repetitive work and give your team back its most valuable resource: time.'],
  ['02', 'Move faster', 'Turn slow, manual processes into reliable systems that keep your business moving.'],
  ['03', 'Scale clearly', 'Build an operating advantage that grows with you, without adding needless complexity.'],
]

function ArrowIcon() { return <span aria-hidden="true">↗</span> }

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Apex Freelancing home"><span className="brand-mark" aria-hidden="true">A</span><span>APEX <strong>FREELANCING</strong></span></a>
        <nav aria-label="Main navigation"><a href="#services">Services</a><a href="#automation">AI & Automation</a><a href="#why-apex">Why Apex</a></nav>
        <a className="button button-small" href="mailto:hello@apexfreelancing.com">Start a project <ArrowIcon /></a>
      </header>

      <main>
        <section className="hero" id="top" aria-labelledby="page-title">
          <img className="hero-image" src="/images/apex-hero.png" alt="Abstract glass and chrome forms rising toward a bright green sphere" />
          <div className="hero-content">
            <p className="eyebrow"><span /> Independent talent. Exceptional outcomes.</p>
            <h1 id="page-title">Built to move<br /><em>business forward.</em></h1>
            <p className="hero-copy">Apex brings senior independent talent, sharp strategy, and practical AI together to solve the work that matters.</p>
            <div className="hero-actions"><a className="button" href="mailto:hello@apexfreelancing.com">Start a project <ArrowIcon /></a><a className="text-link" href="#services">Explore our services <span aria-hidden="true">↓</span></a></div>
          </div>
          <p className="hero-note">Strategy / Creative / Technology</p>
        </section>

        <section className="section services" id="services" aria-labelledby="services-title">
          <div className="section-heading"><p className="kicker">What we do</p><h2 id="services-title">Expertise for every<br />critical <em>move.</em></h2><p>From first idea to measurable impact, we assemble the right expertise around the outcome—not the org chart.</p></div>
          <div className="service-grid">
            {services.map((service) => <article className="service-card" key={service.number}><div className="card-top"><span>{service.number}</span><ArrowIcon /></div><h3>{service.title}</h3><p>{service.description}</p><ul>{service.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></article>)}
          </div>
        </section>

        <section className="automation" id="automation" aria-labelledby="automation-title">
          <div className="automation-intro"><p className="kicker kicker-light">AI & Automation</p><h2 id="automation-title">Your unfair<br /><em>advantage.</em></h2><p>We turn AI from a talking point into useful infrastructure—tailored to how your business actually works.</p><a className="button button-light" href="mailto:hello@apexfreelancing.com?subject=AI%20%26%20Automation">Explore AI solutions <ArrowIcon /></a></div>
          <div className="automation-list">{outcomes.map(([number, title, description]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
        </section>

        <section className="section why" id="why-apex" aria-labelledby="why-title">
          <div><p className="kicker">Why Apex</p><h2 id="why-title">Small team.<br /><em>Serious impact.</em></h2></div>
          <div className="why-copy"><p className="lead">No layers. No hand-offs. Just experienced people focused on getting the right work done.</p><div className="reasons">
            <article><span>01</span><h3>Senior by default</h3><p>You work directly with proven specialists from the first conversation to the final delivery.</p></article>
            <article><span>02</span><h3>Built around you</h3><p>A focused team shaped around your problem, your pace, and the way your business operates.</p></article>
            <article><span>03</span><h3>Outcomes over output</h3><p>We measure our work by what changes for your business—not by how busy the process looks.</p></article>
          </div></div>
        </section>

        <section className="final-cta" aria-labelledby="cta-title"><p className="kicker kicker-light">Have something important to solve?</p><h2 id="cta-title">Let's build what's <em>next.</em></h2><a className="cta-link" href="mailto:hello@apexfreelancing.com">Tell us about your project <ArrowIcon /></a></section>
      </main>

      <footer><a className="brand brand-footer" href="#top"><span className="brand-mark" aria-hidden="true">A</span><span>APEX <strong>FREELANCING</strong></span></a><p>Independent expertise for ambitious businesses.</p><a href="mailto:hello@apexfreelancing.com">hello@apexfreelancing.com</a><p className="copyright">© {new Date().getFullYear()} Apex Freelancing</p></footer>
    </div>
  )
}

export default App
