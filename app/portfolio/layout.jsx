// Becouse category page using 'use client' and function Metadata dosen't work in client rendering. 
// I decided create this layout.js only for SEO.

export const metadata = {
  title: 'JsCase | Portfolio',
  description:
    'Our portfolio page of JsCase. We create digital products for your business.',
};

export default function Layout({ children }) {
  return <div className="local-layout">{children}</div>;
}
