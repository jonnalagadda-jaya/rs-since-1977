export interface Product {
  id: string;
  name: string;
  price?: string;
  sizes: string;
  category: string;
  description?: string;
  badge?: string;
  inStock?: boolean;
  image: string;
  features?: string[];
  fabricType?: string;
}

export interface Fabric {
  id: string;
  name: string;
  price?: string;
  type: 'Suiting Fabric' | 'Shirting Fabric';
  width: string;
  composition: string;
  badge?: string;
  description?: string;
  colorOptions?: string[];
  image: string;
  weavePattern?: string;
}

export interface Saree {
  id: string;
  name: string;
  price?: string;
  desc: string;
  material: string;
  zariType?: string;
  occasion: string;
  badge?: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  location: string;
}

export interface HeritageMilestone {
  year: string;
  title: string;
  description: string;
}

export type CategoryFilter = 'all' | 'gents' | 'fabrics' | 'sarees' | 'sizes';
