import { MetadataRoute } from 'next'
import pwaIcon from '../../public/pwa-icon.png'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jason Sprague - Portfolio',
    short_name: 'Jason Sprague - Portfolio',
    description: 'My portfolio built using next.js',
    start_url: '/',
    display: 'standalone',
    background_color: '#000',
    theme_color: '#fff',
    icons: [
      {
        src: '/pwa-icon.png',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}