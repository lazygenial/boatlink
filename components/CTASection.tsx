import Link from 'next/link';

export function CTASection() {
  return (
    <section className="container-main mt-14">
      <div className="rounded-3xl bg-white p-8 shadow-soft md:flex md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-navy">أضف قاربك واربح مع BoatLink</h2>
          <p className="mt-2 text-slate">انضم كمالك قارب وابدأ استقبال طلبات حجز موثوقة داخل الكويت.</p>
        </div>
        <Link href="/list-your-boat" className="mt-4 inline-block rounded-xl bg-navy px-5 py-3 font-bold text-white md:mt-0">ابدأ الآن</Link>
      </div>
    </section>
  );
}
