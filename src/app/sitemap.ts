import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://tigerTasticFamilyDaycare.com',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://tigerTasticFamilyDaycare.com/about',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://tigerTasticFamilyDaycare.com/programs',
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: 'https://tigerTasticFamilyDaycare.com/contact',
      lastModified: new Date(),
      priority: 0.5,
    },
  ]
}