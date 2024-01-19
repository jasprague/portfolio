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
    theme_color: '#000',
    icons: [
      {
        src: '/pwa-icon.png',
        sizes: '48x48 72x72 96x96 128x128 256x256 512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/pwa-icon.png',
        sizes: '48x48 72x72 96x96 128x128 256x256 512x512',
        type: 'image/png',
        purpose: 'any'
      },
    ],
  }
}