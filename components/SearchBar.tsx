export function SearchBar() {
  return (
    <form className="grid gap-3 rounded-2xl bg-white p-4 text-navy shadow-soft md:grid-cols-5">
      <input className="rounded-xl border border-slate-200 p-2" placeholder="المدينة" defaultValue="مدينة الكويت" />
      <input className="rounded-xl border border-slate-200 p-2" type="date" />
      <select className="rounded-xl border border-slate-200 p-2"><option>المدة</option><option>2 ساعات</option><option>4 ساعات</option><option>8 ساعات</option></select>
      <select className="rounded-xl border border-slate-200 p-2"><option>عدد الأشخاص</option><option>1-6</option><option>7-12</option><option>13+</option></select>
      <button type="button" className="rounded-xl bg-navy px-4 py-2 font-bold text-white">ابحث الآن</button>
    </form>
  );
}
