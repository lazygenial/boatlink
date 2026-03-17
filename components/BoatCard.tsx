import Image from 'next/image';
import Link from 'next/link';
import { Boat } from '@/lib/types';

export function BoatCard({ boat }: { boat: Boat }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <Image src={boat.image} alt={boat.title} width={900} height={600} className="h-48 w-full object-cover" />
      <div className="space-y-2 p-4">
        <h3 className="text-lg font-bold text-navy">{boat.title}</h3>
        <p className="text-sm text-slate">{boat.city} • {boat.type} • {boat.capacity} أشخاص</p>
        <div className="flex items-center justify-between">
          <span className="font-extrabold text-navy">{boat.price} د.ك / {boat.duration}</span>
          <Link href={`/boats/${boat.id}`} className="rounded-lg bg-navy px-3 py-2 text-sm font-semibold text-white">التفاصيل</Link>
        </div>
      </div>
    </article>
  );
}
