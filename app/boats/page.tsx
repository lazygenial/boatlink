import { BoatCard } from '@/components/BoatCard';
import { SearchBar } from '@/components/SearchBar';
import { mockBoats } from '@/data/mockBoats';

export default function BoatsPage() {
  return (
    <main className="container-main py-10">
      <h1 className="mb-4 text-3xl font-extrabold text-navy">جميع القوارب في الكويت</h1>
      <div className="mb-8"><SearchBar /></div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockBoats.map((boat) => <BoatCard key={boat.id} boat={boat} />)}
      </div>
    </main>
  );
}
