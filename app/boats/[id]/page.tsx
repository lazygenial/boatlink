import Image from 'next/image';
import { notFound } from 'next/navigation';
import { mockBoats } from '@/data/mockBoats';

export default function BoatDetailsPage({ params }: { params: { id: string } }) {
  const boat = mockBoats.find((item) => item.id === params.id);
  if (!boat) notFound();

  return (
    <main className="container-main py-10">
      <h1 className="mb-4 text-3xl font-extrabold text-navy">{boat.title}</h1>
      <div className="grid gap-6 lg:grid-cols-3">
        <section className="space-y-3 lg:col-span-2">
          <Image src={boat.image} alt={boat.title} width={1200} height={700} className="h-80 w-full rounded-2xl object-cover" />
          <div className="grid gap-3 sm:grid-cols-2">
            {boat.gallery.slice(1).map((img) => (
              <Image key={img} src={img} alt={boat.title} width={800} height={500} className="h-44 w-full rounded-2xl object-cover" />
            ))}
          </div>
          <p className="text-slate">{boat.description}</p>
          <ul className="grid list-disc gap-2 pr-5 text-slate sm:grid-cols-2">
            {boat.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        </section>

        <aside className="rounded-2xl bg-white p-5 shadow-soft">
          <p className="text-sm text-slate">{boat.city} • {boat.type}</p>
          <p className="my-3 text-2xl font-extrabold text-navy">{boat.price} د.ك / {boat.duration}</p>
          <p className="mb-4 text-slate">السعة: {boat.capacity} أشخاص</p>
          <form className="space-y-3">
            <input className="w-full rounded-xl border border-slate-200 p-2" placeholder="الاسم الكامل" />
            <input className="w-full rounded-xl border border-slate-200 p-2" placeholder="رقم الهاتف" />
            <input className="w-full rounded-xl border border-slate-200 p-2" type="date" />
            <textarea className="w-full rounded-xl border border-slate-200 p-2" rows={4} placeholder="تفاصيل الطلب"></textarea>
            <button type="button" className="w-full rounded-xl bg-navy py-2 font-bold text-white">إرسال طلب الحجز</button>
          </form>
        </aside>
      </div>
    </main>
  );
}
