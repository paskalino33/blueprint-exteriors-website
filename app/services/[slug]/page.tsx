import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import { services, site } from '@/lib/site';
import Link from 'next/link';

type PageParams = { slug: string };

async function resolveParams(params: PageParams | Promise<PageParams>) {
  return await Promise.resolve(params);
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: PageParams | Promise<PageParams> }) {
  const resolved = await resolveParams(params);
  const service = services.find((item) => item.slug === resolved?.slug) || services[0];
  return {
    title: `${service.title} Contractor North NJ | Blueprint Exteriors LLC`,
    description: service.desc
  };
}

export default async function Service({ params }: { params: PageParams | Promise<PageParams> }) {
  const resolved = await resolveParams(params);
  const service = services.find((item) => item.slug === resolved?.slug) || services[0];

  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container grid">
            <div>
              <div className="eyebrow">{service.title}</div>
              <h1>{service.title} Services in North Jersey</h1>
              <p>{service.desc}</p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a className="btn" href="#contact">Get Free Estimate</a>
                <a className="btn secondary" href={site.phoneHref}>Call {site.phone}</a>
              </div>
            </div>
            <QuoteForm />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Professional {service.title} by Blueprint Exteriors</h2>
            <p>
              We provide detailed exterior renovation work with a focus on proper installation, protection from
              the elements, and clean jobsite practices. Every project starts with a clear scope, realistic
              recommendations, and quality-focused execution.
            </p>
            <div className="cards">
              <div className="card"><h3>Inspection & Planning</h3><p>We review the existing condition, document concerns, and recommend the best repair or replacement approach.</p></div>
              <div className="card"><h3>Quality Installation</h3><p>We focus on the details that matter: flashing, trim, drainage, fasteners, layout, and long-term performance.</p></div>
              <div className="card"><h3>Cleanup & Finish</h3><p>We leave the property clean and walk through the completed work before wrapping up.</p></div>
            </div>
            <p style={{ marginTop: 30 }}><Link className="blue" href="/">← Back to home</Link></p>
          </div>
        </section>

        <section id="contact" className="section cta">
          <div className="container grid">
            <div><h2>Request a {service.title} Estimate</h2><p>Call {site.phone} or use the form.</p></div>
            <QuoteForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
