import type { MetadataRoute } from 'next';
import { portfolio } from '@/data/portfolio';
export default function sitemap(): MetadataRoute.Sitemap {
  return portfolio.domain ? [{ url: portfolio.domain, lastModified: new Date() }] : [];
}
