import Link from 'next/link';

const navItems = [
  { href: '/', label: 'الرئيسية' },
  { href: '/boats', label: 'القوارب' },
  { href: '/dashboard', label: 'الطلبات' },
  { href: '/list-your-boat', label: 'أضف قاربك' }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-main flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-extrabold tracking-tight text-navy">BoatLink</Link>
        <nav className="flex items-center gap-2 md:gap-5">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-navy-soft hover:text-navy">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
