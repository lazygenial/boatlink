export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="container-main py-8 text-sm text-slate">
        <p className="font-semibold text-navy">BoatLink © {new Date().getFullYear()}</p>
        <p>منصة كويتية لحجز القوارب بسهولة وأمان. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
