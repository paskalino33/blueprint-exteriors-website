import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import { counties, services, site } from '@/lib/site';
import Link from 'next/link';

type PageParams = { county: string };

function slugify(value: string) {
  return value.toLowerCase().replaceAll(' ', '-');
}

function niceCounty(slug = '') {
  const county = counties.find((item) => slugify(item) === slug);
  if (county) return county;
  return slug
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

async function resolveParams(params: PageParams | Promise<PageParams>) {
  return await Promise.resolve(params);
}

export function generateStaticParams() {
  return counties.map((county) => ({ county: slugify(county) }));
}

export async function generateMetadata({ params }: { params: PageParams | Promise<PageParams> }) {
  const resolved = await resolveParams(params);
  const county = niceCounty(resolved?.county);
  return {
    title: `Exterior Remodeling in ${county}, NJ | Blueprint Exteriors LLC`,
    description: `Roofing, siding, windows, doors, gutters, decks, chimneys, masonry, and exterior carpentry in ${county}, NJ.`
  };
}

export default async function Area({ params }: { params: PageParams | Promise<PageParams> }) {
  const resolved = await resolveParams(params);
  const county = niceCounty(resolved?.county);

  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container grid">
            <div>
              <div className="eyebrow">Service Area</div>
              <h1>Exterior Remodeling in {county}, NJ</h1>
              <p>
                Blueprint Exteriors LLC serves homeowners in {county} with roofing, siding, windows, doors,
                gutters, decks, chimneys, masonry, and exterior carpentry.
              </p>
              <a className="btn" href={site.phoneHref}>Call {site.phone}</a>
            </div>
            <QuoteForm />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Services Available in {county}</h2>
            <div className="cards">
              {services.map((service) => (
                <Link className="card" key={service.slug} href={`/services/${service.slug}`}>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
