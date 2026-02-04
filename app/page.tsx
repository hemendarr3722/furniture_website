import Link from 'next/link';
import { ArrowRight, Phone, Sofa, Bed, Armchair, DoorOpen, Tv, Briefcase } from 'lucide-react';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import products from '@/data/products.json';

export default function Home() {
  const categories = [
    { name: 'Sofas', icon: Sofa, href: '/products?category=Sofas' },
    { name: 'Beds', icon: Bed, href: '/products?category=Beds' },
    { name: 'Dining', icon: Armchair, href: '/products?category=Dining' },
    { name: 'Office', icon: Briefcase, href: '/products?category=Office' },
    { name: 'Wardrobes', icon: DoorOpen, href: '/products?category=Wardrobes' },
    { name: 'TV Units', icon: Tv, href: '/products?category=TV Units' },
  ];

  const featuredProducts = products.slice(0, 6);

  return (
    <div>
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Space with
              <span className="text-amber-600"> Premium Furniture</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover our curated collection of stylish and comfortable furniture designed to elevate your living spaces
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Browse Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-4 rounded-lg border-2 border-gray-300 transition-colors"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600">
              Find the perfect furniture for every room in your home
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.name}
                name={category.name}
                icon={category.icon}
                href={category.href}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600">
              Handpicked bestsellers just for you
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Store
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              123 Furniture Street, MG Road, Bangalore, Karnataka 560001
            </p>
            <a
              href="tel:+919876543210"
              className="text-amber-600 hover:text-amber-700 font-semibold"
            >
              +91 98765 43210
            </a>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0244490424967!2d77.6031825!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Store Location"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Upgrade Your Home?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Get in touch with us for personalized recommendations
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-amber-600 font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
