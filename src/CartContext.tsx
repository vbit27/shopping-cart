import { createContext } from 'react';

export const CartContext = createContext<ContextType | undefined>(undefined);

interface CartObject {
  [key: string]: number;
}

interface ContextType {
  cart: CartObject;
  setCart: (value: CartObject) => void;
}
