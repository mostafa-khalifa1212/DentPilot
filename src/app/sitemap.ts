import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/services',
    '/services/process-automation',
    '/services/ai-integration', 
    '/services/workflow-optimization',
    '/services/custom-solutions',
    '/case-studies',
    '/pricing',
    '/blog',
    '/contact',
    '/faq',
    '/privacy',
    '/terms',
  ]

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : route.includes('/blog') ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.includes('/services') ? 0.8 : 0.6,
  }))
} 