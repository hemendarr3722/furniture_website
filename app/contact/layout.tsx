import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Comfort Living',
  description: 'Get in touch with Comfort Living. We are here to help you find the perfect furniture for your home.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
