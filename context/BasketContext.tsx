import { createContext, ReactNode, useState } from "react";

export type BasketItem = {
  id: number;
  title: string;
  price: number;
  discountedPrice: number;
  quantity: number;
  brand: string;
  image: string;
  stock: number;
};

type BasketContextType = {
  basket: BasketItem[];
  addToBasket: (item: BasketItem) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
};
export const BasketContext = createContext<BasketContextType | undefined>(
  undefined
);
export const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  const addToBasket = (newItem: BasketItem) => {
    setBasket((prev) => {
      const existing = prev.find((item) => item.id === newItem.id);
      if (existing) {
        return prev.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      }
      return [...prev, newItem];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    setBasket((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = (id: number) => {
    setBasket((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, updateQuantity, removeItem }}
    >
      {children}
    </BasketContext.Provider>
  );
};
export default BasketContext;
