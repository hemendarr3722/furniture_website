import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Products - Comfort Living',
  description: 'Browse our complete collection of premium furniture. Sofas, beds, dining sets, office furniture, wardrobes, and TV units at the best prices.',
  keywords: 'furniture, sofa, bed, dining set, office furniture, wardrobe, TV unit',
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
