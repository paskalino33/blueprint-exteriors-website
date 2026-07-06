import './globals.css';

export const metadata = {
  title: 'Blueprint Exteriors LLC | Exterior Remodeling in Northern New Jersey',
  description: 'Blueprint Exteriors LLC provides roofing, siding, windows, doors, gutters, decks, chimneys, masonry, and exterior remodeling across Somerset County and North Jersey.',
  openGraph: {
    title: 'Blueprint Exteriors LLC',
    description: 'Northern New Jersey exterior remodeling experts.',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
