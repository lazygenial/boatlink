export default function ListYourBoatPage() {
  return (
    <main className="container-main py-10">
      <h1 className="mb-3 text-3xl font-extrabold text-navy">أضف قاربك واربح</h1>
      <p className="mb-6 text-slate">سجل قاربك في BoatLink وابدأ تحقيق دخل إضافي من الحجوزات اليومية.</p>
      <form className="grid gap-3 rounded-2xl bg-white p-6 shadow-soft md:grid-cols-2">
        <input className="rounded-xl border border-slate-200 p-3" placeholder="اسم المالك" />
        <input className="rounded-xl border border-slate-200 p-3" placeholder="رقم التواصل" />
        <input className="rounded-xl border border-slate-200 p-3" placeholder="مدينة الإرساء" />
        <input className="rounded-xl border border-slate-200 p-3" placeholder="نوع القارب" />
        <input className="rounded-xl border border-slate-200 p-3" placeholder="السعة" />
        <input className="rounded-xl border border-slate-200 p-3" placeholder="السعر لكل رحلة" />
        <textarea className="rounded-xl border border-slate-200 p-3 md:col-span-2" rows={5} placeholder="وصف القارب والخدمات"></textarea>
        <button type="button" className="rounded-xl bg-navy px-5 py-3 font-bold text-white md:col-span-2">إرسال الطلب</button>
      </form>
    </main>
  );
}
