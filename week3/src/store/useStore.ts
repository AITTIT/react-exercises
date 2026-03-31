import { create } from 'zustand';

interface Apple {
    id: number;
    color: 'red' | 'green';
}

interface StoreState {
    apples: Apple[];
    // returns void, so you call it for its side effect (updating state), not to get a result back.
    addApple: (color: 'red' | 'green') => void;
}

export const useStore = create<StoreState>((set) => ({
    apples: [],
    // Adding to an array: Copy old items and add new one
    addApple: (color) => set((state) => {
        const newApple = { id: Date.now(), color };
        console.log("Adding apple:", newApple); // Debug info
        return { apples: [...state.apples, newApple] };
    }),
}));