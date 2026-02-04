import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  name: string;
  icon: LucideIcon;
  href: string;
}

export default function CategoryCard({ name, icon: Icon, href }: CategoryCardProps) {
  return (
    <Link href={href}>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group">
        <div className="flex flex-col items-center text-center">
          <div className="bg-amber-100 p-4 rounded-full mb-4 group-hover:bg-amber-600 transition-colors">
            <Icon className="h-8 w-8 text-amber-600 group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        </div>
      </div>
    </Link>
  );
}
