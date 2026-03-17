import { mockBoats } from '@/data/mockBoats';

const requests = [
  { id: 'RQ-301', boat: 'يخت اللؤلؤة الفاخر', customer: 'أحمد المطيري', status: 'قيد المراجعة' },
  { id: 'RQ-302', boat: 'قارب الصيد البحار', customer: 'فاطمة العتيبي', status: 'مؤكد' },
  { id: 'RQ-303', boat: 'يخت الأحمدي الفاخر', customer: 'خالد الدوسري', status: 'مكتمل' }
];

export default function DashboardPage() {
  return (
    <main className="container-main py-10">
      <h1 className="mb-6 text-3xl font-extrabold text-navy">لوحة الطلبات</h1>

      <section className="mb-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-5 shadow-sm"><p className="text-slate">القوارب المتاحة</p><p className="text-3xl font-extrabold text-navy">{mockBoats.length}</p></div>
        <div className="rounded-2xl bg-white p-5 shadow-sm"><p className="text-slate">إجمالي الطلبات</p><p className="text-3xl font-extrabold text-navy">{requests.length}</p></div>
        <div className="rounded-2xl bg-white p-5 shadow-sm"><p className="text-slate">طلبات مؤكدة</p><p className="text-3xl font-extrabold text-navy">1</p></div>
      </section>

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <table className="w-full text-right text-sm">
          <thead className="bg-mist text-navy">
            <tr>
              <th className="p-3">رقم الطلب</th>
              <th className="p-3">القارب</th>
              <th className="p-3">العميل</th>
              <th className="p-3">الحالة</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id} className="border-t border-slate-100">
                <td className="p-3">{request.id}</td>
                <td className="p-3">{request.boat}</td>
                <td className="p-3">{request.customer}</td>
                <td className="p-3 font-semibold text-navy">{request.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
