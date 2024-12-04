import Studio from './Studio'

// Ensures the Studio route is statically generated
export const dynamic = 'force-static'

// Set the right `viewport`, `robots` and `referer` meta tags
export const metadata = {
  title: 'Studio',
  description: 'Admin Studio'
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function StudioPage() {
  return <Studio />
}
