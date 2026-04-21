import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import type { CSSProperties } from 'react';
import type { Magnet } from '../types/magnet';

interface WordMagnetProps {
  magnet: Magnet;
}

export default function WordMagnet({ magnet }: WordMagnetProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: magnet.id,
  });

  const style: CSSProperties = {
    transform: CSS.Translate.toString(transform),
    position: magnet.status === 'fridge' ? 'absolute' : 'relative',
    left: magnet.status === 'fridge' ? `${magnet.x}px` : undefined,
    top: magnet.status === 'fridge' ? `${magnet.y}px` : undefined,
    zIndex: isDragging ? 20 : 1,
  };

  return (
    <button
      ref={setNodeRef}
      style={style}
      className={`rounded-md border border-zinc-300 bg-white px-3 py-2 text-lg font-semibold text-zinc-700 shadow-sm
        transition-colors duration-150 hover:-translate-y-0.5 hover:shadow cursor-grab active:cursor-grabbing select-none
        ${isDragging ? 'opacity-70' : 'opacity-100'}`}
      {...listeners}
      {...attributes}
      type="button"
    >
      {magnet.word}
    </button>
  );
}
