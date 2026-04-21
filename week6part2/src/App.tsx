import { DndContext } from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import FridgeDoor from './components/FridgeDoor';
import WordMagnet from './components/WordMagnet';
import { useMagnetStore } from './store/useMagnetStore';

export default function App() {
  const magnets = useMagnetStore((state) => state.magnets);
  const updateMagnet = useMagnetStore((state) => state.updateMagnet);
  const loadExpansionPack = useMagnetStore((state) => state.loadExpansionPack);
  const isLoadingPack = useMagnetStore((state) => state.isLoadingPack);

  const bankMagnets = magnets.filter((magnet) => magnet.status === 'bank');
  const fridgeMagnets = magnets.filter((magnet) => magnet.status === 'fridge');

  const handleDragEnd = (event: DragEndEvent) => {
    const magnetId = String(event.active.id);

    if (event.over?.id === 'fridge') {
      const translatedRect = event.active.rect.current.translated;
      const fridgeRect = event.over.rect;

      if (translatedRect) {
        const relativeX = Math.max(0, translatedRect.left - fridgeRect.left);
        const relativeY = Math.max(0, translatedRect.top - fridgeRect.top);

        updateMagnet(magnetId, {
          status: 'fridge',
          x: relativeX,
          y: relativeY,
        });
      }

      return;
    }

    updateMagnet(magnetId, {
      status: 'bank',
      x: 0,
      y: 0,
    });
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <main className="min-h-screen bg-slate-100 p-8 text-zinc-800 sm:p-12">
        <header className="mb-8 flex flex-col gap-4 rounded-2xl bg-zinc-800 p-6 text-white shadow-lg sm:flex-row sm:items-center sm:justify-between print:hidden">
          <div>
            <h1 className="text-xl font-bold sm:text-2xl">Fridge Poetry</h1>
            <p className="text-sm text-zinc-300">Drag words onto the fridge.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => {
                void loadExpansionPack();
              }}
              disabled={isLoadingPack}
              className="rounded-lg bg-amber-500 px-4 py-2 font-bold text-zinc-900 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoadingPack ? 'Loading Words...' : 'Load More Words'}
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="rounded-lg bg-sky-600 px-4 py-2 font-bold text-white transition hover:bg-sky-500"
            >
              Print Poem
            </button>
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-[320px,1fr]">
          <aside className="rounded-2xl bg-white p-4 shadow print:hidden">
            <h2 className="mb-4 text-lg font-bold text-zinc-700">Word Bank</h2>
            <div className="flex flex-wrap gap-3">
              {bankMagnets.map((magnet) => (
                <WordMagnet key={magnet.id} magnet={magnet} />
              ))}
            </div>
          </aside>

          <div>
            <FridgeDoor>
              {fridgeMagnets.length === 0 ? (
                <p className="text-center text-sm font-semibold text-zinc-400 sm:mt-24">
                  Drop words here to build your poem.
                </p>
              ) : (
                fridgeMagnets.map((magnet) => <WordMagnet key={magnet.id} magnet={magnet} />)
              )}
            </FridgeDoor>
            <p className="mt-3 text-center text-xs text-zinc-500 print:hidden">
              Tip: Press Ctrl+P to print only the fridge door.
            </p>
          </div>
        </section>
      </main>
    </DndContext>
  );
}