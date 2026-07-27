/**
 * Core Type Definitions for Nadafy Clean Application
 * All shared types and interfaces are defined here
 */

export interface Service {
  id: string
  slug: string
  title: string
  description: string
  image: string
  features: string[]
  price?: string
}



export interface WorkStep {
  id: string | number
  number: string
  icon: string
  title: string
  description: string
}

export interface Review {
  id: string
  name: string
  location: string
  rating: number
  comment: string
  service: string
  date: string
}

export interface FAQ {
  id: string
  category: string
  question: string
  answer: string
}

export interface ContactFormData {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

export interface WhyChooseUsItem {
  id: string
  title: string
  description: string
  icon: string
}

export interface BeforeAfter {
  id: string
  title: string
  before: string
  after: string
  category: string
}

export interface SiteConfig {
  name: string
  nameEn: string
  ogImage: string
  description: string
  url: string
  links: {
    whatsapp: string
    twitter: string
    instagram: string
    facebook: string
  }
  contact: {
    phone: string
    email: string
    address: string
  }
  keywords: string[]
}

export interface NavLink {
  href: string
  label: string
}
