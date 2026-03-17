import { BoatCard } from '@/components/BoatCard';
import { CTASection } from '@/components/CTASection';
import { Hero } from '@/components/Hero';
import { mockBoats } from '@/data/mockBoats';

const categories = ['يخوت فاخرة', 'قوارب صيد', 'رحلات عائلية', 'أنشطة بحرية'];

export default function HomePage() {
  const featured = mockBoats.slice(0, 4);

  return (
    <main>
      <Hero />

      <section className="container-main mt-12">
        <h2 className="mb-4 text-2xl font-extrabold text-navy">فئات القوارب</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div key={category} className="rounded-2xl bg-white p-5 text-center font-bold text-navy shadow-sm">{category}</div>
          ))}
        </div>
      </section>

      <section className="container-main mt-12">
        <h2 className="mb-4 text-2xl font-extrabold text-navy">قوارب مميزة</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((boat) => <BoatCard key={boat.id} boat={boat} />)}
        </div>
      </section>

      <section className="container-main mt-12 grid gap-4 md:grid-cols-3">
        {[
          ['لماذا BoatLink؟', 'توثيق ملاك القوارب، شفافية أسعار، وتجربة حجز مريحة.'],
          ['حجز سريع وآمن', 'واجهة عربية واضحة مع خيارات دفع جاهزة للربط لاحقًا.'],
          ['دعم محلي في الكويت', 'فريق دعم متخصص لخدمة المستأجرين وملاك القوارب.']
        ].map(([title, desc]) => (
          <article key={title} className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-bold text-navy">{title}</h3>
            <p className="text-slate">{desc}</p>
          </article>
        ))}
      </section>

      <CTASection />
    </main>
  );
}
