import { SearchBar } from './SearchBar';

export function Hero() {
  return (
    <section className="container-main pt-10">
      <div className="rounded-3xl bg-gradient-to-l from-navy to-navy-soft p-6 text-white shadow-soft md:p-10">
        <p className="mb-2 text-sm text-slate-100">بوابتك لتجارب بحرية راقية في الكويت</p>
        <h1 className="mb-3 text-3xl font-extrabold leading-tight md:text-5xl">احجز القارب المناسب لرحلتك القادمة مع BoatLink</h1>
        <p className="mb-6 max-w-2xl text-slate-100">اكتشف يخوت وقوارب صيد ورحلات عائلية بأسعار واضحة وحجز سريع.</p>
        <SearchBar />
      </div>
    </section>
  );
}
