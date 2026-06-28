export enum Tab {
  Home = 'home',
  Products = 'products',
  Gallery = 'gallery',
  About = 'about',
  Contact = 'contact',
  Shipping = 'shipping',
  Returns = 'returns',
  Privacy = 'privacy',
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  mainImage: string;
  images: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
}
