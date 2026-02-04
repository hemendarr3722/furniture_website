import { Award, Users, ThumbsUp, ShieldCheck, Truck, Headphones } from 'lucide-react';

export const metadata = {
  title: 'About Us - Comfort Living',
  description: 'Learn about Comfort Living, your trusted furniture store. Over 10 years of experience in providing premium quality furniture.',
};

export default function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Quality Assurance',
      description: 'Every piece of furniture is carefully inspected to meet our high standards of quality and durability.',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We are committed to providing excellent customer service.',
    },
    {
      icon: Award,
      title: 'Premium Craftsmanship',
      description: 'Our furniture is crafted by skilled artisans using the finest materials and techniques.',
    },
    {
      icon: Truck,
      title: 'Timely Delivery',
      description: 'We ensure your furniture reaches you on time and in perfect condition.',
    },
  ];

  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '5000+', label: 'Happy Customers' },
    { number: '500+', label: 'Products' },
    { number: '100%', label: 'Quality Guaranteed' },
  ];

  const trustBadges = [
    {
      icon: ThumbsUp,
      title: '100% Genuine',
      description: 'Authentic products with warranty',
    },
    {
      icon: Truck,
      title: 'Free Delivery',
      description: 'On orders above ₹15,000',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Always here to help you',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-amber-600">Comfort Living</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in creating beautiful and comfortable living spaces
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2014, Comfort Living has been serving families across India with premium quality furniture that combines style, comfort, and durability. What started as a small showroom in Bangalore has grown into a trusted name in the furniture industry.
              </p>
              <p>
                We believe that furniture is more than just functional pieces. They are expressions of your personality and style. That is why we carefully curate every item in our collection, ensuring it meets our stringent quality standards.
              </p>
              <p>
                Our team of experienced professionals is dedicated to helping you find the perfect furniture for your home. Whether you are furnishing a new apartment or refreshing your living space, we are here to guide you every step of the way.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl font-bold text-amber-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 lg:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                  <badge.icon className="h-10 w-10 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{badge.title}</h3>
                <p className="text-gray-600">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg shadow-lg p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Visit Our Showroom</h2>
          <p className="text-xl text-amber-100 mb-2">
            123 Furniture Street, MG Road, Bangalore, Karnataka 560001
          </p>
          <p className="text-lg text-amber-100 mb-6">
            Monday - Saturday: 10:00 AM - 8:00 PM | Sunday: 11:00 AM - 6:00 PM
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center bg-white text-amber-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Call Us: +91 98765 43210
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-amber-700 hover:bg-amber-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
