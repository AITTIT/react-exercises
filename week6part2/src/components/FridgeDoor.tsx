import { useDroppable } from '@dnd-kit/core';
import type { ReactNode } from 'react';

interface FridgeDoorProps {
  children: ReactNode;
}

export default function FridgeDoor({ children }: FridgeDoorProps) {
  const { setNodeRef, isOver } = useDroppable({ id: 'fridge' });

  return (
    <section
      ref={setNodeRef}
      className={`relative min-h-[460px] w-full rounded-3xl border-4 border-dashed bg-sky-50/70 p-6 shadow-inner transition-colors
        ${isOver ? 'border-sky-500' : 'border-zinc-300'}`}
    >
      {children}
    </section>
  );
}
