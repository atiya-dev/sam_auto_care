export interface NavItem {
  label: string;
  href: string;
}

export interface PartCategory {
  id: string;
  name: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PartItem {
  id: string;
  categoryId: string;
  name: string;
  year: string;
  make: string;
  model: string;
  price: string;
  condition: string;
  image: string;
  description: string;
}
