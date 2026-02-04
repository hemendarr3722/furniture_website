export interface Product {
  id: string;
  name: string;
  category: 'Sofas' | 'Beds' | 'Dining' | 'Office' | 'Wardrobes' | 'TV Units';
  price: number;
  image: string;
  description: string;
}

export type Category = Product['category'] | 'All';
