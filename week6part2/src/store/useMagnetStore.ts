import { create } from 'zustand';
import type { Magnet } from '../types/magnet';

interface MagnetStore {
  magnets: Magnet[];
  isLoadingPack: boolean;
  updateMagnet: (id: string, data: Pick<Magnet, 'status' | 'x' | 'y'>) => void;
  loadExpansionPack: () => Promise<void>;
}

const initialMagnets: Magnet[] = [
  { id: 'm1', word: 'I', status: 'bank', x: 0, y: 0 },
  { id: 'm2', word: 'dream', status: 'bank', x: 0, y: 0 },
  { id: 'm3', word: 'in', status: 'bank', x: 0, y: 0 },
  { id: 'm4', word: 'colors', status: 'bank', x: 0, y: 0 },
  { id: 'm5', word: 'green', status: 'bank', x: 0, y: 0 },
  { id: 'm6', word: 'red', status: 'bank', x: 0, y: 0 },
];

const expansionWords = ['and', 'the', 'stars', 'shine', 'us'];

const createExpansionMagnets = (): Magnet[] =>
  expansionWords.map((word) => ({
    id: `pack-${word}`,
    word,
    status: 'bank',
    x: 0,
    y: 0,
  }));

export const useMagnetStore = create<MagnetStore>((set, get) => ({
  magnets: initialMagnets,
  isLoadingPack: false,
  updateMagnet: (id, data) => {
    set((state) => ({
      magnets: state.magnets.map((magnet) =>
        magnet.id === id ? { ...magnet, ...data } : magnet,
      ),
    }));
  },
  loadExpansionPack: async () => {
    if (get().isLoadingPack) return;

    set({ isLoadingPack: true });

    await new Promise((resolve) => setTimeout(resolve, 700));

    set((state) => {
      const existingWords = new Set(state.magnets.map((m) => m.word));
      const newMagnets = createExpansionMagnets().filter(
        (magnet) => !existingWords.has(magnet.word),
      );

      return {
        magnets: [...state.magnets, ...newMagnets],
        isLoadingPack: false,
      };
    });
  },
}));
