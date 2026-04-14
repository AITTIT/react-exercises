import { create } from 'zustand';
import type { Product } from '../types/Product';

import { getProducts } from '../services/api';

interface productsStore {
  products: Product[];
  isLoading: boolean;
  fetchProducts: () => Promise<void>;
}

export const useProductStore = create<productsStore>((set) => ({
  products: [],
  isLoading: false,

  fetchProducts: async () => {
    set({ isLoading: true });
    try {
      const productsData = await getProducts();
      set({products: productsData.products })
    } catch (error) {
      console.error("Failed loading data", error);
    } finally {
      set({ isLoading: false });
    }
  },


}));
